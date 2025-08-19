const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { OAuth2Client } = require("google-auth-library");

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Configure transporter (example for Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

function publicUser(u) {
  const obj = u.toObject ? u.toObject() : u;
  delete obj.auth?.password;
  delete obj.__v;
  return obj;
}

// REGISTER

// controllers/userController.js
exports.register = async (req, res) => {
  try {
    const { usertype, name, email, phone, password, nhis_id, license_number } =
      req.body;

    // 🔍 Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ "auth.email": email }, { "auth.phone": phone }],
    });

    if (existingUser) {
      return res.status(409).json({ message: "Email or phone already in use" });
    }

    // 🔐 Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 🆕 Create new user
    const newUser = new User({
      usertype,
      auth: {
        name,
        email,
        phone,
        password: hashedPassword,
        nhis_id,
        license_number,
      },
      medical_info: {
        known_allergies: "",
        current_medications: [],
        vaccination_record: [],
        chronic_conditions: [],
        blood_type: "",
      },
    });

    await newUser.save();

    // ✅ Log saved user (safe version, no password)
    console.log("✅ User registered:", {
      id: newUser._id,
      usertype: newUser.usertype,
      auth: {
        name: newUser.auth.name,
        email: newUser.auth.email,
        phone: newUser.auth.phone,
      },
    });

    // 🎟️ Generate JWT
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: newUser._id,
        usertype: newUser.usertype,
        auth: {
          name: newUser.auth.name,
          email: newUser.auth.email,
          phone: newUser.auth.phone,
        },
      },
    });
  } catch (err) {
    console.error("❌ Register error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ "auth.email": email });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.auth.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate token
    const token = jwt.sign(
      { id: user._id, email: user.auth.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // res.json({
    //   message: "Login successful",
    //   user,
    //   token,
    // });
    res
      .status(201)
      .json({ message: "Login successful", token, user: publicUser(user) });
  } catch (err) {
    console.log("Login error:", err);
    res.status(500).json({ error: err.message });
  }
};

exports.me = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-auth.password -__v");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ user });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// FORGOT PASSWORD (Mock OTP generation)
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const otpCode = Math.floor(1000 + Math.random() * 9000).toString();

    const user = await User.findOneAndUpdate(
      { "auth.email": email },
      {
        otp: {
          code: otpCode,
          expires_at: new Date(Date.now() + 10 * 60 * 1000), // 10 minute
        },
      },
      { new: true }
    );

    if (!user)
      return res.status(404).json({
        message: "If the email is correct, an OTP has been sent.",
      });

    // Send OTP to user's email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP Code",
      text: `Hello User Your OTP code is: ${otpCode}`,
    });

    // TODO: Send otpCode to user's email using a mail service
    console.log({ message: "OTP sent" });
    res.json({ message: "OTP sent" }); // For now, returns OTP in response
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }
};

// VERIFY OTP
exports.verifyOtp = async (req, res) => {
  try {
    const { otp, email } = req.body;
    const user = await User.findOne({ "auth.email": email, "otp.code": otp });

    if (!user || user.otp.expires_at < new Date()) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    res.json({ message: "OTP verified" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE PASSWORD
exports.updatePassword = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate inputs
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update in database
    const user = await User.findOneAndUpdate(
      { "auth.email": email },
      { "auth.password": hashedPassword },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    console.log("✅ Password updated for:", email);
    res.json({ message: "Password updated successfully" });
  } catch (err) {
    console.error("❌ Error updating password:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// UPDATE PROFILE
exports.updatePersonalInfo = async (req, res) => {
  try {
    const userId = req.user.id;
    const {
      name,
      phone,
      nhis_id,
      dob,
      gender,
      house_address,
      image,
      medical_info,
    } = req.body;

    // Prepare update object
    const updateData = {
      "auth.name": name,
      "auth.phone": phone,
      "auth.nhis_id": nhis_id,
      "profile.dob": dob || null,
      "profile.gender": gender || null,
      "profile.house_address": house_address || null,
      updated_at: new Date(),
    };

    // ✅ Only update image if included
    if (image) {
      updateData["profile.image"] = image;
    }

    // ✅ Only update medical_info if included
    if (medical_info) {
      updateData["medical_info"] = medical_info;
    }

    // Update by ID
    const user = await User.findByIdAndUpdate(
      userId,
      { $set: updateData },
      { new: true }
    );

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "Profile updated", user: publicUser(user) });
    console.log("✅ Profile updated:", publicUser(user));
  } catch (err) {
    console.error("❌ Update error:", err);
    res.status(500).json({ error: err.message });
  }
};

// UPDATE ACCOUNT
exports.updateAccount = async (req, res) => {
  try {
    const { communication_preference, language_preference, password } =
      req.body;
    const userId = req.user.id; // get user ID from auth middleware

    // Prepare update object
    const updateData = {
      "profile.communication_preference": communication_preference,
      "profile.language_preference": language_preference,
      "auth.password": password,
      updated_at: new Date(),
    };

    // Update only the logged-in user
    const user = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
    });

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "Account updated", user: publicUser(user) });
    console.log({ message: "Account updated", user: publicUser(user) });
  } catch (err) {
    console.error({ error: err });
    res.status(500).json({ error: err.message });
  }
};

// UPDATE MEDICAL INFO
exports.updateMedicalInfo = async (req, res) => {
  try {
    const { id } = req.user;
    const updates = req.body; // contains only fields you want to update

    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Only update provided fields in medical_info
    Object.keys(updates).forEach((key) => {
      if (updates[key] !== undefined) {
        user.medical_info[key] = updates[key];
      }
    });

    user.updated_at = new Date();
    await user.save();

    res.json({ message: "Medical info updated", user: publicUser(user) });
    console.log("Medical info updated:", publicUser(user));
  } catch (err) {
    console.error("❌ Error updating medical info:", err);
    res.status(500).json({ error: err.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ user: user });
    console.log({ message: "Profile retrieved", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.googleLogin = async (req, res) => {
  try {
    const { credential } = req.body;

    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name, picture } = payload;

    let user = await User.findOne({ "auth.email": email });
    let exists = !!user;

    if (!user) {
      user = new User({
        usertype: "patient", // or decide dynamically
        auth: {
          name,
          email,
        },
        profile: {
          profile: picture, // profile image URL
        },
      });
      await user.save();
    }

    // 3. Create your own JWT
    const token = jwt.sign(
      { id: user._id, email: user.auth.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    console.log({ exists, token, user: publicUser(user) });
    res.json({ exists, token, user: publicUser(user) });
  } catch (err) {
    console.error("Google login error:", err);
    res.status(401).json({ message: "Invalid Google token" });
  }
};

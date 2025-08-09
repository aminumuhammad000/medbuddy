const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

// Configure transporter (example for Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// REGISTER
exports.register = async (req, res) => {
  try {
    const { usertype, name, email, phone, password, nhis_id, license_number } =
      req.body;

    // Check if email or phone already exists
    const existingUser = await User.findOne({
      $or: [{ "auth.email": email }, { "auth.phone": phone }],
    });

    if (existingUser) {
      return res.status(409).json({ message: "Email or phone already in use" });
    }

    // 🔐 Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      usertype,
      auth: {
        name,
        email,
        phone,
        password: hashedPassword, // Store hashed password
        nhis_id,
        license_number,
      },
    });

    await newUser.save();

    // ✅ Log saved user (safe version)
    console.log("✅ User saved:", {
      usertype: newUser.usertype,
      auth: {
        name: newUser.auth.name,
        email: newUser.auth.email,
        phone: newUser.auth.phone,
      },
    });

    // ✅ Generate JWT token
    const token = jwt.sign(
      { id: newUser._id, email: newUser.auth.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(201).json({ token });
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
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login successful",
      user,
      token,
    });
  } catch (err) {
    console.log("Login error:", err);
    res.status(500).json({ error: err.message });
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
exports.updateProfile = async (req, res) => {
  try {
    const { email, ...profileData } = req.body;

    const user = await User.findOneAndUpdate(
      { "auth.email": email },
      { profile: profileData, updated_at: new Date() },
      { new: true }
    );

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "Profile updated", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updatePersonalInfo = async (req, res) => {
  try {
    const userId = req.user._id; // assuming you get user ID from auth middleware
    const { fname, lname, email, phone, gender, dob, nhis_id, house_address } =
      req.body;

    // Build update object
    const updateData = {
      "auth.name": `${fname} ${lname}`,
      "auth.email": email,
      "auth.phone": phone,
      "auth.nhis_id": nhis_id,
      "profile.gender": gender,
      "profile.dob": dob,
      "profile.house_address": house_address,
      updated_at: new Date(),
    };

    // Update user document
    const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "Profile updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// UPDATE ACCOUNT
exports.updateAccount = async (req, res) => {
  try {
    const {
      email,
      communication_preference,
      language_preference,
      notification,
      password,
    } = req.body;

    const updateData = {
      "profile.communication_preference": communication_preference,
      "profile.language_preference": language_preference,
      notification: notification,
      "auth.password": password,
      updated_at: new Date(),
    };

    const user = await User.findOneAndUpdate(
      { "auth.email": email },
      updateData,
      { new: true }
    );

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "Account updated", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE MEDICAL INFO
exports.updateMedicalInfo = async (req, res) => {
  try {
    const { email, ...medical_info } = req.body;

    const user = await User.findOneAndUpdate(
      { "auth.email": email },
      { medical_info, updated_at: new Date() },
      { new: true }
    );

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "Medical info updated", user });
  } catch (err) {
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

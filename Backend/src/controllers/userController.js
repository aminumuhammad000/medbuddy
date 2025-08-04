const User = require("../models/User");

// REGISTER
exports.register = async (req, res) => {
  try {
    const {
      usertype,
      fname,
      lname,
      email,
      phone,
      password,
      nhis_id,
      license_number,
    } = req.body;

    const newUser = new User({
      usertype,
      auth: {
        fname,
        lname,
        email,
        phone,
        password, // NOTE: Hash before saving in production
        nhis_id,
        license_number,
      },
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ "auth.email": email });

    if (!user || user.auth.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Login successful", user });
  } catch (err) {
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
          expires_at: new Date(Date.now() + 10 * 60 * 1000), // 10 mins
        },
      },
      { new: true }
    );

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "OTP sent", otp: otpCode }); // Replace with real email or SMS service
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// VERIFY OTP
exports.verifyOtp = async (req, res) => {
  try {
    const { otp } = req.body;
    const user = await User.findOne({ "otp.code": otp });

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

    const user = await User.findOneAndUpdate(
      { "auth.email": email },
      { "auth.password": password }, // NOTE: Hash before saving in production
      { new: true }
    );

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "Password updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
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

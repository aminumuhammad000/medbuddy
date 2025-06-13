const User = require('../models/mysql/User'); // Change path if using MongoDB
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { email, password, name, phone } = req.body;
  try {
    // Check if user exists
    const existing = await User.getByEmail(email);
    if (existing) {
      return res.status(400).json({ message: 'Email already registered' });
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Save user (implement User.create for your DB)
    const result = await User.create({ email, password: hashedPassword, name, phone });
    res.status(201).json({ message: 'Registration successful', userId: result.insertId });
  } catch (error) {
    res.status(500).json({ message: 'Registration failed', error });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.getByEmail(email);
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });
    // Generate JWT
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error });
  }
};

exports.logout = async (req, res) => {
  // For JWT, logout is handled on client side by deleting the token
  res.json({ message: 'Logout successful' });
};

exports.verify = async (req, res) => {
  // Implement verification logic (e.g., email/phone OTP)
  res.status(501).json({ message: 'Verification not implemented' });
};

exports.profile = async (req, res) => {
  // Assuming user ID is available in req.user (set by auth middleware)
  const userId = req.user?.id;
  try {
    const user = await User.getByID(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving profile', error });
  }
};
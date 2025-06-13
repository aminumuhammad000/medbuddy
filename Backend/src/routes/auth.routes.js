const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// Register
router.post('/register', authController.register);

// Login
router.post('/login', authController.login);

// Logout
router.post('/logout', authController.logout);

// Verify (e.g., email or phone)
router.post('/verify', authController.verify);

// Get profile (requires authentication middleware)
router.get('/profile', authController.profile);

module.exports = router;
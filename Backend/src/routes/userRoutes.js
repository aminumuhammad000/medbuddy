const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Auth
router.post("/auth/register", userController.register);
router.post("/auth/login", userController.login);
router.post("/auth/forgot", userController.forgotPassword);
router.post("/auth/verify-otp", userController.verifyOtp);
router.patch("/auth/update-password", userController.updatePassword);

// Profile
router.put("/user/profile", userController.updateProfile);

// Account & Preference
router.patch("/user/account", userController.updateAccount);

// Medical Info
router.put("/user/medical-info", userController.updateMedicalInfo);

module.exports = router;

// Profile
router.put("/user/profile", userController.updateProfile);

// Account & Preference
router.patch("/user/account", userController.updateAccount);

// Medical Info
router.put("/user/medical-info", userController.updateMedicalInfo);

module.exports = router;

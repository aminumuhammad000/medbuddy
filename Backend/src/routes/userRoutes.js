const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const auth = require("./../middlewares/auth.middleware");
// Auth
router.post("/auth/register", userController.register);
router.post("/auth/login", userController.login);
router.post("/auth/forgot", userController.forgotPassword);
router.post("/auth/verify-otp", userController.verifyOtp);
router.patch("/auth/update-password", userController.updatePassword);

// Profile
router.put("/user/profile", userController.updateProfile);
router.get("/user/profile", auth, userController.getProfile);
// Account & Preference
router.patch("/user/account", userController.updateAccount);

// Medical Info
router.put("/user/medical-info", userController.updateMedicalInfo);

module.exports = router;

// Profile
router.put("/user/profile", userController.updateProfile);

// Personal Information
router.put("/user/personal-info", auth, userController.updatePersonalInfo);

// Account & Preference
router.patch("/user/account", userController.updateAccount);

// Medical Info
router.put("/user/medical-info", userController.updateMedicalInfo);

module.exports = router;

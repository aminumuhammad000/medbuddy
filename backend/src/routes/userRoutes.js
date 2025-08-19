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
router.post("/auth/google-login", userController.googleLogin);

//  get profile details
router.get("/user/profile", auth, userController.getProfile);

// get who am i
router.get("/me", auth, userController.me);

// Update Profile
router.patch("/user/personal-info", auth, userController.updatePersonalInfo);

// Account & Preference
router.patch("/user/account", auth, userController.updateAccount);

// Medical Info
router.patch("/user/medical-info", auth, userController.updateMedicalInfo);

module.exports = router;

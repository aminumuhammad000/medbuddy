const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const validate = require('../middlewares/validate.middleware');
const { createUserSchema, updateUserSchema } = require('../validations/user.validation'); // Import your schemas

// Get all users
router.get('/users', userController.index);

// Get user by ID
router.get('/users/:id', userController.show);

// Create new user
router.post('/users', validate(createUserSchema), userController.store);

// Update user by ID
router.put('/users/:id', validate(updateUserSchema), userController.update);

// Delete user by ID
router.delete('/users/:id', userController.destroy);

// Verify user by ID
router.patch('/users/:id/verify', userController.verifyUser);

module.exports = router;
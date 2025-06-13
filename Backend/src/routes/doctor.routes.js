const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctor.controller');
const validate = require('../middlewares/validate.middleware');
const { updateDoctorProfileSchema } = require('../validations/doctor.validation');

// Get doctor by ID
router.get('/doctors/:id', doctorController.show);

// Create new doctor
router.post('/doctors', validate(updateDoctorProfileSchema), doctorController.store);

// Update doctor by ID
router.put('/doctors/:id', doctorController.update);

module.exports = router;
const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient.controller');
const validate = require('../middlewares/validate.middleware');
const { updatePatientProfileSchema } = require('../validations/patient.validation');

// Get patient by ID
router.get('/patients/:id', patientController.show);

// Create new patient
router.post('/patients', validate(updatePatientProfileSchema), patientController.store);

// Update patient by ID
router.put('/patients/:id', patientController.update);

module.exports = router;
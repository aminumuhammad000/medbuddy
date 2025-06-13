const express = require('express');
const router = express.Router();
const prescriptionController = require('../controllers/prescription.controller');
const validate = require('../middlewares/validate.middleware');
const { createPrescriptionSchema } = require('../validations/prescription.validation');

// Get all prescriptions
router.get('/prescriptions', prescriptionController.index);

// Get prescription by ID
router.get('/prescriptions/:id', prescriptionController.show);

// Create new prescription
router.post('/prescriptions', validate(createPrescriptionSchema), prescriptionController.store);

// Update prescription by ID
router.put('/prescriptions/:id', prescriptionController.update);

// Delete prescription by ID
router.delete('/prescriptions/:id', prescriptionController.destroy);

module.exports = router;
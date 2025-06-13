const express = require('express');
const router = express.Router();
const ConsultationController = require('../controllers/consultation.controller');
const validate = require('../middlewares/validate.middleware');
const { createConsultationSchema } = require('../validations/consultation.validation');

// Routes for consultations
router.get('/consultations', ConsultationController.index); // List all consultations

// Create new consultation
router.post('/consultations', validate(createConsultationSchema), ConsultationController.store);

// Get a consultation by ID
router.get('/consultations/:id', ConsultationController.show);

// Update consultation
router.put('/consultations/:id', ConsultationController.update);

// Delete consultation
router.delete('/consultations/:id', ConsultationController.destroy);

// Update status (add a schema if you have one for status updates)
router.patch('/consultations/:id/status', ConsultationController.updateStatus);

module.exports = router;
const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/Feedback.controller');

// Get feedback by consultation ID
router.get('/feedback/consultation/:consultationId', feedbackController.showByConsultation);

// Create new feedback
router.post('/feedback', feedbackController.store);

// Update feedback by ID
router.put('/feedback/:id', feedbackController.update);

module.exports = router;
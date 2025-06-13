const express = require('express');
const router = express.Router();
const pharmacistController = require('../controllers/pharmacist.controller');
const validate = require('../middlewares/validate.middleware');
const { updatePharmacistProfileSchema } = require('../validations/pharmacist.validation');

// Get pharmacist by ID
router.get('/pharmacists/:id', pharmacistController.show);

// Create new pharmacist
router.post('/pharmacists', validate(updatePharmacistProfileSchema), pharmacistController.store);

// Update pharmacist by ID
router.put('/pharmacists/:id', validate(updatePharmacistProfileSchema), pharmacistController.update);

module.exports = router;
const express = require('express');
const router = express.Router();
const drugController = require('../controllers/drug.controller');
const validate = require('../middlewares/validate.middleware');
const { createDrugSchema } = require('../validations/drug.validation');

// Get all drugs
router.get('/drugs', drugController.index);

// Get drug by ID
router.get('/drugs/:id', drugController.show);

// Create new drug
router.post('/drugs', validate(createDrugSchema), drugController.store);

// Update drug by ID
router.put('/drugs/:id', drugController.update);

// Delete drug by ID
router.delete('/drugs/:id', drugController.destroy);

module.exports = router;
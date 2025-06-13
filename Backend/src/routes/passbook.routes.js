const express = require('express');
const router = express.Router();
const passbookController = require('../controllers/passbook.controller');
const validate = require('../middlewares/validate.middleware');
const { addPassbookEntrySchema } = require('../validations/passbook.validation');

// Get passbook by patient ID
router.get('/passbook/patient/:patientId', passbookController.showByPatient);

// Create new passbook entry
router.post('/passbook', validate(addPassbookEntrySchema), passbookController.store);

// Update passbook by ID
router.put('/passbook/:id', passbookController.update);

// Delete passbook by ID
router.delete('/passbook/:id', passbookController.destroy);

module.exports = router;
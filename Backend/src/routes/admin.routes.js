const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');


// Admin routes
// These routes are protected and require admin authorization
router.get('/admins', adminController.index);
router.post('/admins', adminController.store);
router.get('/admins/:user_id', adminController.show);
router.patch('/admins/:user_id/activity', adminController.updateActivity);
router.delete('/admins/:user_id', adminController.destroy);

module.exports = router;
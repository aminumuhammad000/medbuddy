const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notification.controller');

// Get notifications by user
router.get('/notifications/user/:userId', notificationController.showByUser);

// Create new notification
router.post('/notifications', notificationController.store);

// Mark notification as read
router.patch('/notifications/:id/read', notificationController.markRead);

module.exports = router;
const express = require('express');
const router = express.Router();
const ChatController = require('../controllers/ChatMessage.controller');


// GET all messages by session ID
router.get('/:session_id', ChatController.showBySession);

// POST a new message to a session
router.post('/:session_id', ChatController.store);

// PUT update a specific message by ID
router.put('/:id', ChatController.update);

// DELETE a specific message by ID
router.delete('/:id', ChatController.destroy);

module.exports = router;

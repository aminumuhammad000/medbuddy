const mongoose = require('mongoose');

const chatMessageSchema = new mongoose.Schema({
  session_id: { type: String, required: true },
  user_id: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('ChatMessage', chatMessageSchema);
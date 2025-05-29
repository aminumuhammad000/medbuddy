const mongoose = require('mongoose');

const chatMessageSchema = new mongoose.Schema({
  user_id: { type: String, required: true }, // SQL user ID
  message: String,
  sent_at: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('ChatMessage', chatMessageSchema);

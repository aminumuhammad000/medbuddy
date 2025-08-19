const mongoose = require('mongoose');

const signatureLogSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  signature: { type: String, required: true },
  signedAt: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('SignatureLog', signatureLogSchema);
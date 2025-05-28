const signatureLogSchema = new mongoose.Schema({
  user_id: { type: String, required: true }, // SQL user ID
  signature: String,
  action: String,
  date: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('SignatureLog', signatureLogSchema);

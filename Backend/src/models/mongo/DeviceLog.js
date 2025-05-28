const deviceLogSchema = new mongoose.Schema({
  user_id: { type: String, required: true }, // SQL user ID
  device_type: String,
  ip_address: String,
  activity: String,
  logged_at: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('DeviceLog', deviceLogSchema);

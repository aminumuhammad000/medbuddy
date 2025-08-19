const mongoose = require('mongoose');

const deviceLogSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  device_name: { type: String, required: true },
  device_token: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('DeviceLog', deviceLogSchema);
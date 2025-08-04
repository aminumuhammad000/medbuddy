const mongoose = require('mongoose');

const medicalHistorySchema = new mongoose.Schema({
  patientId: { type: String, required: true },
  recordedBy: { type: String, required: true },
  condition: { type: String, required: true },
  notes: { type: String },
  date: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('MedicalHistory', medicalHistorySchema);
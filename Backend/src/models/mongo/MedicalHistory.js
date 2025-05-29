const mongoose = require('mongoose');

const medicalHistorySchema = new mongoose.Schema({
  patient_id: { type: String, required: true },     // From SQL
  recorded_by: { type: String, required: true },    // From SQL
  condition: String,
  notes: String,
  date: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('MedicalHistory', medicalHistorySchema);

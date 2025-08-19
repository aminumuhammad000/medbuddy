// chatMessages.schema.js
const mongoose = require("mongoose");

const chatMessageSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  sender: { type: String, enum: ["user", "ai"], required: true },
  message: { type: String, required: true },
  message_type: {
    type: String,
    enum: ["text", "image", "audio", "video", "file"],
    default: "text",
  },
  session_id: { type: String },
  timestamp: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ChatMessage", chatMessageSchema);

// medicalHistory.schema.js
const mongoose = require("mongoose");

const medicalHistorySchema = new mongoose.Schema({
  patient_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  record_type: {
    type: String,
    enum: ["lab", "vital", "immunization", "other"],
    required: true,
  },
  details: { type: mongoose.Schema.Types.Mixed, required: true },
  recorded_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  recorded_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("MedicalHistory", medicalHistorySchema);

// feedback.schema.js
const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  consultation_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Consultation",
  },
  rating: { type: Number, min: 1, max: 5, required: true },
  comments: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Feedback", feedbackSchema);

// deviceLog.schema.js
const mongoose = require("mongoose");

const deviceLogSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  ip_address: { type: String },
  device_info: { type: String },
  os: { type: String },
  browser: { type: String },
  location: { type: String },
  login_time: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("DeviceLog", deviceLogSchema);

// notification.schema.js
const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: { type: String, required: true },
  body: { type: String, required: true },
  type: { type: String, enum: ["refill", "recall", "general"], required: true },
  is_read: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Notification", notificationSchema);

// signatureLog.schema.js
const mongoose = require("mongoose");

const signatureLogSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  prescription_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Prescription",
    required: true,
  },
  action_type: { type: String, enum: ["sign", "verify"], required: true },
  ip_address: { type: String },
  device_info: { type: String },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("SignatureLog", signatureLogSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  usertype: {
    type: String,
    enum: ["patient", "doctor", "pharmacist"],
    required: true,
  },
  auth: {
    name: { type: String },
    email: { type: String, unique: true },
    phone: { type: String },
    password: { type: String },
    nhis_id: { type: String },
    license_number: { type: String },
  },
  profile: {
    profile: String,
    dob: Date,
    gender: String,
    house_address: String,
    language_preference: String,
    communication_preference: String,
  },
  medical_info: {
    known_allergies: String,
    current_medications: [String],
    vaccination_record: [String],
    chronic_conditions: [String],
    blood_type: { type: String },
  },
  otp: {
    code: String,
    expires_at: Date,
  },
  notification: {
    email: Boolean,
    sms: Boolean,
    push: Boolean,
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);

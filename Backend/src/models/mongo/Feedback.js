const feedbackSchema = new mongoose.Schema({
  user_id: { type: String, required: true }, // SQL user ID
  rating: Number,
  comment: String,
}, { timestamps: true });

module.exports = mongoose.model('Feedback', feedbackSchema);

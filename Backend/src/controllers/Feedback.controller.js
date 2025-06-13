const Feedback = require('../models/mongo/Feedback');

// Get feedback by consultation ID
exports.showByConsultation = async (req, res) => {
  const { consultationId } = req.params;
  try {
    const feedback = await Feedback.findOne({ consultationId });
    if (feedback) {
      res.json(feedback);
    } else {
      res.status(404).json({ message: 'Feedback not found for this consultation' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving feedback', error });
  }
};

// Create new feedback
exports.store = async (req, res) => {
  try {
    const newFeedback = new Feedback(req.body);
    const saved = await newFeedback.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: 'Error saving feedback', error });
  }
};

// Update feedback by ID
exports.update = async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await Feedback.findByIdAndUpdate(id, req.body, { new: true });
    if (updated) {
      res.json({ message: 'Feedback updated successfully', updated });
    } else {
      res.status(404).json({ message: 'Feedback not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating feedback', error });
  }
};
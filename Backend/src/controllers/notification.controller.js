const Notification = require('../models/mongo/Notification');

// Get notifications by user
exports.showByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const notifications = await Notification.find({ userId });
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving notifications', error });
  }
};

// Create new notification
exports.store = async (req, res) => {
  try {
    const newNotification = new Notification(req.body);
    const saved = await newNotification.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: 'Error saving notification', error });
  }
};

// Mark notification as read
exports.markRead = async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await Notification.findByIdAndUpdate(
      id,
      { read: true },
      { new: true }
    );
    if (updated) {
      res.json({ message: 'Notification marked as read', notification: updated });
    } else {
      res.status(404).json({ message: 'Notification not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error marking notification as read', error });
  }
};
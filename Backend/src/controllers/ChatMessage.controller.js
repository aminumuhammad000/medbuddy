const ChatMessage = require('../models/mongo/ChatMessage');

// GET /chat/:session_id
exports.showBySession = async (req, res) => {
  const { session_id } = req.params;

  try {
    const messages = await ChatMessage.find({ session_id }).sort({ createdAt: 1 });
    res.status(200).json({ success: true, data: messages });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching messages', error });
  }
};

// POST /chat/:session_id
exports.store = async (req, res) => {
  const { session_id } = req.params;
  const { user_id, message } = req.body;

  if (!user_id || !message) {
    return res.status(400).json({ success: false, message: 'user_id and message are required' });
  }

  try {
    const newMessage = await ChatMessage.create({
      session_id,
      user_id,
      message,
    });

    res.status(201).json({ success: true, data: newMessage });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error sending message', error });
  }
};

// PUT /chat/:id
exports.update = async (req, res) => {
  const { id } = req.params;
  const { message } = req.body;

  try {
    const updated = await ChatMessage.findByIdAndUpdate(
      id,
      { message },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ success: false, message: 'Message not found' });
    }

    res.status(200).json({ success: true, data: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating message', error });
  }
};

// DELETE /chat/:id
exports.destroy = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await ChatMessage.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Message not found' });
    }

    res.status(200).json({ success: true, message: 'Message deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting message', error });
  }
};

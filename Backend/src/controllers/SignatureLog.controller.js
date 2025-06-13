const SignatureLog = require('../models/mongo/SignatureLog');

exports.showByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const signatures = await SignatureLog.find({ userId });
    if (signatures && signatures.length > 0) {
      res.json(signatures);
    } else {
      res.status(404).json({ message: 'No signatures found for this user' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving signatures', error });
  }
};

exports.store = async (req, res) => {
  try {
    const newSignature = new SignatureLog(req.body);
    const saved = await newSignature.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: 'Error saving signature', error });
  }
};
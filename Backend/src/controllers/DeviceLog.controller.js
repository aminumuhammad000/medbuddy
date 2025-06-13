const Device = require('../models/mongo/DeviceLog');

// Get devices by user_id
exports.showByUser = async (req, res) => {
  const { user_id } = req.params;
  try {
    const devices = await Device.find({ user_id });
    res.status(200).json(devices);
  } catch (error) {
    console.log("Error retrieving devices:", error);
    res.status(500).json({ message: 'Error retrieving devices', error });
  }
};

// Store new device
exports.store = async (req, res) => {
  const { user_id, device_name, device_token } = req.body;

  try {
    const newDevice = await Device.create({ user_id, device_name, device_token });
    res.status(201).json({ message: 'Device registered', device: newDevice });
  } catch (error) {
    res.status(500).json({ message: 'Error storing device', error });
  }
};
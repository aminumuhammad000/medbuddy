const Doctor = require('../models/mysql/Doctor');

exports.show = async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await Doctor.getByID(id);
    if (doctor) {
      res.json(doctor);
    } else {
      res.status(404).json({ message: 'Doctor not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving doctor', error });
  }
};

exports.store = async (req, res) => {
  // Implement create logic if you have a Doctor.create method
  res.status(501).json({ message: 'Not implemented' });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const result = await Doctor.updateByID(id, data);
    if (result.affectedRows > 0) {
      res.json({ message: 'Doctor updated successfully' });
    } else {
      res.status(404).json({ message: 'Doctor not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating doctor', error });
  }
};
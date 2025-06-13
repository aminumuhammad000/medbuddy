const Prescription = require('../models/mysql/Prescription');

exports.index = async (req, res) => {
  try {
    const prescriptions = await Prescription.getAll();
    res.json(prescriptions);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving prescriptions', error });
  }
};

exports.show = async (req, res) => {
  const { id } = req.params;
  try {
    const prescription = await Prescription.getByID(id);
    if (prescription) {
      res.json(prescription);
    } else {
      res.status(404).json({ message: 'Prescription not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving prescription', error });
  }
};

exports.store = async (req, res) => {
  // Implement create logic if you have a Prescription.create method
  res.status(501).json({ message: 'Not implemented' });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const result = await Prescription.updateByID(id, data);
    if (result.affectedRows > 0) {
      res.json({ message: 'Prescription updated successfully' });
    } else {
      res.status(404).json({ message: 'Prescription not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating prescription', error });
  }
};

exports.destroy = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Prescription.deleteByID(id);
    if (result.affectedRows > 0) {
      res.json({ message: 'Prescription deleted successfully' });
    } else {
      res.status(404).json({ message: 'Prescription not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting prescription', error });
  }
};
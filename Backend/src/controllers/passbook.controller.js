const Passbook = require('../models/mysql/Passbook');

exports.showByPatient = async (req, res) => {
  const { patientId } = req.params;
  try {
    const passbook = await Passbook.getByPatientId(patientId);
    if (passbook) {
      res.json(passbook);
    } else {
      res.status(404).json({ message: 'Passbook not found for this patient' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving passbook', error });
  }
};

exports.store = async (req, res) => {
  // Implement create logic if you have a Passbook.create method
  res.status(501).json({ message: 'Not implemented' });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const result = await Passbook.updateByID(id, data);
    if (result.affectedRows > 0) {
      res.json({ message: 'Passbook updated successfully' });
    } else {
      res.status(404).json({ message: 'Passbook not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating passbook', error });
  }
};

exports.destroy = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Passbook.deleteByID(id);
    if (result.affectedRows > 0) {
      res.json({ message: 'Passbook deleted successfully' });
    } else {
      res.status(404).json({ message: 'Passbook not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting passbook', error });
  }
};
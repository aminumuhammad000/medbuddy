const MedicalHistory = require('../models/mysql/MedicalHistory');

exports.showByPatient = async (req, res) => {
  const { patientId } = req.params;
  try {
    const history = await MedicalHistory.getByPatientId(patientId);
    if (history) {
      res.json(history);
    } else {
      res.status(404).json({ message: 'Medical history not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving medical history', error });
  }
};

exports.store = async (req, res) => {
  // Implement create logic if you have a MedicalHistory.create method
  res.status(501).json({ message: 'Not implemented' });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const result = await MedicalHistory.updateByID(id, data);
    if (result.affectedRows > 0) {
      res.json({ message: 'Medical history updated successfully' });
    } else {
      res.status(404).json({ message: 'Medical history not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating medical history', error });
  }
};
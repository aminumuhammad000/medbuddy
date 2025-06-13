const Patient = require('../models/mysql/Patient');

exports.show = async (req, res) => {
  const { id } = req.params;
  try {
    const patient = await Patient.getByID(id);
    if (patient) {
      res.json(patient);
    } else {
      res.status(404).json({ message: 'Patient not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving patient', error });
  }
};

exports.store = async (req, res) => {
  // Implement create logic if you have a Patient.create method
  res.status(501).json({ message: 'Not implemented' });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const result = await Patient.updateByID(id, data);
    if (result.affectedRows > 0) {
      res.json({ message: 'Patient updated successfully' });
    } else {
      res.status(404).json({ message: 'Patient not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating patient', error });
  }
};
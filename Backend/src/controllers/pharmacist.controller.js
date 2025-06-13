const Pharmacist = require('../models/mysql/Pharmacist');

exports.show = async (req, res) => {
  const { id } = req.params;
  try {
    const pharmacist = await Pharmacist.getByID(id);
    if (pharmacist) {
      res.json(pharmacist);
    } else {
      res.status(404).json({ message: 'Pharmacist not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving pharmacist', error });
  }
};

exports.store = async (req, res) => {
  // Implement create logic if you have a Pharmacist.create method
  res.status(501).json({ message: 'Not implemented' });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const result = await Pharmacist.updateByID(id, data);
    if (result.affectedRows > 0) {
      res.json({ message: 'Pharmacist updated successfully' });
    } else {
      res.status(404).json({ message: 'Pharmacist not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating pharmacist', error });
  }
};
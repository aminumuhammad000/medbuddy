const Drug = require('../models/mysql/Drug');

exports.index = async (req, res) => {
  try {
    const drugs = await Drug.getAll();
    res.json(drugs);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving drugs', error });
  }
};

exports.show = async (req, res) => {
  const { id } = req.params;
  try {
    const drug = await Drug.getByID(id);
    if (drug) {
      res.json(drug);
    } else {
      res.status(404).json({ message: 'Drug not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving drug', error });
  }
};

exports.store = async (req, res) => {
  // Implement create logic if you have a Drug.create method
  res.status(501).json({ message: 'Not implemented' });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const result = await Drug.updateByID(id, data);
    if (result.affectedRows > 0) {
      res.json({ message: 'Drug updated successfully' });
    } else {
      res.status(404).json({ message: 'Drug not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating drug', error });
  }
};

exports.destroy = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Drug.deleteByID(id);
    if (result.affectedRows > 0) {
      res.json({ message: 'Drug deleted successfully' });
    } else {
      res.status(404).json({ message: 'Drug not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting drug', error });
  }
};
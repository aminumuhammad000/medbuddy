const Consultations = require('../models/mysql/Consultation');

// List all consultations
exports.index = async (req, res) => {
  try {
    const consultations = await Consultations.getAll();
    res.status(200).json(consultations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching consultations', error });
  }
};

// Get a single consultation by ID
exports.show = async (req, res) => {
  const { id } = req.params;
  try {
    const consultation = await Consultations.getByID(id);
    if (!consultation) {
      return res.status(404).json({ message: 'Consultation not found' });
    }
    res.status(200).json(consultation);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching consultation', error });
  }
};

// Create a new consultation
exports.store = async (req, res) => {
  const data = req.body;
  try {
    const [result] = await require('../db').query('INSERT INTO consultations SET ?', [data]);
    res.status(201).json({ message: 'Consultation created', id: result.insertId });
  } catch (error) {
    res.status(500).json({ message: 'Error creating consultation', error });
  }
};

// Update a consultation
exports.update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const result = await Consultations.updateByID(id, data);
    res.status(200).json({ message: 'Consultation updated', result });
  } catch (error) {
    res.status(500).json({ message: 'Error updating consultation', error });
  }
};

// Delete a consultation
exports.destroy = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Consultations.deleteByID(id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Consultation not found' });
    }
    res.status(200).json({ message: 'Consultation deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting consultation', error });
  }
};

// Update consultation status (e.g., pending, completed, cancelled)
exports.updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const result = await Consultations.updateByID(id, { status });
    res.status(200).json({ message: 'Consultation status updated', result });
  } catch (error) {
    res.status(500).json({ message: 'Error updating status', error });
  }
};

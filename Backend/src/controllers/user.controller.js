const User = require('../models/mysql/User');

exports.index = async (req, res) => {
  try {
    const users = await User.getAll();
    res.json(users);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error retrieving users', error });
  }
};

exports.show = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.getByID(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error });
  }
};

exports.store = async (req, res) => {
  const data = req.body;
  try {
    const newUser = await User.create(data);
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const result = await User.updateByID(id, data);
    if (result.affectedRows > 0) {
      res.json({ message: 'User updated successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
};

exports.destroy = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await User.deleteByID(id);
    if (result.affectedRows > 0) {
      res.json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
};

exports.verifyUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await User.verifyByID(id);
    if (result.affectedRows > 0) {
      res.json({ message: 'User verified successfully' });
    } else {
      res.status(404).json({ message: 'User not found or already verified' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error verifying user', error });
  }
};
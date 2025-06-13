const Order = require('../models/mysql/Order');

exports.index = async (req, res) => {
  try {
    const orders = await Order.getAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving orders', error });
  }
};

exports.show = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.getByID(id);
    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving order', error });
  }
};

exports.store = async (req, res) => {
  // Implement create logic if you have an Order.create method
  res.status(501).json({ message: 'Not implemented' });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const result = await Order.updateByID(id, data);
    if (result.affectedRows > 0) {
      res.json({ message: 'Order updated successfully' });
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating order', error });
  }
};

exports.updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const result = await Order.updateStatusByID(id, status);
    if (result.affectedRows > 0) {
      res.json({ message: 'Order status updated successfully' });
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating order status', error });
  }
};
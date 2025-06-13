const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');
const validate = require('../middlewares/validate.middleware');
const { createOrderSchema } = require('../validations/order.validation');

// Get all orders
router.get('/orders', orderController.index);

// Get order by ID
router.get('/orders/:id', orderController.show);

// Create new order
router.post('/orders', validate(createOrderSchema), orderController.store);

// Update order by ID
router.put('/orders/:id', orderController.update);

// Update order status by ID (if implemented)
// You may want a separate schema for status updates
router.patch('/orders/:id/status', orderController.updateStatus);

module.exports = router;
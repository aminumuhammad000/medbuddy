const Joi = require('joi');

const createOrderSchema = Joi.object({
  patientId: Joi.string().required(),
  drugId: Joi.string().required(),
  quantity: Joi.number().integer().min(1).required(),
  address: Joi.string().required(),
  status: Joi.string().valid('pending', 'approved', 'rejected', 'delivered').default('pending')
});

module.exports = {
  createOrderSchema
};
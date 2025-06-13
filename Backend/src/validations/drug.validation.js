const Joi = require('joi');

const createDrugSchema = Joi.object({
  name: Joi.string().required(),
  manufacturer: Joi.string().required(),
  price: Joi.number().positive().required(),
  stock: Joi.number().integer().min(0).required(),
  description: Joi.string().allow(''),
  expiryDate: Joi.date().required()
});

module.exports = {
  createDrugSchema
};
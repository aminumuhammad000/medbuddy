const Joi = require('joi');

const updatePatientProfileSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().integer().min(0).required(),
  gender: Joi.string().valid('male', 'female', 'other').required(),
  address: Joi.string().required(),
  phone: Joi.string().required()
});

module.exports = {
  updatePatientProfileSchema
};
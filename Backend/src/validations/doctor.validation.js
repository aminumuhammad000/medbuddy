const Joi = require('joi');

const updateDoctorProfileSchema = Joi.object({
  name: Joi.string().required(),
  specialization: Joi.string().required(),
  licenseNumber: Joi.string().required(),
  phone: Joi.string().required()
});

module.exports = {
  updateDoctorProfileSchema
};
const Joi = require('joi');

const updatePharmacistProfileSchema = Joi.object({
  licenseNumber: Joi.string().required(),
  pharmacyName: Joi.string().required(),
  phone: Joi.string().required()
});

module.exports = {
  updatePharmacistProfileSchema
};
const Joi = require('joi');

const createPrescriptionSchema = Joi.object({
  patientId: Joi.string().required(),
  doctorId: Joi.string().required(),
  drugs: Joi.array().items(Joi.object({
    drugId: Joi.string().required(),
    dosage: Joi.string().required(),
    frequency: Joi.string().required(),
    duration: Joi.string().required()
  })).min(1).required(),
  notes: Joi.string().allow('')
});

module.exports = {
  createPrescriptionSchema
};
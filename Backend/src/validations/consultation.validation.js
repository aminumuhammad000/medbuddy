const Joi = require('joi');

const createConsultationSchema = Joi.object({
  patientId: Joi.string().required(),
  doctorId: Joi.string().required(),
  date: Joi.date().required(),
  reason: Joi.string().required(),
  notes: Joi.string().allow('')
});

module.exports = {
  createConsultationSchema
};
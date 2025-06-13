const Joi = require('joi');

const addPassbookEntrySchema = Joi.object({
  patientId: Joi.string().required(),
  amount: Joi.number().required(),
  type: Joi.string().valid('credit', 'debit').required(),
  description: Joi.string().allow('')
});

module.exports = {
  addPassbookEntrySchema
};
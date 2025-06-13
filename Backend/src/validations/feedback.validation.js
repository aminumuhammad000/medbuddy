const Joi = require('joi');

const createFeedbackSchema = Joi.object({
  userId: Joi.string().required(),
  message: Joi.string().required(),
  rating: Joi.number().integer().min(1).max(5).required()
});

module.exports = {
  createFeedbackSchema
};
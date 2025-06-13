const Joi = require('joi');

const createNotificationSchema = Joi.object({
  userId: Joi.string().required(),
  message: Joi.string().required(),
  type: Joi.string().valid('info', 'warning', 'alert').required()
});

module.exports = {
  createNotificationSchema
};
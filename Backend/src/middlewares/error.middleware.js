const logger = require('../config/logger');

function errorHandler(err, req, res, next) {
  // Log error details using Winston logger
  logger.error({
    message: err.message,
    stack: err.stack,
    status: err.status || 500,
    method: req.method,
    url: req.originalUrl,
    ip: req.ip
  });

  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    error: process.env.NODE_ENV === 'production' ? {} : err
  });
}

module.exports = errorHandler;
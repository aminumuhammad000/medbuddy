require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || 'your-default-jwt-secret',
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/medbuddy',
  mysql: {
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || 'medbuddy'
  },
  logLevel: process.env.LOG_LEVEL || 'info'
};
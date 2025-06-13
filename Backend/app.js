const express = require('express');
const app = express();
require("dotenv").config();
const cors = require('cors');
const morgan = require('morgan');
const logger = require('./src/config/logger');
const authenticateToken = require('./src/middlewares/auth.middleware');
const authorizeRoles = require('./src/middlewares/role.middleware');

// Route imports
const adminRoutes = require('./src/routes/admin.routes');
const authRoutes = require('./src/routes/auth.routes');
const chatRoutes = require('./src/routes/chat.routes');
const consultationRoutes = require('./src/routes/consultation.routes');
const deviceRoutes = require('./src/routes/device.routes');
const doctorRoutes = require('./src/routes/doctor.routes');
const drugRoutes = require('./src/routes/drug.routes');
const feedbackRoutes = require('./src/routes/feedback.routes');

// const healthRoutes = require('./src/routes/healthRoutes');
const notificationRoutes = require('./src/routes/notification.routes');
const orderRoutes = require('./src/routes/order.routes');
const passbookRoutes = require('./src/routes/passbook.routes');
const patientRoutes = require('./src/routes/patient.routes');
const pharmacistRoutes = require('./src/routes/pharmacist.routes');
const prescriptionRoutes = require('./src/routes/prescription.routes');
const userRoutes = require('./src/routes/user.routes');

// Middleware
app.use(morgan('combined', {
  stream: { write: msg => logger.info(msg.trim()) }
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// app.use(morgan('dev'));

// Route usage
app.use('/api', authenticateToken, authorizeRoles('admin'), adminRoutes);
app.use('/api', authRoutes);
app.use('/chat', authorizeRoles('patient', 'doctor', 'pharmacist', 'admin'), chatRoutes);
app.use('/api', authenticateToken, consultationRoutes);
app.use('/api', deviceRoutes);
app.use('/api', authenticateToken, authorizeRoles('doctor', 'admin'), doctorRoutes);
app.use('/api', authenticateToken, authorizeRoles('pharmacist', 'admin'), drugRoutes);
app.use('/api', authenticateToken, authorizeRoles('patient', 'doctor', 'pharmacist', 'admin'), feedbackRoutes);
// app.use('/api', healthRoutes);
app.use('/api', authenticateToken, authorizeRoles('patient', 'doctor', 'pharmacist', 'admin'), notificationRoutes);
app.use('/api', authenticateToken, authorizeRoles('patient', 'pharmacist', 'admin'), orderRoutes);
app.use('/api', authenticateToken, authorizeRoles('patient', 'admin'), passbookRoutes);
app.use('/api', authenticateToken, authorizeRoles('patient', 'admin'), patientRoutes);
app.use('/api', authenticateToken, authorizeRoles('pharmacist', 'admin'), pharmacistRoutes);
app.use('/api', authenticateToken, prescriptionRoutes);
app.use('/api', authenticateToken, authorizeRoles('admin'), userRoutes);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
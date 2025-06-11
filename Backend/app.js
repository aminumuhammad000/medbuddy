const express = require('express');
const app = express();
require("dotenv").config();
const cors = require('cors');

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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Route usage
app.use('/api', adminRoutes);
app.use('/api', authRoutes);
app.use('/chat', chatRoutes);
app.use('/api', consultationRoutes);
app.use('/api', deviceRoutes);
app.use('/api', doctorRoutes);
app.use('/api', drugRoutes);
app.use('/api', feedbackRoutes);
// app.use('/api', healthRoutes);
app.use('/api', notificationRoutes);
app.use('/api', orderRoutes);
app.use('/api', passbookRoutes);
app.use('/api', patientRoutes);
app.use('/api', pharmacistRoutes);
app.use('/api', prescriptionRoutes);
app.use('/api', userRoutes);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
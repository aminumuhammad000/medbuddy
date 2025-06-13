# 🏥 MEDBUDDY

**MEDBUDDY** is a full-stack healthcare management system built with Node.js and MongoDB, designed to help clinics and medical professionals manage patient records, appointments, and communication seamlessly.

---

## 🚀 Project Overview

This application provides a backend API service with the capability to manage:

- Patient and doctor records
- Appointment scheduling
- Medical history tracking
- Secure user authentication
- Integration with MongoDB for data storage

---

## 🛠️ Tech Stack

| Layer            | Technology             |
| ---------------- | ---------------------- |
| Backend          | Node.js, Express.js    |
| Database         | MongoDB                |
| ORM              | Mongoose (or native)   |
| Authentication   | JWT (JSON Web Token)   |
| Validation       | express-validator      |
| Containerization | Docker, Docker Compose |

---

## 📁 Project Structure

```bash
MEDBUDDY/
├── backend/
│   ├── app.js                # Main entry point for Express app
│   ├── mongodb.js            # MongoDB connection config
│   ├── medbuddy_schema.sql   # Initial DB schema (if SQL reference needed)
│   ├── .env                  # Environment variables
│   ├── Dockerfile            # Backend Docker configuration
│   ├── package.json          # Node dependencies
│   └── node_modules/         # Installed packages (auto-generated)
├── docker-compose.yml        # Docker orchestration file
├── README.md                 # This file
└── folder_structure.txt      # Folder tree snapshot (for documentation)
```

Admin
GET/POST/PUT/PATCH/DELETE http://localhost:3000/api/admins
(adminRoutes, for admin management)
Auth
POST http://localhost:3000/api/login
POST http://localhost:3000/api/register (authRoutes, for authentication)
Chat
GET/POST http://localhost:3000/chat (chatRoutes, for chat features)
Consultation
GET http://localhost:3000/api/consultations
POST http://localhost:3000/api/consultations
GET http://localhost:3000/api/consultations/:id
PUT http://localhost:3000/api/consultations/:id
DELETE http://localhost:3000/api/consultations/:id
PATCH http://localhost:3000/api/consultations/:id/status (consultationRoutes)
Device
GET/POST/PUT/DELETE http://localhost:3000/api/devices (deviceRoutes)
Doctor
GET http://localhost:3000/api/doctors/:id
POST http://localhost:3000/api/doctors
PUT http://localhost:3000/api/doctors/:id (doctorRoutes)
Drug
GET http://localhost:3000/api/drugs
GET http://localhost:3000/api/drugs/:id
POST http://localhost:3000/api/drugs
PUT http://localhost:3000/api/drugs/:id
DELETE http://localhost:3000/api/drugs/:id (drugRoutes)
Feedback
GET/POST/PUT/DELETE http://localhost:3000/api/feedback (feedbackRoutes)
Notification
GET/POST/PUT/DELETE http://localhost:3000/api/notifications (notificationRoutes)
Order
GET http://localhost:3000/api/orders
GET http://localhost:3000/api/orders/:id
POST http://localhost:3000/api/orders
PUT http://localhost:3000/api/orders/:id
PATCH http://localhost:3000/api/orders/:id/status
DELETE http://localhost:3000/api/orders/:id (orderRoutes)
Passbook
GET http://localhost:3000/api/passbook/patient/:patientId
POST http://localhost:3000/api/passbook
PUT http://localhost:3000/api/passbook/:id
DELETE http://localhost:3000/api/passbook/:id (passbookRoutes)
Patient
GET http://localhost:3000/api/patients/:id
POST http://localhost:3000/api/patients
PUT http://localhost:3000/api/patients/:id (patientRoutes)
Pharmacist
GET http://localhost:3000/api/pharmacists/:id
POST http://localhost:3000/api/pharmacists
PUT http://localhost:3000/api/pharmacists/:id (pharmacistRoutes)
Prescription
GET http://localhost:3000/api/prescriptions
GET http://localhost:3000/api/prescriptions/:id
POST http://localhost:3000/api/prescriptions
PUT http://localhost:3000/api/prescriptions/:id
DELETE http://localhost:3000/api/prescriptions/:id (prescriptionRoutes)
User
GET http://localhost:3000/api/users
GET http://localhost:3000/api/users/:id
PUT http://localhost:3000/api/users/:id
DELETE http://localhost:3000/api/users/:id
PATCH http://localhost:3000/api/users/:id/verify (userRoutes)

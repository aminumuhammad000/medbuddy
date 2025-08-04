# Healthcare User Management API

This API handles user authentication, profile management, and medical info for different user types: `patient`, `doctor`, and `pharmacist`.

## Base URL

```
https://medbuddy-cpvv.onrender.com/api
```

## Endpoints

### 🔐 Auth

#### POST `/auth/register`

Register a new user.

```json
{
  "usertype": "patient",
  "fname": "John",
  "lname": "Doe",
  "email": "john@example.com",
  "phone": "08012345678",
  "password": "secret123",
  "nhis_id": "NHIS123456" // or license_number for doctor/pharmacist
}
```

#### POST `/auth/login`

```json
{
  "email": "john@example.com",
  "password": "secret123"
}
```

#### POST `/auth/forgot`

```json
{
  "email": "john@example.com"
}
```

#### POST `/auth/verify-otp`

```json
{
  "otp": "1234"
}
```

#### PATCH `/auth/update-password`

```json
{
  "email": "john@example.com",
  "password": "newSecret123"
}
```

### 👤 Profile

#### PUT `/user/profile`

```json
{
  "fname": "John",
  "lname": "Doe",
  "email": "john@example.com",
  "phone": "08012345678",
  "dob": "1990-01-01",
  "gender": "male",
  "house_address": "123 Health St",
  "nhis_id": "NHIS123456",
  "language_preference": "English"
}
```

### ⚙️ Account & Preference

#### PATCH `/user/account`

```json
{
  "language_preference": "Hausa",
  "communication_preference": "sms",
  "notification": {
    "email": true,
    "sms": false,
    "push": true
  },
  "password": "changeMe123"
}
```

### 🩺 Medical Info

#### PUT `/user/medical-info`

```json
{
  "known_allergies": ["Peanuts"],
  "current_medications": ["Ibuprofen"],
  "vaccination_record": ["COVID-19", "Tetanus"],
  "chronic_conditions": ["Diabetes"],
  "blood_type": "O+"
}
```

---

## 🛠 Setup

```bash
npm install
npm run dev
```

Add `.env` file:

```env
PORT=5000
MONGO_URI=mongodb+srv://admin:yourpassword@cluster0.mongodb.net/healthcare?retryWrites=true&w=majority
```

---

## 🧱 Tech Stack

- Node.js
- Express
- MongoDB + Mongoose
- dotenv
- bcrypt (for password hashing)

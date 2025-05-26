-- Medbuddy Relational Database Schema

-- ### 1. `users` (All user types)
-- Stores core account information for all users (patients, doctors, pharmacists, admins).
```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20) UNIQUE,
    password_hash TEXT,
    user_type ENUM('patient', 'doctor', 'pharmacist', 'admin'),
    nhis_id VARCHAR(50),
    profile_picture TEXT,
    is_verified BOOLEAN DEFAULT FALSE,
    last_login TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

-- ### 2. `patient_profiles`

```sql
CREATE TABLE patient_profiles (
    user_id INT PRIMARY KEY,
    date_of_birth DATE,
    gender VARCHAR(10),
    address TEXT,
    city VARCHAR(100),
    emergency_contact_phone VARCHAR(20),
    blood_group VARCHAR(5),
    known_allergies TEXT,
    medical_conditions TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

-- ### 3. `doctors`

```sql
CREATE TABLE doctors (
    user_id INT PRIMARY KEY,
    specialization VARCHAR(100),
    license_number VARCHAR(100),
    years_of_experience INT,
    hospital_affiliation VARCHAR(100),
    consultation_fee DECIMAL(10,2),
    bio TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

-- ### 4. `pharmacists`

```sql
CREATE TABLE pharmacists (
    user_id INT PRIMARY KEY,
    license_number VARCHAR(100),
    pharmacy_name VARCHAR(100),
    address TEXT,
    years_of_experience INT,
    bio TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

-- ### 5. `consultations`

```sql
CREATE TABLE consultations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    patient_id INT,
    doctor_id INT,
    pharmacist_id INT,
    scheduled_at DATETIME,
    consultation_type ENUM('instant', 'scheduled'),
    symptoms TEXT,
    diagnosis TEXT,
    prescription_id INT,
    notes TEXT,
    status ENUM('pending', 'completed', 'cancelled'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (patient_id) REFERENCES users(id),
    FOREIGN KEY (doctor_id) REFERENCES users(id),
    FOREIGN KEY (pharmacist_id) REFERENCES users(id),
    FOREIGN KEY (prescription_id) REFERENCES prescriptions(id)
);
```

-- ### 6. `prescriptions`

```sql
CREATE TABLE prescriptions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    doctor_id INT,
    patient_id INT,
    drug_name VARCHAR(100),
    dosage VARCHAR(50),
    duration VARCHAR(50),
    notes TEXT,
    signed_qr TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (doctor_id) REFERENCES users(id),
    FOREIGN KEY (patient_id) REFERENCES users(id)
);
```

-- ### 7. `orders`

```sql
CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    patient_id INT,
    prescription_id INT,
    delivery_address TEXT,
    payment_method ENUM('card', 'transfer', 'cash'),
    total_amount DECIMAL(10,2),
    vendor_name VARCHAR(100),
    eta DATETIME,
    status ENUM('pending', 'approved', 'dispatched', 'delivered', 'cancelled'),
    tracking_number VARCHAR(50),
    delivery_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (patient_id) REFERENCES users(id),
    FOREIGN KEY (prescription_id) REFERENCES prescriptions(id)
);
```

-- ### 8. `passbook`

```sql
CREATE TABLE passbook (
    id INT PRIMARY KEY AUTO_INCREMENT,
    patient_id INT,
    drug_name VARCHAR(100),
    prescribed_at DATE,
    pharmacist_name VARCHAR(100),
    dosage TEXT,
    side_effects TEXT,
    warnings TEXT,
    refill_available BOOLEAN,
    refill_count INT DEFAULT 0,
    prescription_id INT,
    FOREIGN KEY (patient_id) REFERENCES users(id),
    FOREIGN KEY (prescription_id) REFERENCES prescriptions(id)
);
```

-- ### 9. `drugs`

```sql
CREATE TABLE drugs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    dosage VARCHAR(50),
    form VARCHAR(50), -- e.g., tablet, syrup
    side_effects TEXT,
    interactions TEXT,
    price DECIMAL(10,2),
    manufacturer VARCHAR(100),
    nafdac_verified BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

-- ### 10. `notifications`

```sql
CREATE TABLE notifications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    title VARCHAR(255),
    body TEXT,
    type ENUM('refill', 'recall', 'interaction', 'reminder'),
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

-- ### 11. `signature_logs`

```sql
CREATE TABLE signature_logs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    prescription_id INT,
    action_type ENUM('sign', 'verify'),
    ip_address VARCHAR(45),
    device_info TEXT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (prescription_id) REFERENCES prescriptions(id)
);
```

-- ### 12. `admins`

```sql
CREATE TABLE admins (
    user_id INT PRIMARY KEY,
    role ENUM('superadmin', 'moderator'),
    last_activity TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

-- chat_messages Collection
{
  _id: ObjectId,
  user_id: ObjectId,             // Reference to users collection
  sender: String,                // 'user' or 'ai'
  message: String,               // Message content
  message_type: String,          // 'text', 'image', 'audio', etc.
  session_id: String,            // To group related messages
  timestamp: Date,               // When message was sent
  updated_at: Date               // Auto-updated on edit
}


-- medical_histories Collection

{
  _id: ObjectId,
  patient_id: ObjectId,           // Reference to users
  record_type: String,            // e.g., 'lab', 'vital', 'immunization'
  details: Object,                // Flexible JSON data
  recorded_by: ObjectId,          // Doctor or system
  recorded_at: Date,              // When recorded
  updated_at: Date                // Last updated time
}


-- feedbacks Collection

{
  _id: ObjectId,
  user_id: ObjectId,              // Patient
  consultation_id: ObjectId,      // Linked consultation
  rating: Number,                 // 1-5 stars
  comments: String,               // Optional text
  created_at: Date,
  updated_at: Date
}


-- device_logs Collection

{
  _id: ObjectId,
  user_id: ObjectId,
  ip_address: String,
  device_info: String,
  os: String,
  browser: String,
  location: String,               // Optional geo info
  login_time: Date,
  updated_at: Date
}

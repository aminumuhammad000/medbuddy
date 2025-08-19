-- users Table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(20) NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    user_type ENUM('patient', 'doctor', 'pharmacist', 'admin') NOT NULL,
    nhis_id VARCHAR(50),
    profile_picture TEXT,
    is_verified BOOLEAN DEFAULT FALSE,
    last_login TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- patient_profiles Table
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
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- doctors Table
CREATE TABLE doctors (
    user_id INT PRIMARY KEY,
    specialization VARCHAR(100) NOT NULL,
    license_number VARCHAR(100) NOT NULL,
    gender VARCHAR(10),
    address TEXT,
    city VARCHAR(100),
    years_of_experience INT,
    hospital_affiliation VARCHAR(100),
    consultation_fee DECIMAL(10,2),
    bio TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- pharmacists Table
CREATE TABLE pharmacists (
    user_id INT PRIMARY KEY,
    license_number VARCHAR(100) NOT NULL,
    pharmacy_name VARCHAR(100),
    gender VARCHAR(10),
    address TEXT,
    city VARCHAR(100),
    years_of_experience INT,
    bio TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- prescriptions Table
CREATE TABLE prescriptions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    doctor_id INT,
    patient_id INT,
    drug_name VARCHAR(100) NOT NULL,
    dosage VARCHAR(50) NOT NULL,
    duration VARCHAR(50) NOT NULL,
    notes TEXT,
    signed_qr TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (doctor_id) REFERENCES users(id),
    FOREIGN KEY (patient_id) REFERENCES users(id)
);

-- consultations Table
CREATE TABLE consultations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT,
    doctor_id INT,
    pharmacist_id INT,
    scheduled_at DATETIME,
    consultation_type ENUM('instant', 'scheduled') NOT NULL,
    image_url VARCHAR(255),
    video_url VARCHAR(255),
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

-- orders Table 
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT,
    prescription_id INT,
    delivery_address TEXT NOT NULL,
    payment_method ENUM('card', 'transfer', 'cash') NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    vendor_name VARCHAR(100),
    eta DATETIME,
    status ENUM('pending', 'completed', 'cancelled') NOT NULL,
    tracking_number VARCHAR(50),
    delivery_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (patient_id) REFERENCES users(id),
    FOREIGN KEY (prescription_id) REFERENCES prescriptions(id)
);

-- drugs Table
CREATE TABLE drugs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    drug_name VARCHAR(100) NOT NULL,
    dosage VARCHAR(50) NOT NULL,
    form VARCHAR(50),
    side_effects TEXT,
    interactions TEXT,
    price DECIMAL(10,2),
    manufacturer VARCHAR(100),
    nafdac_verified BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- passbook Table
CREATE TABLE passbook (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT,
    drug_name VARCHAR(100) NOT NULL,
    prescribed_at DATE NOT NULL,
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

-- admins Table
CREATE TABLE admins (
    user_id INT PRIMARY KEY,
    role ENUM('superadmin', 'moderator') NOT NULL,
    last_activity TIMESTAMP NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

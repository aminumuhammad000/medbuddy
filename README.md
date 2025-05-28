"# medbuddy"

Medbuddy - AI-Driven Telepharmacy Platform

MedBuddy
Revolutionizing Drug Access & Consultations in Nigeria with AI
Hassan Dankura – Founder & CEO
dankura10@yahoo.com

The Problem
60M+ Nigerians lack timely access to licensed pharmacists.
High prevalence of counterfeit drugs in rural and semi-urban markets.
Limited awareness about drug interactions, dosage, and side effects.
Busy urban consumers desire convenience in medical care.

Our Solution: MedBuddy
A telepharmacy platform combining AI and human expertise to deliver:
✅ AI-Powered Drug Assistance: Instant, accurate drug guidance (name, dosage, interactions, side effects)
✅ Live Video & Chat Consultations: Direct access to licensed Nigerian pharmacists and clinical experts
✅ E-Prescription & EHR Integration: Digitally signed prescriptions for doctors/pharmacists with full record-keeping
✅ Verified Drug Ordering & Home Delivery: NAFDAC-verified vendors only; prescription-check before fulfillment
✅ Real-Time Alerts: Interaction warnings, recall notices, and drug expiration updates
✅ Multilingual & Voice-Supported Interface: Especially for rural users and persons with low literacy levels
✅ AI-Personalized Signatures & Profiles: Each user gets a medication profile with signature-based drug tracking (history, preferences, and allergies)

Personalization and Signature Features
🔹 Smart Medication Profiles
Custom profiles tied to patient phone number or NHIS ID, storing:
Allergies
Chronic condition history
Physician & pharmacist notes
🔹 Digital Prescriber Signatures
Secure QR-based digital signatures for:
Doctors
Pharmacists
Patient acknowledgment
🔹 Medication Passbook
Auto-updated log of patient medications with timestamps, pharmacist initials, and side effect tracker.
🔹 Signature Alerts
Platform flags any order attempt that conflicts with previous drug history or known allergies.

Product Demo (Screens To be Developed for MVP)
Showcase wireframes:
Home Screen
AI Chat/voice Interface
Virtual Consultation Room
Drug Ordering/tracking Interface
Pharmacist Dashboard
Signature and verification panel

Market Opportunity
Nigeria pharma market = $1.4B+, growing 9% annually
90M+ smartphone users by 2025
Over 30M underserved rural dwellers
Expanding telehealth acceptance post-COVID

Business Model
Consultation Fees: ₦500–₦1,000 per session (70% to pharmacists)
Commission on Orders: 5–10% per drug sale
Pharmacy Subscriptions: Premium listing, analytics
API Licensing: For clinics & third-party apps
Digital Signature SaaS: Secure prescription module for providers

Competitive Advantage
Localized AI trained on Nigerian drug data
Licensed pharmacist network for human fallback
Real-time price matching from verified vendors
NAFDAC-linked backend for drug verification
Multilingual & offline-lite mode for rural inclusion
HIPAA/GDPR-style encryption for patient privacy

Go-to-Market Strategy
Partner with 100+ pharmacies & 50 licensed pharmacists for pilot
Targeted ads via WhatsApp, Instagram, and health forums
Collaborations with hospitals, NHIS, PCN, NGOs, and NAFDAC
Influencer & doctor-pharmacist advocacy campaigns
Integrate with hospital EHR systems via open API

Traction & Timeline
Milestone
Timeline
Beta Launch (Kano & Abuja)
Q3 2025
1,000+ Users Within 60 Days
Q3–Q4 2025
API Integration with 3 Hospitals
Q4 2025
Expansion to SE & North Nigeria
Q1 2026
Signature Module with QR rollout
Q2 2026

Why Now?
Tech adoption is at its peak in Nigeria.
AI is revolutionizing healthcare.
Post-pandemic users want convenience & trust.
Regulatory bodies like NAFDAC are open to innovation.
Counterfeit drug risks are increasing.
Regulatory bodies are embracing digital health solutions.
Patients demand safe, convenient, and authenticated drug access.

Contact & Close
Let’s redefine drug access in Africa.
Hassan Dankura
dankura10@yahoo.com

Medbuddy Database Schema (Tabular Format)
users Table - MySQL
Field Name
Data Type
Description
Constraints
id
INT AUTO_INCREMENT
Primary user ID
Primary Key
name
VARCHAR(100)
Full name
Required
email
VARCHAR(100)
User email
Unique, Required
phone
VARCHAR(20)
Phone number
Unique, Required
password_hash
TEXT
Encrypted password
Required
user_type
ENUM
User type (patient, doctor, pharmacist, admin)
Required
nhis_id
VARCHAR(50)
NHIS ID number
Optional
profile_picture
TEXT
Profile picture link
Optional
is_verified
BOOLEAN
Verification status
Default: false
last_login
TIMESTAMP
Last login time
Optional
created_at
TIMESTAMP
Creation time
Default: now()
updated_at
TIMESTAMP
Last updated time
Auto-updated

patient_profiles Table - MySQL
Field Name
Data Type
Description
Constraints
user_id
INT
Linked to users.id
Primary Key, FK
date_of_birth
DATE
Date of birth
Optional
gender
VARCHAR(10)
Gender
Optional
address
TEXT
Patient address
Optional
city
VARCHAR(100)
City
Optional
emergency_contact_phone
VARCHAR(20)
Emergency contact
Optional
blood_group
VARCHAR(5)
Blood type
Optional
known_allergies
TEXT
Allergies
Optional
medical_conditions
TEXT
Medical conditions
Optional

doctors Table - MySQL
Field Name
Data Type
Description
Constraints
user_id
INT
Linked to users.id
Primary Key, FK
specialization
VARCHAR(100)
Doctor specialization
Required
license_number
VARCHAR(100)
License number
Required
years_of_experience
INT
Years of experience
Optional
hospital_affiliation
VARCHAR(100)
Hospital
Optional
consultation_fee
DECIMAL(10,2)
Fee per consult
Optional
bio
TEXT
Doctor biography
Optional

pharmacists Table - MySQL
Field Name
Data Type
Description
Constraints
user_id
INT
Linked to users.id
Primary Key, FK
license_number
VARCHAR(100)
Pharmacist license
Required
pharmacy_name
VARCHAR(100)
Pharmacy name
Optional
address
TEXT
Pharmacy address
Optional
years_of_experience
INT
Years of experience
Optional
bio
TEXT
Pharmacist biography
Optional

consultations Table - MySQL
Field Name
Data Type
Description
Constraints
id
INT AUTO_INCREMENT
Consultation ID
Primary Key
patient_id
INT
Patient's user ID
FK
doctor_id
INT
Doctor's user ID
FK
pharmacist_id
INT
Pharmacist user ID
FK
scheduled_at
DATETIME
Scheduled time
Optional
consultation_type
ENUM
instant/scheduled
Required
image_url
VARCHAR(255)
image location
Optional
video_url
VARCHAR(255)
video location
optional
symptoms
TEXT
Symptoms entered
Optional
diagnosis
TEXT
Diagnosis made
Optional
prescription_id
INT
Linked prescription
FK
notes
TEXT
Extra notes
Optional
status
ENUM
Status
pending/completed/cancelled
created_at
TIMESTAMP
Created at
Default now()
updated_at
TIMESTAMP
Last updated
Auto-update

prescriptions Table - MySQL
Field Name
Data Type
Description
Constraints
id
INT AUTO_INCREMENT
Prescription ID
Primary Key
doctor_id
INT
Prescribing doctor
FK
patient_id
INT
Patient receiving
FK
drug_name
VARCHAR(100)
Drug name
Required
dosage
VARCHAR(50)
Dosage
Required
duration
VARCHAR(50)
For how long
Required
notes
TEXT
Extra instructions
Optional
signed_qr
TEXT
QR Signature
Optional
created_at
TIMESTAMP
Created at
Default now()

orders Table - MySQL
Field Name
Data Type
Description
Constraints
id
INT AUTO_INCREMENT
Order ID
Primary Key
patient_id
INT
Linked patient
FK
prescription_id
INT
Linked prescription
FK
delivery_address
TEXT
Shipping location
Required
payment_method
ENUM
card/transfer/cash
Required
total_amount
DECIMAL(10,2)
Total price
Required
vendor_name
VARCHAR(100)
Vendor name
Optional
eta
DATETIME
Estimated time
Optional
status
ENUM
Status of order
Required
tracking_number
VARCHAR(50)
Tracking ID
Optional
delivery_notes
TEXT
Notes
Optional
created_at
TIMESTAMP
Created at
Default now()
updated_at
TIMESTAMP
Last updated
Auto-update

passbook Table - MySQL
Field Name
Data Type
Description
Constraints
id
INT AUTO_INCREMENT
Record ID
Primary Key
patient_id
INT
Patient ID
FK
drug_name
VARCHAR(100)
Drug used
Required
prescribed_at
DATE
Date prescribed
Required
pharmacist_name
VARCHAR(100)
Name
Optional
dosage
TEXT
How to use
Optional
side_effects
TEXT
Side effects
Optional
warnings
TEXT
Warnings
Optional
refill_available
BOOLEAN
Can refill?
Optional
refill_count
INT
Times refilled
Default 0
prescription_id
INT
Linked prescription
FK

drugs Table - MySQL
Field Name
Data Type
Description
Constraints
id
INT AUTO_INCREMENT
Drug ID
Primary Key
drug_name
VARCHAR(100)
Drug name
Required
dosage
VARCHAR(50)
Dosage
Required
form
VARCHAR(50)
Form type
tablet/syrup etc.
side_effects
TEXT
Known effects
Optional
interactions
TEXT
Interaction notes
Optional
price
DECIMAL(10,2)
Price
Optional
manufacturer
VARCHAR(100)
Produced by
Optional
nafdac_verified
BOOLEAN
Verified by NAFDAC
Default true
created_at
TIMESTAMP
Created
Default now()

notifications Table - MongoDB
Field Name
Data Type
Description
Constraints
id
INT AUTO_INCREMENT
Notification ID
Primary Key
user_id
INT
User ID
FK
title
VARCHAR(255)
Notification title
Required
body
TEXT
Message body
Required
type
ENUM
refill/recall/etc.
Required
is_read
BOOLEAN
Seen by user?
Default false
created_at
TIMESTAMP
When sent
Default now()

signature_logs Table - MongoDB
Field Name
Data Type
Description
Constraints
id
INT AUTO_INCREMENT
Log ID
Primary Key
user_id
INT
User who signed
FK
prescription_id
INT
Prescription signed
FK
action_type
ENUM
sign/verify
Required
ip_address
VARCHAR(45)
IP Address
Optional
device_info
TEXT
Browser/device info
Optional
timestamp
TIMESTAMP
Time of action
Default now()

admins Table - MySQL
Field Name
Data Type
Description
Constraints
user_id
INT
Linked to users.id
Primary Key, FK
role
ENUM
superadmin/moderator
Required
last_activity
TIMESTAMP
Last action time
Optional

chat_messages Collection - MongoDB
Field Name
Data Type
Description
\_id
ObjectId
Unique identifier
user_id
ObjectId
Reference to users collection
sender
String
'user' or 'ai'
message
String
Message content
message_type
String
'text', 'image', 'audio', etc.
session_id
String
Group related messages
timestamp
Date
When message was sent
updated_at
Date
Auto-updated on message edit

medical_histories Collection - MongoDB
Field Name
Data Type
Description
\_id
ObjectId
Unique identifier
patient_id
ObjectId
Reference to users
record_type
String
'lab', 'vital', 'immunization', etc.
details
Object
Flexible JSON data
recorded_by
ObjectId
Doctor or system
recorded_at
Date
When the record was made
updated_at
Date
Last updated time

feedbacks Collection
Field Name
Data Type
Description
\_id
ObjectId
Unique identifier
user_id
ObjectId
Patient who submitted feedback
consultation_id
ObjectId
Linked consultation
rating
Number
1–5 stars
comments
String
Optional feedback text
created_at
Date
When feedback was submitted
updated_at
Date
Last updated

device_logs Collection - MongoDB
Field Name
Data Type
Description
\_id
ObjectId
Unique identifier
user_id
ObjectId
User associated with device
ip_address
String
IP address of the login
device_info
String
User agent/device type
os
String
Operating system
browser
String
Browser type
location
String
Geolocation info (optional)
login_time
Date
Time of login
updated_at
Date
Time of last session update

entity relationship description for the Medbuddy Database Schema
🔗 Relational Diagram (Textual Format)

1. users
   PK: id

Relations:

patient_profiles.user_id → users.id (1-to-1)

doctors.user_id → users.id (1-to-1)

pharmacists.user_id → users.id (1-to-1)

admins.user_id → users.id (1-to-1)

consultations.patient_id → users.id (many-to-1)

consultations.doctor_id → users.id (many-to-1)

consultations.pharmacist_id → users.id (many-to-1)

prescriptions.doctor_id → users.id (many-to-1)

prescriptions.patient_id → users.id (many-to-1)

orders.patient_id → users.id (many-to-1)

passbook.patient_id → users.id (many-to-1)

notifications.user_id → users.id (many-to-1)

signature_logs.user_id → users.id (many-to-1)

chat_messages.user_id → users.id (many-to-1)

medical_histories.patient_id → users.id (many-to-1)

medical_histories.recorded_by → users.id (many-to-1)

feedbacks.user_id → users.id (many-to-1)

device_logs.user_id → users.id (many-to-1)

2. patient_profiles
   PK & FK: user_id → users.id
   (Each patient has one profile)

3. doctors
   PK & FK: user_id → users.id
   (Each doctor has one record)

4. pharmacists
   PK & FK: user_id → users.id
   (Each pharmacist has one record)

5. admins
   PK & FK: user_id → users.id
   (Each admin is a user with an admin role)

6. consultations
   PK: id

FKs:

patient_id → users.id

doctor_id → users.id

pharmacist_id → users.id

prescription_id → prescriptions.id (optional, can be null)

7. prescriptions
   PK: id

FKs:

doctor_id → users.id

patient_id → users.id

8. orders
   PK: id

FKs:

patient_id → users.id

prescription_id → prescriptions.id

9. passbook
   PK: id

FKs:

patient_id → users.id

prescription_id → prescriptions.id

10. drugs
    Standalone table (Referenced only via drug_name in prescriptions and passbook but not as FK)

11. notifications (MongoDB)
    PK: id

FK:

user_id → users.id

12. signature_logs (MongoDB)
    PK: id

FKs:

user_id → users.id

prescription_id → prescriptions.id

13. chat_messages (MongoDB)
    FK:

user_id → users.id

14. medical_histories (MongoDB)
    FKs:

patient_id → users.id

recorded_by → users.id (doctor or system)

15. feedbacks (MongoDB)
    FKs:

user_id → users.id

consultation_id → consultations.id

16. device_logs (MongoDB)
    FK:

user_id → users.id

import { useState } from "react";
import style from "./ConsultBooking.module.css";
import Search from "./components/Search";
import DoctorList from "./components/DoctorList";
import doctor1 from "../../assets/images/profiles/doctor1.png";
import doctor2 from "../../assets/images/profiles/doctor2.png";
import ConsultPreview from "./ConsultPreview";

const doctors = [
  {
    name: "Dr. Aisha Bello",
    specialist: "Cardiologist",
    title: "Heart & Blood Pressure Specialist",
    price: "$45",
    experience: "10yrs",
    rating: 4.8,
    totalPatient: "1.2k",
    profile: doctor1,
  },
  {
    name: "Dr. Yusuf Ibrahim",
    specialist: "Neurologist",
    title: "Brain & Nervous System Specialist",
    price: "$50",
    experience: "11yrs",
    rating: 4.6,
    totalPatient: "980+",
    profile: doctor2,
  },
  {
    name: "Dr. Laila Umar",
    specialist: "Dermatologist",
    title: "Skin & Hair Treatment Expert",
    price: "$40",
    experience: "9yrs",
    rating: 4.9,
    totalPatient: "1.5k",
    profile: doctor1,
  },
  {
    name: "Dr. Ahmed Sani",
    specialist: "Pediatrician",
    title: "Child Healthcare Consultant",
    price: "$35",
    experience: "8yrs",
    rating: 4.7,
    totalPatient: "1.1k",
    profile: doctor2,
  },
  {
    name: "Dr. Musa Bello",
    specialist: "Cardiologist",
    title: "Heart Disease Prevention Expert",
    price: "$45",
    experience: "12yrs",
    rating: 4.8,
    totalPatient: "1.3k",
    profile: doctor1,
  },
  {
    name: "Dr. Aminu Muhammad",
    specialist: "Neurologist",
    title: "Spinal & Brain Disorders Consultant",
    price: "$50",
    experience: "10yrs",
    rating: 4.6,
    totalPatient: "990+",
    profile: doctor2,
  },
  {
    name: "Dr. Hassan Abubakar",
    specialist: "Dermatologist",
    title: "Acne & Skin Disease Expert",
    price: "$40",
    experience: "7yrs",
    rating: 4.9,
    totalPatient: "870+",
    profile: doctor1,
  },
  {
    name: "Dr. Sani Kabiru",
    specialist: "Pediatrician",
    title: "Newborn & Adolescent Health Specialist",
    price: "$35",
    experience: "6yrs",
    rating: 4.7,
    totalPatient: "760+",
    profile: doctor2,
  },
];

const specialist = [
  { name: "Cardiologist", icon: "mdi:heart", amount: 43 },
  { name: "Neurologist", icon: "mdi:brain", amount: 30 },
  { name: "Pulmonologist", icon: "mdi:lungs", amount: 9 },
  { name: "Gastroenterologist", icon: "mdi:stethoscope", amount: 13 },
  { name: "Nephrologist", icon: "mdi:water", amount: 40 },
  { name: "Dermatologist", icon: "mdi:doctor", amount: 45 },
  { name: "Endocrinologist", icon: "mdi:flask", amount: 63 },
  { name: "Hematologist", icon: "mdi:water", amount: 23 },
  { name: "Oncologist", icon: "mdi:ribbon", amount: 43 },
  { name: "Rheumatologist", icon: "mdi:bone", amount: 33 },
  { name: "Ophthalmologist", icon: "mdi:eye", amount: 43 },
  { name: "Otolaryngologist", icon: "mdi:headphones", amount: 43 },
  { name: "Psychiatrist", icon: "mdi:head-cog", amount: 11 },
  { name: "Urologist", icon: "mdi:note-text", amount: 23 },
  { name: "Gynecologist", icon: "mdi:gender-female", amount: 43 },
  { name: "Obstetrician", icon: "mdi:baby", amount: 43 },
  { name: "Orthopedist", icon: "mdi:bone", amount: 10 },
  { name: "Pediatrician", icon: "mdi:human-child", amount: 43 },
  { name: "Geriatrician", icon: "mdi:human-cane", amount: 43 },
  { name: "Surgeon", icon: "mdi:stethoscope", amount: 25 },
  { name: "Radiologist", icon: "mdi:flask-empty-outline", amount: 8 },
  { name: "Pathologist", icon: "mdi:flask-empty-outline", amount: 43 },
  { name: "Anesthesiologist", icon: "mdi:syringe", amount: 7 },
  { name: "Immunologist", icon: "mdi:shield", amount: 20 },
  { name: "Infectious Disease Specialist", icon: "mdi:virus", amount: 43 },
];

const ConsultBooking = () => {
  const [showAllSpecialties, setShowAllSpecialties] = useState(false);
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showConsultPreview, setShowConsultPreview] = useState(true);
  const visibleSpecialists = showAllSpecialties
    ? specialist
    : specialist.slice(0, 5);

  const filteredDoctors = selectedSpecialist
    ? doctors.filter((doc) => doc.specialist === selectedSpecialist)
    : doctors;

  const handleSpecialistClick = (name) => {
    setSelectedSpecialist(name);
  };

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
  };

  // const handleBack = () => setSelectedDoctor(null);

  return (
    <div className={style.ConsultBooking}>
      <>
        {showConsultPreview ? (
          <ConsultPreview doc={selectedDoctor} />
        ) : (
          <>
            <Search />
            {/* Specialties Section */}
            <div
              className={
                showAllSpecialties
                  ? style.iconsContainerAll
                  : style.iconsContainer
              }
            >
              {visibleSpecialists.map((item, index) => (
                <div
                  key={index}
                  className={
                    showAllSpecialties ? style.iconBoxAll : style.iconBox
                  }
                  style={{ cursor: "pointer" }}
                  onClick={() => handleSpecialistClick(item.name)}
                >
                  <div
                    className={
                      showAllSpecialties ? style.iconDivAll : style.iconDiv
                    }
                    style={
                      selectedSpecialist === item.name
                        ? {
                            backgroundColor: "#1771B7",
                          }
                        : {}
                    }
                  >
                    <iconify-icon
                      icon={item.icon}
                      className={style.icon}
                      style={
                        selectedSpecialist === item.name
                          ? {
                              color: "#fff",
                            }
                          : {}
                      }
                    ></iconify-icon>
                  </div>
                  <h3 className={style.name}>{item.name}</h3>
                  {showAllSpecialties && (
                    <h4 className={style.amount}>{item.amount} Available</h4>
                  )}
                </div>
              ))}

              {/* See More/Less Toggle */}
              <div
                className={
                  showAllSpecialties ? style.iconBoxAll : style.iconBox
                }
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowAllSpecialties((prev) => !prev);
                  setSelectedSpecialist(null); // reset any active filter when toggling view
                }}
              >
                <div
                  className={
                    showAllSpecialties ? style.iconDivAll : style.iconDiv
                  }
                >
                  <iconify-icon
                    icon={
                      showAllSpecialties ? "mdi:arrow-left" : "mdi:arrow-right"
                    }
                    rotation={showAllSpecialties ? 180 : 0}
                    className={style.icon}
                  ></iconify-icon>
                </div>
                <h3 className={style.name}>
                  {showAllSpecialties ? "See less" : "See more"}
                </h3>
              </div>
            </div>

            {!showAllSpecialties && (
              <div>
                <DoctorList
                  doctors={filteredDoctors}
                  onDoctorClick={handleDoctorClick}
                />
              </div>
            )}
          </>
        )}
      </>
    </div>
  );
};

export default ConsultBooking;

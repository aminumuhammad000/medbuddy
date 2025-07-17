import { useState } from "react";
import style from "./ConsultBooking.module.css";
import Search from "./components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faBrain,
  faLungs,
  faStethoscope,
  faUserMd,
  faFlask,
  faDroplet,
  faRibbon,
  faBone,
  faEye,
  faHeadphones,
  faHeadSideVirus,
  faNotesMedical,
  faVenus,
  faBaby,
  faChild,
  faPersonCane,
  faSyringe,
  faVials,
  faShieldVirus,
  faVirus,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import DoctorList from "./components/DoctorList";
import doctor1 from "../../assets/images/profiles/doctor1.png";
import doctor2 from "../../assets/images/profiles/doctor2.png";
import ConsultPreview from "./ConsultPreview";

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z"
    clip-rule="evenodd"
  />
</svg>;

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
  { name: "Cardiologist", icon: faHeart, amount: 43 },
  { name: "Neurologist", icon: faBrain, amount: 30 },
  { name: "Pulmonologist", icon: faLungs, amount: 9 },
  { name: "Gastroenterologist", icon: faStethoscope, amount: 13 },
  { name: "Nephrologist", icon: faDroplet, amount: 40 },
  { name: "Dermatologist", icon: faUserMd, amount: 45 },
  { name: "Endocrinologist", icon: faFlask, amount: 63 },
  { name: "Hematologist", icon: faDroplet, amount: 23 },
  { name: "Oncologist", icon: faRibbon, amount: 43 },
  { name: "Rheumatologist", icon: faBone, amount: 33 },
  { name: "Ophthalmologist", icon: faEye, amount: 43 },
  { name: "Otolaryngologist", icon: faHeadphones, amount: 43 },
  { name: "Psychiatrist", icon: faHeadSideVirus, amount: 11 },
  { name: "Urologist", icon: faNotesMedical, amount: 23 },
  { name: "Gynecologist", icon: faVenus, amount: 43 },
  { name: "Obstetrician", icon: faBaby, amount: 43 },
  { name: "Orthopedist", icon: faBone, amount: 10 },
  { name: "Pediatrician", icon: faChild, amount: 43 },
  { name: "Geriatrician", icon: faPersonCane, amount: 43 },
  { name: "Surgeon", icon: faStethoscope, amount: 25 },
  { name: "Radiologist", icon: faVials, amount: 8 },
  { name: "Pathologist", icon: faVials, amount: 43 },
  { name: "Anesthesiologist", icon: faSyringe, amount: 7 },
  { name: "Immunologist", icon: faShieldVirus, amount: 20 },
  { name: "Infectious Disease Specialist", icon: faVirus, amount: 43 },
];

const ConsultBooking = () => {
  const [showAllSpecialties, setShowAllSpecialties] = useState(false);
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const visibleSpecialists = showAllSpecialties
    ? specialist
    : specialist.slice(0, 5);

  const filteredDoctors = selectedSpecialist
    ? doctors.filter((doc) => doc.specialist === selectedSpecialist)
    : doctors;

  const handleSpecialistClick = (name) => {
    setSelectedSpecialist(name);
  };

  const clearFilter = () => {
    setSelectedSpecialist(null);
  };

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleBack = () => setSelectedDoctor(null);
  return (
    <div className={style.ConsultBooking}>
      <Search />
      <div className={style.test}></div>
      {/* Specialties Section */}
      <div
        className={
          showAllSpecialties ? style.iconsContainerAll : style.iconsContainer
        }
      >
        {visibleSpecialists.map((item, index) => (
          <div
            key={index}
            className={showAllSpecialties ? style.iconBoxAll : style.iconBox}
            style={{ cursor: "pointer" }}
            onClick={() => handleSpecialistClick(item.name)}
          >
            <div
              className={showAllSpecialties ? style.iconDivAll : style.iconDiv}
              style={
                selectedSpecialist === item.name
                  ? {
                      backgroundColor: "#1771B7",
                    }
                  : {}
              }
            >
              <FontAwesomeIcon
                icon={item.icon}
                className={style.icon}
                style={
                  selectedSpecialist === item.name
                    ? {
                        color: "#fff",
                      }
                    : {}
                }
              />
            </div>
            <h3 className={style.name}>{item.name}</h3>
            {showAllSpecialties && (
              <h4 className={style.amount}>{item.amount} Available</h4>
            )}
          </div>
        ))}

        {/* See More/Less Toggle */}
        <div
          className={showAllSpecialties ? style.iconBoxAll : style.iconBox}
          style={{ cursor: "pointer" }}
          onClick={() => {
            setShowAllSpecialties((prev) => !prev);
            setSelectedSpecialist(null); // reset any active filter when toggling view
          }}
        >
          <div
            className={showAllSpecialties ? style.iconDivAll : style.iconDiv}
          >
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              rotation={showAllSpecialties ? 180 : 0}
              className={style.icon}
            />
          </div>
          <h3 className={style.name}>
            {showAllSpecialties ? "See less" : "See more"}
          </h3>
        </div>
      </div>

      {/* Doctor List Section (hidden if showAllSpecialties === true) */}
      {!showAllSpecialties && (
        <div>
          <div className={style.doctorListTitle}>
            <h1 className={style.listTitle}>
              {selectedSpecialist
                ? `${selectedSpecialist} Available`
                : "Top Doctors"}
            </h1>
            <button className={style.moreDoctors} onClick={clearFilter}>
              {selectedSpecialist ? "Clear Filter" : "See more"}
            </button>
          </div>
          <DoctorList
            doctors={filteredDoctors}
            onDoctorClick={handleDoctorClick}
          />
        </div>
      )}

      {/* Selected Doctor Preview */}
      <ConsultPreview doc={selectedDoctor} />
    </div>
  );
};

export default ConsultBooking;

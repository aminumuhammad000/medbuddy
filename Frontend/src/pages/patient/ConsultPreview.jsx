import DoctorAppointmentCard from "./components/DoctorAppointmentCard";
import style from "./ConsultPreview.module.css";
import doctor1 from "../../assets/images/profiles/doctor1.png";

const doc = {
  name: "Dr. Aisha Bello",
  specialist: "Cardiologist",
  title: "Heart & Blood Pressure Specialist",
  profile: doctor1,
  price: "$45",
  experience: "10yrs",
  rating: 4.8,
  totalPatient: "1.2k",
};

const ConsultPreview = () => {
  return (
    <div className={style.ConsultPreview}>
      <DoctorAppointmentCard {...doc} />
      <div className={style.doctorInfo}>
        <ul className={style.navList}>
          <li>About</li>
          <li>Availability</li>
          <li>Experience</li>
          <li>Education</li>
          <li>Review</li>
        </ul>
      </div>
    </div>
  );
};

export default ConsultPreview;

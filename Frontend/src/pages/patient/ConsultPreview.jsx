import DoctorAppointmentCard from "./components/DoctorAppointmentCard";
import style from "./ConsultPreview.module.css";
import doctor1 from "../../assets/images/profiles/doctor1.png";
import { useState } from "react";
import AboutDoctor from "./components/AboutDoctor";
import DoctorAvailability from "./components/DoctorAvailability";
import DoctorFeedBacks from "./components/DoctorFeedBacks";
import profile from "../../assets/images/profiles/female-profile.jpg";

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

const consultations = [
  {
    profile: profile,
    name: "Fatima Usman",
    username: "@fatima_u",
    comment:
      "Dr. Musa is one of the kindest doctors I've ever met. He explained everything so clearly and listened patiently. Highly recommend!",
    date: "2025-07-18",
    consultType: "Video Consultation",
  },
  {
    profile: profile,
    name: "Michael Lee",
    username: "@mike_lee",
    comment: "Very helpful and kind consultant.",
    date: "2025-07-15",
    consultType: "Video Consultation",
  },
  {
    profile: profile,
    name: "Zainab Ibrahim",
    username: "@zainab_i",
    comment: "Got clear and actionable advice. Thank you!",
    date: "2025-07-14",
    consultType: "Video Consultation ",
  },
];

const ConsultPreview = () => {
  const [navActive, setNavActive] = useState("About");
  return (
    <div className={style.ConsultPreview}>
      <DoctorAppointmentCard {...doc} />
      <div className={style.doctorInfo}>
        <ul className={style.navList}>
          <li className={navActive === "About" ? style.active : ""}>
            <button id="text30" onClick={() => setNavActive("About")}>
              About
            </button>
          </li>
          <li className={navActive === "Availability" ? style.active : ""}>
            <button id="text30" onClick={() => setNavActive("Availability")}>
              Availability
            </button>
          </li>
          <li className={navActive === "Experience" ? style.active : ""}>
            <button id="text30" onClick={() => setNavActive("Experience")}>
              Experience
            </button>
          </li>
          <li className={navActive === "Education" ? style.active : ""}>
            <button id="text30" onClick={() => setNavActive("Education")}>
              Education
            </button>
          </li>
          <li className={navActive === "Review" ? style.active : ""}>
            <button id="text30" onClick={() => setNavActive("Review")}>
              Review
            </button>
          </li>
        </ul>
      </div>

      {navActive === "About" && <AboutDoctor />}
      {navActive === "Availability" && <DoctorAvailability />}
      {navActive === "Experience" && (
        <>
          <br />
          <p id="text30">
            Dr. Musa Abdullahi has over 12 years of experience in neurology,
            with deep expertise in managing complex brain and spine conditions.
          </p>
          <p id="text30">
            He has served as a Consultant Neurologist at XYZ Hospital and led
            multiple high-risk surgeries with outstanding outcomes.
          </p>
          <p id="text30">
            His work in conjoined twin separation gained international
            recognition.
          </p>
          <p id="text30">
            He is a Fellow of the Royal College of Physicians (FRCP, Edin) and a
            member of the Nigerian Medical Association.
          </p>
        </>
      )}
      {navActive === "Education" && (
        <>
          <br />
          <p id="text30">
            Dr. Musa Abdullahi obtained his MBBS from the University of Lagos in
            2007, followed by a residency in Neurology at the University College
            Hospital, Ibadan.
          </p>
          <p id="text30">
            He completed further fellowships at the Royal College of Physicians
            (Edinburgh) and the American College of Cardiology (USA).
          </p>

          <p id="text30">
            His academic path reflects a deep commitment to neurology and
            surgical excellence.
          </p>
        </>
      )}
      {navActive === "Review" && (
        <div className={style.feedbackCard} id="flexCenter">
          {consultations.map((item, index) => (
            <DoctorFeedBacks
              key={index}
              name={item.name}
              username={item.username}
              profile={item.profile}
              comment={item.comment}
              date={item.date}
              consultType={item.consultType}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ConsultPreview;

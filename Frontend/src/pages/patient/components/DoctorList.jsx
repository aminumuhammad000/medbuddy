import DoctorCard from "./DoctorCard";
import style from "./DoctorList.module.css";
import { useState } from "react";

const DoctorList = ({ doctors, onDoctorClick }) => {
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);

  const clearFilter = () => {
    setSelectedSpecialist(null);
  };
  return (
    <>
      <div className={style.doctorListTitle} id="flexBetween">
        <h1 className={style.listTitle} id="text30">
          {selectedSpecialist
            ? `${selectedSpecialist} Available`
            : "Top Doctors"}
        </h1>
        <button className={style.moreDoctors} onClick={clearFilter} id="text30">
          {selectedSpecialist ? "Clear Filter" : "See more"}
        </button>
      </div>

      <div className={style.DoctorList} id="flexCenter">
        {doctors.map((doc, i) => (
          <DoctorCard
            key={i}
            name={doc.name}
            specialist={doc.specialist}
            rating={doc.rating}
            price={doc.price}
            slot={doc.slot}
            profile={doc.profile}
          />
        ))}
      </div>
    </>
  );
};

export default DoctorList;

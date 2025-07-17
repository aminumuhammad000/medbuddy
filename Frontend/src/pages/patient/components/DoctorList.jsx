import DoctorCard from "./DoctorCard";
import style from "./DoctorList.module.css";

const DoctorList = ({ doctors, onDoctorClick }) => {
  return (
    <div className={style.DoctorList}>
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
  );
};

export default DoctorList;

import style from "./DoctorAppointmentCard.module.css";
const DoctorAppointmentCard = ({
  name,
  specialist,
  title,
  profile,
  price,
  experience,
  rating,
  totalPatient,
}) => {
  return (
    <div className={style.DoctorAppointmentCard} id="flexColumn">
      <button className={style.appointment}>Book Appointment</button>
      <div className={style.mainCard} id="flexBetween">
        <div className={style.info}>
          <h2 className={style.specialist}>{specialist}</h2>
          <h1 className={style.name}>{name}</h1>
          <p className={style.title}>{title}</p>
          <h4 className={style.price}>
            {price} <span className={style.session}>/session</span>
          </h4>
        </div>
        <div className={style.imgContainer}>
          <img src={profile} alt={profile} loading="lazy" />
        </div>
      </div>
      <div className={style.footer}>
        <div className={style.experience}>
          <iconify-icon icon="uil:bag" className={style.icon} />
          <h1 className={style.heading}>
            {experience} <span className={style.small}>Experience</span>
          </h1>
        </div>

        <div className={style.experience}>
          <iconify-icon icon="tabler:star" className={style.icon} />
          <h1 className={style.heading}>
            {rating} <span className={style.small}>Rating</span>
          </h1>
        </div>

        <div className={style.totalPatient}>
          <iconify-icon
            icon="garden:user-group-stroke-12"
            className={style.icon}
          ></iconify-icon>
          <h1 className={style.heading}>
            {totalPatient} <span className={style.small}>Patients</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointmentCard;

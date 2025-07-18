import style from "./DoctorCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

const DoctorCard = ({ name, specialist, rating, price, slot, profile }) => {
  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" }); // e.g. "July"
  const year = date.getFullYear();

  const getCurrentWeekDays = () => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    // Set to Monday (or Sunday if you want)
    const startOfWeek = new Date(today);
    const diffToMonday = (dayOfWeek + 6) % 7; // Shift so Monday = 0
    startOfWeek.setDate(today.getDate() - diffToMonday);

    const weekDays = [];

    for (let i = 0; i < 7; i++) {
      const d = new Date(startOfWeek);
      d.setDate(startOfWeek.getDate() + i);

      const day = d.toLocaleDateString("en-US", { weekday: "short" }); // Mon
      const date = d.getDate(); // 15
      const month = d.toLocaleDateString("en-US", { month: "short" }); // Jul

      weekDays.push(`${day} ${date}`);
    }

    return weekDays;
  };

  const days = getCurrentWeekDays();
  return (
    <div className={style.DoctorCard}>
      <div className={style.cardHead}>
        <div className={style.rating}>
          <FontAwesomeIcon icon={faStar} className={style.start} />
          {rating}
        </div>
        <div className={style.heartIcon}>
          <FontAwesomeIcon icon={faHeart} className={style.icon} />
        </div>
      </div>
      <div className={style.cardMain}>
        <div className={style.info}>
          <h5 className={style.specialist}>{specialist}</h5>
          <h1 className={style.name}>{name}</h1>
          <h3 className={style.price}>{price} /session</h3>
        </div>

        <div className={style.imageContainer}>
          <img src={profile} alt="profile image" />
        </div>
      </div>
      <div className={style.cardFooter}>
        <div className={style.footerHead}>
          <p>
            Availability <span className={style.slot}>{slot} slots</span>
          </p>
          <p className={style.date}>
            {month} {year}
          </p>
        </div>
        <ul className={style.week}>
          {days.map((day, index) => (
            <li key={index}>
              <span>{day.slice(0, 4)}</span>
              <span className={style.weekNumber}>{day.slice(4)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoctorCard;

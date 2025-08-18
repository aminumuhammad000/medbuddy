import style from "./DoctorCard.module.css";
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
          <iconify-icon icon="mdi:star" className={style.start}></iconify-icon>
          {rating}
        </div>
        <div className={style.heartIcon}>
          <iconify-icon icon="iconamoon:heart-light" className={style.icon} />
        </div>
      </div>
      <div className={style.cardMain}>
        <div className={style.info}>
          <h5 className={style.specialist}>{specialist}</h5>
          <h1 className={style.name}>{name}</h1>
          <h3 className={style.price}>{price} /session</h3>
        </div>

        <div className={style.imageContainer}>
          <img src={profile} alt="profile image" loading="lazy" />
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
              <span id="smallText">{day.slice(0, 4)}</span>
              <span className={style.weekNumber} id="smallText">
                {day.slice(4)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoctorCard;

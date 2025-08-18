import style from "./DoctorFeedBacks.module.css";
const DoctorFeedBacks = ({
  profile,
  name,
  username,
  comment,
  date,
  consultType,
}) => {
  return (
    <div className={style.DoctorFeedBacks} id="flexColumn">
      <div className={style.cardHead} id="flexSpaceBetween">
        <div id="flexCenter">
          <img src={profile} alt="" className={style.img} />
          <div className={style.nameContainer} id="flexColumn">
            <p className={style.name} id="mediumText">
              {name}
            </p>
            <p className={style.username} id="smallText">
              {username}
            </p>
          </div>
        </div>
        <div id="flexCenter" className={style.starContainer}>
          <iconify-icon
            icon="mdi:star"
            className={style.icon}
            id="mediumText"
          ></iconify-icon>
          <iconify-icon
            icon="mdi:star"
            className={style.icon}
            id="smallText"
          ></iconify-icon>
          <iconify-icon
            icon="mdi:star"
            className={style.icon}
            id="smallText"
          ></iconify-icon>
          <iconify-icon
            icon="mdi:star"
            className={style.icon}
            id="smallText"
          ></iconify-icon>
          <iconify-icon
            icon="mdi:star"
            className={style.icon}
            id="smallText"
          ></iconify-icon>
        </div>
      </div>
      <p className={style.comment} id="smallText">
        {comment}
      </p>

      <p className={style.date} id="smallText">
        {consultType} {date}
      </p>
    </div>
  );
};

export default DoctorFeedBacks;

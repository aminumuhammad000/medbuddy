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
        <div id="flexCenter" style={{ gap: "12px" }}>
          <img src={profile} alt="" className={style.img} />
          <div style={{ marginTop: "-17px" }}>
            <p
              id="mediumText"
              style={{ fontWeight: "700", fontStyle: "regular" }}
            >
              {name}
            </p>
            <p style={{ color: "#30B2FF" }}>{username}</p>
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
            id="mediumText"
          ></iconify-icon>
          <iconify-icon
            icon="mdi:star"
            className={style.icon}
            id="mediumText"
          ></iconify-icon>
          <iconify-icon
            icon="mdi:star"
            className={style.icon}
            id="mediumText"
          ></iconify-icon>
          <iconify-icon
            icon="mdi:star"
            className={style.icon}
            id="mediumText"
          ></iconify-icon>
        </div>
      </div>
      <p id="smallText">{comment}</p>

      <p id="smallText">
        {consultType} {date}
      </p>
    </div>
  );
};

export default DoctorFeedBacks;

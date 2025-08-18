import style from "./SocialCard.module.css";

const SocialMedia = () => {
  return (
    <div className={style.socialCard} id="flexCenter">
      <div className={style.twitter} id="flexCenter">
        <iconify-icon
          icon="mdi:twitter"
          id="smallText"
          className={style.icon}
          style={{ color: "#fff" }}
        ></iconify-icon>
      </div>
      <div className={style.instagram} id="flexCenter">
        <iconify-icon
          icon="mdi:instagram"
          id="smallText"
          className={style.icon}
        />
      </div>
      <div className={style.facebook} id="flexCenter">
        <iconify-icon
          icon="mdi:facebook"
          id="smallText"
          className={style.icon}
        />
      </div>
    </div>
  );
};

export default SocialMedia;

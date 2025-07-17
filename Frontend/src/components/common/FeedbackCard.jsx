import style from "./FeedbackCard.module.css";

const FeedbackCard = ({ profile, name, username, text }) => {
  return (
    <div className={style.FeedbackCard} id="flexCenter">
      <div className={style.profileContainer}>
        <img
          src={profile}
          alt="profile image"
          width={200}
          className={style.blury}
        />
        <img
          src={profile}
          alt="profile image"
          width={200}
          className={style.sideImage}
        />
      </div>

      <div className={style.detailsContainer}>
        <h2 className={style.name}>{name}</h2>
        <p className={style.username}>{username}</p>

        <p className={style.text}>{text}</p>
        <p className={style.star}>
          &#11088; &#11088; &#11088; &#11088; &#11088; <span>4.8/5</span>
        </p>
      </div>
    </div>
  );
};

export default FeedbackCard;

import style from "../common/TeamCard.module.css";
import SocialMedia from "./SocialMedia";

const TeamCard = ({ image, name, role }) => {
  return (
    <div className={style.TeamCard} id="flexColumnCenter">
      <img src={image} alt="profile image" className={style.imgProfile} />
      <h5 className={style.name}>{name}</h5>
      <p className={style.role} id="smallText">
        {role}
      </p>

      <SocialMedia />
    </div>
  );
};

export default TeamCard;

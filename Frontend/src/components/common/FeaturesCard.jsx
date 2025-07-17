import style from "../../components/common/FeaturesCard.module.css";
import { Icon } from "@iconify/react";
const FeaturesCard = ({ icon, title, text, color, bg }) => {
  return (
    <div
      className={style.FeaturesCard}
      id="flexColumnCenter"
      style={{ background: { bg }, color: { color } }}
    >
      <Icon icon={icon} className={style.icon} />
      <h2 className={style.title}>{title}</h2>
      <p className={style.text}>{text}</p>
    </div>
  );
};

export default FeaturesCard;

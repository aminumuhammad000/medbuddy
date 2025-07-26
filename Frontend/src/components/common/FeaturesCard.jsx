import style from "../../components/common/FeaturesCard.module.css";
const FeaturesCard = ({ icon, title, text, bg, color }) => {
  return (
    <div
      className={style.FeaturesCard}
      id="flexColumnCenter"
      style={{ backgroundColor: bg, color: color }}
    >
      <iconify-icon
        icon={icon}
        className={style.icon}
        id="flexCenter"
      ></iconify-icon>
      <h2 className={style.title} style={{ color: color }} id="mediumText">
        {title}
      </h2>
      <p className={style.text} id="smallText">
        {text}
      </p>
    </div>
  );
};

export default FeaturesCard;

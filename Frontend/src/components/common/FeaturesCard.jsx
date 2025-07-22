import style from "../../components/common/FeaturesCard.module.css";
const FeaturesCard = ({ icon, title, text, bg, color }) => {
  return (
    <div
      className={style.FeaturesCard}
      id="flexColumnCenter"
      style={{ backgroundColor: bg, color: color }}
    >
      <iconify-icon icon={icon} className={style.icon}></iconify-icon>
      <h2 className={style.title} style={{ color: color }}>
        {title}
      </h2>
      <p className={style.text}>{text}</p>
    </div>
  );
};

export default FeaturesCard;

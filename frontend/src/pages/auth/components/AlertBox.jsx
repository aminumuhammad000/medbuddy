import style from "./AlertBox.module.css";
const AlertBox = ({ icon, color, message, buttonClick }) => {
  return (
    <div className={style.Error}>
      <div className={style.alertContainer}>
        <div>
          <iconify-icon
            icon={icon}
            className={style.icon}
            style={{ color: color }}
          ></iconify-icon>
        </div>
        <p className={style.message} id="mediumText">
          {message}
        </p>
        <button className={style.button} onClick={buttonClick}>
          ok
        </button>
      </div>
    </div>
  );
};

export default AlertBox;

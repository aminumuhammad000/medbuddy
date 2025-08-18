import style from "../common/Banner.module.css";
import doctor from "../../assets/images/backgrounds/doctor.jpg";
import Group from "../../assets/images/backgrounds/Group 47.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRole } from "../../store/slices/authReducer";

const Banner = () => {
  const dispatch = useDispatch();

  const handleRoleClick = (role) => {
    dispatch(setRole(role));
  };

  return (
    <div className={style.bannerContainer}>
      <div>
        <div>
          <h1 className={style.heading}>
            Your Trusted <br />
            Digital{" "}
            <span className="">
              Health <br />
              Companion
            </span>
          </h1>
        </div>

        <p className={style.text} id="smallText">
          Consult doctors, order verified medications, and track your health all
          in one place Consult doctors, order verified medications, and track
          your health all in one place.
        </p>

        <div className={style.btnContainer}>
          <Link to="/Auth" className={style.link}>
            <button
              style={{ width: "200px", height: "56px" }}
              id="flexCenter"
              onClick={() => handleRoleClick("patient")}
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>

      <img src={Group} alt="icons" className={style.decorationImage} />
      <div className={style.imgContainer}>
        <img src={doctor} alt="banner image" />
      </div>

      <div className={style.ctaContainer} id="flexCenter">
        <Link to="/Auth" className={style.link}>
          <button
            className={style.active}
            onClick={() => handleRoleClick("patient")}
            id="flexCenter"
          >
            I am a patient
          </button>
        </Link>
        <Link to="/Auth" className={style.link}>
          <button onClick={() => handleRoleClick("pharmacist")} id="flexCenter">
            I am a phamacist
          </button>
        </Link>
        <Link to="/Auth" className={style.link}>
          <button onClick={() => handleRoleClick("doctor")} id="flexCenter">
            I am a doctor
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;

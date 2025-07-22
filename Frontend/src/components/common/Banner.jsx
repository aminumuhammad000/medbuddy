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
      <div style={{ width: "676px" }}>
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

        <p className={style.text}>
          Consult doctors, order verified medications, and track your health all
          in one place Consult doctors, order verified medications, and track
          your health all in one place.
        </p>

        <div className={style.btnContainer}>
          <Link to="/Auth">
            <button
              style={{ width: "240px", height: "72px", fontSize: "25px" }}
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>

      <img src={Group} alt="icons" className={style.decorationImage} />
      <div className={style.imgContainer}>
        <img src={doctor} alt="banner image" width={632} height={774} />
      </div>

      <div className={style.ctaContainer} id="flexCenter">
        <Link to="/Auth">
          <button
            className={style.active}
            onClick={() => handleRoleClick("patient")}
            id="mediumText"
          >
            I am a patient
          </button>
        </Link>
        <Link to="/Auth">
          <button onClick={() => handleRoleClick("pharmacist")} id="mediumText">
            I am a phamacist
          </button>
        </Link>
        <Link to="/Auth">
          <button onClick={() => handleRoleClick("doctor")} id="mediumText">
            I am a doctor
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;

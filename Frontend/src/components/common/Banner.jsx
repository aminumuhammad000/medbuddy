import doctor from "../../assets/images/backgrounds/doctor.jpg";
import style from "../common/Banner.module.css";
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

        <p className={style.text}>
          Consult doctors, order verified medications, and track your health all
          in one place Consult doctors, order verified medications, and track
          your health all in one place.
        </p>

        <div className={style.btnConatiner}>
          <Link to="/Login">
            <button>Get Started</button>
          </Link>
        </div>
      </div>

      <img src={Group} alt="icons" className={style.decorationImage} />

      <div className={style.imgContainer}>
        <img src={doctor} alt="banner image" width={632} height={774} />
      </div>

      <div className={style.ctaContainer}>
        <Link to="/Login">
          <button
            className={style.active}
            onClick={() => handleRoleClick("patient")}
          >
            I am a patient
          </button>
        </Link>
        <Link to="/Login">
          <button onClick={() => handleRoleClick("pharmacist")}>
            I am a phamacist
          </button>
        </Link>
        <Link to="/Login">
          <button onClick={() => handleRoleClick("doctor")}>
            I am a doctor
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;

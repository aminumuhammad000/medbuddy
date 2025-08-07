import style from "../Auth.module.css";
import { useSelector } from "react-redux";
import google from "../../../assets/icons/social/google.png";
import facebook from "../../../assets/icons/social/facebook.png";
const GoogleLogin = () => {
  const { authMode } = useSelector((state) => state.auth);
  return (
    <>
      {(authMode === "login" || authMode === "register") && (
        <div className={style.loginWith} id="flexCenter">
          <div>
            <img src={google} alt="google icon" className={style.Google} />
          </div>
          <div>
            <img
              src={facebook}
              alt="facebook icon"
              className={style.Facebook}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default GoogleLogin;

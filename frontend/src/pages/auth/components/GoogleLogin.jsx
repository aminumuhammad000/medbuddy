import { useDispatch, useSelector } from "react-redux";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import style from "../Auth.module.css";
import google from "../../../assets/icons/social/google.png";
import facebook from "../../../assets/icons/social/facebook.png";

import { loginWithGoogle } from "../../../store/slices/authReducer";

const GoogleLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usertype =
    useSelector((state) => state.auth.user?.usertype) || "patient";

  const login = useGoogleLogin({
    flow: "auth-code",
    onSuccess: (tokenResponse) => {
      // tokenResponse contains code or access_token
      console.log("Google Login Success:", tokenResponse);

      // Send this token/code to backend for verification
      dispatch(
        loginWithGoogle({
          credential: tokenResponse.code, // or tokenResponse.access_token
          usertype,
        })
      )
        .unwrap()
        .then((res) => {
          if (!res.exists) {
            navigate("/auth");
          } else {
            switch (res.user.usertype) {
              case "patient":
                navigate("/patient/dashboard");
                break;
              case "doctor":
                navigate("/doctor/dashboard");
                break;
              case "pharmacist":
                navigate("/pharmacist/dashboard");
                break;
              case "admin":
                navigate("/admin/dashboard");
                break;
              default:
                navigate("/");
            }
          }
        })
        .catch((err) => {
          console.error("Google login error", err);
        });
    },
    onError: () => {
      console.log("Google login failed");
    },
  });

  const { authMode } = useSelector((state) => state.auth);
  return (
    <>
      {(authMode === "login" || authMode === "register") && (
        <div className={style.loginWith} id="flexCenter">
          <button onClick={() => login()}>
            <img src={google} alt="google icon" className={style.Google} />
          </button>
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

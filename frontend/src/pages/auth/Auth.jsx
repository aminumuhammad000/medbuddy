import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import style from "./Auth.module.css";
import {
  setRole,
  setAuthMode,
  registerUser,
  loginUser,
  forgotPassword,
  verifyOtp,
  updatePassword,
  clearStatus,
  resendOtp,
} from "../../store/slices/authReducer";

import frame from "../../assets/images/backgrounds/frame.png";
import logo2 from "../../assets/images/logos/logo2.png";

import { Link, useNavigate } from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import Register from "./components/Register";
import Otp from "./components/Otp";
import ForgetPassword from "./components/ForgetPassword";
import CreateNewPassword from "./components/CreateNewPassword";
import Loading from "./components/Loading";
import GoogleLogin from "./components/GoogleLogin";
import AlertContainer from "./components/AlertContainer";

const Login = () => {
  const [otpEmail, setOtpEmail] = useState("");
  const navigate = useNavigate();
  const { user, authMode, loading, error, success, isLogged } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const shouldRedirect = useRef(false);

  useEffect(() => {
    dispatch(clearStatus());
  }, [authMode, dispatch]);

  useEffect(() => {
    if (!success) return;

    switch (authMode) {
      case "login":
        if (user?.usertype === "patient") navigate("/patient/dashboard");
        else if (user?.usertype === "pharmacist")
          navigate("/pharmacist/dashboard");
        else if (user?.usertype === "doctor") navigate("/doctor/dashboard");
        else if (user?.usertype === "admin") navigate("/admin/dashboard");
        else navigate("/dashboard");
        break;

      case "register":
        shouldRedirect.current = true;
        break;

      case "forgot":
        dispatch(clearStatus());
        dispatch(setAuthMode("otp"));
        break;

      case "setPassword":
        dispatch(clearStatus());
        dispatch(setAuthMode("login")); // redirect back to login page
        break;

      default:
        break;
    }
  }, [success, authMode, user, navigate, dispatch]);

  const handleRoleClick = (role) => {
    dispatch(setRole(role));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    dispatch(clearStatus());
    const form = e.target;

    if (authMode === "forgot") {
      const email = form.email.value;
      setOtpEmail(email);
      dispatch(forgotPassword({ email }));
      return;
    }

    if (authMode === "otp") {
      const otp = form.otp.value;
      dispatch(verifyOtp({ otp, email: otpEmail })); // Pass both otp and email
      return;
    }
    if (authMode === "setPassword") {
      const email = form.email.value;
      const password = form.password.value;
      const confirmPassword = form.confirmPassword.value;

      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      dispatch(updatePassword({ email, password }));
      return;
    }

    if (authMode === "login") {
      const email = form.email.value;
      const password = form.password.value;
      dispatch(loginUser({ email, password }));
      return;
    }

    if (authMode === "register") {
      const payload = {
        usertype: user?.usertype,
        name: form.name?.value || "",
        email: form.email.value,
        phone: form.phone.value,
        password: form.password.value,
        nhis_id: form.nhis?.value || "",
        license_number: form.license?.value || "",
      };
      dispatch(registerUser(payload));
      return;
    }
  };

  const handleResendOtp = (email) => {
    dispatch(resendOtp({ email }));
  };

  return (
    <div className={style.Login} id="flexCenter">
      <div className={style.decoration}>
        <svg
          width="147"
          height="265"
          viewBox="0 0 147 265"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M125.212 176.187C53.997 191.866 42.8737 178.823 39.166 174.476C35.4582 170.128 24.335 157.086 51.0573 89.2379M125.212 176.187C98.49 244.036 105.895 252.74 113.31 261.435M125.212 176.187C151.935 108.339 140.811 95.297 137.104 90.9495C133.396 86.6021 122.273 73.5596 51.0573 89.2379M51.0573 89.2379C77.7796 21.3899 70.3641 12.6949 62.9486 3.99998M51.0573 89.2379L15.6067 95.8917C-23.1259 101.458 -29.0583 94.5024 -35 87.5356"
            stroke="#40E0D0"
            stroke-width="7"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <Link to="/">
        <div className={style.logoContainer}>
          <img src={logo2} alt="logo" />
        </div>
      </Link>
      {authMode === "forgot" && (
        <button
          className={style.backBtn}
          id="flexCenter"
          onClick={() => dispatch(setAuthMode("login"))}
        >
          <iconify-icon icon="uil:arrow-left"></iconify-icon>
        </button>
      )}
      {authMode === "otp" && (
        <button
          className={style.backBtn}
          id="flexCenter"
          onClick={() => dispatch(setAuthMode("forgot"))}
        >
          <iconify-icon icon="typcn:arrow-left"></iconify-icon>
        </button>
      )}

      <div className={style.Container} id="flexColumn">
        <h2 className={style.Signup}>
          {authMode === "login"
            ? "Login"
            : authMode === "register"
            ? "Sign Up"
            : authMode === "forgot"
            ? "Forget Password"
            : authMode === "otp"
            ? "Enter OTP"
            : "Create a new Password"}
        </h2>
        <img src={frame} alt="" />

        {loading && <Loading />}

        <AlertContainer />

        {authMode === "register" && (
          <div className={style.selectContainer} id="flexCenter">
            <button
              className={user?.usertype === "patient" ? style.active : ""}
              onClick={() => handleRoleClick("patient")}
              type="button"
              id="Text25"
            >
              Join as a patient
            </button>
            <button
              className={user?.usertype === "pharmacist" ? style.active : ""}
              onClick={() => handleRoleClick("pharmacist")}
              type="button"
              id="Text25"
            >
              Join as a pharmacist
            </button>
            <button
              className={user?.usertype === "doctor" ? style.active : ""}
              onClick={() => handleRoleClick("doctor")}
              type="button"
              id="Text25"
            >
              Join as a doctor
            </button>
          </div>
        )}

        {/* form start here  */}
        <div className={style.form} id="flexCenter">
          <form onSubmit={handleFormSubmit} id="flexColumn">
            {authMode === "register" && <Register />}

            {authMode === "login" && <LoginComponent />}

            {authMode === "forgot" && <ForgetPassword />}

            {authMode === "otp" && (
              <Otp email={otpEmail} onResend={handleResendOtp} />
            )}
            {authMode === "setPassword" && (
              <CreateNewPassword email={otpEmail} />
            )}

            <button
              type="submit"
              className={style.SignupBtn}
              disabled={loading}
            >
              <h3 id="flexCenter">
                {" "}
                {loading
                  ? "Please wait..."
                  : authMode === "login"
                  ? "Login"
                  : authMode === "register"
                  ? "Sign up"
                  : authMode === "forgot"
                  ? "Reset password"
                  : authMode === "setPassword"
                  ? "Change Password"
                  : "Continue"}{" "}
                <span style={{ marginTop: "10px" }}>
                  <iconify-icon icon="formkit:arrowright"></iconify-icon>
                </span>
              </h3>
            </button>

            <GoogleLogin />

            {authMode === "login" ? (
              <>
                <p className={style.alreadyHaveAccount}>
                  Don’t have an account?{" "}
                  <span
                    className={style.sign}
                    onClick={() => {
                      dispatch(setAuthMode("register"));
                      dispatch(setRole("patient"));
                    }}
                  >
                    Sign up
                  </span>
                </p>

                <p className={style.alreadyHaveAccount}>
                  <span onClick={() => dispatch(setAuthMode("forgot"))}>
                    Forget Password?
                  </span>
                </p>
              </>
            ) : (
              <p className={style.alreadyHaveAccount}>
                Already have an account?{" "}
                <span
                  className={style.sign}
                  onClick={() => dispatch(setAuthMode("login"))}
                >
                  Sign in
                </span>
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

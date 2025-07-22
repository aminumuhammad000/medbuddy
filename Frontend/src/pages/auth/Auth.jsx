import { useSelector, useDispatch } from "react-redux";
import { setRole, login, setAuthMode } from "../../store/slices/authReducer";
import style from "./Auth.module.css";
import logo2 from "../../assets/images/logos/logo2.png";
import google from "../../assets/icons/social/google.png";
import facebook from "../../assets/icons/social/facebook.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { useState } from "react";
import LoginComponent from "./components/LoginComponent";
import Register from "./components/Register";
import Otp from "./components/Otp";
import ForgetPassword from "./components/ForgetPassword";
import CreateNewPassword from "./components/CreateNewPassword";
import frame from "../../assets/images/backgrounds/frame.png";
const Login = () => {
  const navigate = useNavigate();
  const { user, authMode } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRoleClick = (role) => {
    dispatch(setRole(role));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const form = e.target;

    try {
      if (authMode === "forgot") {
        // Implement forgot password API call here if needed
        dispatch(setAuthMode("otp"));
        setLoading(false);
        return;
      }

      if (authMode === "otp") {
        // Implement OTP verification API call here if needed
        dispatch(setAuthMode("setPassword"));
        setLoading(false);
        return;
      }

      if (authMode === "setPassword") {
        // Implement password reset API call here if needed
        dispatch(setAuthMode("login"));
        setLoading(false);
        return;
      }

      if (authMode === "login") {
        const email = form.email.value;
        const password = form.password.value;
        const res = await axios.post("/auth/login", { email, password });
        dispatch(login(res.data.user));
        setLoading(false);

        // Redirect based on role
        const role = res.data.user.role;
        if (role === "patient") navigate("/patient/dashboard");
        else if (role === "pharmacist") navigate("/pharmacist/dashboard");
        else if (role === "doctor") navigate("/doctor/dashboard");
        else if (role === "admin") navigate("/admin/dashboard");
        else navigate("/dashboard"); // fallback
        return;
      }

      if (authMode === "register") {
        const payload = {
          name: form.name.value,
          email: form.email.value,
          phone: form.phone.value,
          role: user.role,
          password: form.password.value,
          nhis: form.nhis?.value || "",
          licenseNo: form.license?.value || "",
        };
        const res = await axios.post("/auth/register", payload);
        dispatch(login(res.data.user));
        navigate("/dashboard");
        setLoading(false);
        return;
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
      setLoading(false);
    }
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

        {error && <div className={style.error}>{error}</div>}
        {loading && <div className={style.loading}>Loading...</div>}

        {authMode === "register" && (
          <div className={style.selectContainer} id="flexCenter">
            <button
              className={user.role === "patient" ? style.active : ""}
              onClick={() => handleRoleClick("patient")}
              type="button"
              id="Text25"
            >
              Join as a patient
            </button>
            <button
              className={user.role === "pharmacist" ? style.active : ""}
              onClick={() => handleRoleClick("pharmacist")}
              type="button"
              id="Text25"
            >
              Join as a pharmacist
            </button>
            <button
              className={user.role === "doctor" ? style.active : ""}
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

            {authMode === "otp" && <Otp />}

            {authMode === "setPassword" && <CreateNewPassword />}

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

            {(authMode === "login" || authMode === "register") && (
              <div className={style.loginWith} id="flexCenter">
                <div>
                  <img
                    src={google}
                    alt="google icon"
                    className={style.Google}
                  />
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

            {authMode === "login" ? (
              <>
                <p className={style.alreadyHaveAccount}>
                  Don’t have an account?{" "}
                  <span
                    className={style.sign}
                    onClick={() => dispatch(setAuthMode("register"))}
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
            ) : authMode === "otp" ? (
              <p className={style.alreadyHaveAccount}>
                <span>Resend code</span>
              </p>
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

import { useSelector, useDispatch } from "react-redux";
import { setRole, login, setAuthMode } from "../../store/slices/authReducer";
import style from "./Auth.module.css";
import logo2 from "../../assets/images/logos/logo2.png";
import google from "../../assets/icons/social/google.png";
import facebook from "../../assets/icons/social/facebook.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { useState } from "react";
import PasswordInput from "./components/PasswordInput";

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
    <div className={style.Login}>
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

      <div className={style.Container}>
        <h1 className={style.Signup}>
          {authMode === "login"
            ? "Login"
            : authMode === "register"
            ? "Sign Up"
            : authMode === "forgot"
            ? "Forget Password"
            : authMode === "otp"
            ? "Enter OTP"
            : "Create a new Password"}
        </h1>

        {error && <div className={style.error}>{error}</div>}
        {loading && <div className={style.loading}>Loading...</div>}

        {authMode === "register" && (
          <div className={style.selectContainer}>
            <button
              className={user.role === "patient" ? style.active : ""}
              onClick={() => handleRoleClick("patient")}
              type="button"
            >
              Join as a patient
            </button>
            <button
              className={user.role === "pharmacist" ? style.active : ""}
              onClick={() => handleRoleClick("pharmacist")}
              type="button"
            >
              Join as a pharmacist
            </button>
            <button
              className={user.role === "doctor" ? style.active : ""}
              onClick={() => handleRoleClick("doctor")}
              type="button"
            >
              Join as a doctor
            </button>
          </div>
        )}

        <div className={style.form}>
          <form onSubmit={handleFormSubmit}>
            {authMode === "register" && (
              <>
                <div className={style.name}>
                  <label htmlFor="name">Full name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className={style.emailConatiner}>
                  <div className={style.email}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your Email address"
                      required
                    />
                  </div>

                  <div className={style.phone}>
                    <label htmlFor="phone">Phone number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your Phone number"
                      required
                    />
                  </div>
                </div>
              </>
            )}

            {(authMode === "login" || authMode === "forgot") && (
              <>
                <p className={style.headingText}>
                  {authMode === "forgot"
                    ? "Enter the email address you used to register MEDBUDDY"
                    : ""}
                </p>

                <div className={style.email}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email address"
                    required
                  />
                </div>
              </>
            )}

            {(authMode === "login" ||
              authMode === "setPassword" ||
              authMode === "register") && (
              <>
                <div className={style.password}>
                  <PasswordInput />
                </div>

                {authMode === "setPassword" && <PasswordInput />}
              </>
            )}

            {authMode === "login" && (
              <div className={style.check}>
                <input type="checkbox" />
                <span>Remember me</span>
              </div>
            )}

            {authMode === "otp" && (
              <>
                <p className={style.headingText}>
                  {authMode === "otp"
                    ? "We have sent an OTP code to your email. Enter the OTP code below to verify."
                    : ""}
                </p>

                <div className={style.otp}>
                  {[0, 1, 2, 3].map((i) => (
                    <input
                      key={i}
                      type="text"
                      name="otp"
                      required
                      min="1"
                      maxLength={"1"}
                      autoFocus={i === 0}
                    />
                  ))}
                </div>
                <p className={style.alreadyHaveAccount}>
                  <span>Resend OTP code</span>
                </p>
              </>
            )}
            {authMode === "register" && (
              <>
                {user?.role === "patient" && (
                  <div className={style.nhis}>
                    <label htmlFor="nhis">NHIS (optional)</label>
                    <input
                      type="text"
                      name="nhis"
                      placeholder="Enter your NHIS"
                    />
                  </div>
                )}

                {user?.role === "doctor" && (
                  <div className={style.nhis}>
                    <label htmlFor="license">License Number</label>
                    <input
                      type="text"
                      name="license"
                      placeholder="Enter your License Number"
                    />
                  </div>
                )}

                <div className={style.check}>
                  <input type="checkbox" required />
                  <span>I accept the terms & conditions and privacy</span>
                </div>
              </>
            )}

            <button
              type="submit"
              className={style.SignupBtn}
              disabled={loading}
            >
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
              &#10230;
            </button>

            {(authMode === "login" || authMode === "register") && (
              <div className={style.loginWith}>
                <div className={style.Google}>
                  <img src={google} alt="google icon" />
                </div>
                <div className={style.Facebook}>
                  <img src={facebook} alt="facebook icon" />
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
                  Forget my Password?{" "}
                  <span onClick={() => dispatch(setAuthMode("forgot"))}>
                    Login with Email Link
                  </span>
                </p>
              </>
            ) : authMode === "forgot" || authMode === "otp" ? (
              ""
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

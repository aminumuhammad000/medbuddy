import { useSelector, useDispatch } from "react-redux";
import { setRole, login, setAuthMode } from "../../features/auth/authReducer";
import style from "./Login.module.css";
import logo2 from "../../assets/images/logos/logo2.png";
import google from "../../assets/icons/social/google.png";
import facebook from "../../assets/icons/social/facebook.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { user, authMode } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleRoleClick = (role) => {
    dispatch(setRole(role));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if (authMode === "forgot") {
      const email = form.email.value;
      // Simulate OTP sending
      dispatch(setAuthMode("otp"));
      return;
    }

    if (authMode === "otp") {
      console.log("new Password mode");
      dispatch(setAuthMode("setPassword"));
      return;
    }

    if (authMode === "setPassword") {
      dispatch(setAuthMode("login"));
      return;
    }

    const email = form.email.value;
    const password = form.password.value;

    dispatch(login({ email }));

    // Redirect after successful login
    navigate("/dashboard"); // or wherever
  };

  return (
    <div className={style.Login}>
      <Link to="/">
        <div className={style.logoContainer}>
          <img src={logo2} alt="logo" width={100} />
        </div>
      </Link>

      <div className={style.Container}>
        <h1 className={style.Signup}>
          {authMode === "login"
            ? "Login"
            : authMode === "Sign Up"
            ? "Sign Up"
            : authMode === "forgot"
            ? "Forget Password"
            : authMode === "otp"
            ? "Enter OTP"
            : "Create a new PAssword"}
        </h1>

        {authMode === "register" && (
          <div className={style.selectConatiner}>
            <button
              className={user.role === "patient" ? style.active : ""}
              onClick={() => handleRoleClick("patient")}
            >
              Join as a patient
            </button>
            <button
              className={user.role === "pharmacist" ? style.active : ""}
              onClick={() => handleRoleClick("pharmacist")}
            >
              Join as a pharmacist
            </button>
            <button
              className={user.role === "doctor" ? style.active : ""}
              onClick={() => handleRoleClick("doctor")}
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

            {(authMode === "login" || authMode === "setPassword") && (
              <>
                <div className={style.password}>
                  <label htmlFor="password">
                    {authMode === "login" ? "password" : "New Password"}
                  </label>
                  <input
                    type="password"
                    name="password"
                    required
                    pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}"
                    placeholder="Enter your Password"
                    title="Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character, and be at least 8 characters long."
                  />
                </div>

                {authMode === "setPassword" && (
                  <div className={style.password}>
                    <label htmlFor="password">Comfirm password</label>
                    <input
                      type="password"
                      name="password"
                      required
                      pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}"
                      placeholder="Enter your Password"
                      title="Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character, and be at least 8 characters long."
                    />
                  </div>
                )}
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
                    ? "We have sent an OTP code to your email mus****06@gmail.com Enter the OTP code below to verify."
                    : ""}
                </p>

                <div className={style.otp}>
                  <input
                    type="text"
                    name="otp"
                    required
                    min="1"
                    maxLength={"1"}
                    autoFocus={true}
                  />

                  <input
                    type="text"
                    name="otp"
                    required
                    min="1"
                    maxLength={"1"}
                  />

                  <input
                    type="text"
                    name="otp"
                    required
                    min="1"
                    maxLength={"1"}
                  />

                  <input
                    type="text"
                    name="otp"
                    required
                    min="1"
                    maxLength={"1"}
                  />
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

            <button type="submit" className={style.SignupBtn}>
              {authMode === "login"
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

import style from "../Auth.module.css";
import PasswordInput from "./PasswordInput";
const Login = () => {
  return (
    <>
      <div className={style.email} id="flexColumn">
        <label htmlFor="email" id="mediumText">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your Email address"
          required
          id="mediumText"
        />
        <PasswordInput />

        <div className={style.check}>
          <input type="checkbox" />
          <span id="mediumText">Remember me</span>
        </div>
      </div>
    </>
  );
};

export default Login;

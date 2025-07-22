import style from "../Auth.module.css";
import DocInput from "./DocInput";
import PasswordInput from "./PasswordInput";
import { useSelector } from "react-redux";
const Register = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <div className={style.name} id="flexColumn">
        <label htmlFor="name" id="mediumText">
          Full name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          required
          id="mediumText"
        />
      </div>
      <div className={style.emailContainer}>
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
        </div>

        <div className={style.phone} id="flexColumn">
          <label htmlFor="phone" id="mediumText">
            Phone number
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your Phone number"
            required
            id="mediumText"
          />
        </div>
      </div>
      <div className={style.password}>
        <PasswordInput label={"Password"} />
      </div>

      <>
        {user?.role === "patient" ? (
          <DocInput
            label="NHIS (optional)"
            type={"text"}
            placeholder={"Enter your NHIS ID"}
          />
        ) : user?.role === "doctor" ? (
          <DocInput
            label="License Number"
            type={"file"}
            placeholder={"Upload your license here"}
          />
        ) : (
          <DocInput
            label="License Number"
            type={"file"}
            placeholder={"Upload your license here"}
          />
        )}
      </>

      <div className={style.check} id="mediumText">
        <input type="checkbox" required />
        <span>I accept the terms & conditions and privacy</span>
      </div>
    </>
  );
};

export default Register;

import { useState } from "react";
import style from "./PasswordInput.module.css";

const PasswordInput = ({
  label = "Password",
  placeholder = "Enter a password",
}) => {
  const [show, setShow] = useState(false);
  const togglePasswordVisibility = () => {
    setShow(!show);
  };
  const icon = show ? "solar:eye-outline" : "quill:eye-closed";
  const passwordType = show ? "text" : "password";

  return (
    <div className={style.UpdatePassword} id="flexColumn">
      <label htmlFor="Password" id="mediumText">
        {label}
      </label>
      <div className={style.passwordContainer}>
        <input
          type={passwordType}
          name="Password"
          placeholder={placeholder}
          className={style.pass}
        />
        <iconify-icon
          icon={icon}
          onClick={togglePasswordVisibility}
          className={style.PassIcon}
        ></iconify-icon>
      </div>
    </div>
  );
};

export default PasswordInput;

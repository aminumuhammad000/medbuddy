import { useState } from "react";
import style from "./PasswordInput.module.css";

const PasswordInput = ({
  label = "password",
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
      <label htmlFor="password" id="mediumText">
        {label}
      </label>
      <div className={style.passwordContainer}>
        <input
          type={passwordType}
          name="password"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$"
          title="Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
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

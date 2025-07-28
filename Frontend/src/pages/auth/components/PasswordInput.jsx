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
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$
"
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

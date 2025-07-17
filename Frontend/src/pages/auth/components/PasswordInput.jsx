import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import style from "./PasswordInput.module.css";

const PasswordInput = () => {
  const [show, setShow] = useState(true);
  const togglePasswordVisibility = () => {
    setShow(!show);
  };
  const icon = show ? faEye : faEyeSlash;
  const passwordType = show ? "text" : "password";

  return (
    <div className={style.UpdatePassword}>
      <label htmlFor="Password">Password</label>
      <div className={style.passwordContainer}>
        <input
          type={passwordType}
          name="Password"
          placeholder="password"
          className={style.pass}
        />
        <FontAwesomeIcon
          icon={icon}
          onClick={togglePasswordVisibility}
          className={style.PassIcon}
        />
      </div>
    </div>
  );
};

export default PasswordInput;

import { useRef, useState, useEffect } from "react";
import style from "../Auth.module.css";

const Otp = ({ email, onResend }) => {
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const [otpDigits, setOtpDigits] = useState(["", "", "", ""]);

  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleResend = () => {
    setTimer(60);
    if (onResend) onResend(email);
  };

  const handleChange = (e, idx) => {
    const value = e.target.value.replace(/\D/, ""); // Only digits
    if (value.length <= 1) {
      const newDigits = [...otpDigits];
      newDigits[idx] = value;
      setOtpDigits(newDigits);
      if (value && idx < inputRefs.length - 1) {
        inputRefs[idx + 1].current.focus();
      }
    }
  };

  // Combine OTP digits for the hidden input
  const combinedOtp = otpDigits.join("");

  return (
    <>
      <p
        className={style.headingText}
        id="text30"
        style={{ textAlign: "center", width: "842px" }}
      >
        We have sent an OTP code to {email}. <br />
        Enter the OTP code below to verify.
      </p>

      <div className={style.otp} id="flexCenter">
        {[0, 1, 2, 3].map((i) => (
          <input
            className={style.otpInput}
            key={i}
            type="text"
            name={`otp${i}`}
            required
            maxLength={1}
            autoFocus={i === 0}
            id="flexCenter"
            pattern="\d+"
            ref={inputRefs[i]}
            value={otpDigits[i]}
            onChange={(e) => handleChange(e, i)}
          />
        ))}
        {/* Hidden input for combined OTP */}
        <input type="hidden" name="otp" value={combinedOtp} />
      </div>

      <p className={style.alreadyHaveAccount}>
        {timer > 0 ? (
          <span>Resend code after {timer}s</span>
        ) : (
          <span
            style={{ cursor: "pointer", color: "#1771b7" }}
            onClick={handleResend}
          >
            Resend code
          </span>
        )}
      </p>
    </>
  );
};

export default Otp;

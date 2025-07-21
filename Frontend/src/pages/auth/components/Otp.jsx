import style from "../Auth.module.css";
const Otp = () => {
  return (
    <>
      <p
        className={style.headingText}
        id="text30"
        style={{ textAlign: "center", width: "842px" }}
      >
        {" "}
        We have sent an OTP code to your email. Enter the OTP code below to
        verify.
      </p>

      <div className={style.otp} id="flexCenter">
        {[0, 1, 2, 3].map((i) => (
          <input
            key={i}
            type="text"
            name="otp"
            required
            min="1"
            maxLength={"1"}
            autoFocus={i === 0}
            id="flexCenter"
            pattern="\d+"
          />
        ))}
      </div>
    </>
  );
};

export default Otp;

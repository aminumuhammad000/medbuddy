import style from "../Auth.module.css";

const ForgetPassword = () => {
  return (
    <>
      <h3 className={style.headingText}>
        Enter the email address you used to register MEDBUDDY
      </h3>

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
    </>
  );
};

export default ForgetPassword;

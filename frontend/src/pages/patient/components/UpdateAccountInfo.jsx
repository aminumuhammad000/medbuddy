import style from "./UpdatesPersonalInfo.module.css";
import Password from "../../auth/components/PasswordInput";

const UpdateAccountInfo = () => {
  return (
    <div className={style.UpdatesPersonalInfo}>
      <h1>Account & Preference</h1>
      <form action="">
        <div className={style.fullName}>
          <div>
            <label htmlFor="Language Preference" id="mediumText">
              Language Preference
            </label>
            <input
              type="text"
              name="Language Preference"
              placeholder="Langauge Preference"
            />
          </div>
          <div>
            <label htmlFor="Communication Preference" id="mediumText">
              Communication Preference
            </label>
            <input
              type="text"
              name="Communication Preference"
              placeholder="Communication Preference"
            />
          </div>
        </div>
        <br />
        <div style={{ width: "50%" }}>
          <Password />
        </div>
      </form>
    </div>
  );
};

export default UpdateAccountInfo;

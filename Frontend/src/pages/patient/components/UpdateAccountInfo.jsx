import style from "./UpdatesPersonalInfo.module.css";
const UpdateAccountInfo = () => {
  return (
    <div className={style.UpdatesPersonalInfo}>
      <h1>Account & Preference</h1>
      <form action="">
        <div className={style.fullName}>
          <div>
            <label htmlFor="Language Preference">Language Preference</label>
            <input type="text" name="Language Preference" />
          </div>
          <div>
            <label htmlFor="Communication Preference">
              Communication Preference
            </label>
            <input type="text" name="Communication Preference" />
          </div>
        </div>

        <div className={style.UpdateVaccine}>
          <label htmlFor="Password">Password</label>
          <input type="password" name="Password" />
        </div>
      </form>
    </div>
  );
};

export default UpdateAccountInfo;

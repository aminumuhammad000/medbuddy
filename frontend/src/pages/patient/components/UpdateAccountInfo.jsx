import style from "./UpdatesPersonalInfo.module.css";
import Password from "../../auth/components/PasswordInput";
import { useSelector } from "react-redux";

const UpdateAccountInfo = ({ formData = {}, handleChange }) => {
  const { user } = useSelector((state) => state.auth);

  // Determine the default values from backend if formData is empty
  const languagePref =
    formData.language_preference ||
    user?.profile?.language_preference ||
    "english";
  const communicationPref =
    formData.communication_preference ||
    user?.profile?.communication_preference ||
    "email";

  return (
    <div className={style.UpdatesPersonalInfo} id="flexColumn">
      <h1>Account & Preference</h1>

      <div className={style.fullName}>
        <div>
          <label htmlFor="language_preference" id="mediumText">
            Language Preference
          </label>
          <select
            name="language_preference"
            id="language_preference"
            value={languagePref}
            onChange={handleChange}
          >
            <option value="english">English</option>
            <option value="french">French</option>
            <option value="spanish">Spanish</option>
            <option value="hausa">Hausa</option>
            <option value="yoruba">Yoruba</option>
          </select>
        </div>

        <div>
          <label htmlFor="communication_preference" id="mediumText">
            Communication Preference
          </label>
          <select
            name="communication_preference"
            id="communication_preference"
            value={communicationPref}
            onChange={handleChange}
          >
            <option value="email">Email/ Push notification</option>
            <option value="sms">SMS</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="phone">Phone Call</option>
          </select>
        </div>
      </div>

      <br />

      <div style={{ width: "50%" }}>
        <Password />
      </div>
    </div>
  );
};

export default UpdateAccountInfo;

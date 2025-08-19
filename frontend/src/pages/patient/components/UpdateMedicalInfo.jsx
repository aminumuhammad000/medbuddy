import style from "./UpdatesPersonalInfo.module.css";
import { useSelector } from "react-redux";

const UpdateMedicalInfo = ({ formData = {}, handleChange }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className={style.UpdatesPersonalInfo} id="flexColumn">
      <h1>Medical Information</h1>

      <>
        <div className={style.fullName}>
          <div>
            <label htmlFor="known_allergies" id="mediumText">
              Known Allergies
            </label>
            <input
              type="text"
              name="known_allergies"
              id="known_allergies"
              value={formData.known_allergies}
              onChange={handleChange}
              placeholder={
                user?.medical_info?.known_allergies || "Known Allergies"
              }
            />
          </div>
          <div>
            <label htmlFor="chronic_conditions" id="mediumText">
              Chronic Conditions
            </label>
            <input
              type="text"
              name="chronic_conditions"
              id="chronic_conditions"
              value={formData.chronic_conditions}
              onChange={handleChange}
              placeholder={
                (user?.medical_info?.chronic_conditions || []).join(", ") ||
                "Chronic Conditions"
              }
            />
          </div>
        </div>

        <div className={style.Email}>
          <div>
            <label htmlFor="current_medications" id="mediumText">
              Current Medications
            </label>
            <input
              type="text"
              name="current_medications"
              id="current_medications"
              value={formData.current_medications}
              onChange={handleChange}
              placeholder={
                (user?.medical_info?.current_medications || []).join(", ") ||
                "Current Medications"
              }
            />
          </div>
          <div>
            <label htmlFor="blood_type" id="mediumText">
              Blood Type
            </label>
            <input
              type="text"
              name="blood_type"
              id="blood_type"
              value={formData.blood_type}
              onChange={handleChange}
              placeholder={user?.medical_info?.blood_type || "Blood Type"}
            />
          </div>
        </div>

        <div
          className={style.UpdateVaccine}
          style={{ marginTop: "30px", width: "50%" }}
        >
          <label htmlFor="vaccination_record" id="mediumText">
            Vaccination Record
          </label>
          <input
            type="text"
            name="vaccination_record"
            id="vaccination_record"
            value={formData.vaccination_record}
            onChange={handleChange}
            placeholder={
              (user?.medical_info?.vaccination_record || []).join(", ") ||
              "Vaccination Record"
            }
          />
        </div>
      </>
    </div>
  );
};

export default UpdateMedicalInfo;

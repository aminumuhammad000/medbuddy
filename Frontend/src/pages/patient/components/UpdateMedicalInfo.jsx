import style from "./UpdatesPersonalInfo.module.css";

const UpdateMedicalInfo = () => {
  return (
    <div className={style.UpdatesPersonalInfo}>
      <h1>Medical Information</h1>
      <form action="">
        <div className={style.fullName}>
          <div>
            <label htmlFor="Known Allergies">Known Allergies</label>
            <input type="text" name="Known Allergies" />
          </div>
          <div>
            <label htmlFor="Chronic Condition">Chronic Condition</label>
            <input type="text" name="Chronic Condition" />
          </div>
        </div>

        <div className={style.Email}>
          <div>
            <label htmlFor="Current Medication">Current Medication</label>
            <input type="text" name="Current Medication" />
          </div>
          <div>
            <label htmlFor="Blood Type">Blood Type</label>
            <input type="text" name="Blood Type" />
          </div>
        </div>

        <div className={style.UpdateVaccine}>
          <label htmlFor="Vaccination Record ">Vaccination Record </label>
          <input type="text" name="Vaccination Record " />
        </div>
      </form>
    </div>
  );
};

export default UpdateMedicalInfo;

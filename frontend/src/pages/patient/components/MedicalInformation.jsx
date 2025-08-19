import style from "./PersonalInformation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setPage, setInformation } from "../../../store/slices/patientNavSlice";

const MedicalInformation = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const gotoUpdate = () => {
    dispatch(setPage("updates"));
    dispatch(setInformation("medical"));
  };
  return (
    <div>
      <div className={style.personalInformation}>
        <div className={style.heading} id="flexBetween">
          <h2>Medical Information</h2>
          <button
            className={style.editButton}
            onClick={gotoUpdate}
            id="flexCenter"
          >
            Edit{" "}
            <span>
              <iconify-icon icon="iconamoon:edit-light"></iconify-icon>
            </span>
          </button>
        </div>

        <div className={style.infoTable}>
          <table>
            <tr>
              <td className={style.td}>Known Allergies</td>
              <td className={style.td}>Chronic Conditions</td>
            </tr>
            <tr>
              <td>{user?.medical_info?.known_allergies || "N/A"}</td>
              <td>{user?.medical_info?.chronic_conditions || "N/A"}</td>
            </tr>
            <br />

            <tr>
              <td>Current Medications</td>
              <td>Blood Type</td>
            </tr>
            <tr>
              <td className={style.td}>
                {user?.medical_info?.current_medications || "N/A"}
              </td>
              <td className={style.td}>
                {user?.medical_info?.blood_type || "N/A"}
              </td>
            </tr>
            <br />
            <tr>
              <td>Vaccination Records</td>
            </tr>
            <br />
            <tr>
              <td className={style.td}>
                {user?.medical_info?.vaccination_record || "N/A"}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MedicalInformation;

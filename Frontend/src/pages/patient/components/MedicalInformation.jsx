import style from "./PersonalInformation.module.css";
import { useDispatch } from "react-redux";
import { setPage, setInformation } from "../../../store/slices/patientNavSlice";

const MedicalInformation = () => {
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
              <td>Peanut allergy</td>
              <td>Diabetes</td>
            </tr>
            <br />

            <tr>
              <td>Current Medications</td>
              <td>Blood Type</td>
            </tr>
            <tr>
              <td className={style.td}>Metformin</td>
              <td className={style.td}>O+</td>
            </tr>
            <br />
            <tr>
              <td>Vaccination Records</td>
              {/* <td>Male</td> */}
            </tr>
            <br />
            <tr>
              <td className={style.td}>Tetanus</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MedicalInformation;

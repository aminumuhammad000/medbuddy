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
        <div className={style.heading}>
          <h2>Medical Information</h2>
          <button className={style.editButton} onClick={gotoUpdate}>
            Edit{" "}
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.730632 23.9173H23.264C23.4408 23.9173 23.6103 23.847 23.7354 23.722C23.8604 23.597 23.9306 23.4274 23.9306 23.2506C23.9306 23.0738 23.8604 22.9042 23.7354 22.7792C23.6103 22.6542 23.4408 22.5839 23.264 22.5839H0.730632C0.553821 22.5839 0.384251 22.6542 0.259227 22.7792C0.134203 22.9042 0.0639648 23.0738 0.0639648 23.2506C0.0639648 23.4274 0.134203 23.597 0.259227 23.722C0.384251 23.847 0.553821 23.9173 0.730632 23.9173ZM8.94663 18.9066C9.50954 18.7483 10.0232 18.4502 10.44 18.0399L23.16 5.31994C23.5956 4.88263 23.8401 4.29053 23.8401 3.67328C23.8401 3.05603 23.5956 2.46393 23.16 2.02661L21.9066 0.786611C21.4628 0.363559 20.8731 0.127563 20.26 0.127563C19.6468 0.127563 19.0571 0.363559 18.6133 0.786611L5.8933 13.4933C5.48312 13.9078 5.18888 14.4228 5.03997 14.9866L4.0533 18.6666C4.00691 18.8347 4.00591 19.0122 4.05041 19.1808C4.09492 19.3494 4.18332 19.5033 4.30663 19.6266C4.49559 19.8118 4.74875 19.9169 5.0133 19.9199L8.94663 18.9066ZM9.4933 17.0933C9.24741 17.3434 8.93891 17.523 8.59996 17.6133L7.30663 17.9599L5.9733 16.6266L6.31996 15.3333C6.41202 14.9951 6.59135 14.687 6.83996 14.4399L7.34663 13.9466L9.99996 16.5999L9.4933 17.0933ZM10.9466 15.6533L8.2933 12.9999L17.2666 4.02661L19.92 6.67994L10.9466 15.6533ZM22.2133 4.38661L20.8666 5.73328L18.2133 3.07994L19.56 1.71994C19.7475 1.53268 20.0016 1.42749 20.2666 1.42749C20.5316 1.42749 20.7858 1.53268 20.9733 1.71994L22.2133 2.97328C22.3993 3.16146 22.5036 3.41537 22.5036 3.67994C22.5036 3.94452 22.3993 4.19843 22.2133 4.38661Z"
                  fill="black"
                />
              </svg>
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

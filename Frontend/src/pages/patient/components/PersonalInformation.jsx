import style from "./PersonalInformation.module.css";
import { useDispatch } from "react-redux";
import { setPage, setInformation } from "../../../store/slices/patientNavSlice";

const PersonalInformation = () => {
  const dispatch = useDispatch();

  const gotoUpdate = () => {
    dispatch(setPage("updates"));
    dispatch(setInformation("basic"));
  };
  return (
    <div>
      <div className={style.personalInformation}>
        <div className={style.heading} id="flexBetween">
          <h2>Personal Information</h2>
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

        <div className={style.infoTable} id="flexColumn">
          <table>
            <tr>
              <td className={style.td}>First Name</td>
              <td className={style.td}>Last Name</td>
            </tr>
            <tr>
              <td>Mustapha</td>
              <td>Hussein</td>
            </tr>
            <br />

            <tr>
              <td className={style.td}>Email Address</td>
              <td className={style.td}>Phone Number</td>
            </tr>

            <tr>
              <td>mustyoseni060@gmail.com</td>
              <td>+234 123456789</td>
            </tr>
            <br />
            <tr>
              <td className={style.td}>Date Of Birth</td>
              <td className={style.td}>Gender</td>
            </tr>
            <tr>
              <td>6/10/2025</td>
              <td>Male</td>
            </tr>
            <br />
            <tr>
              <td className={style.td}>House Address</td>
              <td className={style.td}>NHIS ID</td>
            </tr>

            <tr>
              <td>No.12, Tarauni, Kano, Nigeria</td>
              <td>1234567890</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;

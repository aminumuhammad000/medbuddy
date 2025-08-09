import style from "./PersonalInformation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setPage, setInformation } from "../../../store/slices/patientNavSlice";

const PersonalInformation = () => {
  const { user } = useSelector((state) => state.auth);

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
              <td>{user?.auth?.name.split(" ")[0] || "N/A"}</td>
              <td>{user?.auth?.name.split(" ")[1] || "N/A"}</td>
            </tr>
            <br />

            <tr>
              <td className={style.td}>Email Address</td>
              <td className={style.td}>Phone Number</td>
            </tr>

            <tr>
              <td>{user?.auth.email || "N/A"}</td>
              <td>{user?.auth.phone || "N/A"}</td>
            </tr>
            <br />
            <tr>
              <td className={style.td}>Date Of Birth</td>
              <td className={style.td}>Gender</td>
            </tr>
            <tr>
              <td>{user?.profile?.dob || "N/A"}</td>
              <td>{user?.profile?.gender || "N/A"}</td>
            </tr>
            <br />
            <tr>
              <td className={style.td}>House Address</td>
              <td className={style.td}>NHIS ID</td>
            </tr>

            <tr>
              <td>{user?.profile?.house_address || "N/A"}</td>
              <td>{user?.auth?.nhis_id || "N/A"}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;

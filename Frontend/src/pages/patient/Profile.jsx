import style from "./Profile.module.css";
import profile from "../../assets/images/profiles/profile.jpg";
import PersonalInformation from "./components/PersonalInformation";
import MedicalInformation from "./components/MedicalInformation";
import AccountInformation from "./components/AccountInformation";
import { useSelector, useDispatch } from "react-redux";
import { setInformation } from "../../store/slices/patientNavSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const userInformation = useSelector(
    (state) => state.patientNav.userInformation
  );
  const currentPage = useSelector((state) => state.patientNav.currentPage);

  return (
    <div className={style.profile}>
      <div className={style.profileHeader} id="flexCenter">
        <ul className={style.profileList} id="flexCenter">
          <li
            className={userInformation === "basic" ? style.active : ""}
            onClick={() => dispatch(setInformation("basic"))}
            id="text30"
          >
            Basic Information
          </li>
          <li
            className={userInformation === "medical" ? style.active : ""}
            onClick={() => dispatch(setInformation("medical"))}
            id="text30"
          >
            Medical Information
          </li>
          <li
            className={userInformation === "account" ? style.active : ""}
            onClick={() => dispatch(setInformation("account"))}
            id="text30"
          >
            Account & Preferences
          </li>
        </ul>
      </div>

      <div className={style.patientCard} id="flexSpaceBetween">
        <div className={style.patientCardHeader}>
          <img src={profile} alt="" loading="lazy" />
          <div className={style.patientInfo}>
            <h3 className={style.name}>Mustapha Hussein</h3>
            <p className={style.idNo} id="mediumText">
              208898680
            </p>
          </div>
        </div>

        <button
          className={style.editButton}
          onClick={() => dispatch(setPage("updates"))}
          id="mediumText"
        >
          Edit{" "}
          <span>
            <iconify-icon icon="iconamoon:edit-light"></iconify-icon>
          </span>
        </button>
      </div>

      {currentPage === "users" && (
        <>
          <div style={{ marginTop: "23px" }}>
            {userInformation === "basic" ? (
              <PersonalInformation />
            ) : userInformation === "medical" ? (
              <MedicalInformation />
            ) : (
              <AccountInformation />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;

import UpdateAccountInfo from "./components/UpdateAccountInfo";
import UpdateMedicalInfo from "./components/UpdateMedicalInfo";
import UpdatesPersonalInfo from "./components/UpdatesPersonalInfo";
import style from "./Updates.module.css";
import profile from "../../assets/images/profiles/profile.jpg";
import { useSelector } from "react-redux";

const Updates = () => {
  const userInformation = useSelector(
    (state) => state.patientNav.userInformation
  );

  return (
    <div className={style.updates}>
      {userInformation === "basic" ? (
        <div className={style.userProfile}>
          <div className={style.imgCard}>
            <img src={profile} alt="profile image" />
            <button className={style.changeProfile} id="flexCenter">
              <iconify-icon
                icon="solar:camera-linear"
                id="text30"
              ></iconify-icon>
            </button>
          </div>

          <div className={style.btnContainer} id="flexCenter">
            <button className={style.uploadNew} id="mediumText">
              Upload new image
            </button>
            <button id="mediumText">Remove image</button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div>
        <button className={style.Save}>Save changes</button>
        <br />
        <br />
      </div>
      <>
        {userInformation === "basic" ? (
          <UpdatesPersonalInfo />
        ) : userInformation === "medical" ? (
          <UpdateMedicalInfo />
        ) : (
          <UpdateAccountInfo />
        )}
      </>
    </div>
  );
};

export default Updates;

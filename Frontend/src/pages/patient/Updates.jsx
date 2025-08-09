import UpdateAccountInfo from "./components/UpdateAccountInfo";
import UpdateMedicalInfo from "./components/UpdateMedicalInfo";
import UpdatesPersonalInfo from "./components/UpdatesPersonalInfo";
import style from "./Updates.module.css";
import profile from "../../assets/images/profiles/profile.jpg";
import { useDispatch, useSelector } from "react-redux";
import { updatePersonalInfo } from "../../store/slices/authReducer";
import { useState } from "react";
import Loading from "../auth/components/Loading";

const Updates = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);

  const userInformation = useSelector(
    (state) => state.patientNav.userInformation
  );

  const [formData, setFormData] = useState({
    fname: user?.auth?.fname || "",
    lname: user?.auth?.lname || "",
    email: user?.auth?.email || "",
    phone: user?.auth?.phone || "",
    gender: user?.profile?.gender || "",
    dob: user?.profile?.dob?.slice(0, 10) || "",
    nhis_id: user?.auth?.nhis_id || "",
    house_address: user?.profile?.house_address || "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    // if (userInformation === "basic") {
    e.preventDefault();
    dispatch(updatePersonalInfo(formData));
    // }
  };

  return (
    <div className={style.updates}>
      {loading && <Loading />}
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
      <form action="" onSubmit={handleSubmit} onChange={handleChange}>
        <div>
          <button type="submit" className={style.Save}>
            Save changes
          </button>
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
      </form>
    </div>
  );
};

export default Updates;

import UpdateAccountInfo from "./components/UpdateAccountInfo";
import UpdateMedicalInfo from "./components/UpdateMedicalInfo";
import UpdatesPersonalInfo from "./components/UpdatesPersonalInfo";
import style from "./Updates.module.css";
import profile from "../../assets/images/profiles/profile.jpg";
import { useDispatch, useSelector } from "react-redux";
import { updatePersonalInfo } from "../../store/slices/authReducer";
import { useState } from "react";
import Loading from "../auth/components/Loading";
import { useEffect } from "react";
import AlertContainer from "../auth/components/AlertContainer";
import { clearStatus } from "../../store/slices/authReducer";

const Updates = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);

  const userInformation = useSelector(
    (state) => state.patientNav.userInformation
  );

  useEffect(() => {
    // Clear any old success/error messages when the page loads
    dispatch(clearStatus());
  }, [dispatch]);

  // Initialize formData state
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    gender: "male",
    dob: "",
    nhis_id: "",
    house_address: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        fname: user.auth.name.split(" ")[0] || "",
        lname: user.auth.name.split(" ")[1] || "",
        email: user.auth.email || "",
        phone: user.auth.phone || "",
        gender: user.profile.gender || "male",
        dob: user.profile.dob || "",
        nhis_id: user.auth.nhis_id || "",
        house_address: user.profile.house_address || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    if (userInformation === "basic") {
      e.preventDefault();

      // Merge fname + lname into one name string
      const combinedName = `${formData.fname} ${formData.lname}`.trim();

      // Prepare data to send
      const payload = {
        ...formData,
        name: combinedName, // send name instead of fname + lname
      };

      // Remove fname and lname so backend doesn't get them
      delete payload.fname;
      delete payload.lname;
      // dispatch(updatePersonalInfo(formData));
      dispatch(updatePersonalInfo(payload));
    }
  };

  return (
    <div className={style.updates}>
      {loading && <Loading />}

      {/* Alert Box */}
      <AlertContainer />

      {userInformation === "basic" ? (
        <div className={style.userProfile}>
          <div className={style.imgCard}>
            <img src={user?.profile?.profile || profile} alt="profile image" />
            <button className={style.changeProfile} id="flexCenter" disabled>
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
            <button id="mediumText" disabled>
              Remove image
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <form action="" onSubmit={handleSubmit}>
        <div>
          <button type="submit" className={style.Save}>
            Save changes
          </button>
          <br />
          <br />
        </div>
        <>
          {userInformation === "basic" ? (
            <UpdatesPersonalInfo
              formData={formData}
              handleChange={handleChange}
            />
          ) : userInformation === "medical" ? (
            <UpdateMedicalInfo
              formData={formData}
              handleChange={handleChange}
            />
          ) : (
            <UpdateAccountInfo
              formData={formData}
              handleChange={handleChange}
            />
          )}
        </>
      </form>
    </div>
  );
};

export default Updates;

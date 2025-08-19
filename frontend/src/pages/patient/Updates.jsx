import UpdateAccountInfo from "./components/UpdateAccountInfo";
import UpdateMedicalInfo from "./components/UpdateMedicalInfo";
import UpdatesPersonalInfo from "./components/UpdatesPersonalInfo";
import style from "./Updates.module.css";
import profile from "../../assets/images/profiles/profile.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  updatePersonalInfo,
  updateMedicalInfo,
  updateAccount,
  clearStatus,
} from "../../store/slices/authReducer";
import { useState, useEffect } from "react";
import Loading from "../auth/components/Loading";
import AlertContainer from "../auth/components/AlertContainer";

const Updates = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);

  const userInformation = useSelector(
    (state) => state.patientNav.userInformation
  );

  // Clear old success/error messages when component loads
  useEffect(() => {
    dispatch(clearStatus());
  }, [dispatch]);

  // -------------------- STATES --------------------
  const [profileData, setProfileData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    gender: "male",
    dob: "",
    nhis_id: "",
    house_address: "",
  });

  const [medicalData, setMedicalData] = useState({
    known_allergies: "",
    current_medications: "",
    vaccination_record: "",
    chronic_conditions: "",
    blood_type: "",
  });

  const [accountData, setAccountData] = useState({
    language_preference: "",
    communication_preference: "",
  });

  // -------------------- LOAD USER PROFILE --------------------
  useEffect(() => {
    if (user) {
      const [firstName, lastName] = user.auth?.name?.split(" ") || ["", ""];
      setProfileData({
        fname: firstName || "",
        lname: lastName || "",
        email: user.auth?.email || "",
        phone: user.auth?.phone || "",
        gender: user.profile?.gender || "male",
        dob: user.profile?.dob || "",
        nhis_id: user.auth?.nhis_id || "",
        house_address: user.profile?.house_address || "",
      });
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      setMedicalData({
        known_allergies: user.medical_info?.known_allergies || "",
        current_medications: user.medical_info?.current_medications || "",
        vaccination_record: user.medical_info?.vaccination_record || "",
        chronic_conditions: user.medical_info?.chronic_conditions || "",
        blood_type: user.medical_info?.blood_type || "",
      });
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      setAccountData({
        language_preference: user.profile?.language_preference || "",
        communication_preference: user.profile?.communication_preference || "",
      });
    }
  }, [user]);

  // -------------------- HANDLERS --------------------
  const handleProfileChange = (e) => {
    setProfileData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleMedicalChange = (e) => {
    const { name, value } = e.target;

    // If the field is supposed to be an array, split it by comma
    if (
      [
        "current_medications",
        "vaccination_record",
        "chronic_conditions",
      ].includes(name)
    ) {
      setMedicalData((prev) => ({
        ...prev,
        [name]: value.split(",").map((item) => item.trim()), // ✅ convert to array
      }));
    } else {
      setMedicalData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleAccountChange = (e) => {
    const { name, value } = e.target;
    setAccountData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInformation === "basic") {
      const combinedName = `${profileData.fname} ${profileData.lname}`.trim();

      const payload = {
        ...profileData,
        name: combinedName,
      };

      if (user?.profile?.profile) {
        payload.profile = user.profile.profile;
      }

      delete payload.fname;
      delete payload.lname;

      dispatch(updatePersonalInfo(payload));
    }

    if (userInformation === "medical") {
      // send only the fields that actually have a value
      const filteredMedicalData = Object.fromEntries(
        Object.entries(medicalData).filter(([_, v]) => v !== "")
      );
      dispatch(updateMedicalInfo(filteredMedicalData));
    }

    if (userInformation === "account") {
      const filteredAccountData = Object.fromEntries(
        Object.entries(accountData).filter(([_, v]) => v !== "")
      );
      dispatch(updateAccount(filteredAccountData));
    }
  };

  // -------------------- UI --------------------
  return (
    <div className={style.updates}>
      {loading && <Loading />}
      <AlertContainer />

      {userInformation === "basic" && (
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
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <button type="submit" className={style.Save}>
            Save changes
          </button>
          <br />
          <br />
        </div>

        {userInformation === "basic" ? (
          <UpdatesPersonalInfo
            formData={profileData}
            handleChange={handleProfileChange}
          />
        ) : userInformation === "medical" ? (
          <UpdateMedicalInfo
            formData={medicalData}
            handleChange={handleMedicalChange}
          />
        ) : (
          <UpdateAccountInfo
            formData={accountData}
            handleChange={handleAccountChange}
          />
        )}
      </form>
    </div>
  );
};

export default Updates;

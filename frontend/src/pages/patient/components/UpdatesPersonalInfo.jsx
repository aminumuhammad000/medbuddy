import style from "./UpdatesPersonalInfo.module.css";
import { useSelector } from "react-redux";

const UpdatesPersonalInfo = ({ formData = {}, handleChange }) => {
  const { user, loading } = useSelector((state) => state.auth);

  const userInformation = useSelector(
    (state) => state.patientNav.userInformation
  );
  return (
    <div className={style.UpdatesPersonalInfo} id="flexColumn">
      <h2 className={style.title}>Personal Information</h2>
      <>
        <div className={style.fullName}>
          <div>
            <label htmlFor="firstName" id="mediumText">
              First Name
            </label>
            <input
              type="text"
              name="fname"
              id="fname"
              value={formData.fname}
              onChange={handleChange}
              placeholder={user?.auth?.name.split(" ")[0]}
            />
          </div>
          <div>
            <label htmlFor="lastName" id="mediumText">
              Last Name
            </label>
            <input
              type="text"
              name="lname"
              id="lname"
              value={formData.lname}
              onChange={handleChange}
              placeholder={user?.auth?.name.split(" ")[1]}
            />
          </div>
        </div>

        <div className={style.Email}>
          <div>
            <label htmlFor="firstName" id="mediumText">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder={user?.auth?.email}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastName" id="mediumText">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder={user?.auth?.phone || "Enter your phone number"}
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={style.OtherDetails}>
          <div>
            <label htmlFor="dob" id="mediumText">
              Date Of Birth
            </label>
            <input
              type="date"
              name="dob"
              id="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="Gender" id="mediumText">
              Gender
            </label>
            <select
              name="gender"
              id="mediumText"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="nhis_id" id="mediumText">
              NHIS ID
            </label>
            <input
              type="text"
              name="nhis_id"
              id="NHIS ID"
              placeholder={user?.auth?.nhis_id || "NHIS ID"}
              value={formData.nhis_id}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={style.UpdateAddress}>
          <label htmlFor="HouseAddress" id="mediumText">
            House Address
          </label>
          <input
            type="text"
            name="house_address"
            id="address"
            placeholder={user?.profile?.house_address || "House Address"}
            value={formData.house_address}
            onChange={handleChange}
          />
        </div>
      </>
    </div>
  );
};

export default UpdatesPersonalInfo;

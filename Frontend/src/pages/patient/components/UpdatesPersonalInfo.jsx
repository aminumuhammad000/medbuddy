import style from "./UpdatesPersonalInfo.module.css";
const UpdatesPersonalInfo = () => {
  return (
    <div className={style.UpdatesPersonalInfo} id="flexColumn">
      <h1>Personal Information</h1>
      <form action="">
        <div className={style.fullName}>
          <div>
            <label htmlFor="firstName" id="mediumText">
              First Name
            </label>
            <input type="text" name="first name" id="fname" />
          </div>
          <div>
            <label htmlFor="lastName" id="mediumText">
              Last Name
            </label>
            <input type="text" name="last name" id="lname" />
          </div>
        </div>

        <div className={style.Email}>
          <div>
            <label htmlFor="firstName" id="mediumText">
              Email Address
            </label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="lastName" id="mediumText">
              Phone Number
            </label>
            <input type="tel" name="phone" id="phone" />
          </div>
        </div>

        <div className={style.OtherDetails}>
          <div>
            <label htmlFor="dob" id="mediumText">
              Date Of Birth
            </label>
            <input type="text" name="dob" id="dob" />
          </div>
          <div>
            <label htmlFor="Gender" id="mediumText">
              Gender
            </label>
            <select name="gender" id="mediumText">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label htmlFor="NHISID" id="mediumText">
              NHIS ID
            </label>
            <input type="text" name="NHISID" id="NHIS ID" />
          </div>
        </div>
        <div className={style.UpdateAddress}>
          <label htmlFor="HouseAddress" id="mediumText">
            House Address
          </label>
          <input type="text" name="address" id="address" />
        </div>
      </form>
    </div>
  );
};

export default UpdatesPersonalInfo;

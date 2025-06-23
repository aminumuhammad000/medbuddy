import style from "./UpdatesPersonalInfo.module.css";
const UpdatesPersonalInfo = () => {
  return (
    <div className={style.UpdatesPersonalInfo}>
      <h1>Personal Information</h1>
      <form action="">
        <div className={style.fullName}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="first name" id="fname" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="last name" id="lname" />
          </div>
        </div>

        <div className={style.Email}>
          <div>
            <label htmlFor="firstName">Email Address</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="lastName">Phone Number</label>
            <input type="tel" name="phone" id="phone" />
          </div>
        </div>

        <div className={style.OtherDetails}>
          <div>
            <label htmlFor="dob">Date Of Birth</label>
            <input type="text" name="dob" id="dob" />
          </div>
          <div>
            <label htmlFor="Gender">Gender</label>
            <input type="text" name="gender" id="gender" />
          </div>
          <div>
            <label htmlFor="NHISID">NHIS ID</label>
            <input type="text" name="NHISID" id="NHIS ID" />
          </div>
        </div>
        <div className={style.UpdateAddress}>
          <label htmlFor="HouseAddress">House Address</label>
          <input type="text" name="address" id="address" />
        </div>
      </form>
    </div>
  );
};

export default UpdatesPersonalInfo;

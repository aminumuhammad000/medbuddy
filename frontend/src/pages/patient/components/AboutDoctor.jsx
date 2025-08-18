import style from "./AboutDoctor.module.css";
const AboutDoctor = () => {
  return (
    <div className={style.AboutDoctor}>
      <h3 className={style.bio}>
        Dr. Musa Abdillahi is a famous American neurosurgeon known for
        successfully separating conjoined twins in 1987. He later became a
        bestselling author and served as the U.S. Secretary of Housing and Urban
        Development.
      </h3>
      <div className={style.cardContainer} id="flexCenter">
        <div>
          <iconify-icon
            icon="mdi:naira"
            id="text30"
            className={style.icon}
          ></iconify-icon>
          <p id="mediumText">Session Fee</p>
          <h3>₦5000</h3>
        </div>

        <div>
          <iconify-icon
            icon="mdi:clock-outline"
            id="text30"
            className={style.icon}
          ></iconify-icon>
          <p id="mediumText">Session Duration</p>
          <h3>147 Hrs</h3>
        </div>

        <div>
          <iconify-icon
            icon="icons8:group"
            id="text30"
            className={style.icon}
          ></iconify-icon>
          <p id="mediumText">Attended Patients</p>
          <h3>₦5000</h3>
        </div>
      </div>
    </div>
  );
};

export default AboutDoctor;

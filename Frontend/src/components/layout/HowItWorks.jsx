import style from "../layout/HowItWorks.module.css";
import team from "../../assets/images/backgrounds/team.png";

const HowItWorks = () => {
  return (
    <div className={style.HowItWorks} id="HowItWorks">
      <div className={style.imgContainer}>
        <img src={team} alt="our team" width={500} />
      </div>

      <div className={style.infoContainer}>
        <h1 className={style.heading}>
          Achieve Optimal Health <span>with Our Dedicated Doctors </span>
        </h1>
        <p id="smallText">
          Li Europan lingues es membres del sam familie. Lor separat existentie
          es un myth. Por scientie, musica, sport etc, litot Europa usa li sam
          vocabular. Li lingues differe solmen in li grammatica, li
          pronunciation e li plu commun vocabules.
        </p>

        <table className={style.table}>
          <tr>
            <td>
              <li id="smallText">
                <iconify-icon
                  icon="fluent-mdl2:check-mark"
                  className={style.icon}
                  id="flexCenter"
                ></iconify-icon>
                24/7 Support
              </li>
            </td>
            <td>
              <li id="smallText">
                <iconify-icon
                  icon="fluent-mdl2:check-mark"
                  className={style.icon}
                  id="flexCenter"
                ></iconify-icon>
                Trusted Specialist Doctor
              </li>
            </td>
          </tr>

          <tr>
            <td>
              <li id="smallText">
                <iconify-icon
                  icon="fluent-mdl2:check-mark"
                  className={style.icon}
                  id="flexCenter"
                ></iconify-icon>
                Best Vaccination
              </li>
            </td>
            <td>
              <li id="smallText">
                <iconify-icon
                  icon="fluent-mdl2:check-mark"
                  className={style.icon}
                  id="flexCenter"
                ></iconify-icon>
                High Quality Care
              </li>
            </td>
          </tr>
        </table>

        <button className={style.makeAppointment} id="smallText">
          Make an Appointment
        </button>
      </div>
    </div>
  );
};

export default HowItWorks;

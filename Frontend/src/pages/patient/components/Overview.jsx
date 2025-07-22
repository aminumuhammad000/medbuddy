import style from "./Overview.module.css";
import profile from "../../../assets/images/profiles/profile.jpg";
import AIChat from "./AIChat";

const Overview = () => {
  const SimpleCard = ({ title, value, unit, icon }) => {
    return (
      <div className={style.div} id="flexColumnCenter">
        <iconify-icon icon={icon} className={style.icon}></iconify-icon>
        <h4 className={style.titleName}>{title}</h4>
        <h1>
          {value}
          <span id="mediumText">{unit}</span>
        </h1>
      </div>
    );
  };

  const DocCard = ({ name, date }) => {
    return (
      <div className={style.card} id="flexCenter">
        <iconify-icon
          icon="material-symbols-light:docs"
          className={style.iconDoc}
        ></iconify-icon>

        <div>
          <h4>{name}</h4>
          <p>{date}</p>
        </div>
      </div>
    );
  };
  return (
    <div className={style.Overview}>
      <div className={style.user} id="flexColumnCenter">
        <div className={style.userCard} id="flexColumnCenter">
          <img
            src={profile}
            alt="profile image"
            loading="lazy"
            className={style.profile}
          />
          <div className={style.details} id="flexColumn">
            <h4>Mustapha Hussein</h4>
            <h5>Age: 42</h5>
          </div>

          <button className={style.btnUpdate} id="mediumText">
            Updates
          </button>
        </div>

        <div className={style.userInfo}>
          <h4>Information:</h4>
          <table>
            <tr>
              <td className={style.bold}>Gender:</td>
              <td>Male</td>
            </tr>
            <tr>
              <td className={style.bold}>Blood Type:</td>
              <td>O+ (Positive)</td>
            </tr>
            <tr>
              <td className={style.bold}>Allergies:</td>
              <td>Milk, Penicillin</td>
            </tr>
            <tr>
              <td className={style.bold}>Diagnosis:</td>
              <td>Diabetes, Blood Disorder</td>
            </tr>
            <tr>
              <td className={style.bold}>Height:</td>
              <td>1.78m</td>
            </tr>
            <tr>
              <td className={style.bold}>Weight:</td>
              <td>65kg</td>
            </tr>
            <tr>
              <td className={style.bold}>Patient ID:</td>
              <td>208898680</td>
            </tr>
          </table>
        </div>
      </div>

      <div className={style.otherContainer}>
        <div className={style.summaryDetails} id="flexCenter">
          <SimpleCard
            title={"Heart Rate"}
            value={80}
            unit={"bpm"}
            icon={"material-symbols:ecg-heart"}
          />
          <SimpleCard
            title={"Temperature"}
            value={36.5}
            // unit={"bpm"}
            icon={"streamline-ultimate-color:temperature-thermometer-high"}
          />

          <SimpleCard
            title={"Temperature"}
            value={36.5}
            // unit={"bpm"}
            icon={"streamline-flex:heart-rate"}
          />
        </div>

        <div className={style.consultationContainer} id="flexColumn">
          <h4 style={{ marginLeft: "26px" }}>Consultation Report</h4>
          <div className={style.consultDoc} id="flexCenter">
            <DocCard name={"Eye Fluoricine Test"} date={"20th February 2025"} />
            <DocCard name={"Eye Fluoricine Test"} date={"20th February 2025"} />
            <DocCard name={"Eye Fluoricine Test"} date={"20th February 2025"} />
          </div>
        </div>

        <div className={style.aiChat}>
          <AIChat />
        </div>
      </div>
    </div>
  );
};

export default Overview;

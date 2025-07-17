import FeaturesCard from "../common/FeaturesCard";
import style from "../../components/layout/Features.module.css";
import { Icon } from "@iconify/react";
import robotIcon from "@iconify/icons-mdi/robot-outline";
import accountVoiceIcon from "@iconify/icons-mdi/account-voice";
import bellAlertIcon from "@iconify/icons-mdi/bell-alert-outline";
import pillIcon from "@iconify/icons-mdi/pill";

const Features = () => {
  return (
    <div className={style.Features} id="Features">
      <h1 className={style.heading}>
        Our Features <span>Highlight</span>
      </h1>
      <hr />
      <div className={style.cardContainer} id="flexCenter">
        <FeaturesCard
          icon={robotIcon}
          title="AI Health Assistant"
          text="Ask anything and get health info instantly."
          bg="#fff"
        />

        <FeaturesCard
          icon={accountVoiceIcon}
          title="Virtual Consultations"
          text="Talk to certified doctors and pharmacists."
          bg="#1771b7"
          color="#fff"
        />

        <FeaturesCard
          icon={bellAlertIcon}
          title="Smart Alerts"
          text="Refill reminders, drug recalls, and interaction warnings."
        />

        <FeaturesCard
          icon={pillIcon}
          title="Order NAFDAC-Verified Drugs"
          text="Safe prescriptions delivered."
        />
      </div>
      <p className={style.text}>
        Li Europan lingues es membres del sam familie. Lor separat existentie es
        un myth. Por scientie, musica, sport etc, litot Europa usa li sam
        vocabular. Li lingues differe solmen in li grammatica, li pronunciation
        e li plu commun vocabules.
      </p>
    </div>
  );
};

export default Features;

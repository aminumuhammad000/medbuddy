import style from "./Feedback.module.css";
import FeedbackCard from "../common/FeedbackCard";
import female from "../../assets/images/profiles/female-profile.jpg";
import male from "../../assets/images/profiles/patient-profile.jpg";

const Feedbacks = () => {
  return (
    <div className={style.FeedbackCard} id="FAQs">
      <h1 className={style.heading}>
        Our Patients <span>Feedback</span>
      </h1>
      <hr />

      <div className={style.feedBackContainer} id="flexColumnCenter">
        <FeedbackCard
          profile={male}
          name="Marrio Ressy Yolainda"
          username="@accountname"
          text="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules."
        />
        <FeedbackCard
          profile={female}
          name="Ardo William Rossy"
          username="@accountname"
          text="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules."
        />
      </div>

      <div className={style.btnContainer}>
        <button className={style.viewMore}>View more</button>
      </div>
    </div>
  );
};

export default Feedbacks;

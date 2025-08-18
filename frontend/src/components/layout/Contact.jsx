import logo from "../../assets/images/logos/logo1.png";
import style from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={style.Contact} id="Contact">
      <div className={style.logoContainer} id="flexCenter">
        <img src={logo} alt="medbuddy logo" />
      </div>
      <div className={style.subscribeContainer}>
        <h1>
          <span>Subscribe</span> to MEDBUDDY.
        </h1>
        <p id="smallText">
          Li Europan lingues es membres del sam familie. Lor separat existentie
          es un myth. Por scientie, musica, sport etc.
        </p>
        <div className={style.inputContainer} id="flexBetween">
          <input
            type="email"
            name="email"
            placeholder="Your Email Here..."
            id="smallText"
          />
          <button type="submit" id="smallText">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import style from "./Footer.module.css";
import logo from "../../assets/images/logos/logo1.png";
import SocialMedia from "../common/SocialMedia";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className={style.Footer}>
      <div className={style.logoContainer} id="flexCenter">
        <img src={logo} alt="logo" />
      </div>

      <ul className={style.navList} id="flexCenter">
        <li>
          <Link to="/" id="text25" className={style.Link}>
            Home
          </Link>
        </li>
        <li>
          {" "}
          <HashLink smooth to="/#Features" id="text25" className={style.Link}>
            About Us
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#Contact" id="text25" className={style.Link}>
            Contact Us
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#HowItWorks" id="text25" className={style.Link}>
            How it works
          </HashLink>
        </li>
      </ul>

      <SocialMedia />
      <p className={style.text} id="smallText">
        Li Europan lingues es membres del sam familie. Lor separat existentie es
        un myth.
      </p>

      <div className={style.copyContainer} id="flexBetween">
        <p>Copyright © 2023. All rights reserved.</p>

        <div className={style.copy} id="flexCenter">
          <p>Privacy</p>
          <p>Terms and condition</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

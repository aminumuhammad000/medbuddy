import style from "./Nav.module.css";
import logo1 from "../../assets/images/logos/logo1.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useDispatch } from "react-redux";
import { setRole } from "../../store/slices/authReducer";

const Nav = () => {
  const dispatch = useDispatch();

  const handleRoleClick = (role) => {
    dispatch(setRole(role));
  };

  return (
    <>
      <div className={style.navContainer}>
        <Link to="/">
          <div className={style.logoContainer}>
            <img src={logo1} alt="logo" width={100} />
          </div>
        </Link>

        <ul className={style.navList}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <HashLink smooth to="/#HowItWorks">
              How it Works
            </HashLink>
          </li>
          <li>
            {" "}
            <HashLink smooth to="/#Features">
              Features
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#FAQs">
              FAQs
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#Contact">
              Contact
            </HashLink>
          </li>
        </ul>

        <div className={style.ctaContainer}>
          <Link to="/Login">
            <button onClick={() => handleRoleClick("register")}>Sign Up</button>
          </Link>
          <Link to="/Login">
            <button
              className={style.signIn}
              onClick={() => handleRoleClick("login")}
            >
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;

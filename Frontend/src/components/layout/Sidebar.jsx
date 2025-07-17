import React from "react";
import styles from "./Sidebar.module.css";
import logo from "../../assets/images/logos/logo2.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../store/slices/patientNavSlice";
import { Icon } from "@iconify/react";
import gaugeIcon from "@iconify/icons-fa6-solid/gauge";
import userIcon from "@iconify/icons-fa6-solid/user";
import pillsIcon from "@iconify/icons-fa6-solid/pills";
import clockIcon from "@iconify/icons-fa6-solid/clock";
import bookIcon from "@iconify/icons-fa6-solid/book";
import gearIcon from "@iconify/icons-fa6-solid/gear";
import stethoscopeIcon from "@iconify/icons-fa6-solid/stethoscope";

const Sidebar = () => {
  const page = useSelector((state) => state.patientNav.currentPage);
  const dispatch = useDispatch();

  const handlePage = React.useCallback(
    (e) => {
      dispatch(setPage(e));
    },
    [dispatch]
  );
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className={styles.menu}>
        <ul>
          <li>
            <button
              onClick={() => handlePage("dashboard")}
              className={page === "dashboard" ? styles.active : ""}
            >
              <Icon icon={gaugeIcon} width="37" className={styles.icons} />{" "}
              Dashboard
            </button>
          </li>
          <li className={styles.users}>
            <button
              onClick={() => handlePage("users")}
              className={page === "users" ? styles.active : ""}
            >
              <Icon icon={userIcon} width="37" className={styles.icons} /> My
              Profile
            </button>
          </li>
          <li className={styles.drugs}>
            <button
              onClick={() => handlePage("drugs")}
              className={page === "drugs" ? styles.active : ""}
            >
              <Icon icon={pillsIcon} width="37" className={styles.icons} />{" "}
              Order Drug
            </button>
          </li>
          <li className={styles.passbooks}>
            <button
              onClick={() => handlePage("consult")}
              className={page === "consult" ? styles.active : ""}
            >
              <Icon
                icon={stethoscopeIcon}
                width="37"
                className={styles.icons}
              />{" "}
              Consult
            </button>
          </li>
          <li className={styles.passbooks}>
            <button
              onClick={() => handlePage("passbooks")}
              className={page === "passbooks" ? styles.active : ""}
            >
              <Icon icon={bookIcon} width="37" className={styles.icons} />{" "}
              Passbooks
            </button>
          </li>
          <li className={styles.settings}>
            <button
              onClick={() => handlePage("settings")}
              className={page === "settings" ? styles.active : ""}
            >
              <Icon icon={clockIcon} width="37" className={styles.icons} /> Med
              History
            </button>
          </li>
          <li className={styles.settings}>
            <button
              onClick={() => handlePage("settings")}
              className={page === "settings" ? styles.active : ""}
            >
              <Icon icon={gearIcon} width="37" className={styles.icons} />{" "}
              Settings
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

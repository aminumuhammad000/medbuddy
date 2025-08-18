import React, { useState } from "react";
import styles from "./AIChat.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../../store/slices/patientNavSlice";

const AIChat = () => {
  const [expandPage, setExpandPage] = useState(true);
  const currentPage = useSelector((state) => state.patientNav.currentPage);
  const dispatch = useDispatch();

  const handlePage = React.useCallback(
    (e) => {
      currentPage === "dashboard"
        ? dispatch(setPage(e))
        : dispatch(setPage("dashboard"));
      setExpandPage(!expandPage);
    },
    [dispatch]
  );
  return (
    <div
      className={styles.AIChat}
      style={expandPage && { padding: "2em 7em 2em 2em" }}
    >
      <h4>AI Consultant</h4>

      <button
        className={styles.expand}
        onClick={() => handlePage("ai")}
        style={expandPage && { right: "60px" }}
      >
        <iconify-icon
          icon="streamline:line-arrow-expand-window-1-remix"
          className={styles.icon}
        ></iconify-icon>
      </button>
      <div
        className={styles.history}
        style={expandPage && { marginLeft: "100px" }}
      >
        <button>
          <iconify-icon
            icon="ri:side-bar-fill"
            className={styles.sidebar}
          ></iconify-icon>
        </button>
      </div>
      <div className={styles.historyContainer}>
        <p className={styles.contentTitle} id="smallText">
          Ask about a drug, dosage, or symptom...
        </p>

        <div className={styles.chatContent}></div>

        <div
          className={styles.inputContainer}
          id="flexAlignCenter"
          style={expandPage && { width: "40%" }}
        >
          <input
            type="text"
            placeholder="Consult me!"
            className={styles.inputField}
          />
          <div className={styles.buttonsContainer} id="flexCenter">
            <button className={styles.recordButton}>
              <iconify-icon
                icon="material-symbols:mic"
                className={styles.icon}
              ></iconify-icon>
            </button>
            <button className={styles.sendButton}>
              <iconify-icon
                icon="iconamoon:send-fill"
                className={styles.icon}
              ></iconify-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;

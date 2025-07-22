import styles from "./AIChat.module.css";
const AIChat = () => {
  return (
    <div className={styles.AIChat}>
      <h4>AI Consultant</h4>

      <div className={styles.history}>
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

        <div className={styles.chatContent}>
          <br />
          <br />
        </div>

        <div className={styles.inputContainer}>
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

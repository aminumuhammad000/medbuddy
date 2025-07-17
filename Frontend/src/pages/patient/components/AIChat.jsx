import styles from "./AIChat.module.css"; // Assuming you have a CSS module for styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
const AIChat = () => {
  return (
    <div className={styles.AIChat}>
      <h1>AI Consultant</h1>

      <div className={styles.history}>
        <button>
          <svg
            width="27"
            height="24"
            viewBox="0 0 27 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.5625 20.4375L23.4375 19.5625L21.125 17.25V13.75H19.875V17.75L22.5625 20.4375ZM14.25 7.5H23V2.5H14.25V7.5ZM20.5 23.75C18.7708 23.75 17.2971 23.1404 16.0788 21.9213C14.8604 20.7021 14.2508 19.2283 14.25 17.5C14.2492 15.7717 14.8588 14.2979 16.0788 13.0788C17.2987 11.8596 18.7725 11.25 20.5 11.25C22.2275 11.25 23.7017 11.8596 24.9225 13.0788C26.1433 14.2979 26.7525 15.7717 26.75 17.5C26.7475 19.2283 26.1379 20.7025 24.9213 21.9225C23.7046 23.1425 22.2308 23.7517 20.5 23.75ZM3 20C2.3125 20 1.72417 19.7554 1.235 19.2663C0.745833 18.7771 0.500833 18.1883 0.5 17.5V2.5C0.5 1.8125 0.745 1.22417 1.235 0.735C1.725 0.245833 2.31333 0.000833333 3 0H23C23.6875 0 24.2763 0.245 24.7663 0.735C25.2563 1.225 25.5008 1.81333 25.5 2.5V10.3438C24.7708 9.82292 23.9742 9.42708 23.11 9.15625C22.2458 8.88542 21.3654 8.75 20.4688 8.75C18.0521 8.75 15.995 9.60417 14.2975 11.3125C12.6 13.0208 11.7508 15.0833 11.75 17.5C11.75 17.9375 11.7812 18.3646 11.8438 18.7812C11.9062 19.1979 12 19.6042 12.125 20H3Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className={styles.historyContainer}>
        <p className={styles.contentTitle}>
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
          <div className={styles.buttonsContainer}>
            <button className={styles.recordButton}>
              <FontAwesomeIcon icon={faMicrophone} className={styles.icon} />
            </button>
            <button className={styles.sendButton}>
              <FontAwesomeIcon icon={faPaperPlane} className={styles.icon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;

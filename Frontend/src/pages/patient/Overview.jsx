import style from "./Overview.module.css";
import profile from "../../assets/images/profiles/profile.jpg";
import AIChat from "./AIChat";
const Overview = () => {
  return (
    <div className={style.Overview}>
      <div className={style.user}>
        <div className={style.userCard}>
          <div className={style.profile}>
            <img src={profile} alt="profile image" />
          </div>
          <div className={style.details}>
            <h5>Mustapha Hussein</h5>
            <h6>Age: 42</h6>
          </div>

          <button className={style.btnUpdate}>Updates</button>
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
        <div className={style.summaryDetails}>
          <div className={style.heart}>
            <svg
              width="46"
              height="43"
              viewBox="0 0 46 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.7925 0.807495C37.0625 0.807495 39.8317 2.06083 42.1 4.56749C44.3683 7.07416 45.5017 10.0992 45.5 13.6425C45.5 14.6825 45.3867 15.7192 45.16 16.7525C44.9333 17.7858 44.5708 18.785 44.0725 19.75H31.14L26.665 12.8H24.3275L20.135 25.615L16.14 19.75H1.925C1.42833 18.785 1.06583 17.7933 0.8375 16.775C0.6125 15.7583 0.5 14.7358 0.5 13.7075C0.5 10.1192 1.62333 7.07249 3.87 4.56749C6.11667 2.06249 8.875 0.809162 12.145 0.807495C13.855 0.807495 15.5 1.15583 17.08 1.8525C18.6583 2.5475 20.0708 3.555 21.3175 4.875L23 6.65499L24.5875 4.9725C25.8558 3.61916 27.2875 2.58666 28.8825 1.87499C30.4775 1.16333 32.1142 0.807495 33.7925 0.807495ZM22.9375 42.3175L4.99 24.245C4.67667 23.9317 4.375 23.6092 4.085 23.2775C3.79667 22.9492 3.5325 22.6067 3.2925 22.25H14.8L19.4 29.1675H21.725L25.8675 16.29L29.8475 22.25H42.695C42.455 22.5967 42.1908 22.935 41.9025 23.265C41.6142 23.595 41.3175 23.9167 41.0125 24.23L22.9375 42.3175Z"
                fill="#FF6363"
              />
            </svg>
            <h3>Heart</h3>
            <h1>
              80<span>bpm</span>
            </h1>
          </div>
          <div className={style.temperature}>
            <svg
              width="19"
              height="43"
              viewBox="0 0 19 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.8718 24.2056H18.4737M14.8718 15.2H18.4737M14.8718 6.1925H18.4737"
                stroke="#191919"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.2868 28.745V4.46379C11.2868 3.51224 10.9088 2.59967 10.2359 1.92682C9.5631 1.25398 8.65052 0.875977 7.69898 0.875977C6.74743 0.875977 5.83486 1.25398 5.16201 1.92682C4.48916 2.59967 4.11117 3.51224 4.11117 4.46379V28.745C2.7443 29.5347 1.67618 30.7534 1.07241 32.2119C0.468638 33.6705 0.362959 35.2875 0.771758 36.8122C1.18056 38.337 2.08099 39.6843 3.33345 40.6451C4.5859 41.606 6.12039 42.1269 7.69898 42.1269C9.27757 42.1269 10.8121 41.606 12.0645 40.6451C13.317 39.6843 14.2174 38.337 14.6262 36.8122C15.035 35.2875 14.9293 33.6705 14.3255 32.2119C13.7218 30.7534 12.6537 29.5347 11.2868 28.745Z"
                fill="#FF808C"
              />
              <path
                d="M7.69802 36.74C8.17342 36.74 8.62935 36.5512 8.96551 36.215C9.30167 35.8789 9.49052 35.4229 9.49052 34.9475C9.49052 34.4721 9.30167 34.0162 8.96551 33.68C8.62935 33.3439 8.17342 33.155 7.69802 33.155C7.22262 33.155 6.76669 33.3439 6.43053 33.68C6.09437 34.0162 5.90552 34.4721 5.90552 34.9475C5.90552 35.4229 6.09437 35.8789 6.43053 36.215C6.76669 36.5512 7.22262 36.74 7.69802 36.74Z"
                fill="#FFEF5E"
                stroke="#191919"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.69991 0.876958C7.22883 0.876217 6.76223 0.968427 6.32683 1.1483C5.89144 1.32818 5.49582 1.59219 5.16262 1.92522C4.82943 2.25824 4.56521 2.65372 4.3851 3.08902C4.205 3.52432 4.11255 3.99087 4.11304 4.46196V13.8332H11.2849V4.46383C11.2857 3.99306 11.1936 3.52677 11.0139 3.09162C10.8343 2.65647 10.5706 2.26102 10.238 1.92787C9.90536 1.59472 9.51031 1.33043 9.07545 1.1501C8.64058 0.969775 8.17443 0.876957 7.70366 0.876958H7.69991Z"
                fill="white"
              />
              <path
                d="M7.69991 33.1532V6.25629M11.2868 28.745V4.46379C11.2868 3.51224 10.9088 2.59967 10.2359 1.92682C9.5631 1.25398 8.65052 0.875977 7.69898 0.875977C6.74743 0.875977 5.83486 1.25398 5.16201 1.92682C4.48916 2.59967 4.11117 3.51224 4.11117 4.46379V28.745C2.7443 29.5347 1.67618 30.7534 1.07241 32.2119C0.468638 33.6705 0.362959 35.2875 0.771758 36.8122C1.18056 38.337 2.08099 39.6843 3.33345 40.6451C4.5859 41.606 6.12039 42.1269 7.69898 42.1269C9.27757 42.1269 10.8121 41.606 12.0645 40.6451C13.317 39.6843 14.2174 38.337 14.6262 36.8122C15.035 35.2875 14.9293 33.6705 14.3255 32.2119C13.7218 30.7534 12.6537 29.5347 11.2868 28.745Z"
                stroke="#191919"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h3>Temperature</h3>
            <h1>
              36.5<span>°C</span>
            </h1>
          </div>
          <div className={style.null}>null</div>
        </div>

        <div className={style.consultationContainer}>
          <h4>Consultation Report</h4>
          <div>
            <div className={style.cardContainer}>
              <div className={style.card}>
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="60"
                    height="60"
                    rx="20"
                    fill="#D9D9D9"
                    fill-opacity="0.15"
                  />
                  <path
                    d="M35 10V20H45L35 10ZM33.3359 10H15V50H45V21.6641H33.3359V10ZM18.3359 13.3359H30V21.6719H18.3359V13.3359ZM30 41.6641H18.3359V38.3281H30V41.6641ZM41.6641 35H18.3359V31.6641H41.6719V35H41.6641ZM41.6641 25V28.3359H18.3359V25H41.6641Z"
                    fill="#1771B7"
                  />
                </svg>

                <div>
                  <h5>Eye Fluoricine Test</h5>
                  <p>20th February 2025 </p>
                </div>
              </div>

              <div className={style.card}>
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="60"
                    height="60"
                    rx="20"
                    fill="#D9D9D9"
                    fill-opacity="0.15"
                  />
                  <path
                    d="M35 10V20H45L35 10ZM33.3359 10H15V50H45V21.6641H33.3359V10ZM18.3359 13.3359H30V21.6719H18.3359V13.3359ZM30 41.6641H18.3359V38.3281H30V41.6641ZM41.6641 35H18.3359V31.6641H41.6719V35H41.6641ZM41.6641 25V28.3359H18.3359V25H41.6641Z"
                    fill="#1771B7"
                  />
                </svg>

                <div>
                  <h5>Eye Fluoricine Test</h5>
                  <p>20th February 2025 </p>
                </div>
              </div>

              <div className={style.card}>
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="60"
                    height="60"
                    rx="20"
                    fill="#D9D9D9"
                    fill-opacity="0.15"
                  />
                  <path
                    d="M35 10V20H45L35 10ZM33.3359 10H15V50H45V21.6641H33.3359V10ZM18.3359 13.3359H30V21.6719H18.3359V13.3359ZM30 41.6641H18.3359V38.3281H30V41.6641ZM41.6641 35H18.3359V31.6641H41.6719V35H41.6641ZM41.6641 25V28.3359H18.3359V25H41.6641Z"
                    fill="#1771B7"
                  />
                </svg>

                <div>
                  <h5>Eye Fluoricine Test</h5>
                  <p>20th February 2025 </p>
                </div>
              </div>
            </div>
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

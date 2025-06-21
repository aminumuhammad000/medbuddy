import Sidebar from "../../components/layout/Sidebar";
import style from "./Dashboard.module.css";
import Overview from "./Overview";
import { useSelector, useDispatch } from "react-redux";
import Profile from "./Profile";
// import { setPage } from "../../store/slices/patientNavSlice";

const Dashboard = () => {
  // const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.patientNav.currentPage);

  return (
    <>
      <div className={style.Dashboard}>
        <div className={style.nav}>
          <h2 className={style.heading}>
            {currentPage === "dashboard" ? "Overview" : "My profile"}
          </h2>
          <div className={style.notification}>
            <svg
              width="28"
              height="32"
              viewBox="0 0 28 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.625 7.47913C26.625 10.2937 24.3354 12.5833 21.5208 12.5833C18.7062 12.5833 16.4167 10.2937 16.4167 7.47913C16.4167 4.66455 18.7062 2.37497 21.5208 2.37497C24.3354 2.37497 26.625 4.66455 26.625 7.47913ZM23.7083 15.1937C22.9792 15.3833 22.25 15.5 21.5208 15.5C19.3948 15.4961 17.3569 14.6498 15.8535 13.1465C14.3501 11.6431 13.5039 9.60521 13.5 7.47913C13.5 5.33538 14.3458 3.3958 15.6875 1.95205C15.4228 1.62763 15.0891 1.36634 14.7107 1.18722C14.3323 1.0081 13.9187 0.915657 13.5 0.916634C11.8958 0.916634 10.5833 2.22913 10.5833 3.8333V4.25622C6.25208 5.53955 3.29167 9.5208 3.29167 14.0416V22.7916L0.375 25.7083V27.1666H26.625V25.7083L23.7083 22.7916V15.1937ZM13.5 31.5416C15.1187 31.5416 16.4167 30.2437 16.4167 28.625H10.5833C10.5833 29.3985 10.8906 30.1404 11.4376 30.6874C11.9846 31.2343 12.7265 31.5416 13.5 31.5416Z"
                fill="#1771B7"
              />
              <circle cx="21.6666" cy="7.33333" r="5.83333" fill="#E33629" />
            </svg>
          </div>
        </div>
        <Sidebar />

        <div className={style.pages}>
          {currentPage === "dashboard" && <Overview />}
          {currentPage === "users" && <Profile />}
          {/* {currentPage === "appointments" && <Appointments />} */}
          {/* {currentPage === "medicalRecords" && <MedicalRecords />} */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;

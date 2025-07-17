import Sidebar from "../../components/layout/Sidebar";
import style from "./Dashboard.module.css";
import Overview from "./components/Overview";
import { useSelector } from "react-redux";
import Profile from "./Profile";
import OrderMedicine from "./OrderMedicine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import ConsultBooking from "./ConsultBooking";
const Dashboard = () => {
  const currentPage = useSelector((state) => state.patientNav.currentPage);

  return (
    <div className={style.MainDashboard}>
      <div className={style.nav}>
        <h2 className={style.heading}>
          {currentPage === "dashboard"
            ? ""
            : currentPage === "users"
            ? "My profile"
            : currentPage === "drugs"
            ? "Order Medicine"
            : currentPage == "consult"
            ? "consult" 
            : "Edit Profile"}
        </h2>
        <div className={style.notification}>
          <FontAwesomeIcon icon={faBell} className={style.bell} />
        </div>
      </div>
      <Sidebar />

      <>
        {currentPage === "dashboard" && <Overview />}
        {currentPage === "users" && <Profile />}
        {currentPage === "drugs" && <OrderMedicine />}
        {currentPage === "consult" && <ConsultBooking />}
      </>
    </div>
  );
};

export default Dashboard;

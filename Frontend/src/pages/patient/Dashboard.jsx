import style from "./Dashboard.module.css";
import Sidebar from "../../components/layout/Sidebar";
import Overview from "./components/Overview";
import OrderMedicine from "./OrderMedicine";
import ConsultBooking from "./ConsultBooking";
import Profile from "./Profile";
import Updates from "./Updates";
import { useDispatch, useSelector } from "react-redux";
import { setPage, setInformation } from "../../store/slices/patientNavSlice";
const Dashboard = () => {
  const currentPage = useSelector((state) => state.patientNav.currentPage);
  const userInformation = useSelector(
    (state) => state.patientNav.userInformation
  );
  const dispatch = useDispatch();

  const handleBack = () => {
    if (userInformation === "basic") {
      dispatch(setPage("users"));
      dispatch(setInformation("basic"));
    } else if (userInformation === "medical") {
      dispatch(setPage("users"));
      dispatch(setInformation("medical"));
    } else {
      dispatch(setPage("users"));
    }
  };
  return (
    <div className={style.MainDashboard} id="flexColumnCenter">
      <div className={style.nav} id="flexBetween">
        <h1 className={style.heading} id="flexCenter">
          {currentPage === "updates" && (
            <button
              style={{ marginRight: "11px", marginTop: "7px" }}
              onClick={handleBack}
            >
              <iconify-icon
                icon="uil:arrow-left"
                style={{ color: "#1771b7", fontSize: "60px" }}
              />
            </button>
          )}
          {currentPage === "dashboard"
            ? ""
            : currentPage === "users"
            ? "My profile"
            : currentPage === "drugs"
            ? "Order Medicine"
            : currentPage == "consult"
            ? "consult"
            : "Edit Profile"}
        </h1>
        <div className={style.notification}>
          <iconify-icon
            icon="mdi:bell"
            className={style.icon}
            id="text40"
          ></iconify-icon>
        </div>
      </div>
      <Sidebar />

      <>
        {currentPage === "dashboard" && <Overview />}
        {currentPage === "users" && <Profile />}
        {currentPage === "updates" && <Updates />}
        {currentPage === "drugs" && <OrderMedicine />}
        {currentPage === "consult" && <ConsultBooking />}
      </>
    </div>
  );
};

export default Dashboard;

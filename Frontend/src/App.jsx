import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/common/HomePage";
import Login from "./pages/auth/Login";
// import DashboardPatient from './pages/patient/Dashboard';
// import DashboardPharmacist from './pages/pharmacist/Dashboard';
// import DashboardDoctor from './pages/doctor/Dashboard';
// import DashboardAdmin from './pages/admin/Dashboard';
// import NotFound from './pages/common/NotFound';
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/patient/dashboard" element={<DashboardPatient />} /> */}
      {/* <Route path="/pharmacist/dashboard" element={<DashboardPharmacist />} /> */}
      {/* <Route path="/doctor/dashboard" element={<DashboardDoctor />} /> */}
      {/* <Route path="/admin/dashboard" element={<DashboardAdmin />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;

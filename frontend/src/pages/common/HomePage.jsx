import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGoogleOneTapLogin } from "@react-oauth/google";


import { useNavigate } from "react-router-dom";
import Home from "../../components/layout/Home";

import { loginWithGoogle } from "../../store/slices/authReducer";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const usertype =
    useSelector((state) => state.auth.user?.usertype) || "patient";

useGoogleOneTapLogin({
    onSuccess: (credentialResponse) => {
      console.log("Google credentialResponse:", credentialResponse);
      dispatch(
        loginWithGoogle({
          credential: credentialResponse.credential,
          usertype,
        })
      )
        .unwrap()
        .then((res) => {
          console.log("Google login response:", res);
          if (!res.exists) {
            navigate("/auth");
          } else {
            switch (res.user.usertype) {
              case "patient":
                navigate("/patient/dashboard");
                break;
              case "doctor":
                navigate("/doctor/dashboard");
                break;
              case "pharmacist":
                navigate("/pharmacist/dashboard");
                break;
              case "admin":
                navigate("/admin/dashboard");
                break;
              default:
                navigate("/");
            }
          }
        })
        .catch((err) => {
          console.error("Google login error", err);
        });
    },
    onError: () => {
      console.log("Google login failed");
    },
    // auto_select: true,
  });

  return (
    <div>
      <Home />
    </div>
  );
};

export default HomePage;

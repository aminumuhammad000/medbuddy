import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAuthMode, clearStatus } from "../../../store/slices/authReducer";
import AlertBox from "./AlertBox";
const AlertContainer = () => {
  const { authMode, loading, error, success } = useSelector(
    (state) => state.auth
  );
  const [otpResent, setOtpResent] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (success && authMode === "otp" && !otpResent) {
      dispatch(clearStatus());
      dispatch(setAuthMode("setPassword"));
    }
    if (otpResent) {
      setOtpResent(false);
    }
  }, [success, authMode, dispatch, otpResent]);

  return (
    <>
      {error && (
        <AlertBox
          icon={"material-symbols:error"}
          color="red"
          message={error}
          buttonClick={() => dispatch(clearStatus())}
        />
      )}

      {success && (
        <AlertBox
          icon="icon-park-solid:success"
          color="#1771b7"
          message={success}
          buttonClick={() => dispatch(clearStatus())}
        />
      )}
      {success && authMode === "register" && (
        <AlertBox
          icon={"icon-park-solid:success"}
          color="#1771b7"
          message={success}
          buttonClick={() => {
            dispatch(clearStatus());
            dispatch(setAuthMode("login"));
            navigate("/auth");
            shouldRedirect.current = false;
          }}
        />
      )}
      {success && authMode === "login" && (
        <AlertBox
          icon={"icon-park-solid:success"}
          color="#1771b7"
          message={success}
          buttonClick={() => dispatch(clearStatus())}
        />
      )}

      {otpResent && (
        <AlertBox
          icon={"icon-park-solid:success"}
          color="#1771b7"
          message="OTP resent successfully!"
          buttonClick={() => setOtpResent(false)}
        />
      )}
    </>
  );
};

export default AlertContainer;

import PasswordInput from "./PasswordInput";

const CreateNewPassword = () => {
  return (
    <>
      <p id="text30" style={{ textAlign: "center", marginBottom: "63px" }}>
        Create your new password, if you forget it then you have to do forget
        password.{" "}
      </p>
      <PasswordInput
        label={"New password"}
        placeholder="Enter a  new password"
      />
      <PasswordInput
        label={"Confirm password"}
        placeholder="Re-enter password"
      />
    </>
  );
};

export default CreateNewPassword;

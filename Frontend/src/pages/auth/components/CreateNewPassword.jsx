import PasswordInput from "./PasswordInput";

const CreateNewPassword = () => {
  return (
    <>
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

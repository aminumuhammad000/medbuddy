import PasswordInput from "./PasswordInput";

const CreateNewPassword = ({ email }) => {
  return (
    <>
      <p id="text30" style={{ textAlign: "center", marginBottom: "63px" }}>
        Create your new password.
      </p>

      {/* Hidden email field for form submission */}
      <input
        type="email"
        value={email}
        name="email"
        id="email"
        hidden
        readOnly
      />

      {/* Password fields */}
      <PasswordInput
        label="New password"
        placeholder="Enter a new password"
        name="password"
      />

      <PasswordInput
        label="Confirm password"
        placeholder="Re-enter password"
        name="confirmPassword"
      />
    </>
  );
};

export default CreateNewPassword;

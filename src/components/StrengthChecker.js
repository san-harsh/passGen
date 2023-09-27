import React from "react";

const PasswordStrengthIndicator = ({ password = "" }) => {
  console.log(password);

  const getPasswordStrength = () => {
    const passwordLength = password.length;
    if (passwordLength < 1) {
      return "";
    } else if (passwordLength < 4) {
      return "Very Weak";
    } else if (passwordLength < 8) {
      return "Medium";
    } else if (passwordLength < 10) {
      return "Strong";
    } else {
      return "Very Strong";
    }
  };

  const passwordStrength = getPasswordStrength();
  if (!passwordStrength) return <React.Fragment />;

  return (
    <div className="password-strength">
      Strength:
      <span style={{ fontWeight: "bold" }}>{passwordStrength}</span>
    </div>
  );
};

export default PasswordStrengthIndicator;

import { useState } from "react";
const usePasswordgenerator = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const generatedpassword = (checkboxData, length) => {
    let charSet = "",
      generatedpassword = "";

    const selectedOption = checkboxData.filter((checkbox) => checkbox.state);
    console.log(selectedOption);
    if (selectedOption.length === 0) {
      setErrorMessage("select atlest one option");
      setPassword("");
      return;
    }
    selectedOption.forEach((option) => {
      switch (option.title) {
        case "Include Uppercase Letters":
          charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include Lowercase Letters":
          charSet += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Numbers":
          charSet += "0123456789";
          break;
        case "Include Symbols":
          charSet += "!@#$%^&*()";
          break;
        default:
          break;
      }
    });
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      generatedpassword += charSet[randomIndex];
    }
    setPassword(generatedpassword);
    setErrorMessage("");
  };
  return { password, errorMessage, generatedpassword };
};

export default usePasswordgenerator;

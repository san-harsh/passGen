import "./styles.css";
import { useState } from "react";
import usePasswordgenerator from "./hooks/usePasswordGenerator";
import PasswordStrengthIndicator from "./components/StrengthChecker";
import Button from "./components/button";
import Checkbox from "./components/checkbox";
export default function App() {
  const [length, setLength] = useState(4);
  const [checkboxData, setChecboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false }
  ]);
  const handleCheckboxChange = (i) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
    setChecboxData(updatedCheckboxData);
  };

  const { password, errorMessage, generatedpassword } = usePasswordgenerator();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(password);
    } catch (error) {
      console.error("Failed to copy password: ", error);
    }
  };
  return (
    <div className="container">
      {password && (
        <div className="header">
          <div className="title">{password}</div>
          <Button text="copy" onClick={handleCopy} customClass="copyBtn" />
        </div>
      )}
      {/* characterLength */}
      <div className="charLength">
        <span>
          <label>character Length</label>
          <label>{length}</label>
        </span>
        <input
          type="range"
          min="4"
          max="15"
          // value={}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      {/* checkboxes */}
      <div className="checkboxes">
        {checkboxData.map((checkbox, index) => {
          return (
            <Checkbox
              key={index}
              title={checkbox.title}
              onChange={() => handleCheckboxChange(index)}
              state={checkbox.state}
            />
          );
        })}
      </div>
      {/* strength */}
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}
      <PasswordStrengthIndicator password={password} />
      {/* Generate button */}
      <Button
        text="Generate Password"
        onClick={() => generatedpassword(checkboxData, length)}
        customClass="generateBtn"
      />
    </div>
  );
}

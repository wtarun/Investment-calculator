import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const validDuration = userInput.duration >= 1;

  //A generic handleChange function
  const handleChange = (key, newVal) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [key]: +newVal,
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!validDuration && (
        <p className="center">Please enter a duration greter than zero.</p>
      )}
      {validDuration && <Results input={userInput} />}
    </>
  );
}

export default App;

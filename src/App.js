import React, { useState } from "react";
import "./App.css";
import ThemeHead from "./Components/ThemeHead/ThemeHead";
import Content from "./Components/Content/Content";

function App() {
  const [isDarkMode, setIsDarkMode] = useState("true");

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="App">
      <ThemeHead isDarkMode={isDarkMode} toggleMode={toggleMode}>
        <Content isDarkMode={isDarkMode} />
      </ThemeHead>
    </div>
  );
}

export default App;

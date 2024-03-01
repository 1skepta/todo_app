import React, { useState } from "react";
import "./App.css";
import LightThemeHead from "./Components/LightThemeHead";
import DarkThemeHead from "./Components/DarkThemeHead";

function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="App">
      {theme === "light" ? (
        <LightThemeHead changeTheme={changeTheme} />
      ) : (
        <DarkThemeHead changeTheme={changeTheme} />
      )}
    </div>
  );
}

export default App;

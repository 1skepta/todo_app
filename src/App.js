import React, { useState } from "react";
import "./App.css";
import LightThemeHead from "./Components/LightThemeHead";
import DarkThemeHead from "./Components/DarkThemeHead";
import Content from "./Components/Content";

function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="App">
      {theme === "light" ? (
        <LightThemeHead changeTheme={changeTheme}>
          <Content />
        </LightThemeHead>
      ) : (
        <DarkThemeHead changeTheme={changeTheme}>
          <Content />
        </DarkThemeHead>
      )}
    </div>
  );
}

export default App;

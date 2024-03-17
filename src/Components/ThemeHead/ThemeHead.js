import React from "react";
import light from "../../assets/bg-desktop-light.jpg";
import "../Style/Style.css";
import moon from "../../assets/icon-moon.svg";
import sun from "../../assets/icon-sun.svg";
import dark from "../../assets/bg-desktop-dark.jpg";

function ThemeHead({ isDarkMode, toggleMode, children }) {
  return (
    <div className={isDarkMode ? "lightbg body" : "darkbg body"}>
      <div className="head">
        <img
          className="background"
          src={isDarkMode ? light : dark}
          alt={isDarkMode ? "light background" : "dark background"}
        />
        <div className="content">
          <div className="heading">
            <span>T O D O </span>
            <img
              src={isDarkMode ? moon : sun}
              alt={isDarkMode ? "moon icon" : "sun icon"}
              onClick={toggleMode}
            />
          </div>
        </div>{" "}
        {children}
      </div>
    </div>
  );
}

export default ThemeHead;

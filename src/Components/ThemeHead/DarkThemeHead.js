import React from "react";
import dark from "../../assets/bg-desktop-dark.jpg";
import "./ThemeHead.css";
import sun from "../../assets/icon-sun.svg";

function DarkThemeHead({ changeTheme, children }) {
  return (
    <div className="dark-body">
      <div className="dark-head">
        <img
          className="dark-background"
          src={dark}
          alt="dark theme background"
        />
        <div className="dark-content">
          <div className="heading">
            <span>T O D O </span>
            <img src={sun} alt="sun" onClick={changeTheme} />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default DarkThemeHead;

import React from "react";
import light from "../assets/bg-desktop-light.jpg";
import "./ThemeHead.css";
import moon from "../assets/icon-moon.svg";

function LightThemeHead() {
  return (
    <div className="light-head">
      <img
        className="light-background"
        src={light}
        alt="light theme background"
      />
      <div className="light-content">
        <div className="heading">
          <span>T O D O </span>
          <img src={moon} alt="moon" />
        </div>
      </div>
    </div>
  );
}

export default LightThemeHead;

import React from "react";
import light from "../assets/bg-desktop-light.jpg";
import "./LightThemeHead.css";

function LightThemeHead() {
  return (
    <div className="light-head">
      <img
        className="light-background"
        src={light}
        alt="light theme background"
      />
      <div className="light-content"></div>
    </div>
  );
}

export default LightThemeHead;

import React from "react";
import light from "../assets/bg-desktop-light.jpg";
import "./ThemeHead.css";
import moon from "../assets/icon-moon.svg";
import Content from "./Content";

function LightThemeHead({ changeTheme }) {
  return (
    <div className="light-body">
      <div className="light-head">
        <img
          className="light-background"
          src={light}
          alt="light theme background"
        />
        <div className="light-content">
          <div className="heading">
            <span>T O D O </span>
            <img src={moon} alt="moon" onClick={changeTheme} />
          </div>
        </div>
        <Content />
      </div>
    </div>
  );
}

export default LightThemeHead;

import React from "react";
import light from "../assets/bg-desktop-light.jpg";
import "./ThemeHead.css";
import moon from "../assets/icon-moon.svg";
import checkicon from "../assets/icon-cross.svg";

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


          <div className="addTodo">
            <div></div>
            <input type="text" placeholder="Create a new todo..." />
          </div>


        </div>
      </div>
    </div>
  );
}

export default LightThemeHead;

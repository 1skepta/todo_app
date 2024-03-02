import React from "react";
import "./ThemeHead.css";
import cross from "../assets/icon-cross.svg";

function Content() {
  return (
    <div>
      <div className="addTodo">
        <div>
          <span className="O"></span>
          <input type="text" placeholder="Create a new todo..." />
        </div>
      </div>
      <div className="listTodo">
        <div className="items">
          <span className="O o"></span>
          <span className="text">Complete online javascript course</span>
          <img className="cross" src={cross} alt="cross" />
        </div>
        <div className="items">
          <span className="O o"></span>
          <span className="text">Jog around the park 3x</span>
          <img className="cross" src={cross} alt="cross" />
        </div>
        <div className="items">
          <span className="O o"></span>
          <span className="text">10 minutes meditation</span>
          <img className="cross" src={cross} alt="cross" />
        </div>
        <div className="items">
          <span className="O o"></span>
          <span className="text">Read for 1 hour</span>
          <img className="cross" src={cross} alt="cross" />
        </div>
        <div className="items">
          <span className="O o"></span>
          <span className="text">Pick up groceries</span>
          <img className="cross" src={cross} alt="cross" />
        </div>

        <div className="actions">
          <div className="one">
            <span>5 items left</span>
          </div>
          <div className="two">
            <span>All</span>
            <span>Active</span>
            <span>Completed</span>
          </div>
          <div className="three">
            <span>Clear Completed</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;

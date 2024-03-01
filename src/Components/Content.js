import React from "react";
import "./ThemeHead.css";

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
        <div>
          <span className="O"></span>
          <span>Complete online javascript course</span>
        </div>
      </div>
    </div>
  );
}

export default Content;

import React, { useState } from "react";
import "./ThemeHead.css";
import cross from "../assets/icon-cross.svg";

function Content() {
  const [todos, setTodos] = useState([
    "Complete online javascript course",
    "Jog around the park 3x",
    "10 minutes meditation",
    "Read for 1 hour",
    "Pick up groceries",
  ]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <div className="addTodo">
        <div>
          <span className="O"></span>
          <input
            type="text"
            placeholder="Create a new todo..."
            value={newTodo}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
      <div className="listTodo">
        {todos.map((todo, index) => (
          <div className="items" key={index}>
            <span className="O o"></span>
            <span className="text">{todo}</span>
            <img
              className="cross"
              src={cross}
              alt="cross"
              onClick={() => removeTodo(index)}
            />
          </div>
        ))}
        <div className="actions">
          <div className="one">
            <span>{todos.length} items left</span>
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

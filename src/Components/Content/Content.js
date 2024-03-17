import React, { useState } from "react";
import "../Style/Style.css";
import cross from "../../assets/icon-cross.svg";
import complete from "../../assets/icon-check.svg";

function Content() {
  const [todos, setTodos] = useState([
    { text: "Complete online javascript course", completed: false },
    { text: "Jog around the park 3x", completed: false },
    { text: "10 minutes meditation", completed: false },
    { text: "Read for 1 hour", completed: false },
    { text: "Pick up groceries", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
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

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const clearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
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
            {todo.completed ? (
              <img
                className="complete"
                src={complete}
                alt="complete"
                onClick={() => toggleComplete(index)}
              />
            ) : (
              <span
                className="O o"
                onClick={() => toggleComplete(index)}
              ></span>
            )}
            <span className="text">{todo.text}</span>
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
            <span>
              {todos.filter((todo) => !todo.completed).length} items left
            </span>
          </div>

          <div className="three">
            <span onClick={clearCompleted}>Clear Completed</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;

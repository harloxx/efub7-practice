import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  return (
    <div id="todo-list">
      <h1>Todo List</h1>
      <form>
        <input type="text" />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <div className="todo-actions"></div>
        </div>
      ))}
    </div>
  );
};

export default App;

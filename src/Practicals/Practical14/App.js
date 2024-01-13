// App.js
import React, { useState } from "react";
import "./Style.css";
import { FaCheck, FaTrash } from "react-icons/fa";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="todo-list-container">
      <h1>Todo List in React JS</h1>
      <div className="add-task-container">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="tasks-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <h4 onClick={() => toggleTask(task.id)}>
              {task.text}
              {task.completed && <FaCheck className="icon check-icon" />}
            </h4>
            <button className="btn" onClick={() => removeTask(task.id)}>
              <FaTrash className="icon trash-icon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

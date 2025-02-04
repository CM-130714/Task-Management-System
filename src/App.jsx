import React, { useState } from 'react';
import Board from './components/Board';
import TaskFilter from './components/TaskFilter';
import TaskForm from './components/TaskForm'; // Import the TaskForm component
import { v4 as uuidv4 } from 'uuid';
import './App.css';


const App = () => {
  const [tasks, setTasks] = useState([
    { id: uuidv4(), title: 'Task 1', status: 'todo', priority: 'high' },
    { id: uuidv4(), title: 'Task 2', status: 'inProgress', priority: 'medium' },
    { id: uuidv4(), title: 'Task 3', status: 'done', priority: 'low' },
  ]);

  const [filter, setFilter] = useState({ status: 'all', priority: 'all' });

  // Function to add a new task
  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} /> {/* Render the TaskForm component */}
      <TaskFilter filter={filter} setFilter={setFilter} />
      <Board tasks={tasks} setTasks={setTasks} filter={filter} />
    </div>
  );
};

export default App;

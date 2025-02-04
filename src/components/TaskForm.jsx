
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Correctly importing uuidv4
import "./TaskForm.css"

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('medium');
  const [status, setStatus] = useState('todo');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim()) {
      const newTask = {
        id: uuidv4(),  // Now uuidv4() is recognized
        title,
        priority,
        status,
      };

      addTask(newTask);
      setTitle('');
      setPriority('medium');
      setStatus('todo');
    }
  };

  return (
    <div className="task-form">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            required
          />
        </div>

        <div>
          <label>Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div>
          <label>Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="todo">To Do</option>
            <option value="inProgress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;

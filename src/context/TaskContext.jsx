/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Task 1', status: 'todo', priority: 'high' },
    { id: '2', title: 'Task 2', status: 'inProgress', priority: 'medium' },
  ]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
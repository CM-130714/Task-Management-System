/* eslint-disable react/prop-types */
import "./TaskFilter.css"

const TaskFilter = ({ filter, setFilter }) => {
  return (
    <div className='task-filter'>
      <label>Status:</label>
      <select
        value={filter.status}
        onChange={(e) => setFilter({ ...filter, status: e.target.value })}
      >
        <option value="all">All</option>
        <option value="todo">To Do</option>
        <option value="inProgress">In Progress</option>
        <option value="done">Done</option>
      </select>

      <label>Priority:</label>
      <select
        value={filter.priority}
        onChange={(e) => setFilter({ ...filter, priority: e.target.value })}
      >
        <option value="all">All</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
  );
};

export default TaskFilter;

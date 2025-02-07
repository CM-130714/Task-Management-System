/* eslint-disable react/prop-types */
import { Draggable } from 'react-beautiful-dnd';

const Task = ({ task, index }) => (
  <Draggable draggableId={task.id} index={index}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={{
          ...provided.draggableProps.style,
          marginBottom: '10px',
          padding: '10px',
          background: '#fff',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      >
        {task.title}
      </div>
    )}
  </Draggable>
);

export default Task;

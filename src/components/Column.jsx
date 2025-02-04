import React from 'react';
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';
import "./Column.css"

const Column = ({ column, tasks }) => (
  <div className='column-container' style={{ margin: '0 10px' }}>
    <h2>{column}</h2>
    <Droppable droppableId={column}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          style={{
            minHeight: '200px',
            background: '#f0f0f0',
            padding: '10px',
            borderRadius: '8px',
          }}
        >
          {tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>
);

export default Column;

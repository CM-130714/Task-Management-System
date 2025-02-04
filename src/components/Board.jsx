import React from 'react';
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';

const Board = ({ tasks, setTasks, filter }) => {
  const filteredTasks = tasks.filter(
    (task) =>
      (filter.status === 'all' || task.status === filter.status) &&
      (filter.priority === 'all' || task.priority === filter.priority)
  );

  const columns = ['todo', 'inProgress', 'done'];

  const handleOnDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) return;

    const updatedTasks = [...tasks];
    const task = updatedTasks.find((task) => task.id === result.draggableId);
    task.status = destination.droppableId;

    setTasks(updatedTasks);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className='board-container' style={{ display: 'flex' }}>
        {columns.map((column) => (
          <Column
            key={column}
            column={column}
            tasks={filteredTasks.filter((task) => task.status === column)}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default Board;

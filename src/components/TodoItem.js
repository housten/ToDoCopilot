import React from 'react';

function TodoItem({ todo, updateTodo }) {
  const { id, task } = todo;

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', id);
  };

  return (
    <div className="todo-item" draggable="true" onDragStart={handleDragStart}>
      <label>{task}</label>
    </div>
  );
}

export default TodoItem;
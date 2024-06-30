// components/TaskCard.js
import React from 'react';

const TaskCard = ({ task, onClick }) => {
  return (
    <div className="task-card" onClick={onClick}>
      <h3>{task.title}</h3>
    </div>
  );
};

export default TaskCard;
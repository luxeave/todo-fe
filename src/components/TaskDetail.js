// components/TaskDetail.js
import React from 'react';
import TaskForm from './TaskForm';

const TaskDetail = ({ task, onClose }) => {
  return (
    <div className="task-detail">
      <h2>{task.title}</h2>
      <p>Context: {task.context}</p>
      <p>Start Date: {task.start_date}</p>
      <p>End Date: {task.end_date}</p>
      <p>Expected End Date: {task.expected_end_date}</p>
      <p>Tags: {task.tags.join(', ')}</p>
      <p>Notes: {task.notes}</p>
      <TaskForm task={task} onClose={onClose} />
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default TaskDetail;
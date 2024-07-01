// src/components/TaskDetail.js
import React from 'react';
import TaskForm from './TaskForm';
import styled from 'styled-components';

const DetailWrapper = styled.div`
  height: calc(100vh - 100px);
  overflow-y: auto;
`;

const TaskDetail = ({ task, onClose }) => {
  if (!task) return null;

  return (
    <DetailWrapper>
      <h2>{task.title}</h2>
      <p>Context: {task.context}</p>
      <p>Start Date: {task.start_date}</p>
      <p>End Date: {task.end_date}</p>
      <p>Expected End Date: {task.expected_end_date}</p>
      <p>Tags: {task.tags.join(', ')}</p>
      <p>Notes: {task.notes}</p>
      <TaskForm task={task} onClose={onClose} />
      <button onClick={onClose}>Close</button>
    </DetailWrapper>
  );
};

export default TaskDetail;
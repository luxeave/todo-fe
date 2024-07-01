// src/components/TaskList.js
import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { useTheme } from '../context/ThemeContext';
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';
import styled from 'styled-components';

const ListWrapper = styled.div`
  height: calc(100vh - 100px);
  overflow-y: auto;
`;

const TaskList = ({ onSelectTask }) => {
  const { tasks, isLoading, error } = useTaskContext();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isFormOpen, setIsFormOpen] = useState(false);

  if (isLoading) return <div>Loading tasks...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <button onClick={toggleTheme}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <button onClick={() => setIsFormOpen(true)}>Create Task</button>
      <ListWrapper>
        {tasks.map(task => (
          <TaskCard 
            key={task.id || `task-${task.title}-${Date.now()}`}
            task={task} 
            onClick={() => onSelectTask(task)}
          />
        ))}
      </ListWrapper>
      {isFormOpen && (
        <TaskForm onClose={() => setIsFormOpen(false)} />
      )}
    </div>
  );
};

export default TaskList;
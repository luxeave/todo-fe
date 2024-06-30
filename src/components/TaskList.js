// components/TaskList.js
import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { useTheme } from '../context/ThemeContext';
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';
import TaskDetail from './TaskDetail';

const TaskList = () => {
  const { tasks, isLoading, error } = useTaskContext();
  const { isDarkMode, toggleTheme } = useTheme();
  const [selectedTask, setSelectedTask] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  if (isLoading) return <div>Loading tasks...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="task-list">
      <button onClick={toggleTheme}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <button onClick={() => setIsFormOpen(true)}>Create Task</button>
      {tasks.map(task => (
        <TaskCard 
          key={task.id || `task-${task.title}-${Date.now()}`}
          task={task} 
          onClick={() => setSelectedTask(task)}
        />
      ))}
      {isFormOpen && (
        <TaskForm key="task-form" onClose={() => setIsFormOpen(false)} />
      )}
      {selectedTask && (
        <TaskDetail 
          key={`detail-${selectedTask.id || Date.now()}`}
          task={selectedTask} 
          onClose={() => setSelectedTask(null)}
        />
      )}
    </div>
  );
};

export default TaskList;
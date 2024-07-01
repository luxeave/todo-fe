// src/App.js
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import Layout from './components/Layout';
import { TaskProvider } from './context/TaskContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [selectedTask, setSelectedTask] = useState(null);

  return (
    <ThemeProvider>
      <TaskProvider>
        <Layout>
          <TaskList onSelectTask={setSelectedTask} />
          {selectedTask ? (
            <TaskDetail task={selectedTask} onClose={() => setSelectedTask(null)} />
          ) : (
            <div>Select a task to view details</div>
          )}
        </Layout>
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;
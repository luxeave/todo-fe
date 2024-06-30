// App.js
import React from 'react';
import TaskList from './components/TaskList';
import { TaskProvider } from './context/TaskContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <div className="App">
          <h1>To-Do App</h1>
          <TaskList />
        </div>
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;
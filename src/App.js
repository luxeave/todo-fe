// App.js
import React from 'react';
import TaskList from './components/TaskList';
import { TaskProvider } from './context/TaskContext';

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <h1>To-Do App</h1>
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
// context/TaskContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import { getTasks, createTask, updateTask } from '../api';

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setIsLoading(true);
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const addTask = async (newTask) => {
    try {
      const createdTask = await createTask(newTask);
      setTasks([...tasks, createdTask]);
    } catch (err) {
      setError(err.message);
    }
  };

  const updateTaskItem = async (updatedTask) => {
    try {
      await updateTask(updatedTask);
      setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, isLoading, error, addTask, updateTaskItem }}>
      {children}
    </TaskContext.Provider>
  );
};
// api.js
const API_URL = 'http://localhost:8080/api';

export const getTasks = async () => {
  const response = await fetch(`${API_URL}/tasks`);
  if (!response.ok) throw new Error('Failed to fetch tasks');
  return response.json();
};

export const createTask = async (task) => {
  console.log('Sending task to server:', task);
  const response = await fetch(`${API_URL}/task`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  if (!response.ok) {
    const errorText = await response.text();
    console.error('Error creating task:', errorText);
    throw new Error(`Failed to create task: ${errorText}`);
  }
  return response.json(); // This should return the created task with its ID
};

export const updateTask = async (task) => {
  const response = await fetch(`${API_URL}/task/${task.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  if (!response.ok) throw new Error('Failed to update task');
  return response.json();
};
// components/TaskForm.js
import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

const TaskForm = ({ onClose, task = {} }) => {
  const { addTask, updateTaskItem } = useTaskContext();
  const [formData, setFormData] = useState({
    title: task.title || '',
    context: task.context || '',
    start_date: task.start_date || '',
    end_date: task.end_date || '',
    expected_end_date: task.expected_end_date || '',
    tags: task.tags || [], // Ensure tags is initialized as an empty array if not present
    notes: task.notes || '',
    status: task.status || 'active'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting task:', formData);
    if (task.id) {
      await updateTaskItem(formData);
    } else {
      await addTask(formData);
    }
    onClose();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTagsChange = (e) => {
    setFormData({ ...formData, tags: e.target.value.split(',') });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Task title"
        required
      />
      <input
        name="context"
        value={formData.context}
        onChange={handleChange}
        placeholder="Context"
      />
      <input
        name="start_date"
        type="date"
        value={formData.start_date}
        onChange={handleChange}
      />
      <input
        name="end_date"
        type="date"
        value={formData.end_date}
        onChange={handleChange}
      />
      <input
        name="expected_end_date"
        type="date"
        value={formData.expected_end_date}
        onChange={handleChange}
      />
      <input
        name="tags"
        value={formData.tags.join(',')}
        onChange={handleTagsChange}
        placeholder="Tags (comma-separated)"
      />
      <textarea
        name="notes"
        value={formData.notes}
        onChange={handleChange}
        placeholder="Notes"
      />
      <button type="submit">{task.id ? 'Update' : 'Create'} Task</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default TaskForm;
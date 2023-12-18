// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';
import TaskDetail from './Components/TaskDetail';

const App = () => {
  const apiUrl = 'http://localhost:3001/tasks';

  const handleAddTask = async (task) => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        throw new Error('Failed to add task');
      }

      // Fetch updated task list after adding a new task
      // Implement this based on your specific API structure
      // For simplicity, re-fetch the entire task list
      // You may want to optimize this in a real-world scenario
      window.location.reload();
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/tasks/add" element={<TaskForm onSubmit={handleAddTask} />} />
          <Route path="/tasks/:id" element={<TaskDetail apiUrl={apiUrl} />} />
          <Route path="/tasks" element={<TaskList apiUrl={apiUrl} />} />
          <Route path="/" element={<TaskList apiUrl={apiUrl} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

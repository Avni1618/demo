// TaskDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskDetail = ({ match, history }) => {
  const [task, setTask] = useState(null);

  useEffect(() => {
    const taskId = match.params.id;
    axios.get(`https://jsonplaceholder.typicode.com/todos/${taskId}`)
      .then(response => {
        setTask(response.data);
      })
      .catch(error => {
        console.error('Error fetching task details:', error);
        history.push('/tasks'); // Redirect to task list if there is an error
      });
  }, [match.params.id, history]);

  return (
    <div>
      {task ? (
        <div>
          <h2>Task Details</h2>
          <p>Title: {task.title}</p>
          <p>Description: {task.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TaskDetail;

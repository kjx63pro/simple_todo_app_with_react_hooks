import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Create Todo App',
      isCompleted: false,
    },
    {
      text: 'Learn Redux',
      isCompleted: false,
    },
    {
      text: 'Posts on Instagram',
      isCompleted: false,
    },
  ]);

  return (
    <div className='app'>
      <h1>Let's Build a Todo App🚀❗️</h1>
      <Todo todos={todos} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import AddForm from './components/AddForm';

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

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className='app'>
      <h1>Let's Build a Todo App🚀❗️</h1>
      <Todo todos={todos} />
      <AddForm addTodo={addTodo} />
    </div>
  );
}

export default App;

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

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  return (
    <div className='app'>
      <h2>Simle Todo App with React Hooks🚀</h2>
      <Todo todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo} />
      <hr />
      <AddForm addTodo={addTodo} />
    </div>
  );
}

export default App;

import React from 'react';

const Todo = ({ todos }) => {
  return (
    <div className='todo'>
      {todos.map((todo, index) => (
        <p>{todo.text}</p>
      ))}
    </div>
  );
};

export default Todo;

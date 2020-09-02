import React from 'react';
import './Todo.css';

import { Button } from '@material-ui/core';

const Todo = ({ todos, deleteTodo }) => {
  return (
    <div className='todo'>
      {todos.map((todo, index) => (
        <div className='todo__list'>
          <p>{todo.text}</p>
          <div className='todo__button'>
            <Button
              onClick={() => deleteTodo(index)}
              variant='contained'
              color='secondary'
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;

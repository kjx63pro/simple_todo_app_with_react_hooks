import React, { useState } from 'react';
import './AddForm.css';

const AddForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <div className='addForm'>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setValue(e.target.value)}
          type='text'
          placeholder='Add New Todo...'
          value={value}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddForm;

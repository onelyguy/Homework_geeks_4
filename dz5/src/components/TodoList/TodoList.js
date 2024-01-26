import React from 'react';
import Todo from '../todo/Todo';
import classes from './todoList.module.css';
import { useState } from 'react';

const TodoList = ({tasks, handleDelete, handleDone, handleEdit}) => {
  const [currentEdit, setCurrentEdit] = useState('')
  return (
    <div className={classes.list}>
      {
        tasks.map((task, index) =>
          <Todo 
            key={task.id} 
            task={task} 
            handleDelete={handleDelete} 
            index={index} 
            handleDone={handleDone}
            handleEdit={handleEdit}
            handleCurrent={setCurrentEdit}
            isEdit={currentEdit === task.id}
          />
        )
      }
    </div>
  );
};

export default TodoList;

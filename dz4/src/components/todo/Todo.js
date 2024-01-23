import React from 'react';
import classes from './todo.module.css';
import Button from '../button/Button';


function Todo ({task, handleDelete, index,handleDone}) {
  return (
    <div className={`${classes.todo} ${task.completed && classes.isTrue}`}>
        <p>{index+1} {task.task}</p>
      <Button action={()=>handleDone(task.id)} text={'Done'}/>
      <Button action={()=>handleDelete(task.id)} text={'Delete'}/>
    </div>
  )
};

export default Todo;

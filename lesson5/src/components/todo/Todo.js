import React from 'react';
import classes from './todo.module.css';
import Button from '../button/Button';
import { useState } from 'react';

function Todo ({task, handleDelete, index, handleDone, handleEdit, handleCurrent, isEdit}) {
  const [newTitle, setNewTitle] = useState(task.task)
  return (
    <>{isEdit
      ? <div className={classes.edit}>
        <input
          type='text'
          value={newTitle}
          onChange={event => setNewTitle(event.target.value)}
        />
        <Button action={() => handleEdit({
          ...task, task: newTitle
        })} text={'Save'}/>
        <Button action={() => handleEdit(task.id)} text={'Cansel'}/>
      </div>
      : <div className={`${classes.todo} ${task.completed && classes.isDone} `}>
        <p>{index+1} {task.task}</p>
        <Button action={() => handleCurrent(task.id)} text={'Edit'}/>
        <Button action={() => handleDone(task.id)} text={'Done'}/>
        <Button action={() => handleDelete(task.id)} text={'Delete'}/>
      </div>
    }
    </>
  )
};

export default Todo;

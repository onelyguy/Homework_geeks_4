import React from 'react';
import Todo from '../todo/Todo';
import classes from './todoList.module.css';


const TodoList = ({tasks, handleDelete, handleDone}) => {
  return (
    <div className={classes.list}>
      {
        tasks.map((task, index) =>
          <Todo key={task.id} task={task} handleDelete={handleDelete} index={index} handleDone={handleDone}/>
        )
      }
    </div>
  );
};

export default TodoList;

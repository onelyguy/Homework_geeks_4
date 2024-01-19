import React from 'react'
import Todo from '../todo/Todo'
import classes from './todoList.module.css'

function TodoList({tasks, handleDelete}) {
  return (
    <div className={classes.list}>
      {
        tasks.map(task =>
          <Todo task={task} handleDelete={handleDelete}/>
        )
      }
    </div>
  )
}

export default TodoList
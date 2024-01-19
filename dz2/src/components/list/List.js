import React from 'react'

function List({tasks}) {
  return (
    <div>
        {tasks.map(task => <p>{task.id} {task.task}</p>)}
    </div>
  )
}

export default List
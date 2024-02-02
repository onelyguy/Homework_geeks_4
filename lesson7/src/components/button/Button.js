import React from 'react'

function Button({action, text}) {
  return (
    <button onClick={action}>{text}</button>
  )
}

export default Button

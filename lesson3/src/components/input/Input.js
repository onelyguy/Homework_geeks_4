import React from 'react'
import classes from './input.module.css'

function Input({type, placeholder, onChangeInput}) {
  return (
    <input 
        type={type} 
        placeholder={placeholder} 
        onChange={onChangeInput}
    />
  )
}

export default Input
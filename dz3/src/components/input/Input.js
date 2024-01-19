import React from 'react'
import classes from './input.module.css'

function Input({type, placeholder, onChangeInput, value}) {
  return (
    <input 
        type={type} 
        placeholder={placeholder} 
        onChange={onChangeInput}
        value={value}
    />
  )
}

export default Input
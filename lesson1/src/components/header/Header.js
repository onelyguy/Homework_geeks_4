import React from 'react'
import classes from './header.module.css'

function Header({navbar}) {
  return (
    <ul className={classes.list}>
      {navbar.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  )
}

export default Header;
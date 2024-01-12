import React from 'react'

function User({name, age, country, city}) {
  return (
    <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Country: {country}</p>
        <p>City: {city}</p>
    </div>
  )
}

export default User
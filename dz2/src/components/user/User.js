import React from 'react'

function User({name, age}) {
  return (
    <div>
        {`Name ${name}, age ${age}`}
    </div>
  )
}

export default User
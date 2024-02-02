import React, { useState } from 'react';
import classes from './UsersPage.module.css';


const UsersPage = ({users}) => {
  const isUser= false
  const [user1, setUser1] = useState({})

  const getUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response=>response.json())
    .then(data => setUser1(data))
  }

  return (
    <div>
      {users.map(user=>
        <div key={user.id} className={classes.info}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <button onClick={()=>getUser(user.id)}>Подробнее</button>
          { user1.id === user.id && 
            <>
              <div>{user?.address?.street}</div>
              <div>{user?.company?.name}</div>
            </>
          }
        </div>
      )}
    </div>
  );
};

export default UsersPage;
import React, { useState } from 'react';
import classes from './UsersPage.module.css';

const UsersPage = ({users}) => {
  const [isUser, setIsUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  const getUserDetails = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUserDetails(data));
  };

  const handleUser = (id) => {
    if (isUser === id) {
      setIsUser(null)
    } else {
      setIsUser(id);
      getUserDetails(id);
    }
  };

  return (
    <div>
      {users.map((user) => (
        <div key={user.id} className={classes.info}>
          <p>{`Name: ${user.name}`}</p>
          <p>{`Email: ${user.email}`}</p>
          <p>{`Phone number: ${user.phone}`}</p>
          <button onClick={() => handleUser(user.id)}>Подробнее</button>
          {isUser === user.id && userDetails && (
            <div>
              <p>Подробная информация</p>
              <p>{`Address: ${userDetails.address.street}, ${userDetails.address.suite}, ${userDetails.address.city}`}</p>
              <p>{`Company name: ${userDetails.company.name}`}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default UsersPage;

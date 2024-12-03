import React, { useState, useEffect } from 'react';
import UserCard from './UserCard'
import axios from "axios";

const UserList = () => {
    // useState hook to store the list of users
    const [listOfUser, setListOfUser] = useState([]); // Initially, the list is an empty array


  // useState hook to handle potential errors
  const [error, setError] = useState(null);

  // useEffect hook to fetch data
  useEffect(() => {

    // Making a GET request to fetch the list of users
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        console.log(response.data);
        // When the request is successful, set the fetched data into the state
        setListOfUser(response.data); 
      })
      .catch((error) => {
        // If there is an error during the request, set the error message to the state
        setError('Error fetching users');
        console.error("There was an error fetching the users:", error);
      });
  }, []); // The empty array ensures this effect runs only once when the component is mounted
  
  return (
      <div className="user-list-container">
          {error && <p>{error}</p>} {/* Mostra l'errore */}
          <ul className="user-list">
              {listOfUser.map((user) => (
                  <li key={user.id}>
                      <UserCard user={user} /> {/* Passa l'oggetto user */}
                  </li>
              ))}
          </ul>
      </div>
  );
};
 
  
  export default UserList;
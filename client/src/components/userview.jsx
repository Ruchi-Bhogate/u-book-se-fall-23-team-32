import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function userview() {
  /*const [username, setEmailOrUsername] = useState('')
  const [firstname, SetFirstName] = useState('')
  const [lastname, SetLastName] = useState('')
  const [email, SetEmail] = useState('')*/
  const [data, setdata] = useState('');

  //change fetch address to backend function 
  const response = () => {
    return fetch('http://localhost:8080/fetch')
      .then((res) => res.json())
      .then((d) => setData(d))
  }
  useEffect(() => {
    response();
  }, []);

  
    return (
    <div >
      <h1>Profile</h1> 
      <p>{data.username}</p>
      <p>{data.firstname}</p>
      <p>{data.lastname}</p>
      <p>{data.email}</p>
    </div>
  );
}

export default userview;
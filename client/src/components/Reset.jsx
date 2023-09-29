

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';

function Reset() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const SendReset = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/Forgot',{password})
    .then(res => {
        console.log("login: "+ res.data);
        if(res.data.Status === "Success") {
            navigate('/login')
        }
    })
  };

  return (
    <div >
      <form onSubmit={SendReset}>
        <div>
          <label>Password Reset:</label>
          <input 
            type="password"
            placeholder = "Enter New password"
            autoComplete="off"
            name = "password"
            className="Form-control rounde-0"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Recover</button>
      </form> 
      
    </div>
  );
}

export default Reset;

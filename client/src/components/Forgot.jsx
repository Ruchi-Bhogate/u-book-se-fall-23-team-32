

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';

function Forgot() {
  const [email, GetEmail] = useState('');
  const navigate = useNavigate()
  const SendReset = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/Forgot',{email})
    .then(res => {
        console.log("login: "+ res.data);
        if(res.data.Status === "Success") {
            navigate('/login')
        }
    })
  };

  return (
    <div >
      <form onSubmit={Forgot}>
        <div>
          <label>Password Recovery:</label>
          <input type="email" value={email} onChange={(e) => GetEmail(e.target.value)} />
        </div>
        <button type="submit">Recover</button>
      </form> 
      
    </div>
  );
}

export default Forgot;

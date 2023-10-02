

import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Reset() {
  
  const [password, setPassword] = useState('');
  const {id} = useParams()
  const doReset = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/reset/${id}', {
        password
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error with new password', error.response.data);
    }
  };

  return (
    <div >
      <form onSubmit={doReset}>
        <div>
          <label>Make New Password:</label>
          <input type="password" value={password} placeholder = "new password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Reset;

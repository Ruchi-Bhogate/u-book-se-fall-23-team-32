

import React, { useState } from 'react';
import axios from 'axios';

function Forgot() {

  const [emailOrUsername, setEmailOrUsername] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/forgot', {
        emailOrUsername
      });
      console.log(response.data);
    } catch (error) {
      console.error('Not a valid email or username:', error.response.data);
    }
  };

  return (
    <div >
      <form onSubmit={sendEmail}>
        <div>
          <label>Password Recovery:</label>
          <input type="text" placeholder = "email or username" value={emailOrUsername} onChange={(e) => setEmailOrUsername(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Forgot;

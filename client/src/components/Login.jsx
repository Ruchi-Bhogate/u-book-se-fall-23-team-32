

import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';

function Login() {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/login', {
        emailOrUsername,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error logging in:', error.response.data);
    }
  };

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email or Username:</label>
          <input type="text" value={emailOrUsername} onChange={(e) => setEmailOrUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign up</a></p>
      <a href="http://localhost:8080/auth/google">Login with Google</a>
      <div>
       <a href="/forgot">forgot password</a>
      </div>
    </div>
  );
}

export default Login;

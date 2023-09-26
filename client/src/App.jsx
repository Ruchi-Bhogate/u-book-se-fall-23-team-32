import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [name, SetName] = useState('')
  const [email, SetEmail] = useState('')
  const [password, SetPassword] = useState('')
  return (
    <div>
      <h1>Registration</h1>
      <form>
        <input
          value={name}
          onChange={(e) => SetName(e.target.value)}
          type = "text"
          placeholder = "Username"
        />
        <input
          value={email}
          onChange={(e) => SetEmail(e.target.value)}
          type = "text"
          placeholder = "Email"
        />
        <input
          value={password}
          onChange={(e) => SetPassword(e.target.value)}
          type = "text"
          placeholder = "Password"
        /> 
      </form>
    </div>
  )
}
export default App;

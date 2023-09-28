import { useState } from 'react';

function Signup() {
  const [name, SetName] = useState('')
  const [email, SetEmail] = useState('')
  const [password, SetPassword] = useState('')
  
  async function Register(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:8080/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          password
        }),
    })
    const data = await response.json()
    console.log(data)
  } 
  
  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={Register}>
        <input
          //value={name}
          onChange={(e) => SetName(e.target.value)}
          type = "text"
          placeholder = "Username"
        />
        <br />
        <input
          //value={email}
          onChange={(e) => SetEmail(e.target.value)}
          type = "text"
          placeholder = "Email"
        />
        <br />
        <input
          //value={password}
          onChange={(e) => SetPassword(e.target.value)}
          type = "text"
          placeholder = "Password"
        /> 
        <input type = "Submit" value = "Register"/>
      </form>
    </div>
  )
}
export default Signup;

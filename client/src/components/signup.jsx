import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [firstname, SetFirstName] = useState('')
  const [lastname, SetLastName] = useState('')
  const [email, SetEmail] = useState('')
  const [password, SetPassword] = useState('')
  const [confirmpassword, SetConfirmPassword] = useState('')
  const [role, SetRole] = useState('')
  const [signUpResponseMsg, setSignUpResponseMsg] = useState('')
  
  async function Register(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:8080/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          password,
          confirmpassword,
          role
        }),
    })
    const data = await response.json()
    console.log(data)
    setSignUpResponseMsg(data.message)
    if(signUpResponseMsg != "password not matched") {
      navigate("/login")
    }

  } 
  
  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={Register}>
        <input
          //value={name}
          onChange={(e) => SetFirstName(e.target.value)}
          type = "text"
          placeholder = "first name"
        />
        <br />
        <input
          //value={name}
          onChange={(e) => SetLastName(e.target.value)}
          type = "text"
          placeholder = "last name"
        />
        <br />
        <input
          //value={email}
          onChange={(e) => SetEmail(e.target.value)}
          type = "text"
          placeholder = "Email"
        />
        <br />
        <label for="roles">Choose a role:</label>
  <select onChange={(e) => SetRole(e.target.value)} name="roles" id="roles">
    <option value="" disabled selected>select option</option>
    <option value="user">User</option>
    <option value="renter">Renter</option>
    <option value="admin">Admin</option>
    </select>
    <br />
        <input
          //value={password}
          onChange={(e) => SetPassword(e.target.value)}
          type = "text"
          placeholder = "Password"
        /> 
        <br />
         <input
          //value={password}
          onChange={(e) => SetConfirmPassword(e.target.value)}
          type = "text"
          placeholder = "confirm Password"
        /> 
        <br />
        <input type = "Submit" value = "Register"/>
        <p>{signUpResponseMsg}</p>
      </form>
    </div>
  )
}
export default Signup;

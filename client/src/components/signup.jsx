import React, { useState } from 'react';
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
  const [securityQuestion1, setSecurityQuestion1] = useState('');
  const [securityAnswer1, setSecurityAnswer1] = useState('');
  const [securityQuestion2, setSecurityQuestion2] = useState('');
  const [securityAnswer2, setSecurityAnswer2] = useState('');
  const SECURITY_QUESTIONS1 = [
    'What was the name of your first pet?',
    'What was your childhood nickname?',
    'In what city you were born?',
];
const SECURITY_QUESTIONS2 = [
  'what is your mothers maiden name?',
  'What high school did you attend?',
  'What was your favorite food as a child?',
];
  
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
          role,
          securityQuestion1,
          securityAnswer1,
          securityQuestion2,
          securityAnswer2
        }),
    })
    const data = await response.json()
    console.log(data)
    setSignUpResponseMsg(data.message)
    if(data.message === "ok") {
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
          type = "password"
          placeholder = "Password"
        /> 
        <br />
         <input
          //value={password}
          onChange={(e) => SetConfirmPassword(e.target.value)}
          type = "password"
          placeholder = "confirm Password"
        /> 
        <br />
        <select name="securityQuestion1" value={securityQuestion1} onChange={(e) => setSecurityQuestion1(e.target.value)}>
        <option value="" disabled selected>select security Question1</option>
          {SECURITY_QUESTIONS1.map((question, index) => (
        <option key={index} value={question}>
            {question}
        </option>
        ))}
        </select>
        <br />
        <input 
        type="text" 
        name="securityAnswer1" 
        placeholder="Ans for security question1" 
        onChange={(e) => setSecurityAnswer1(e.target.value)}
        />
        <br />
        <select name="securityQuestion2" value={securityQuestion2} onChange={(e) => setSecurityQuestion2(e.target.value)}>
        <option value="" disabled selected>select security Question2</option>
          {SECURITY_QUESTIONS2.map((question, index) => (
        <option key={index} value={question}>
            {question}
        </option>
        ))}
        </select>
        <br />
        <input 
        type="text" 
        name="securityAnswer2" 
        placeholder="Ans for security question2" 
        onChange={(e) => setSecurityAnswer2(e.target.value)}
        />
        <br />
        <input type = "Submit" value = "Register"/>

        <p>{signUpResponseMsg}</p>
      </form>
    </div>
  )
}
export default Signup;

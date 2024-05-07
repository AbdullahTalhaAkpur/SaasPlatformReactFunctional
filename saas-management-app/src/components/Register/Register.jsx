import React, { useState } from 'react'
import './register.css'
import logo from '../assets/agriverts-555.png';
import  { Link } from 'react-router-dom'


const Register = ({ onSwitchForm }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
        e.preventDefault();
        console.log();
  }
  
  return (
          <div className="register-container">
          <div className="logo-container">
            <img src={logo} alt="Agriverts logo" />
          </div>
       <div className="register-card-container">
       <div className="register-card">
          <h2 className='register'>Register</h2>
       <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} name='name' id='name' placeholder='Full Name'></input>
          <label htmlFor="email">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />
          <label htmlFor="password">Password</label>
          <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" />
          <button type="submit">Register</button>
          <p>Already have an account ? <Link to="../Login/Login.jsx" className='login'>Login</Link></p>
       </form>
         </div>
        </div>
       </div>
  )
}


export default Register
import React, { useState } from 'react'
import './register.css'
import logo from '../assets/agriverts-555.png';
import { useNavigate } from 'react-router-dom'
import { register } from '../auth/auth';
import { useTranslation } from 'react-i18next';

const Register = ({ onSwitchForm }) => {
  const {t} = useTranslation();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
 
  const handleSubmit = (e) => {
        e.preventDefault();
        try {
          register(email, pass, name, username)
          navigate('/Dashboard');        
        } catch (error) {
          alert(error.message)
        }
  }
  
  return (
          <div className="register-container">
          <div className="logo-container">
            <img src={logo} alt="Agriverts logo" />
          </div>
       <div className="register-card-container">
       <div className="register-card">
          <h2 className='register'>{t('Register')}</h2>
       <form onSubmit={handleSubmit}>
          <label htmlFor="name">{t('Full Name')}</label>
          <input value={name} onChange={(e) => setName(e.target.value)} type='text' name='name' id='name' ></input>
          <label htmlFor="username">Username</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} type='text' name='username' id='username' ></input>
          <label htmlFor="email">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />
          <label htmlFor="password">Password</label>
          <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" />
          <button type="submit">Register</button>
          <p>Already have an account ? <a className='loginlink' href='#login' onClick={() => onSwitchForm('login')}>Login</a></p>
       </form>
         </div>
        </div>
       </div>
  )
}


export default Register
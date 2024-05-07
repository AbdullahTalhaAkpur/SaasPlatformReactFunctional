import React from 'react';
import  './login.css';
import logo from '../assets/agriverts-555.png';

const Login = ({ onSwitchForm }) => {
      const handleSubmit = (e) => {
         e.preventDefault();
      }
      return (
         <div className="login-container">
            <div className="logo-container">
              <img src={logo} alt="Agriverts logo" />
            </div>
         <div className="login-card-container">
         <div className="login-card">
            <h2 className='login'>Login</h2>
         <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
            <button type="submit">Login</button>
            <p>Dont have an account ? <a className='register' href='#register' onClick={() => onSwitchForm('register')}>Register</a></p>
         </form>
           </div>
          </div>
         </div>
      )   
}

export default Login;
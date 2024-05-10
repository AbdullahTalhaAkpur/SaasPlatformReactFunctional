import React, { useState } from 'react';
import  './login.css';
import logo from '../assets/agriverts-555.png';
import { useHistory } from 'react-router-dom'
import { login } from '../auth/auth';

const Login = ({ onSwitchForm }) => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const history = useHistory();  
   
   const handleSubmit = (event) => {
         event.preventDefault();
         try {
            login(username, password);
            history.push('../Dashboard/Dashboard.jsx');
            } catch (error) {
            console.log(error);
         }
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
            <label htmlFor="email">Username</label>
            <input onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username" />
            <label htmlFor="password">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" />
            <button type="submit">Login</button>
            <p>Dont have an account ? <a className='registerlink' href='#register' onClick={() => onSwitchForm('register')}>Register</a></p>
         </form>
           </div>
          </div>
         </div>
      )   
}

export default Login;
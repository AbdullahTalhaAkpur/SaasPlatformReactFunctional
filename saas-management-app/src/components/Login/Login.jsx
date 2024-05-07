import React from 'react';
import  './login.css';
import logo from '../assets/agriverts-555.png';

const Login = () => {
      return (
         <div className="login-container">
            <div className="logo-container">
              <img src={logo} alt="Agrivers logo" />
            </div>
         <div className="login-card-container">
         <div className="login-card">
            <h2 className='login'>Login</h2>
         <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
            <button type="submit">Login</button>
            <p>Dont have an account ? <a href="#" className='register'>Register</a></p>
         </form>
           </div>
          </div>
         </div>
      )   
}

export default Login;
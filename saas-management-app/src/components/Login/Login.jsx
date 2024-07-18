import React, { useState } from 'react'
import './login.css'
import logo from '../assets/agriverts-555.png'
import { useNavigate } from 'react-router-dom'
import { login } from '../auth/auth'
import { useTranslation } from 'react-i18next'

const Login = ({ onSwitchForm }) => {
    const {t} = useTranslation()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();       

    const handleSubmit = (event) => {
          event.preventDefault();
          login(username, password);
          navigate('/Dashboard', { replace: true });
    }

  return (
          <div className="login-container">
          <div className='language-switcher-container'>
          </div>  
          <div className="logo-container">
            <img src={logo} alt="Agriverts logo" />
          </div>
       <div className="login-card-container">
       <div className="login-card">
          <h2 className='login'>{t('Login')}</h2>
       <form onSubmit={handleSubmit}>
          <label htmlFor="email">{t('Username')}</label>
          <input onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username" />
          <label htmlFor="password">{t('Password')}</label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" />
          <button type="submit">{t('Login')}</button>
          <p>{t('Dont have an account ? ')}<a className='registerlink' href='#register' onClick={() => onSwitchForm('register')}>{t('Register')}</a></p>
          <a className='registerlink' href='#forgotpassword' onClick={() => navigate('/forgot-password')}>{t('Forgot Password?')}</a>
       </form>
         </div>
        </div>
       </div>
  )
}

export default Login
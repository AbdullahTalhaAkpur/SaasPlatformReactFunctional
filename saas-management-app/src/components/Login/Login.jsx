import React, { useEffect, useState } from 'react';
import './login.css';
import logo from '../assets/agriverts-555.png';
import { useNavigate } from 'react-router-dom';
import { login } from '../auth/auth';
import { useTranslation } from 'react-i18next';
import { Select, MenuItem } from '@mui/material';

const Login = ({ onSwitchForm }) => {
  const { t, i18n } = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();       

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const handleSubmit = (event) => {
    event.preventDefault();
    login(username, password);
    localStorage.setItem('language', i18n.language);
    navigate('/Dashboard', { replace: true });
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <div className="login-container">
      <div className='language-switcher-container'>
        <Select
          value={i18n.language}
          onChange={(e) => changeLanguage(e.target.value)}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="tr">Turkish</MenuItem>
        </Select> 
      </div>  
      <div className="logo-container">
        <img src={logo} alt="Agriverts logo" />
      </div>
      <div className="login-card-container">
        <div className="login-card">
          <h2 className='login'>{t('login.title')}</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">{t('login.username')}</label>
            <input onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username" />
            <label htmlFor="password">{t('login.password')}</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" />
            <button type="submit">{t('login.submit')}</button>
            <p>{t('login.dont_have_account')} <a className='registerlink' href='#register' onClick={() => onSwitchForm('register')}>{t('login.register')}</a></p>
            <a className='registerlink' href='#forgotpassword' onClick={() => navigate('/forgot-password')}>{t('login.forgot_password')}</a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
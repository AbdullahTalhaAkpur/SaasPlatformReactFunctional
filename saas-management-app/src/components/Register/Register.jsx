import React, { useState, useEffect } from 'react';
import './register.css';
import logo from '../assets/agriverts-555.png';
import { useNavigate } from 'react-router-dom';
import { register } from '../auth/auth';
import { useTranslation } from 'react-i18next';

const Register = ({ onSwitchForm }) => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      register(email, pass, name, username);
      navigate('/Dashboard');        
    } catch (error) {
      alert(error.message);
    }
  };
  
  return (
    <div className="register-container">
      <div className="logo-container">
        <img src={logo} alt="Agriverts logo" />
      </div>
      <div className="register-card-container">
        <div className="register-card">
          <h2 className='register'>{t('register.title')}</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">{t('register.full_name')}</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type='text' name='name' id='name' />
            <label htmlFor="username">{t('register.username')}</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type='text' name='username' id='username' />
            <label htmlFor="email">{t('register.email')}</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />
            <label htmlFor="password">{t('register.password')}</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" />
            <button type="submit">{t('register.submit')}</button>
            <p>{t('register.already_have_account')} <a className='loginlink' href='#login' onClick={() => onSwitchForm('login')}>{t('register.login')}</a></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
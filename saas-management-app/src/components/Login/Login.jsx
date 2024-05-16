import React, { useState } from 'react'
import './login.css'
import logo from '../assets/agriverts-555.png'


const Login = ({ onSwitchForm }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (event) => {
          event.preventDefault();
          login(username, password)
    }

  return (
    <div>Login</div>
  )
}

export default Login
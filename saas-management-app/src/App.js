import React from 'react';
import  Login  from './components/Login/Login.jsx';
import { useState } from 'react';
import Register from './components/Register/Register.jsx';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const handleFormSwitch = (formType) => {
    setCurrentForm(formType);
  }

  return (
    <BrowserRouter>
    <div className="App">
      {
        currentForm === "login" ? (
          <Login onSwitchForm={() => handleFormSwitch('register')} /> 
        ) : (
          <Register onSwitchForm={() => handleFormSwitch('login')} />
        )
      } 
    </div>
    </BrowserRouter>
  );
}

export default App;
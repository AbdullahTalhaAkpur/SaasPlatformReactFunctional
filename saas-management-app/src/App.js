import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [formType, setFormType] = React.useState('login');

  const handleSwitchForm = (type) => {
    setFormType(type);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={formType === 'login'? <Login onSwitchForm={handleSwitchForm} /> : <Register onSwitchForm={handleSwitchForm} />} />
        <Route path='./components/Dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

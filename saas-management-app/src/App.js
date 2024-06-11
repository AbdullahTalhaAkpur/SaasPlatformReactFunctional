import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, Box, Toolbar } from '@mui/material';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Header from './components/Header/Header.jsx';
import Team from './components/Team/Team.jsx';
import Facilities from './components/Facilities/Facilities.jsx';
import Missions from './components/Missions/Missions.jsx';
import Exit from './components/Exit/Exit.jsx';
import Product from './components/Product/Product.jsx';
import Graphs from './components/Graphs/Graphs.jsx';
import Settings from './components/Settings/Settings.jsx';
import Chatbot from './components/Chatbot/Chatbot';
import ForgotPassword from './components/ForgotPassword/ForgotPassword.jsx';

function App() {
  const [formType, setFormType] = useState('login');
  const [members, setMembers] = useState(() => {
    const savedMembers = JSON.parse(localStorage.getItem('members'));
    return savedMembers || [];
  });
  const [productions, setProductions] = useState(() => {
    const savedProductions = JSON.parse(localStorage.getItem('productions'));
    return savedProductions || [];
  });

  useEffect(() => {
    localStorage.setItem('productions', JSON.stringify(productions));
  }, [productions]);

  useEffect(() => {
    localStorage.setItem('members', JSON.stringify(members));
  }, [members]);

  const handleSwitchForm = (type) => {
    setFormType(type);
  };


  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path="/" element={
          <div>
            {formType === 'login' 
              ? <Login onSwitchForm={handleSwitchForm} /> 
              : <Register onSwitchForm={handleSwitchForm} />}
          </div>
        } />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path="/dashboard/*" element={
          <Box sx={{ display: 'flex' }}>
            <Header />
            <Sidebar />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Toolbar />
              <Routes >
                <Route path='/home' element={<Dashboard />} />
                <Route path='/team' element={<Team members={members} setMembers={setMembers} />} />
                <Route path='/facilities' element={<Facilities />} />
                <Route path='/missions' element={<Missions members={members} />} />
                <Route path='/production-tracking' element={<Product productions={productions} setProductions={setProductions} />} />
                <Route path='/graphs' element={<Graphs />} />
                <Route path='/chatbot' element={<Chatbot />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/exit' element={<Exit />} />
              </Routes>
            </Box>
          </Box>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
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

function App() {
  const [formType, setFormType] = React.useState('login');

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
        <Route path="/dashboard/*" element={
          <Box sx={{ display: 'flex' }}>
            <Header />
            <Sidebar />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Toolbar />
              <Routes >
                <Route path='/home' element={<Dashboard />} />
                <Route path='/team' element={<Team/>} />
                <Route path='/facilities' element={<Facilities/>} />
                <Route path='/missions' element={<Missions/>} />
              </Routes>
            </Box>
          </Box>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
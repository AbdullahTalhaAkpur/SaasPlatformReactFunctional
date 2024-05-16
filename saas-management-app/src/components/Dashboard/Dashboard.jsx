import React from 'react'
import './dashboard.css'
import Team from './Team'
import Facilities from './Facilities'
import Missions from './Missions'
import Product from  './ProductTracking'
import Graphs from './Graphs'
import Settings from './Settings'
import Exit from './Exit'
import {Route, Routes } from 'react-router-dom'
import Sidebar from './Sidebar'
 
const Dashboard = () => {
  return (
    <div>
    <Sidebar />
    <Routes>
    <Route path="/dashboard/team" element={<Team />} />
          <Route path="/dashboard/facilities" element={<Facilities />} />
          <Route path="/dashboard/missions" element={<Missions />} />
          <Route path="/dashboard/product-tracking" element={<Product />} />
          <Route path="/dashboard/graphs" element={<Graphs />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/dashboard/exit" element={<Exit />} />
    </Routes> 
    </div>  
  )
}

export default Dashboard
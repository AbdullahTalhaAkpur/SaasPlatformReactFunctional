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
      <Route path='/Team'  element={Team}/>
      <Route path='/Facilities'  element={Facilities}/>
      <Route path='/Missions'  element={Missions}/>
      <Route path='/Product' element={Product}/>
      <Route path='/Graphs'  element={Graphs}/>
      <Route path='/Settings'  element={Settings}/>
      <Route path='/Exit'  element={Exit}/>
    </Routes> 
    </div>  
  )
}

export default Dashboard
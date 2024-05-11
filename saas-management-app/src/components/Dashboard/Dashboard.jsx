import React from 'react'
import './dashboard.css'
import Team from '../Team/Team'
import Facilities from '../Facilities/Facilities'
import Missions from '../Missions/Missions'
import Product from  '../Product/ProductTracking'
import Graphs from '../Graphs/Graphs'
import Settings from '../Settings/Settings'
import Exit from '../Exit/Exit'
import {Route, Routes } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
 
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
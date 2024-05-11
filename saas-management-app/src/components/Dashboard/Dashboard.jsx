import React from 'react'
import './dashboard.css'
import Team from '../Team/Team'
import Facilities from '../Facilities/Facilities'
import Missions from '../Missions/Missions'
import Product from  '../Product/ProductTracking'
import Graphs from '../Graphs/Graphs'
import Settings from '../Settings/Settings'
import Exit from '../Exit/Exit'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
 
const Dashboard = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/Team' exact Component={Team}/>
      <Route path='/Facilities' exact Component={Facilities}/>
      <Route path='/Missions' exact Component={Missions}/>
      <Route path='/Product' exact Component={Product}/>
      <Route path='/Graphs' exact Component={Graphs}/>
      <Route path='/Settings' exact Component={Settings}/>
      <Route path='/Exit' exact Component={Exit}/>
    </Routes>   
   </BrowserRouter>
  )
}

export default Dashboard
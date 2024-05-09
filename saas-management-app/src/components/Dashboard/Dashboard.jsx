import React from 'react'
import './dashboard.css'
import Team from '../Team'
import Facilities from '../Facilities'
import Missions from '../Missions'
import Product from  '../Product'
import Graphs from '../Graphs'
import Settings from '../Settings'
import Exit from '../Exit'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
 
const Dashboard = () => {
  return (
   <BrowserRouter>
    <Switch>
      <Route path='../Team' exact Component={Team}/>
      <Route path='../Facilities' exact Component={Facilities}/>
      <Route path='../Missions' exact Component={Missions}/>
      <Route path='../Product' exact Component={Product}/>
      <Route path='../Graphs' exact Component={Graphs}/>
      <Route path='../Settings' exact Component={Settings}/>
      <Route path='../Exit' exact Component={Exit}/>
    </Switch>   
   </BrowserRouter>
  )
}

export default Dashboard
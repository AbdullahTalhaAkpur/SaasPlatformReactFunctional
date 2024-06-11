import React from 'react'
import Facilities from '../Facilities/Facilities'
import Product from '../Product/Product'
import Missions from '../Missions/Missions'
import Graphs from '../Graphs/Graphs'
import './dashboard.css'


const Dashboard = () => {
  return (
    <div className='dashboard-container'>
       <Facilities/>
       <Product/>
       <Missions/>
       <Graphs/>
    </div>
  )
}

export default Dashboard
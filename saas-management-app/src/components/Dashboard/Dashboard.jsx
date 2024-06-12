import React, { useState, useEffect } from 'react';
import FacilitiesSummary from '../Summary/FacilitiesSummary';
import ProductSummary from '../Summary/ProductSummary';
import GraphsSummary from '../Summary/GraphsSummary';
import MissionsSummary from '../Summary/MissionsSummary';
import './dashboard.css';

const Dashboard = ({ facilities, productions, graphData }) => {
  const [missions, setMissions] = useState(() => {
    const savedMissions = JSON.parse(localStorage.getItem('missions'));
    return savedMissions || [];
  });

  useEffect(() => {
    localStorage.setItem('missions', JSON.stringify(missions));
  }, [missions]);

  return (
    <div className='dashboard-container'>
      <FacilitiesSummary facilities={facilities} />
      <ProductSummary productions={productions} />
      <MissionsSummary missions={missions} setMissions={setMissions} />
      <GraphsSummary data={graphData} />
    </div>
  );
};

export default Dashboard;
import React from 'react';
import FacilitiesSummary from '../Summary/FacilitiesSummary';
import ProductSummary from '../Summary/ProductSummary';
import MissionsSummary from '../Summary/MissionsSummary';
import GraphsSummary from '../Summary/GraphsSummary';
import './dashboard.css';

const Dashboard = ({ facilities, productions, missions, graphData }) => {
  return (
    <div className='dashboard-container'>
      <FacilitiesSummary facilities={facilities} />
      <ProductSummary productions={productions} />
      <MissionsSummary missions={missions} />
      <GraphsSummary data={graphData} />
    </div>
  );
};

export default Dashboard;
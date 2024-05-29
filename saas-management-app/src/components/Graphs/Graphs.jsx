import React from 'react'
import './graphs.css'
import { BarChart, LineChart } from '@mui/x-charts';


const Graphs = () => {
  return (
    <div>
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={500}
      height={300}
    />
    <BarChart 
       series={[
        { data: [35, 44, 24, 34]},
        { data: [35, 44, 24, 34]},
        { data: [15, 25, 30, 50]},
        { data: [60, 50, 15, 25]},
        { data: [21, 12, 36, 56]},
        { data: [3, 6, 9, 12]},
        { data: [4, 8, 12, 16]},
        { data: [52, 54, 33, 17]},
       ]}
       height={290}
       xAxis={[{ data: ['Q1','Q2','Q3','Q4'], scaleType: 'band' }]}
       margin= {{ top: 10, bottom: 30, left: 40, right: 10}}
    />
    </div>
  )
}

export default Graphs
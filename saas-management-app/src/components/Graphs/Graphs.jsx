import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './graphs.css';

const lineChartData = [
  { time: '21:14:18', value: 6 },
  { time: '21:14:26', value: 5.5 },
  { time: '21:14:31', value: 7 },
  { time: '21:14:37', value: 8.5 },
  { time: '21:14:42', value: 9 },
  { time: '21:14:49', value: 10 },
  { time: '21:14:53', value: 9.5 },
  { time: '21:15:02', value: 11 },
];

const barChartData = [
  { time: '21:14:18', value: 6 },
  { time: '21:14:26', value: 5.5 },
  { time: '21:14:31', value: 7 },
  { time: '21:14:37', value: 8.5 },
  { time: '21:14:42', value: 9 },
  { time: '21:14:49', value: 10 },
  { time: '21:14:53', value: 9.5 },
  { time: '21:15:02', value: 11 },
];

const Graphs = () => {
  return (
    <div className="graphs-container">
      <div className="chart">
        <h3>MARUL GÖBEKLİ</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineChartData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="time"
              label={{
                value: 'Zaman',
                position: 'insideBottomRight',
                offset: 10, // Adjusted offset value
                textAnchor: 'middle', // Center the label horizontally
                dy: 20, // Vertical offset
              }}
              className='time'
            />
            <YAxis label={{ value: 'Büyüklük', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Line type="monotone" dataKey="value" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="chart">
        <h3>MARUL GÖBEKLİ</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barChartData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="time"
              label={{
                value: 'Zaman',
                position: 'insideBottomRight',
                offset: 10, // Adjusted offset value
                textAnchor: 'middle', // Center the label horizontally
                dy: 20, // Vertical offset
              }}
              className='time'
            />
            <YAxis label={{ value: 'Büyüklük', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Graphs;
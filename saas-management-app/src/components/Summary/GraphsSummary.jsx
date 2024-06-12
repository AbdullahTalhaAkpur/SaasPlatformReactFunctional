import React from 'react';
import { Box, Typography } from '@mui/material';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

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

const GraphsSummary = () => {
  return (
    <Box p={2}>
      <Typography variant="h6">Grafikler</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={lineChartData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" label={{ value: 'Zaman', position: 'insideBottomRight', offset: 10, textAnchor: 'middle', dy: 20 }} />
          <YAxis label={{ value: 'Büyüklük', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default GraphsSummary;
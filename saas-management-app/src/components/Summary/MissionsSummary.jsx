import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';

const MissionsSummary = ({ missions = [] }) => {
  return (
    <Box p={2}>
      <Typography variant="h6">Görevler</Typography>
      <Grid container spacing={2}>
        {missions.slice(0, 3).map((mission) => (
          <Grid item xs={12} sm={6} md={4} key={mission.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{mission.name}</Typography>
                <Typography variant="body2">{mission.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MissionsSummary;
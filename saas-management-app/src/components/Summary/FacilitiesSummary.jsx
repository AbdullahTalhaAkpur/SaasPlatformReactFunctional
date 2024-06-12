import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';

const FacilitiesSummary = ({ facilities = [] }) => {
  return (
    <Box p={2}>
      <Typography variant="h6">Tesisler</Typography>
      <Grid container spacing={2}>
        {facilities.slice(0, 3).map((facility) => (
          <Grid item xs={12} sm={6} md={4} key={facility.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{facility.facilityName}</Typography>
                <Typography variant="body2">{facility.address}</Typography>
                <Typography variant="body2">{facility.company}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FacilitiesSummary;
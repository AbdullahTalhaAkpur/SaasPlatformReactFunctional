import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

const FacilitiesSummary = ({ facilities = [] }) => {
  const {t} = useTranslation()
  return (
    <Box p={2}>
      <Typography variant="h6">{t('dashboard.facilities')}</Typography>
      <Grid container spacing={2}>
        {facilities.slice(0, 3).map((facility) => (
          <Grid item xs={12} sm={6} md={4} key={facility.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{t('dashboard.facility_name')}: {facility.facilityName}</Typography>
                <Typography variant="body2">{t('dashboard.address')}: {facility.address}</Typography>
                <Typography variant="body2">{t('dashboard.company')}: {facility.company}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FacilitiesSummary;
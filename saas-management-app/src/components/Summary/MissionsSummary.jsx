import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

const MissionsSummary = ({ missions = [] }) => {
  const {t} = useTranslation();
  return (
    <Box p={2}>
      <Typography variant="h6">{t('dashboard.tasks')}</Typography>
      <Grid container spacing={2}>
        {missions.slice(0, 3).map((mission) => (
          <Grid item xs={12} sm={6} md={4} key={mission.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{mission.taskName}</Typography>
                <Typography variant="body2">{t('dashboard.employee')}: {mission.employee}</Typography>
                <Typography variant="body2">{t('dashboard.facility')}: {mission.facility}</Typography>
                <Typography variant="body2">{t('dashboard.status')} : {mission.completed ? 'Yapıldı' : 'Yapılıyor/Yapılacak'}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MissionsSummary;
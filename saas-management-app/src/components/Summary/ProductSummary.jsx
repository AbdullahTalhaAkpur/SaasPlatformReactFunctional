import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ProductSummary = ({ productions = [] }) => {
  const { t } = useTranslation();
  return (
    <Box p={2}>
      <Typography variant="h6">{t('dashboard.production_tracking')}</Typography>
      <Grid container spacing={2}>
        {productions.slice(0, 3).map((production) => (
          <Grid item xs={12} sm={6} md={4} key={production.id}>
            <Card>
              <CardContent>
                <Typography variant="h6"> {t('dashboard.product_type')} : {production.productType}</Typography>
                <Typography variant="body2">{t('dashboard.company')} : {production.company}</Typography>
                <Typography variant="body2">{t('dashboard.camera_code')}: {production.cameraCode}</Typography>
                <Typography variant="body2">{t('dashboard.facility')}: {production.facility}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductSummary;
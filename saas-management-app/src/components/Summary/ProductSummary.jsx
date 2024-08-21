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
                <Typography variant="h6">Ürün Türü: {production.productType}</Typography>
                <Typography variant="body2">Şirket: {production.company}</Typography>
                <Typography variant="body2">Kamera Kodu: {production.cameraCode}</Typography>
                <Typography variant="body2">Tesis: {production.facility}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductSummary;
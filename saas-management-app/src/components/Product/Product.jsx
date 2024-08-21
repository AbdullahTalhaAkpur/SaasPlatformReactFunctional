import React, { useState } from 'react';
import { Box, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Card, CardContent, Typography, IconButton, List } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const Product = ({ productions, setProductions }) => {
  const {t} = useTranslation();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    cameraCode: '',
    productType: '',
    facility: '',
    initialProductCount: '',
    finalProductCount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setProductions([...productions, { ...formData, id: productions.length + 1 }]);
    setFormData({
      company: '',
      cameraCode: '',
      productType: '',
      facility: '',
      initialProductCount: '',
      finalProductCount: ''
    });
    setOpen(false);
  };

  const handleDelete = (id) => {
    setProductions(productions.filter(production => production.id !== id));
  };

  return (
    <div>
      <Button variant="contained" color="primary" startIcon={<Add />} onClick={handleClickOpen}>
         {t('product.add_product')}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{t('product.dialog_title')}</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ mt: 2 }}>
            <TextField
              autoFocus
              margin="dense"
              name="company"
              label={t('product.company')}
              fullWidth
              value={formData.company}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="cameraCode"
              label={t('product.camera_code')}
              fullWidth
              value={formData.cameraCode}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="productType"
              label={t('product.product_type')}
              fullWidth
              value={formData.productType}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="facility"
              label={t('product.facility')}
              fullWidth
              value={formData.facility}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="initialProductCount"
              label={t('product.initial_product_count')}
              fullWidth
              value={formData.initialProductCount}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="finalProductCount"
              label={t('product.final_product_count')}
              fullWidth
              value={formData.finalProductCount}
              onChange={handleChange}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {t('product.cancel')}
          </Button>
          <Button onClick={handleSubmit} color="primary">
            {t('product.submit')}
          </Button>
        </DialogActions>
      </Dialog>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>{t('product.product_list')}</Typography>
        <List sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {productions.map((production) => (
            <Card key={production.id} sx={{ width: 300, mb: 2, position: 'relative' }}>
              <IconButton
                aria-label="delete"
                size="small"
                sx={{ position: 'absolute', top: 0, right: 0 }}
                onClick={() => handleDelete(production.id)}
              >
                <Delete />
              </IconButton>
              <CardContent>
                <Typography variant="h6" component="div">
                 {t('product.product_type')} :  {production.productType}
                </Typography>
                <Typography  sx={{ mb: 1.5 }} color="text">
                 {t('product.company')} : {production.company}
                </Typography>
                <Typography variant="body2">
                 {t('product.camera_code')} : {production.cameraCode}<br />
                 {t('product.facility')} : {production.facility}<br />
                 {t('product.initial_product_count')} : {production.initialProductCount}<br />
                 {t('product.final_product_count')} : {production.finalProductCount}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </List>
      </Box>
    </div>
  );
};

export default Product;
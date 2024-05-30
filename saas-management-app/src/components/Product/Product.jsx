import React, { useState } from 'react';
import { Box, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Card, CardContent, Typography, IconButton, List } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';

const Product = ({ productions, setProductions }) => {
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
        Ürün Ekle
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Üretim Takip</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ mt: 2 }}>
            <TextField
              autoFocus
              margin="dense"
              name="company"
              label="Şirket"
              fullWidth
              value={formData.company}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="cameraCode"
              label="Kamera Kodu"
              fullWidth
              value={formData.cameraCode}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="productType"
              label="Ürün Türü"
              fullWidth
              value={formData.productType}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="facility"
              label="Tesis"
              fullWidth
              value={formData.facility}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="initialProductCount"
              label="İlk Ürün Sayısı"
              fullWidth
              value={formData.initialProductCount}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="finalProductCount"
              label="Son Ürün Sayısı"
              fullWidth
              value={formData.finalProductCount}
              onChange={handleChange}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            İptal
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Ekle
          </Button>
        </DialogActions>
      </Dialog>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>Ürün Listesi</Typography>
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
                  Şirket: {production.company}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Ürün Türü: {production.productType}
                </Typography>
                <Typography variant="body2">
                  Kamera Kodu: {production.cameraCode}<br />
                  Tesis: {production.facility}<br />
                  İlk Ürün Sayısı: {production.initialProductCount}<br />
                  Son Ürün Sayısı: {production.finalProductCount}
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
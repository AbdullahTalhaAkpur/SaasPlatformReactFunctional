import React, { useState, useEffect } from 'react';
import './facilities.css';
import { Box, Button, Card, CardContent, Grid, TextField, Typography, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import { useTranslation} from 'react-i18next'

const Facilities = () => {
  const {t} = useTranslation();

  const [facilities, setFacilities] = useState(() => {
    const savedFacilities = JSON.parse(localStorage.getItem('facilities'));
    return savedFacilities || [];
  });

  const [openFacilityDialog, setOpenFacilityDialog] = useState(false);

  const [newFacility, setNewFacility] = useState({
    facilityName: '',
    address: '',
    company: ''
  });

  useEffect(() => {
    localStorage.setItem('facilities', JSON.stringify(facilities));
  }, [facilities]);

  const handleClickOpenFacilityDialog = () => {
    setOpenFacilityDialog(true);
  };

  const handleCloseFacilityDialog = () => {
    setOpenFacilityDialog(false);
  };

  const handleFacilityChange = (e) => {
    setNewFacility({
      ...newFacility,
      [e.target.name]: e.target.value
    });
  };

  const handleAddFacility = () => {
    const newId = facilities.length ? facilities[facilities.length - 1].id + 1 : 1;
    const updatedFacilities = [...facilities, { ...newFacility, id: newId }];
    setFacilities(updatedFacilities);
    setNewFacility({
      facilityName: '',
      address: '',
      company: ''
    });
    setOpenFacilityDialog(false);
  };

  const handleDeleteFacility = (id) => {
    const updatedFacilities = facilities.filter(facility => facility.id !== id);
    setFacilities(updatedFacilities);
  };

  return (
    <div>
      <Box p={2}>
        <Button variant="contained" color="primary" startIcon={<Add />} onClick={handleClickOpenFacilityDialog}>
          {t('facilities.add_facility')}
        </Button>
        
        {/* Facility Dialog */}
        <Dialog open={openFacilityDialog} onClose={handleCloseFacilityDialog}>
          <DialogTitle>{t('facilities.dialog_title')}</DialogTitle>
          <DialogContent>
            <TextField autoFocus margin="dense" name="facilityName" label={t('facilities.facility_name')} fullWidth value={newFacility.facilityName} onChange={handleFacilityChange} />
            <TextField margin="dense" name="address" label={t('facilities.address')} fullWidth value={newFacility.address} onChange={handleFacilityChange} />
            <TextField margin="dense" name="company" label={t('facilities.company')} fullWidth value={newFacility.company} onChange={handleFacilityChange} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseFacilityDialog} color="primary">
            {t('facilities.cancel')}
            </Button>
            <Button onClick={handleAddFacility} color="primary">
            {t('facilities.submit')}
            </Button>
          </DialogActions>
        </Dialog>

        <Grid container spacing={2} mt={2}>
          {facilities.map(facility => (
            <Grid item xs={12} sm={6} md={4} key={facility.id}>
              <Card>
                <CardContent style={{ textAlign: 'center', position: 'relative' }}>
                  <IconButton 
                    style={{ position: 'absolute', top: 0, right: 0 }}
                    onClick={() => handleDeleteFacility(facility.id)}
                  >
                    <Delete />
                  </IconButton>
                  <Typography variant="h6" style={{ marginTop: '10px' }}>
                    {facility.facilityName}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>{t('facilities.address')}:</strong> {facility.address}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>{t('facilities.company')}:</strong> {facility.company}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Facilities;
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Avatar, TextField, Button, Box } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

const CompanyProfile = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    companyEmail: '',
    companyAddress: '',
    companyPhone: '',
    companyLogo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        companyLogo: URL.createObjectURL(e.target.files[0])
      });
    }
  };

  return (
    <Card className="profile-card">
      <CardHeader
        avatar={
          <Avatar src={formData.companyLogo} className="profile-avatar">
            {formData.companyName[0]}
          </Avatar>
        }
        title="Şirket Profili"
        className="profile-header"
      />
      <CardContent>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            name="companyName"
            label="Şirket Adı"
            fullWidth
            value={formData.companyName}
            onChange={handleChange}
          />
          <TextField
            name="companyEmail"
            label="Şirket Email"
            fullWidth
            value={formData.companyEmail}
            onChange={handleChange}
          />
          <TextField
            name="companyAddress"
            label="Şirket Adresi"
            fullWidth
            value={formData.companyAddress}
            onChange={handleChange}
          />
          <TextField
            name="companyPhone"
            label="Şirket Numarası"
            fullWidth
            value={formData.companyPhone}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            component="label"
            startIcon={<PhotoCamera />}
          >
            Şirket Profili Resmi Yükle
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleImageChange}
            />
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CompanyProfile;

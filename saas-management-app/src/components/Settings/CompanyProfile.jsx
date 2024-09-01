import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, TextField, Button, Box } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import './companyProfile.css'; // Import the CSS file
import { useTranslation } from 'react-i18next';

const CompanyProfile = () => {
  const {t} = useTranslation();
  const [formData, setFormData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem('companyProfile'));
    return savedData || {
      companyName: '',
      companyEmail: '',
      companyAddress: '',
      companyPhone: '',
      companyLogo: ''
    };
  });

  useEffect(() => {
    localStorage.setItem('companyProfile', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData({
          ...formData,
          companyLogo: event.target.result
        });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <Card className="profile-card">
      <CardHeader
        title={t('company_profile.title')}
        className="profile-header"
      />
      <CardContent>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
          {formData.companyLogo && (
            <img src={formData.companyLogo} alt={t('company_profile.title')} className="company-logo" />
          )}
          <TextField
            name="companyName"
            label={t('company_profile.company_name')}
            fullWidth
            value={formData.companyName}
            onChange={handleChange}
          />
          <TextField
            name="companyEmail"
            label={t('company_profile.company_email')}
            fullWidth
            value={formData.companyEmail}
            onChange={handleChange}
          />
          <TextField
            name="companyAddress"
            label={t('company_profile.company_address')}
            fullWidth
            value={formData.companyAddress}
            onChange={handleChange}
          />
          <TextField
            name="companyNo"
            label={t('company_profile.company_no')}
            fullWidth
            value={formData.companyPhone}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            component="label"
            startIcon={<PhotoCamera />}
          >
              {t('company_profile.upload_company_logo')}
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
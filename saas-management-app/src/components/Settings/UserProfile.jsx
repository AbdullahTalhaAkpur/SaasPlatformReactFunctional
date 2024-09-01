import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, Avatar, TextField, Button, Box } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import './userProfile.css'; // Import the CSS file
import { useTranslation } from 'react-i18next';

const UserProfile = () => {
  const {t} = useTranslation();
  const [formData, setFormData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem('userProfile'));
    return savedData || {
      email: '',
      firstName: '',
      lastName: '',
      department: '',
      company: '',
      profilePicture: ''
    };
  });

  useEffect(() => {
    localStorage.setItem('userProfile', JSON.stringify(formData));
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
          profilePicture: event.target.result
        });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <Card className="profile-card">
      <CardHeader
        avatar={
          <Avatar src={formData.profilePicture} 
          sx={{ width: 150, height: 150 }}
          className="profile-avatar">
            {formData.firstName[0]}
          </Avatar>
        }
        title={t('user_profile.title')}
        className="profile-header"
      />
      <CardContent>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            name="email"
            label={t('user_profile.email')}
            fullWidth
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            name="firstName"
            label={t('user_profile.first_name')}
            fullWidth
            value={formData.firstName}
            onChange={handleChange}
          />
          <TextField
            name="lastName"
            label={t('user_profile.last_name')}
            fullWidth
            value={formData.lastName}
            onChange={handleChange}
          />
          <TextField
            name="department"
            label={t('user_profile.department')}
            fullWidth
            value={formData.department}
            onChange={handleChange}
          />
          <TextField
            name="company"
            label={t('user_profile.company')}
            fullWidth
            value={formData.company}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            component="label"
            startIcon={<PhotoCamera />}
          >
            {t('user_profile.upload_profile_picture')}
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

export default UserProfile;
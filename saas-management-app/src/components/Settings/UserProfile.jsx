import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, Avatar, TextField, Button, Box } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import './userProfile.css'; // Import the CSS file

const UserProfile = () => {
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
        title="Kullanıcı Profili"
        className="profile-header"
      />
      <CardContent>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            name="email"
            label="Email"
            fullWidth
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            name="firstName"
            label="Ad"
            fullWidth
            value={formData.firstName}
            onChange={handleChange}
          />
          <TextField
            name="lastName"
            label="Soyad"
            fullWidth
            value={formData.lastName}
            onChange={handleChange}
          />
          <TextField
            name="department"
            label="Departman"
            fullWidth
            value={formData.department}
            onChange={handleChange}
          />
          <TextField
            name="company"
            label="Şirket"
            fullWidth
            value={formData.company}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            component="label"
            startIcon={<PhotoCamera />}
          >
            Profil Resmi Yükle
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
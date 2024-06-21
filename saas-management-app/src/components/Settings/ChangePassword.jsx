import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import './changePassword.css'; // Import the CSS file

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChangePassword = (e) => {
    e.preventDefault();

    // Front-end validation
    if (newPassword !== confirmNewPassword) {
      setError('Yeni şifreler eşleşmiyor.');
      return;
    }

    // Simulate backend call
    setTimeout(() => {
      // You would normally make an API call here
      setError('');
      setSuccess('Şifreniz başarıyla değiştirildi.');
      // Clear form fields
      setCurrentPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
    }, 1000);
  };

  return (
    <Box className="change-password-container">
      <Typography variant="h6">Şifre Değiştir</Typography>
      <form onSubmit={handleChangePassword} className="change-password-form">
        <TextField
          label="Mevcut Şifre"
          type="password"
          fullWidth
          required
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Yeni Şifre"
          type="password"
          fullWidth
          required
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Yeni Şifre (Tekrar)"
          type="password"
          fullWidth
          required
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          margin="normal"
        />
        {error && <Typography color="error">{error}</Typography>}
        {success && <Typography color="primary">{success}</Typography>}
        <Button type="submit" variant="contained" color="primary">
          Şifreyi Değiştir
        </Button>
      </form>
    </Box>
  );
};

export default ChangePassword;
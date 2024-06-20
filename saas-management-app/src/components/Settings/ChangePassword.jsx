import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material'


const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')

    const handleChangePassword = (e) => {
          e.preventDefault();

          if (newPassword !== confirmPassword) {
                 setError('Şifreler eşleşmiyor.')
                 return;   
          }
    }

    setTimeout(() => {
          setError('');
          setSuccess('');
          setCurrentPassword('')
          setNewPassword('')
          setConfirmPassword('')
    }, 1000)
    
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              margin="normal"
            />
            {error && <Typography color="error">{error}</Typography>}
            {success && <Typography color="primary">{success}</Typography>}
            <Button type="submit" variant="contained" color="primary">
              Şifreyi Değiştir
            </Button>
          </form>
        </Box>
  )
}

export default ChangePassword;
import React, { useState } from 'react';
import './team.css';
import { Box, Button, Card, CardContent, Grid, TextField, Typography, Dialog, DialogActions, DialogContent, DialogTitle, Input, Avatar, IconButton, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import { useTranslation } from 'react-i18next'

const Team = ({ members, setMembers }) => {
  const {t} = useTranslation();
  const [open, setOpen] = useState(false);
  const [newMember, setNewMember] = useState({
    firstName: '',
    lastName: '',
    department: '',
    email: '',
    company: '',
    role: '',
    picture: null
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setNewMember({
      ...newMember,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewMember({
          ...newMember,
          picture: reader.result // Base64 string
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddMember = () => {
    const newId = members.length ? members[members.length - 1].id + 1 : 1;
    const updatedMembers = [...members, { ...newMember, id: newId }];
    setMembers(updatedMembers);
    localStorage.setItem('members', JSON.stringify(updatedMembers));
    setNewMember({
      firstName: '',
      lastName: '',
      department: '',
      email: '',
      company: '',
      role: '',
      picture: null
    });
    setOpen(false);
  };

  const handleDeleteMember = (id) => {
    const updatedMembers = members.filter(member => member.id !== id);
    setMembers(updatedMembers);
    localStorage.setItem('members', JSON.stringify(updatedMembers));
  };

  return (
    <div>
      <Box p={2}>
        <Button variant="contained" color="primary" startIcon={<Add />} onClick={handleClickOpen}>
        {t('team.add_member')}
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{t('team.dialog_title')}</DialogTitle>
          <DialogContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar src={newMember.picture}  style={{ width: 100, height: 100 }} />
              </Grid>
              <Grid item>
                <Input type="file" name="picture" fullWidth sx={{ marginTop: 2 }} onChange={handleFileChange} />
              </Grid>
            </Grid>
            <TextField autoFocus margin="dense" name="firstName" label={t('team.first_name')} fullWidth value={newMember.firstName} onChange={handleChange} />
            <TextField margin="dense" name="lastName" label={t('team.last_name')} fullWidth value={newMember.lastName} onChange={handleChange} />
            <TextField margin="dense" name="department" label={t('team.department')} fullWidth value={newMember.department} onChange={handleChange} />
            <TextField margin="dense" name="email" label={t('team.email')} fullWidth value={newMember.email} onChange={handleChange} />
            <TextField margin="dense" name="company" label={t('team.company')}  fullWidth value={newMember.company} onChange={handleChange} />
            <FormControl fullWidth margin="dense">
              <InputLabel id="role-label">{t('team.role')}</InputLabel>
              <Select
                labelId="role-label"
                name="role"
                value={newMember.role}
                onChange={handleChange}
                label={t('team.role')}
              >
                <MenuItem value="Yönetici">{t('team.roles.manager')}</MenuItem>
                <MenuItem value="Mühendis">{t('team.roles.engineer')}</MenuItem>
                <MenuItem value="Saha Çalışanı">{t('team.roles.field_worker')}</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
            {t('team.cancel')}
            </Button>
            <Button onClick={handleAddMember} color="primary">
            {t('team.submit')}
            </Button>
          </DialogActions>
        </Dialog>
        <Grid container spacing={2} mt={2}>
          {members.map(member => (
            <Grid item xs={12} sm={6} md={4} key={member.id}>
              <Card>
                <CardContent style={{ textAlign: 'center', position: 'relative' }}>
                  <Avatar 
                    src={member.picture || 'https://via.placeholder.com/100'}
                    style={{ width: 100, height: 100, margin: 'auto' }}
                  />
                  <IconButton 
                    style={{ position: 'absolute', top: 0, right: 0 }}
                    onClick={() => handleDeleteMember(member.id)}
                  >
                    <Delete />
                  </IconButton>
                  <Typography variant="h6" style={{ marginTop: '10px' }}>
                    {`${member.firstName} ${member.lastName}`}
                  </Typography>
                  <Box mt={2}>
                    <Grid container spacing={1}>
                      <Grid item xs={4} style={{ textAlign: 'left' }}>
                        <Typography variant="body2" color="textSecondary"><strong>{t('team.department')}:</strong></Typography>
                      </Grid>
                      <Grid item xs={8} style={{ textAlign: 'left' }}>
                        <Typography variant="body2" color="textSecondary">{member.department}</Typography>
                      </Grid>
                      <Grid item xs={4} style={{ textAlign: 'left' }}>
                        <Typography variant="body2" color="textSecondary"><strong>{t('team.email')}:</strong></Typography>
                      </Grid>
                      <Grid item xs={8} style={{ textAlign: 'left' }}>
                        <Typography variant="body2" color="textSecondary">{member.email}</Typography>
                      </Grid>
                      <Grid item xs={4} style={{ textAlign: 'left' }}>
                        <Typography variant="body2" color="textSecondary"><strong>{t('team.company')}:</strong></Typography>
                      </Grid>
                      <Grid item xs={8} style={{ textAlign: 'left' }}>
                        <Typography variant="body2" color="textSecondary">{member.company}</Typography>
                      </Grid>
                      <Grid item xs={4} style={{ textAlign: 'left' }}>
                        <Typography variant="body2" color="textSecondary"><strong>{t('team.role')}:</strong></Typography>
                      </Grid>
                      <Grid item xs={8} style={{ textAlign: 'left' }}>
                        <Typography variant="body2" color="textSecondary">{member.role}</Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};


export default Team;
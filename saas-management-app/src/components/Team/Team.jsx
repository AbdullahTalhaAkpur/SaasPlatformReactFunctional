import React, { useState } from 'react'
import './team.css'
import { Box, Button, Card, CardContent, Grid, TextField, Typography, Dialog, DialogActions, DialogContent, DialogTitle, Input, Avatar, IconButton, MenuItem, Select, FormControl, InputLabel } from '@mui/material'
import { Add, Delete } from '@mui/icons-material'

const Team = ({ members, setMembers }) => {
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
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleChange = (e) => {
    setNewMember({
      ...newMember,
      [e.target.name]: e.target.value
    });
  }

  const handleFileChange = (e) => {
    setNewMember({
      ...newMember,
      picture: e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : null
    });
  }

  const handleAddMember = () => {
    const newId = members.length ? members[members.length - 1].id + 1 : 1;
    const updatedMembers = [...members, { ...newMember, id: newId }];
    setMembers(updatedMembers);
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
  }

  const handleDeleteMember = (id) => {
    const updatedMembers = members.filter(member => member.id !== id);
    setMembers(updatedMembers);
  }

  return (
    <div>
      <Box p={2}>
        <Button variant="contained" color="primary" startIcon={<Add />} onClick={handleClickOpen}>
          Üye Ekle
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Üye Ekle</DialogTitle>
          <DialogContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar src={newMember.picture} style={{ width: 100, height: 100 }} />
              </Grid>
              <Grid item>
                <Input type="file" name="picture" fullWidth sx={{ marginTop: 2 }} onChange={handleFileChange} />
              </Grid>
            </Grid>
            <TextField autoFocus margin="dense" name="firstName" label="İsim" fullWidth value={newMember.firstName} onChange={handleChange} />
            <TextField margin="dense" name="lastName" label="Soyisim" fullWidth value={newMember.lastName} onChange={handleChange} />
            <TextField margin="dense" name="department" label="Departman" fullWidth value={newMember.department} onChange={handleChange} />
            <TextField margin="dense" name="email" label="Email" fullWidth value={newMember.email} onChange={handleChange} />
            <TextField margin="dense" name="company" label="Şirket" fullWidth value={newMember.company} onChange={handleChange} />
            <FormControl fullWidth margin="dense">
              <InputLabel id="role-label">Rol</InputLabel>
              <Select
                labelId="role-label"
                name="role"
                value={newMember.role}
                onChange={handleChange}
                label="Rol"
              >
                <MenuItem value="Yönetici">Yönetici</MenuItem>
                <MenuItem value="Mühendis">Mühendis</MenuItem>
                <MenuItem value="Saha Çalışanı">Saha Çalışanı</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              İptal
            </Button>
            <Button onClick={handleAddMember} color="primary">
              Ekle
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
                        <Typography variant="body2" color="textSecondary"><strong>Departman:</strong></Typography>
                      </Grid>
                      <Grid item xs={8} style={{ textAlign: 'left' }}>
                        <Typography variant="body2" color="textSecondary">{member.department}</Typography>
                      </Grid>
                      <Grid item xs={4} style={{ textAlign: 'left' }}>
                        <Typography variant="body2" color="textSecondary"><strong>Email:</strong></Typography>
                      </Grid>
                      <Grid item xs={8} style={{ textAlign: 'left' }}>
                        <Typography variant="body2" color="textSecondary">{member.email}</Typography>
                      </Grid>
                      <Grid item xs={4} style={{ textAlign: 'left' }}>
                        <Typography variant="body2" color="textSecondary"><strong>Şirket:</strong></Typography>
                      </Grid>
                      <Grid item xs={8} style={{ textAlign: 'left' }}>
                        <Typography variant="body2" color="textSecondary">{member.company}</Typography>
                      </Grid>
                      <Grid item xs={4} style={{ textAlign: 'left' }}>
                        <Typography variant="body2" color="textSecondary"><strong>Rol:</strong></Typography>
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
  )
}

export default Team
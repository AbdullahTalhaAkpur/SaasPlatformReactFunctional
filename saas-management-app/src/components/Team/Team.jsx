import React, { useState } from 'react'
import './team.css'
import { Box, Button, Card, CardContent, Grid, TextField, Typography, Dialog, DialogActions, DialogContent, DialogTitle, Input, Avatar } from '@mui/material'
import { Add } from '@mui/icons-material'

const Team = () => {  
  const [members, setMembers] = useState([]);
  const [open, setOpen] = useState(false);
  const [newMember, setNewMember] = useState({
    firstName: '',
    lastName: '',
    department: '',
    email: '',
    company: '',
    picture: null
  });

  const handleClickOpen = () => {
    setOpen(true)
  }
  
  const handleClose = () => {
    setOpen(false);
  }

  const handleChange = (e) => {
    setNewMember({
      ...newMember,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e) => {
    setNewMember({
      ...newMember,
      picture: e.target.files[0]
    })
  }

  const handleAddMember = () => {
    setMembers([...members, {...newMember, id: members.length + 1 }]);
    setNewMember({
      firstName: '',
      lastName: '',
      department: '',
      email: '',
      company: '',
      picture: null
    });
    setOpen(false);
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
                <Avatar src={newMember.picture ? URL.createObjectURL(newMember.picture) : null} style={{ width: 100, height: 100 }} />
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
                <CardContent style={{ textAlign: 'center' }}>
                  <Avatar 
                    src={member.picture ? URL.createObjectURL(member.picture) : 'https://via.placeholder.com/100'}
                    style={{ width: 100, height: 100, margin: 'auto' }}
                  />
                  <Typography variant="h6" style={{ marginTop: '10px' }}>
                    {`${member.firstName} ${member.lastName}`}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Departman:</strong> {member.department}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Email:</strong> {member.email}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Şirket:</strong> {member.company}
                  </Typography>
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
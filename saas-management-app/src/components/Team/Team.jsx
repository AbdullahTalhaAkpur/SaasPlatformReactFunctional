import React, { useState } from 'react'
import './team.css'
import { Box, Button, Card, CardContent, CardMedia, Grid, TextField, Typography, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { Add } from '@mui/icons-material'



const Team = () => {  
  const [members, setMembers] = useState([]);
  const [open, setOpen] = useState(false);
  const [newMember, setNewMember] = useState({
    name: '',
    lastname: '',
    department: '',
    email: '',
    company: '',
    picture: ''
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

  const handleAddMember = () => {
    setMembers([...members, {...newMember, id: members.length + 1 }]);
    setNewMember({
      name: '',
      lastname: '',
      department: '',
      email: '',
      company: '',
      picture: ''
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
        <TextField autoFocus margin="dense" name="firstName" label="İsim" fullWidth value={newMember.firstName} onChange={handleChange} />
        <TextField margin="dense" name="lastName" label="Soyisim" fullWidth value={newMember.lastName} onChange={handleChange} />
        <TextField margin="dense" name="picture" label="Resim URL" fullWidth value={newMember.picture} onChange={handleChange} />
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
            <CardMedia
              component="img"
              height="140"
              image={member.picture || 'https://via.placeholder.com/150'}
              alt={`${member.firstName} ${member.lastName}`}
            />
            <CardContent>
              <Typography variant="h6">{`${member.firstName} ${member.lastName}`}</Typography>
              <Typography variant="body2" color="textSecondary">{member.department}</Typography>
              <Typography variant="body2" color="textSecondary">{member.email}</Typography>
              <Typography variant="body2" color="textSecondary">{member.company}</Typography>
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
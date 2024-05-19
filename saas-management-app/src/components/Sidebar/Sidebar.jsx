// src/components/Sidebar.jsx
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import BusinessIcon from '@mui/icons-material/Business';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import BarChartIcon from '@mui/icons-material/BarChart';
import ChatIcon from '@mui/icons-material/Chat'; 
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import logo from '../assets/Logo_Dikey.png'; // Adjust the path to your logo file
import { Link} from 'react-router-dom';

const Sidebar = () => {

  

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
      }}
    >
      <Toolbar>
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{ width: '100%', height: '100%', padding: 2, margin:'0 auto', mt: 2 }}
        />
      </Toolbar>
      <List sx={{ mt: 2}} >
        <ListItem button component={Link} to="/home" sx={{paddingLeft: 6, '&:hover': {backgroundColor: '#bad28f' }}}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Ana Sayfa" />
        </ListItem>
        <ListItem button component={Link} to="/team" sx={{paddingLeft: 6, '&:hover': {backgroundColor: '#bad28f' }}}>
          <ListItemIcon><GroupIcon /></ListItemIcon>
          <ListItemText primary="Takım" />
        </ListItem>
        <ListItem button component={Link} to="/facilities" sx={{paddingLeft: 6, '&:hover': {backgroundColor: '#bad28f' }}}>
          <ListItemIcon><BusinessIcon /></ListItemIcon>
          <ListItemText primary="Tesisler" />
        </ListItem>
        <ListItem button component={Link} to="/missions" sx={{paddingLeft: 6, '&:hover': {backgroundColor: '#bad28f' }}}>
          <ListItemIcon><AssignmentIcon /></ListItemIcon>
          <ListItemText primary="Görevler" />
        </ListItem>
        <ListItem button component={Link} to="/production-tracking" sx={{paddingLeft: 6, '&:hover': {backgroundColor: '#bad28f' }}}>
          <ListItemIcon><TrackChangesIcon /></ListItemIcon>
          <ListItemText primary="Üretim Takip" />
        </ListItem>
        <ListItem button component={Link} to="/graphs" sx={{paddingLeft: 6, '&:hover': {backgroundColor: '#bad28f' }}}>
          <ListItemIcon><BarChartIcon /></ListItemIcon>
          <ListItemText primary="Grafikler" />
        </ListItem>
        <ListItem button component={Link} to="/chatbot" sx={{paddingLeft: 6, '&:hover': {backgroundColor: '#bad28f' }}}>
          <ListItemIcon><ChatIcon /></ListItemIcon>
          <ListItemText primary="Agri-Al" />
        </ListItem>
        <ListItem button component={Link} to="/settings" sx={{paddingLeft: 6, '&:hover': {backgroundColor: '#bad28f' }}}>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Ayarlar" />
        </ListItem>
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <List>
        <ListItem button component={Link} to="/exit" sx={{paddingLeft: 6, '&:hover': {backgroundColor: '#bad28f' }}}>
          <ListItemIcon><ExitToAppIcon /></ListItemIcon>
          <ListItemText primary="Çıkış" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;

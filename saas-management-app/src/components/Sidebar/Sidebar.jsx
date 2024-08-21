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
import Exit from '../Exit/Exit';
import { useTranslation } from 'react-i18next';


const Sidebar = () => {
  const {t} = useTranslation();

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
        <ListItem button component={Link} to="/dashboard/home" sx={{paddingLeft: 6, '&:hover': {backgroundColor: '#bad28f' }}}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary={t('sidebar.home')} />
        </ListItem>
        <ListItem button component={Link} to="/dashboard/team" sx={{paddingLeft: 6, '&:hover': {backgroundColor: '#bad28f' }}}>
          <ListItemIcon><GroupIcon /></ListItemIcon>
          <ListItemText primary={t('sidebar.team')} />
        </ListItem>
        <ListItem button component={Link} to="/dashboard/facilities" sx={{paddingLeft: 6, '&:hover': {backgroundColor: '#bad28f' }}}>
          <ListItemIcon><BusinessIcon /></ListItemIcon>
          <ListItemText primary={t('sidebar.facilities')} />
        </ListItem>
        <ListItem button component={Link} to="/dashboard/missions" sx={{paddingLeft: 6, '&:hover': {backgroundColor: '#bad28f' }}}>
          <ListItemIcon><AssignmentIcon /></ListItemIcon>
          <ListItemText primary={t('sidebar.missions')} />
        </ListItem>
        <ListItem button component={Link} to="/dashboard/production-tracking" sx={{paddingLeft: 6, '&:hover': {backgroundColor: '#bad28f' }}}>
          <ListItemIcon><TrackChangesIcon /></ListItemIcon>
          <ListItemText primary={t('sidebar.production_tracking')} />
        </ListItem>
        <ListItem button component={Link} to="/dashboard/graphs" sx={{paddingLeft: 6, '&:hover': {backgroundColor: '#bad28f' }}}>
          <ListItemIcon><BarChartIcon /></ListItemIcon>
          <ListItemText primary={t('sidebar.graphs')} />
        </ListItem>
        <ListItem button component={Link} to="/dashboard/chatbot" sx={{paddingLeft: 6, '&:hover': {backgroundColor: '#bad28f' }}}>
          <ListItemIcon><ChatIcon /></ListItemIcon>
          <ListItemText primary={t('sidebar.agri_ai')} />
        </ListItem>
        <ListItem button component={Link} to="/dashboard/settings" sx={{paddingLeft: 6, '&:hover': {backgroundColor: '#bad28f' }}}>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary={t('sidebar.settings')} />
        </ListItem>
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <List>
        <ListItem button component="div"   sx={{paddingLeft: 6, '&:hover': {backgroundColor: '#bad28f' }}}>
          <ListItemIcon><ExitToAppIcon /></ListItemIcon>
          <ListItemText primary={<Exit />} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
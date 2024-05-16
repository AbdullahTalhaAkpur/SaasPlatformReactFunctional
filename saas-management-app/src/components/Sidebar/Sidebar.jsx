// src/components/Sidebar.jsx
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import BusinessIcon from '@mui/icons-material/Business';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import BarChartIcon from '@mui/icons-material/BarChart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import logo from '../assets/Logo_Dikey.png'; // Adjust the path to your logo file

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
          sx={{ width: '100%', height: 'auto', padding: 1 }}
        />
      </Toolbar>
      <List>
        <ListItem button>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Ana Sayfa" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><GroupIcon /></ListItemIcon>
          <ListItemText primary="Takım" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><BusinessIcon /></ListItemIcon>
          <ListItemText primary="Tesisler" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><AssignmentIcon /></ListItemIcon>
          <ListItemText primary="Görevler" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><TrackChangesIcon /></ListItemIcon>
          <ListItemText primary="Üretim Takip" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><BarChartIcon /></ListItemIcon>
          <ListItemText primary="Grafikler" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
          <ListItemText primary="Agri-Al" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Ayarlar" />
        </ListItem>
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <List>
        <ListItem button>
          <ListItemIcon><ExitToAppIcon /></ListItemIcon>
          <ListItemText primary="Çıkış" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;

// src/components/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Badge, Select, MenuItem } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const {i18n} = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang)
  }
  return (
    <AppBar position="fixed" sx={{backgroundColor: '#bad28f', zIndex: theme => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Dashboard
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Select
          value={i18n.language}
          onChange={(e) => changeLanguage(e.target.value)}
          sx={{ color: 'white', borderColor: 'white', mr: 2 }}
          variant="outlined"
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="tr">Turkish</MenuItem>
        </Select>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
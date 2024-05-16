import { Drawer, List, ListItem, ListItemButton,  ListItemText } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useCallback, useEffect } from 'react';
import './sidebar.css';


const sidebarLinks = [
  { path: './Team.jsx', label: 'Team' },
  { path: './Facilities.jsx', label: 'Facilities' },
  { path: './Missions.jsx', label: 'Missions' },
  { path: './Product.jsx', label: 'Product' },
  { path: './Graphs.jsx', label: 'Graphs' },
  { path: './Settings.jsx', label: 'Settings' },
  { path: './Exit.jsx', label: 'Exit' },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  


  const handleSidebarToggle = useCallback(() => {
    setSidebarOpen(!sidebarOpen);
  }, [sidebarOpen]);

  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  const handleLinkClick = useCallback((path) => {
    navigate(path);
    handleSidebarToggle();
  }, [navigate, handleSidebarToggle]);

  return (
    <Drawer
      anchor="left"
      open={sidebarOpen}
      onClose={handleSidebarToggle}
      className="sidebar"
    >
      <List className="list">
        {sidebarLinks.map(({ path, label }) => (
          <ListItem key={path} className="list-item" disablePadding>
            <ListItemButton
              selected={location.pathname === path}
              onClick={() => handleLinkClick(path)}
              className={`sidebar-item ${location.pathname === path ? 'active' : ''}`}
            >
              <ListItemText primary={label} className="list-item-text" />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem key="/Exit" className="list-item sidebar-exit" disablePadding>
          <ListItemButton onClick={() => { /* handle Exit button click */ }}>
            <ListItemText primary="Exit" className="list-item-text" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
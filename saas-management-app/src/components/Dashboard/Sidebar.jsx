import React, { useCallback, useEffect } from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './sidebar.css';



const sidebarLinks = [
  { path: '/dashboard/dashboard', label: 'Dashboard' }, // Dosya yollarını düzgün bir şekilde ayarladık
  { path: '/dashboard/team', label: 'Team'  }, // Dosya yollarını düzgün bir şekilde ayarladık
  { path: '/dashboard/facilities', label: 'Facilities' },
  { path: '/dashboard/missions', label: 'Missions', },
  { path: '/dashboard/product-tracking', label: 'Product Tracking' }, // Bunu değiştirdik
  { path: '/dashboard/graphs', label: 'Graphs' }, // Bunu değiştirdik
  { path: '/dashboard/settings', label: 'Settings' },
  { path: '/dashboard/exit', label: 'Exit' },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  const handleLinkClick = (path) => {
    navigate(path);
  };

  const handleSidebarToggle = useCallback(() => {
    setSidebarOpen(!sidebarOpen);
  }, [sidebarOpen])

  useEffect(() => {
    setSidebarOpen(false);
  }, [location])

  return (
    <Drawer
      variant="permanent"
      className="sidebar"
      anchor="left"
      open={sidebarOpen}
      onClose={handleSidebarToggle}
    >
      <List>
        {sidebarLinks.map(({ path, label }) => (
          <ListItem key={path} disablePadding>
            <ListItemButton
              component={Link}
              to={path}
              selected={location.pathname === path}
              onClick={() => handleLinkClick(path)}
              className={`sidebar-item ${location.pathname === path ? 'active' : ''}`}
            >
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;

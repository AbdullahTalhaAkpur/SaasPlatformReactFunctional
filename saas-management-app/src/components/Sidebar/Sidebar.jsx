import { Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useLocation } from 'react-router-dom';
import React from 'react';

const sidebarLinks = [
          { path: '/Team', label: 'Team' },
          { path: '/Facilities', label: 'Facilities' },
          { path: '/Missions', label: 'Missions' },
          { path: '/Product', label: 'Product' },
          { path: '/Graphs', label: 'Graphs' },
          { path: '/Settings', label: 'Settings' },
          { path: '/Exit', label: 'Exit' },       
]

const Sidebar = () => {
          const location = useLocation();
          const [sidebarOpen, setSidebarOpen] = React.useState(false);

const handleSidebarToggle = () => {
      setSidebarOpen(!sidebarOpen);    
}
        
          return (
            <Drawer
              anchor="left"
              open={sidebarOpen}
              onClose={handleSidebarToggle}
            >
              <List>
                {sidebarLinks.map(({ path, label }) => (
                  <ListItem key={path} disablePadding>
                    <ListItemButton
                      selected={location.pathname === path}
                      onClick={handleSidebarToggle}
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
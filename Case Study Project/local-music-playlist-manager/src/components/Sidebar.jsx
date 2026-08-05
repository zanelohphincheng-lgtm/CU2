import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Sidebar = ({ drawerWidth, navigationHeight, musicBarHeight, playlists = [] }) => {
  const location = useLocation();

  const navItems = [
    { text: 'Library', path: '/' },
    { text: 'Top Rated', path: '/top-rated' },
    { text: 'Favorites', path: '/favorites' },
    { text: 'Add Song', path: '/add-song' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          bgcolor: 'background.paper',
          borderRight: '1px solid #3D1C20',
          pt: `${navigationHeight}px`,
          pb: `${musicBarHeight}px`,
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                component={RouterLink}
                to={item.path}
                selected={location.pathname === item.path}
                sx={{
                  borderRadius: 1,
                  mb: 0.5,
                  '&.Mui-selected': { bgcolor: '#3D1C20' },
                }}
              >
                <ListItemText primary={item.text} sx={{ fontWeight: 900 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <List sx={{ flexGrow: 1, overflowY: 'auto' }}>
        {playlists.map((playlist) => (
          <ListItem key={playlist.id} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              component={NavLink}
              to={`/playlist/${playlist.id}`}
              sx={{
                borderRadius: 1,
                color: '#D0A9AC',
                '&.active': {
                  bgcolor: '#2B1417',
                  color: '#FF6B6B',
                  fontWeight: 'bold',
                },
                '&:hover': {
                  bgcolor: '#1E0D0F',
                  color: '#FFF',
                },
              }}
            >
              <ListItemText primary={playlist.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          sx={{ mt: 2, fontWeight: 'bold' }}
          component={RouterLink} to={'/new-playlist'}
        >
          New Playlist
        </Button>
      </Box>
    </Drawer>
  );
}

export default Sidebar
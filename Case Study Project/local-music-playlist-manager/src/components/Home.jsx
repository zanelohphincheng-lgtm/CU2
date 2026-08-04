// src/components/MainLayout.jsx
import React from 'react';
import { Link as RouterLink, useLocation, Outlet } from 'react-router';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  MenuItem,
  Select,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  IconButton,
  Slider,
  Stack,
  InputAdornment,
} from '@mui/material';

// Icons
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const DRAWER_WIDTH = 220;
const BOTTOM_PLAYER_HEIGHT = 80;
const TOP_BAR_HEIGHT = 64;

export default function MainLayout() {
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', bgcolor: 'background.default' }}>
      
      {/* 1. TOP BAR */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: 'background.paper',
          height: TOP_BAR_HEIGHT,
          borderBottom: '1px solid #3D1C20',
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ display: 'flex', gap: 2 }}>
          {/* Logo Section */}
          <Typography
            variant="h6"
            noWrap
            sx={{ width: DRAWER_WIDTH - 32, fontWeight: 'bold', color: '#FFF' }}
          >
            LOGO?
          </Typography>

          {/* Search Bar */}
          <TextField
            size="small"
            placeholder="Search tracks..."
            sx={{
              width: 300,
              bgcolor: '#1E0D0F',
              borderRadius: 1,
              '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'text.secondary' }} />
                </InputAdornment>
              ),
            }}
          />

          {/* Filter Dropdown */}
          <Select
            size="small"
            defaultValue="all"
            sx={{ bgcolor: '#1E0D0F', color: 'white', minWidth: 120, '& fieldset': { border: 'none' } }}
          >
            <MenuItem value="all">All Artists</MenuItem>
            <MenuItem value="5star">5 Stars Only</MenuItem>
          </Select>

          {/* Sort Dropdown */}
          <Select
            size="small"
            defaultValue="title"
            sx={{ bgcolor: '#1E0D0F', color: 'white', minWidth: 120, '& fieldset': { border: 'none' } }}
          >
            <MenuItem value="title">Sort by Title</MenuItem>
            <MenuItem value="artist">Sort by Artist</MenuItem>
            <MenuItem value="rating">Sort by Rating</MenuItem>
          </Select>
        </Toolbar>
      </AppBar>

      {/* 2. LEFT SIDEBAR */}
      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
            bgcolor: 'background.paper',
            borderRight: '1px solid #3D1C20',
            pt: `${TOP_BAR_HEIGHT}px`,
            pb: `${BOTTOM_PLAYER_HEIGHT}px`,
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
          <List>
            {[
              { text: 'Library', path: '/' },
              { text: 'Top Rated', path: '/top-rated' },
              { text: 'Favorites', path: '/favorites' },
              { text: 'Playlist 1', path: '/playlist/1' },
            ].map((item) => (
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
                  <ListItemText primary={item.text} primaryTypographyProps={{ fontWeight: 600 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* New Playlist Button */}
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            sx={{ mt: 2, fontWeight: 'bold' }}
          >
            New Playlist
          </Button>
        </Box>
      </Drawer>

      {/* 3. MAIN CONTENT AREA */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: `${TOP_BAR_HEIGHT}px`,
          mb: `${BOTTOM_PLAYER_HEIGHT}px`,
          overflowY: 'auto',
          bgcolor: 'background.default',
        }}
      >
        {/* Child routes render here */}
        <Outlet />
      </Box>

      {/* 4. PERSISTENT BOTTOM PLAYER */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: BOTTOM_PLAYER_HEIGHT,
          bgcolor: 'background.paper',
          borderTop: '1px solid #FF6B6B',
          zIndex: (theme) => theme.zIndex.drawer + 2,
          display: 'flex',
          alignItems: 'center',
          px: 3,
          justify: 'space-between',
        }}
      >
        {/* Track Details */}
        <Box sx={{ width: DRAWER_WIDTH - 24 }}>
          <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#FFF' }}>
            Thank u Next
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Ariana Grande
          </Typography>
        </Box>

        {/* Playback Controls & Progress Bar */}
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', maxW: 600, mx: 'auto' }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton color="primary"><FastRewindIcon /></IconButton>
            <IconButton color="primary" sx={{ bgcolor: 'primary.main', color: '#FFF', '&:hover': { bgcolor: '#E05555' } }}>
              <PlayArrowIcon />
            </IconButton>
            <IconButton color="primary"><FastForwardIcon /></IconButton>
          </Stack>
          
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: 2 }}>
            <Slider
              size="small"
              defaultValue={30}
              color="primary"
              sx={{ flexGrow: 1 }}
            />
          </Box>
        </Box>

        {/* Volume & Time Remaining */}
        <Stack direction="row" spacing={1} alignItems="center" sx={{ width: 220, justifyContent: 'flex-end' }}>
          <VolumeDownIcon sx={{ color: 'primary.main' }} />
          <Slider size="small" defaultValue={70} color="primary" sx={{ width: 80 }} />
          <VolumeUpIcon sx={{ color: 'primary.main' }} />
          <Typography variant="caption" sx={{ color: 'white', ml: 1 }}>
            1:16
          </Typography>
        </Stack>
      </Box>

    </Box>
  );
}
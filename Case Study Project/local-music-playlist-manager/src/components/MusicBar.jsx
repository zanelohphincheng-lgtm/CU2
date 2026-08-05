import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Slider,
  Stack,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const MusicBar = ({ drawerWidth, height }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: height,
        bgcolor: 'background.paper',
        borderTop: '1px solid #FF6B6B',
        zIndex: (theme) => theme.zIndex.drawer + 2,
        display: 'flex',
        alignItems: 'center',
        px: 3,
        justifyContent: 'space-between',
      }}
    >
      {/* Track Details */}
      <Box sx={{ width: drawerWidth - 24 }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#FFF' }}>
          Thank u Next
        </Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          Ariana Grande
        </Typography>
      </Box>

      {/* Playback Controls & Progress Bar */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 600, mx: 'auto' }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton color="primary"><FastRewindIcon /></IconButton>
          <IconButton color="primary" sx={{ bgcolor: 'primary.main', color: '#FFF', '&:hover': { bgcolor: '#E05555' } }}>
            <PlayArrowIcon />
          </IconButton>
          <IconButton color="primary"><FastForwardIcon /></IconButton>
        </Stack>
        
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: 2 }}>
          <Slider size="small" defaultValue={30} color="primary" sx={{ flexGrow: 1 }} />
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
  );
}

export default MusicBar
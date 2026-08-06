// src/components/NewPlaylist.jsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Paper,
  Alert,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const NewPlaylist = ({ onCreatePlaylist }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    visibility: 'private',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!formData.name.trim()) {
      setError('Playlist Name is required.');
      return;
    }

    const newPlaylist = {
      id: `playlist-${Date.now()}`,
      name: formData.name.trim(),
      description: formData.description.trim(),
      visibility: formData.visibility,
      tracksIds: [], // Initial empty array of track IDs or objects
    };

    onCreatePlaylist?.(newPlaylist);

    setFormData({
      name: '',
      description: '',
      visibility: 'private',
    });
    setSuccess(true);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
      <Paper
        elevation={0}
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: '100%',
          maxWidth: 900,
          bgcolor: '#2B1417', // Dark red container
          border: '1px solid #FF6B6B',
          borderRadius: 2,
          p: 4,
          color: '#FFF',
          mt: 7,
        }}
      >
        {/* Title Section */}
        <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', mb: 1 }}>
          Add New Playlist
        </Typography>
        <Typography variant="h6" align="center" sx={{ color: '#D0A9AC', mb: 4 }}>
          Create your own vibe! Create your aura!
        </Typography>

        {/* Feedback Alerts */}
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ mb: 2 }}>Playlist created successfully!</Alert>}

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          
          {/* Playlist Name Field */}
          <TextField
            fullWidth
            placeholder="Playlist Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            sx={{
              bgcolor: '#130C0E',
              borderRadius: 1,
              '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
              input: { color: '#FFF' },
            }}
          />

          {/* Description Field */}
          <TextField
            fullWidth
            placeholder="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            multiline
            rows={2}
            sx={{
              bgcolor: '#130C0E',
              borderRadius: 1,
              '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
              textarea: { color: '#FFF' },
            }}
          />

          {/* Visibility Options */}
          <FormControl component="fieldset">
            <FormLabel
              component="legend"
              sx={{
                color: '#FFF',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                mb: 1,
                '&.Mui-focused': { color: '#FFF' },
              }}
            >
              Visibility:
            </FormLabel>
            <RadioGroup
              row
              name="visibility"
              value={formData.visibility}
              onChange={handleChange}
              sx={{ gap: 4 }}
            >
              <FormControlLabel
                value="private"
                control={
                  <Radio
                    sx={{
                      color: '#FFF',
                      '&.Mui-checked': { color: '#FF6B6B' },
                    }}
                  />
                }
                label={<Typography sx={{ fontWeight: 'bold', color: '#FFF' }}>Private</Typography>}
              />
              <FormControlLabel
                value="public"
                control={
                  <Radio
                    sx={{
                      color: '#FFF',
                      '&.Mui-checked': { color: '#FF6B6B' },
                    }}
                  />
                }
                label={<Typography sx={{ fontWeight: 'bold', color: '#FFF' }}>Public</Typography>}
              />
            </RadioGroup>
          </FormControl>

          {/* Add Playlist Button */}
          <Button
            type="submit"
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              mt: 1,
              py: 1.5,
              px: 3,
              bgcolor: '#FF6B6B',
              '&:hover': { bgcolor: '#E05555' },
              fontWeight: 'bold',
              fontSize: '1.1rem',
              alignSelf: 'flex-start',
              borderRadius: 1.5,
              textTransform: 'none',
            }}
          >
            Add Playlist
          </Button>

        </Box>
      </Paper>
    </Box>
  );
}

export default NewPlaylist
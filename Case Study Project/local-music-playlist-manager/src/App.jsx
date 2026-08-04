import { Routes, Route } from 'react-router';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Home from './components/Home';

// 1. Define your custom dark theme (using your Canva palette!)
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121214', // Main background
      paper: '#1E1E24',   // Cards / Sidebar / Bottom Player
    },
    primary: {
      main: '#FF5252',   // Coral pink accent from your Canva design
    },
    text: {
      primary: '#F0F0F5',
      secondary: '#9A9AB0',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      {/* Resets browser CSS default margins/paddings to dark background */}
      <CssBaseline /> 

      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Your navigation routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/playlist/:id" element={<PlaylistView />} /> */}
          {/* Fallback route */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App
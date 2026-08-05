import React from "react";
import { Link as RouterLink, useLocation, Outlet } from "react-router";
import { Box, Drawer, AppBar, Toolbar, Typography, TextField, MenuItem, Select, List, ListItem, ListItemButton, ListItemText, Button, IconButton, Slider, Stack, InputAdornment } from "@mui/material";

// Icons
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import FastForwardIcon from "@mui/icons-material/FastForward";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

// Files
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import MusicBar from "./MusicBar";
import Library from "./LibrarySite";

// Data

const DRAWER_WIDTH = 220;
const MUSIC_BAR_HEIGHT = 80;
const NAVIGATION_HEIGHT = 64;

const MainLayout = () => {
    return (
        <Box sx={{ display: "flex", height: "100vh", overflow: "hidden", bgcolor: "background.default" }}>
            <Navigation drawerWidth={DRAWER_WIDTH} height={NAVIGATION_HEIGHT} />

            <Sidebar drawerWidth={DRAWER_WIDTH} navigationHeight={NAVIGATION_HEIGHT} musicBarHeight={MUSIC_BAR_HEIGHT} />

            {/* Main Content Area */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    // mt: `${NAVIGATION_HEIGHT}px`,
                    // mb: `${MUSIC_BAR_HEIGHT}px`,
                    overflowY: "auto",
                    bgcolor: "background.default",
                }}
            >
                {/* <Library /> */}
                <Outlet />
            </Box>

            <MusicBar drawerWidth={DRAWER_WIDTH} height={MUSIC_BAR_HEIGHT} />
        </Box>
    );
};

export default MainLayout;

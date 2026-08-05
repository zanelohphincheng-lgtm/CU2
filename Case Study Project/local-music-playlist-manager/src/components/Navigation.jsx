import React from "react";
import { AppBar, Toolbar, Typography, TextField, MenuItem, Select, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Navigation = ({ drawerWidth, height }) => {
    return (
        <AppBar
            position="fixed"
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                bgcolor: "background.paper",
                height: height,
                borderBottom: "1px solid #3D1C20",
                boxShadow: "none",
            }}
        >
            <Toolbar sx={{ display: "flex", gap: 2 }}>
                <Typography variant="h5" noWrap sx={{ width: drawerWidth - 32, fontWeight: "bold", backgroundImage: "linear-gradient(to right, #ff5252, #ffa5a5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block" }}>
                    LOGO???
                </Typography>

                <TextField
                    size="small"
                    placeholder="Search tracks..."
                    sx={{
                        width: 300,
                        bgcolor: "#1E0D0F",
                        borderRadius: 1,
                        "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                    }}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ color: "text.primary" }} />
                                </InputAdornment>
                            ),
                        },
                    }}
                />

                <Select size="small" defaultValue="all" sx={{ bgcolor: "#1E0D0F", color: "white", minWidth: 120, "& fieldset": { border: "none" } }}>
                    <MenuItem value="all">All Artists</MenuItem>
                    <MenuItem value="5star">5 Stars Only</MenuItem>
                </Select>

                <Select size="small" defaultValue="title" sx={{ bgcolor: "#1E0D0F", color: "white", minWidth: 120, "& fieldset": { border: "none" } }}>
                    <MenuItem value="title">Sort by Title</MenuItem>
                    <MenuItem value="artist">Sort by Artist</MenuItem>
                    <MenuItem value="rating">Sort by Rating</MenuItem>
                </Select>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;

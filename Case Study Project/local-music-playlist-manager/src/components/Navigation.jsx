import React from "react";
import { AppBar, Toolbar, Typography, TextField, MenuItem, Select, InputAdornment, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Navigation = ({
    drawerWidth,
    height,
    searchQuery,
    onSearchChange,
    filterOption = "all", // Having a default value
    onFilterChange,
    sortOption = "title", // Having a default value
    onSortChange,
    artists = [],
}) => {
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

                {/* Search Field */}
                <TextField
                    placeholder="Search tracks..."
                    size="small"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    sx={{
                        width: 300,
                        bgcolor: "#1E0D0F",
                        borderRadius: 1,
                        input: { color: "#FFF" },
                        "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                    }}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ color: "#9A9AB0" }} />
                                </InputAdornment>
                            ),
                        },
                    }}
                />

                <Box sx={{ display: "flex", gap: 2 }}>
                    {/* Filter Dropdown */}
                    <Select
                        value={filterOption}
                        onChange={(e) => onFilterChange?.(e.target.value)}
                        size="small"
                        sx={{
                            bgcolor: "#1E0D0F",
                            color: "#FFF",
                            borderRadius: 1,
                            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                            "& .MuiSvgIcon-root": { color: "#FFF" },
                        }}
                    >
                        <MenuItem value="all">All Songs</MenuItem>
                        <MenuItem value="5-stars">5 Stars Only</MenuItem>
                        {/* Every song added has their artist name pulled out */}
                        {artists.map((artist) => (
                            <MenuItem key={artist} value={`artist:${artist}`}>
                                Artist: {artist}
                            </MenuItem>
                        ))}
                    </Select>

                    {/* Sort Dropdown */}
                    <Select
                        value={sortOption}
                        onChange={(e) => onSortChange?.(e.target.value)}
                        size="small"
                        sx={{
                            bgcolor: "#1E0D0F",
                            color: "#FFF",
                            borderRadius: 1,
                            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                            "& .MuiSvgIcon-root": { color: "#FFF" },
                        }}
                    >
                        <MenuItem value="title">Sort by Title (A - Z)</MenuItem>
                        <MenuItem value="artist">Sort by Artist (A - Z)</MenuItem>
                        <MenuItem value="rating">Sort by Rating (Highest - Lowest)</MenuItem>
                    </Select>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;

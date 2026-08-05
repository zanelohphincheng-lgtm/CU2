import React, { useState } from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Avatar, Chip, Rating, IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import MusicData from "../lib/MusicData";

const TopRatedView = ({ tracks = MusicData, currentTrackId, onSelectTrack, onDeleteTrack, onRatingChange, onToggleFavorite }) => {
    // 1. Filter out unrated tracks (0 stars) if you want, or keep all
    // 2. Sort tracks from highest rating (5) to lowest rating (1)
    const topRatedTracks = [...tracks]
        .filter((track) => track.rating > 0) // Keeps only tracks that have at least 1 star
        .sort((a, b) => b.rating - a.rating); // Higher ratings first

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedTrack, setSelectedTrack] = useState(null);

    const handleOpenMenu = (event, track) => {
        event.stopPropagation(); // Prevents track selection/play on menu click
        setAnchorEl(event.currentTarget);
        setSelectedTrack(track);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
        setSelectedTrack(null);
    };

    const handleAction = (actionCallback) => {
        if (selectedTrack && actionCallback) {
            actionCallback(selectedTrack);
        }
        handleCloseMenu();
    };
    return (
        <Box sx={{ width: "100%", color: "#FFF" }}>

            <TableContainer sx={{mt: 6}}>
                <Table sx={{ minWidth: 650, borderCollapse: "separate", borderSpacing: "0 4px" }}>
                    {/* Table Header */}
                    <TableHead>
                        <TableRow sx={{ "& th": { borderBottom: "1px solid #2B1417", color: "#9A9AB0" } }}>
                            <TableCell sx={{ width: 50, color: "#9A9AB0" }}>#</TableCell>
                            <TableCell sx={{ color: "#9A9AB0" }}>Title</TableCell>
                            <TableCell align="right" sx={{ color: "#9A9AB0" }}>
                                Plays
                            </TableCell>
                            <TableCell sx={{ color: "#9A9AB0" }}>Album</TableCell>
                            <TableCell align="center" sx={{ color: "#9A9AB0" }}>
                                Rating
                            </TableCell>
                            <TableCell align="right" sx={{ width: 80, color: "#9A9AB0" }}>
                                <AccessTimeIcon fontSize="small" sx={{ verticalAlign: "middle" }} />
                            </TableCell>
                            <TableCell align="center" sx={{ width: 50, color: "#9A9AB0" }}></TableCell>
                        </TableRow>
                    </TableHead>

                    {/* Table Body */}
                    <TableBody>
                        {topRatedTracks.map((track, index) => (
                            <TableRow
                                key={track.id}
                                onClick={() => onSelectTrack?.(track)}
                                sx={{
                                    "&:hover": { bgcolor: "#1E0D0F" },
                                    "& td": { borderBottom: "none", py: 1 },
                                    borderRadius: 1,
                                    cursor: "pointer",
                                }}
                            >
                                {/* Index Number */}
                                <TableCell sx={{ color: "#9A9AB0", fontWeight: 600 }}>{index + 1}</TableCell>

                                {/* Track Album Art / Letter Fallback, Title & Artist */}
                                <TableCell>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                        <Avatar
                                            variant="rounded"
                                            src={track.cover}
                                            alt={track.title}
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                bgcolor: "#2B1417",
                                                color: "#803030",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {/* Displays first letter if image is missing */}
                                            {track.title ? track.title.charAt(0).toUpperCase() : "?"}
                                        </Avatar>

                                        <Box>
                                            <Typography variant="body1" sx={{ fontWeight: 600, color: "#FFF", lineHeight: 1.2 }}>
                                                {track.title}
                                            </Typography>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 0.3 }}>
                                                {track.explicit && (
                                                    <Chip
                                                        label="E"
                                                        size="small"
                                                        sx={{
                                                            height: 16,
                                                            fontSize: "0.65rem",
                                                            bgcolor: "#4A4A5A",
                                                            color: "#FFF",
                                                            borderRadius: "2px",
                                                            px: 0.2,
                                                        }}
                                                    />
                                                )}
                                                <Typography variant="caption" sx={{ color: "#9A9AB0" }}>
                                                    {track.artist}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </TableCell>

                                {/* Play Count */}
                                <TableCell align="right" sx={{ color: "#D0A9AC" }}>
                                    {track.plays}
                                </TableCell>

                                {/* Album Name */}
                                <TableCell sx={{ color: "#D0A9AC" }}>{track.album}</TableCell>

                                {/* Star Rating */}
                                <TableCell align="center">
                                    <Rating value={track.rating} size="small" readOnly sx={{ color: "#FFC107", fontSize: "1rem" }} />
                                </TableCell>

                                {/* Duration */}
                                <TableCell align="right" sx={{ color: "#9A9AB0", fontWeight: 500 }}>
                                    {track.duration}
                                </TableCell>

                                {/* Action Options Menu Trigger */}
                                <TableCell align="center" onClick={(e) => e.stopPropagation()}>
                                    <IconButton size="small" onClick={(e) => handleOpenMenu(e, track)} sx={{ color: "#9A9AB0", "&:hover": { color: "#FFF" } }}>
                                        <MoreHorizIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Popover Action Menu */}
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                slotProps={{
                    paper: {
                        sx: {
                            bgcolor: "#231B20",
                            color: "#D0A9AC",
                            border: "1px solid #3D1C20",
                            borderRadius: 2,
                            minWidth: 160,
                            boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                        },
                    },
                }}
            >
                {/* Dynamic Favorite Option */}
                <MenuItem onClick={() => handleAction(onToggleFavorite)} sx={{ "&:hover": { bgcolor: "#3D1C20", color: "#FFF" } }}>
                    <ListItemIcon>{selectedTrack?.isFavorite ? <FavoriteIcon fontSize="small" sx={{ color: "#FF6B6B" }} /> : <FavoriteBorderIcon fontSize="small" sx={{ color: "#D0A9AC" }} />}</ListItemIcon>
                    <ListItemText>{selectedTrack?.isFavorite ? "Remove from Favorite" : "Add to Favorite"}</ListItemText>
                </MenuItem>

                <MenuItem onClick={() => handleAction(onAddToPlaylist)} sx={{ "&:hover": { bgcolor: "#3D1C20", color: "#FFF" } }}>
                    <ListItemIcon>
                        <AddIcon fontSize="small" sx={{ color: "#D0A9AC" }} />
                    </ListItemIcon>
                    <ListItemText>Add to Playlist</ListItemText>
                </MenuItem>

                <MenuItem onClick={() => handleAction((t) => onDeleteTrack?.(t.id))} sx={{ "&:hover": { bgcolor: "#3D1C20", color: "#FF6B6B" } }}>
                    <ListItemIcon>
                        <DeleteIcon fontSize="small" sx={{ color: "#FF6B6B" }} />
                    </ListItemIcon>
                    <ListItemText sx={{ color: "#FF6B6B" }}>Remove Track</ListItemText>
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default TopRatedView;

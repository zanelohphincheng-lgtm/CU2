import React, { useState } from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Avatar, Chip, Rating, IconButton, Menu, MenuItem, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Dialog, DialogTitle } from "@mui/material";

// Info
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

// File
import LibrarySite from "./LibrarySite";

// Data
import MusicData from "../lib/MusicData";

const TopRatedView = ({ tracks = MusicData, playlists = [], currentTrackId, onSelectTrack, onDeleteTrack, onRatingChange, onToggleFavorite, onAddToPlaylist, onRemoveFromPlaylist }) => {
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

    // Playlist
    const [isPlaylistModalOpen, setIsPlaylistModalOpen] = useState(false);
    const handleOpenPlaylistModal = () => {
        setIsPlaylistModalOpen(true);
        handleCloseMenu();
    };

    const handleSelectTargetPlaylist = (playlistId) => {
        if (selectedTrack) {
            onAddToPlaylist?.(playlistId, selectedTrack.id);
        }
        setIsPlaylistModalOpen(false);
    };
    return (
        <Box sx={{ width: "100%", color: "#FFF", mb: 3 }}>
            {topRatedTracks.length === 0 ? (
                <Typography sx={{ color: "#9A9AB0", mt: 6, fontWeight: "Bold", fontSize: "30px" }}>No rated tracks yet.</Typography>
            ) : (
                <LibrarySite
                    tracks={topRatedTracks}
                    playlists={playlists}
                    currentTrackId={currentTrackId}
                    onSelectTrack={onSelectTrack}
                    onDeleteTrack={onDeleteTrack}
                    onToggleFavorite={onToggleFavorite}
                    onAddToPlaylist={onAddToPlaylist}
                    onRemoveFromPlaylist={onRemoveFromPlaylist}
                    onRatingChange={onRatingChange}
                />
            )}
        </Box>
    );
};

export default TopRatedView;

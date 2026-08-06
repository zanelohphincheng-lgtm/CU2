// src/components/Playlist.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Box, Typography, IconButton, Menu, MenuItem, ListItemIcon, ListItemText, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Chip, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";

// Icons
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LibrarySite from "./LibrarySite";

const Playlist = ({ playlists = [], tracks = [], onRenamePlaylist, onDeletePlaylist, onSelectTrack, onDeleteTrackFromLibrary, onToggleFavorite, onAddToPlaylist,onRemoveFromPlaylist }) => {
    const { playlistId } = useParams();
    const navigate = useNavigate();

    // Find active playlist based on URL param
    const playlist = playlists.find((p) => p.id === playlistId) || playlists[0];

    // Header Options Menu State
    const [headerAnchorEl, setHeaderAnchorEl] = useState(null);

    if (!playlist) {
        return <Typography sx={{ color: "#9A9AB0", mt: 6, fontWeight: "Bold", fontSize: "30px" }}>Playlist not found.</Typography>;
    }

    // Edit Details Dialog Handlers
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [editName, setEditName] = useState("");
    const [editDescription, setEditDescription] = useState("");
    const [editVisibility, setEditVisibility] = useState("private");

    if (!playlist) {
        return <Typography sx={{ color: "#9A9AB0", mt: 6, fontWeight: "Bold", fontSize: "30px" }}>Playlist not found.</Typography>;
    }

    const playlistTracks = tracks.filter((t) => playlist.trackIds?.includes(t.id));

    // Menu Handlers
    const handleOpenHeaderMenu = (event) => setHeaderAnchorEl(event.currentTarget);
    const handleCloseHeaderMenu = () => setHeaderAnchorEl(null);

    // Edit Dialog Handlers
    const handleOpenEdit = () => {
        setEditName(playlist.name || "");
        setEditDescription(playlist.description || "");
        setEditVisibility(playlist.visibility || "private");
        setIsEditOpen(true);
        handleCloseHeaderMenu();
    };

    const handleSaveEdit = () => {
        if (editName.trim()) {
            onRenamePlaylist?.(playlist.id, editName.trim(), editDescription.trim(), editVisibility);
        }
        setIsEditOpen(false);
    };

    const handleDeletePlaylistClick = () => {
        onDeletePlaylist?.(playlist.id);
        handleCloseHeaderMenu();
        navigate("/");
    };

    const isPublic = playlist.visibility === "public";
    return (
        <Box sx={{ width: "100%", color: "#FFF" }}>
            {/* Playlist Header */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 6 }}>
                <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                    {playlist.name}
                </Typography>

                {/* Status Badge */}
                <Chip
                    label={isPublic ? "PUBLIC" : "PRIVATE"}
                    size="small"
                    sx={{
                        bgcolor: isPublic ? "rgba(46, 125, 50, 0.3)" : "rgba(255, 107, 107, 0.15)",
                        color: isPublic ? "#81C784" : "#6ba9ff",
                        border: isPublic ? "1px solid #4CAF50" : "1px solid #6b72ff",
                        fontWeight: "bold",
                        fontSize: "0.75rem",
                    }}
                />

                <IconButton onClick={handleOpenHeaderMenu} sx={{ color: "#FFF", "&:hover": { bgcolor: "#2B1417" } }}>
                    <MoreHorizIcon fontSize="large" />
                </IconButton>
            </Box>

            {/* Playlist Description */}
            {playlist.description && (
                <Typography variant="h6" sx={{ color: "#d7d7d7", mt: 1, mb: 3 }}>
                    {playlist.description}
                </Typography>
            )}

            {/* Header Context Menu */}
            <Menu
                anchorEl={headerAnchorEl}
                open={Boolean(headerAnchorEl)}
                onClose={handleCloseHeaderMenu}
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
                <MenuItem onClick={handleOpenEdit} sx={{ "&:hover": { bgcolor: "#3D1C20", color: "#FFF" } }}>
                    <ListItemIcon>
                        <EditIcon fontSize="small" sx={{ color: "#D0A9AC" }} />
                    </ListItemIcon>
                    <ListItemText>Edit Details</ListItemText>
                </MenuItem>

                <MenuItem onClick={handleDeletePlaylistClick} sx={{ "&:hover": { bgcolor: "#3D1C20", color: "#FF6B6B" } }}>
                    <ListItemIcon>
                        <DeleteIcon fontSize="small" sx={{ color: "#FF6B6B" }} />
                    </ListItemIcon>
                    <ListItemText sx={{ color: "#FF6B6B" }}>Delete Playlist</ListItemText>
                </MenuItem>
            </Menu>

            {/* Tracks Table */}
            {playlistTracks.length === 0 ? (
                <Typography sx={{ color: "#9aacb0", mt: 2 }}>This playlist is empty. Add tracks using the options menu on any song!</Typography>
            ) : (
                <LibrarySite 
                    tracks={playlistTracks} 
                    playlists={playlists} 
                    onSelectTrack={onSelectTrack} 
                    onDeleteTrack={onDeleteTrackFromLibrary} 
                    onToggleFavorite={onToggleFavorite} 
                    onAddToPlaylist={onAddToPlaylist}
                    onRemoveFromPlaylist={(track) => onRemoveFromPlaylist?.(playlist.id, track.id)} 
                />
            )}

            {/* Edit Playlist Details Dialog */}
            <Dialog open={isEditOpen} onClose={() => setIsEditOpen(false)} slotProps={{ paper: { sx: { bgcolor: "#2B1417", color: "#FFF", minWidth: 360 } } }}>
                <DialogTitle sx={{ fontWeight: "bold" }}>Edit Playlist Details</DialogTitle>
                <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 1 }}>
                    <TextField
                        label="Playlist Name"
                        autoFocus
                        fullWidth
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        sx={{
                            mt: 1,
                            bgcolor: "#130C0E",
                            borderRadius: 1,
                            input: { color: "#FFF" },
                            label: { color: "#9A9AB0" },
                        }}
                    />
                    <TextField
                        label="Description"
                        fullWidth
                        multiline
                        rows={3}
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        sx={{
                            bgcolor: "#130C0E",
                            borderRadius: 1,
                            textarea: { color: "#FFF" },
                            label: { color: "#9A9AB0" },
                        }}
                    />
                    {/* Radio Options for Visibility */}
                    <FormControl component="fieldset">
                        <FormLabel sx={{ color: "#9A9AB0", fontWeight: "bold", fontSize: "0.9rem", mb: 0.5, "&.Mui-focused": { color: "#9A9AB0" } }}>Visibility</FormLabel>
                        <RadioGroup row value={editVisibility} onChange={(e) => setEditVisibility(e.target.value)} sx={{ gap: 2 }}>
                            <FormControlLabel value="private" control={<Radio sx={{ color: "#9A9AB0", "&.Mui-checked": { color: "#FF6B6B" } }} />} label={<Typography sx={{ color: "#FFF", fontSize: "0.9rem" }}>Private</Typography>} />
                            <FormControlLabel value="public" control={<Radio sx={{ color: "#9A9AB0", "&.Mui-checked": { color: "#FF6B6B" } }} />} label={<Typography sx={{ color: "#FFF", fontSize: "0.9rem" }}>Public</Typography>} />
                        </RadioGroup>
                    </FormControl>
                </DialogContent>
                <DialogActions sx={{ p: 2 }}>
                    <Button onClick={() => setIsEditOpen(false)} sx={{ color: "#D0A9AC" }}>
                        Cancel
                    </Button>
                    <Button onClick={handleSaveEdit} variant="contained" sx={{ bgcolor: "#FF6B6B" }}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default Playlist;

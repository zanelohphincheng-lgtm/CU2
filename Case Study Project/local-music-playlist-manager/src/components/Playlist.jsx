import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Box, Typography, IconButton, Menu, MenuItem, ListItemIcon, ListItemText, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from "@mui/material";

// Icons
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LibrarySite from "./LibrarySite";

const Playlist = ({ playlists = [], tracks = [], onRenamePlaylist, onDeletePlaylist, onSelectTrack, onDeleteTrackFromLibrary, onToggleFavorite, onRemoveFromPlaylist }) => {
    const { playlistId } = useParams();
    const navigate = useNavigate();

    // Find active playlist based on URL param
    const playlist = playlists.find((p) => p.id === playlistId) || playlists[0];

    // Playlist Header Options Menu State
    const [headerAnchorEl, setHeaderAnchorEl] = useState(null);

    // Rename Dialog State
    const [isRenameOpen, setIsRenameOpen] = useState(false);
    const [newPlaylistName, setNewPlaylistName] = useState("");

    if (!playlist) {
        return <Typography sx={{ color: "#9A9AB0", mt: 6, fontWeight: "Bold", fontSize: "30px" }}>Playlist not found.</Typography>;
    }

    // Filter tracks that belong to this playlist
    const playlistTracks = tracks.filter((t) => playlist.trackIds?.includes(t.id));

    // Menu Handlers
    const handleOpenHeaderMenu = (event) => setHeaderAnchorEl(event.currentTarget);
    const handleCloseHeaderMenu = () => setHeaderAnchorEl(null);

    // Rename Dialog Handlers
    const handleOpenRename = () => {
        setNewPlaylistName(playlist.name);
        setIsRenameOpen(true);
        handleCloseHeaderMenu();
    };

    const handleSaveRename = () => {
        if (newPlaylistName) {
            onRenamePlaylist?.(playlist.id, newPlaylistName);
        }
        setIsRenameOpen(false);
    };

    // Delete Playlist Handler
    const handleDeletePlaylistClick = () => {
        onDeletePlaylist?.(playlist.id);
        handleCloseHeaderMenu();
        navigate("/"); // Redirect to main library after deletion
    };

    return (
        <Box sx={{ width: "100%", color: "#FFF" }}>
            {/* Playlist Header with Context Menu */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3, mt: 6 }}>
                <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                    {playlist.name}
                </Typography>

                <IconButton onClick={handleOpenHeaderMenu} sx={{ color: "#FFF", "&:hover": { bgcolor: "#2B1417" } }}>
                    <MoreHorizIcon fontSize="large" />
                </IconButton>
            </Box>

            {/* Playlist Header Options Menu */}
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
                <MenuItem onClick={handleOpenRename} sx={{ "&:hover": { bgcolor: "#3D1C20", color: "#FFF" } }}>
                    <ListItemIcon>
                        <EditIcon fontSize="small" sx={{ color: "#D0A9AC" }} />
                    </ListItemIcon>
                    <ListItemText>Rename</ListItemText>
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
                <Typography sx={{ color: "#9A9AB0", mt: 2 }}>This playlist is empty. Add tracks using the options menu on any song!</Typography>
            ) : (
                <LibrarySite tracks={playlistTracks} onSelectTrack={onSelectTrack} onDeleteTrack={onDeleteTrackFromLibrary} onToggleFavorite={onToggleFavorite} onRemoveFromPlaylist={(track) => onRemoveFromPlaylist?.(playlist.id, track.id)} />
            )}

            {/* Rename Dialog */}
            <Dialog open={isRenameOpen} onClose={() => setIsRenameOpen(false)} slotProps={{ paper: { sx: { bgcolor: "#2B1417", color: "#FFF", minWidth: 320 } } }}>
                <DialogTitle sx={{ fontWeight: "bold" }}>Rename Playlist</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        fullWidth
                        value={newPlaylistName}
                        onChange={(e) => setNewPlaylistName(e.target.value)}
                        sx={{
                            mt: 1,
                            bgcolor: "#130C0E",
                            borderRadius: 1,
                            input: { color: "#FFF" },
                        }}
                    />
                </DialogContent>
                <DialogActions sx={{ p: 2 }}>
                    <Button onClick={() => setIsRenameOpen(false)} sx={{ color: "#D0A9AC" }}>
                        Cancel
                    </Button>
                    <Button onClick={handleSaveRename} variant="contained" sx={{ bgcolor: "#FF6B6B" }}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default Playlist

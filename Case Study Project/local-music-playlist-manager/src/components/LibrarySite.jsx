import React, { useState } from "react";
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Avatar,
    Chip,
    Rating,
    IconButton,
    Menu,
    MenuItem,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    FormControlLabel,
    Checkbox,
    DialogActions,
    Button,
} from "@mui/material";

// Icons
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import EditIcon from "@mui/icons-material/Edit";

// Data
import MusicData from "../lib/MusicData";

const LibrarySite = ({ tracks = MusicData, playlists = [], onSelectTrack, onDeleteTrack, onToggleFavorite, onAddToPlaylist, onRemoveFromPlaylist, onEditTrack }) => {
    // Context Menu State
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

    // 1. Close context menu anchor WITHOUT clearing selectedTrack
    const handleOpenPlaylistModal = () => {
        setIsPlaylistModalOpen(true);
        setAnchorEl(null); // Just close the popover menu, keep selectedTrack alive!
    };

    // 2. Clear selectedTrack only when closing the modal or canceling
    const handleClosePlaylistModal = () => {
        setIsPlaylistModalOpen(false);
        setSelectedTrack(null);
    };

    // 3. Pass selectedTrack.id and then reset selectedTrack
    const handleSelectTargetPlaylist = (playlistId) => {
        if (selectedTrack) {
            onAddToPlaylist?.(playlistId, selectedTrack.id);
        }
        setIsPlaylistModalOpen(false);
        setSelectedTrack(null);
    };

    // Edit Song Dialog State
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editFormData, setEditFormData] = useState({
        id: "",
        title: "",
        artist: "",
        album: "",
        cover: "",
        url: "",
        explicit: false,
        rating: 5,
    });

    // Edit Song Handlers
    const handleOpenEditModal = () => {
        if (selectedTrack) {
            setEditFormData({
                id: selectedTrack.id,
                title: selectedTrack.title || "",
                artist: selectedTrack.artist || "",
                album: selectedTrack.album || "",
                cover: selectedTrack.cover || "",
                url: selectedTrack.url || "",
                explicit: selectedTrack.explicit || false,
                rating: selectedTrack.rating || 5,
                plays: selectedTrack.plays || "0",
                duration: selectedTrack.duration || "--:--",
                isFavorite: selectedTrack.isFavorite || false,
            });
            setIsEditModalOpen(true);
        }
        setAnchorEl(null);
    };

    const handleSaveTrackEdit = () => {
        onEditTrack?.(editFormData);
        setIsEditModalOpen(false);
        setSelectedTrack(null);
    };

    // Add File Upload Handler inside LibrarySite component
    const handleEditFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Option A: Use local project path assuming the file is in public/audio/
            const publicPath = `/audio/${file.name}`;
            setEditFormData((prev) => ({
                ...prev,
                url: publicPath,
            }));
        }
    };

    return (
        <Box sx={{ width: "100%", color: "#FFF", mb: 3 }}>
            <TableContainer sx={{ mt: 6 }}>
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
                        {tracks.map((track, index) => (
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

                {/* Edit Track Option */}
                <MenuItem onClick={handleOpenEditModal} sx={{ "&:hover": { bgcolor: "#3D1C20", color: "#FFF" } }}>
                    <ListItemIcon>
                        <EditIcon fontSize="small" sx={{ color: "#D0A9AC" }} />
                    </ListItemIcon>
                    <ListItemText>Edit Song</ListItemText>
                </MenuItem>

                {onRemoveFromPlaylist ? (
                    <MenuItem onClick={() => handleAction(onRemoveFromPlaylist)} sx={{ "&:hover": { bgcolor: "#3D1C20", color: "#FFF" } }}>
                        <ListItemIcon>
                            <PlaylistRemoveIcon fontSize="small" sx={{ color: "#6bffa6" }} />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#6bffa6" }}>Remove from Playlist</ListItemText>
                    </MenuItem>
                ) : (
                    <MenuItem onClick={handleOpenPlaylistModal} sx={{ "&:hover": { bgcolor: "#3D1C20", color: "#FFF" } }}>
                        <ListItemIcon>
                            <AddIcon fontSize="small" sx={{ color: "#D0A9AC" }} />
                        </ListItemIcon>
                        <ListItemText>Add to Playlist</ListItemText>
                    </MenuItem>
                )}

                <MenuItem onClick={() => handleAction((t) => onDeleteTrack?.(t.id))} sx={{ "&:hover": { bgcolor: "#3D1C20", color: "#FF6B6B" } }}>
                    <ListItemIcon>
                        <DeleteIcon fontSize="small" sx={{ color: "#FF6B6B" }} />
                    </ListItemIcon>
                    <ListItemText sx={{ color: "#FF6B6B" }}>Remove Track</ListItemText>
                </MenuItem>
            </Menu>

            {/* Selection Dialog */}
            <Dialog open={isPlaylistModalOpen} onClose={handleClosePlaylistModal}>
                <DialogTitle sx={{ fontWeight: "bold", bgcolor: "#3D1C20" }}>Select Playlist</DialogTitle>
                <List sx={{ bgcolor: "#3D1C20" }}>
                    {playlists.map((pl) => (
                        <ListItem disablePadding key={pl.id}>
                            <ListItemButton onClick={() => handleSelectTargetPlaylist(pl.id)}>
                                <ListItemText primary={pl.name} sx={{ color: "#D0A9AC" }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Dialog>

            {/* Edit Song Dialog */}
            <Dialog open={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} slotProps={{ paper: { sx: { bgcolor: "#2B1417", color: "#FFF", minWidth: 380 } } }}>
                <DialogTitle sx={{ fontWeight: "bold" }}>Edit Song Details</DialogTitle>
                <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 1 }}>
                    <TextField label="Title" fullWidth value={editFormData.title} onChange={(e) => setEditFormData((p) => ({ ...p, title: e.target.value }))} sx={{ mt: 1, bgcolor: "#130C0E", borderRadius: 1, input: { color: "#FFF" }, label: { color: "#9A9AB0" } }} />
                    <TextField label="Artist" fullWidth value={editFormData.artist} onChange={(e) => setEditFormData((p) => ({ ...p, artist: e.target.value }))} sx={{ bgcolor: "#130C0E", borderRadius: 1, input: { color: "#FFF" }, label: { color: "#9A9AB0" } }} />
                    <TextField label="Album" fullWidth value={editFormData.album} onChange={(e) => setEditFormData((p) => ({ ...p, album: e.target.value }))} sx={{ bgcolor: "#130C0E", borderRadius: 1, input: { color: "#FFF" }, label: { color: "#9A9AB0" } }} />
                    <TextField label="Cover Image URL" fullWidth value={editFormData.cover} onChange={(e) => setEditFormData((p) => ({ ...p, cover: e.target.value }))} sx={{ bgcolor: "#130C0E", borderRadius: 1, input: { color: "#FFF" }, label: { color: "#9A9AB0" } }} />
                    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                        <TextField label="Audio Source URL" fullWidth value={editFormData.url} onChange={(e) => setEditFormData((p) => ({ ...p, url: e.target.value }))} sx={{ bgcolor: "#130C0E", borderRadius: 1, input: { color: "#FFF" }, label: { color: "#9A9AB0" } }} />
                        <Button variant="outlined" component="label" sx={{ color: "#FF6B6B", borderColor: "#FF6B6B", whiteSpace: "nowrap", height: "56px" }}>
                            Upload MP3
                            <input type="file" accept="audio/*" hidden onChange={handleEditFileUpload} />
                        </Button>
                    </Box>
                    <FormControlLabel control={<Checkbox checked={editFormData.explicit} onChange={(e) => setEditFormData((p) => ({ ...p, explicit: e.target.checked }))} sx={{ color: "#FF6B6B", "&.Mui-checked": { color: "#FF6B6B" } }} />} label="Explicit Content" sx={{ color: "#FFF" }} />
                    <Box>
                        <Typography variant="body2" sx={{ color: "#9A9AB0", mb: 0.5 }}>
                            Rating
                        </Typography>
                        <Rating value={editFormData.rating} onChange={(_, val) => setEditFormData((p) => ({ ...p, rating: val || 0 }))} sx={{ color: "#FFC107" }} />
                    </Box>
                </DialogContent>
                <DialogActions sx={{ p: 2 }}>
                    <Button onClick={() => setIsEditModalOpen(false)} sx={{ color: "#D0A9AC" }}>
                        Cancel
                    </Button>
                    <Button onClick={handleSaveTrackEdit} variant="contained" sx={{ bgcolor: "#FF6B6B" }}>
                        Save Changes
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default LibrarySite;

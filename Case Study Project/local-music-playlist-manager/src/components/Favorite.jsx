import React from "react";
import { Box, Typography } from "@mui/material";
import LibrarySite from "./LibrarySite";

const Favorites = ({ tracks = [], playlists = [], currentTrackId, onSelectTrack, onDeleteTrack, onToggleFavorite, onAddToPlaylist }) => {
    // Filter for tracks where isFavorite is true
    const favoriteTracks = tracks.filter((track) => track.isFavorite === true);

    return (
        <Box sx={{ width: "100%", color: "#FFF", mb: 3 }}>

            {favoriteTracks.length === 0 ? (
                <Typography sx={{ color: "#9A9AB0", mt: 6, fontWeight: "Bold", fontSize: "30px" }}>No favorite tracks yet. Click "Add to favorite" in any track's menu to add it here!</Typography>
            ) : (
                <LibrarySite 
                    tracks={favoriteTracks}
                    playlists={playlists} 
                    currentTrackId={currentTrackId} 
                    onSelectTrack={onSelectTrack} 
                    onDeleteTrack={onDeleteTrack} 
                    onToggleFavorite={onToggleFavorite} 
                    onAddToPlaylist={onAddToPlaylist} 
                />
            )}
        </Box>
    );
};

export default Favorites
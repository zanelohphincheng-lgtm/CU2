import { Routes, Route } from "react-router";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
import { useState, useEffect, useMemo } from "react";

// Files
import MainLayout from "./components/MainLayout";
import LibrarySite from "./components/LibrarySite";
import TopRatedView from "./components/TopRatedSite";
import AddSong from "./components/AddSong";
import Favorites from "./components/Favorite";
import NewPlaylist from "./components/NewPlaylist";
import Playlist from "./components/Playlist";

// Music Data
import MusicData from "./lib/MusicData";

// Define a custom dark theme
const darkTheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#121214", // Main background
            paper: "#1E1E24", // Cards / Sidebar / Bottom Player
        },
        primary: {
            main: "#FF5252", // Coral pink accent from your Canva design
        },
        text: {
            primary: "#F0F0F5",
            secondary: "#9A9AB0",
        },
    },
});

const TRACKS_STORAGE_KEY = "music_library_tracks";
const PLAYLISTS_STORAGE_KEY = "music_app_playlists";

const App = () => {
    // 1. Tracks State
    const [tracks, setTracks] = useState(() => {
        try {
            const saved = localStorage.getItem(TRACKS_STORAGE_KEY);
            return saved ? JSON.parse(saved) : MusicData;
        } catch {
            return MusicData;
        }
    });

    // 2. Playlists State
    const [playlists, setPlaylists] = useState(() => {
        try {
            const saved = localStorage.getItem(PLAYLISTS_STORAGE_KEY);
            return saved ? JSON.parse(saved) : [{ id: "playlist-1", name: "Playlist 1", trackIds: [] }];
        } catch {
            return [{ id: "playlist-1", name: "Playlist 1", trackIds: [] }];
        }
    });

    const [currentTrack, setCurrentTrack] = useState(null);

    // Sync Tracks
    useEffect(() => {
        localStorage.setItem(TRACKS_STORAGE_KEY, JSON.stringify(tracks));
    }, [tracks]);

    // Sync Playlists
    useEffect(() => {
        localStorage.setItem(PLAYLISTS_STORAGE_KEY, JSON.stringify(playlists));
    }, [playlists]);

    // Track Handlers
    const handleSelectTrack = (track) => setCurrentTrack(track);
    const handleAddTrack = (newTrack) => setTracks((prev) => [newTrack, ...prev]);
    const handleToggleFavorite = (targetTrack) => {
        setTracks((prev) => prev.map((t) => (t.id === targetTrack.id ? { ...t, isFavorite: !t.isFavorite } : t)));
    };
    const handleRatingChange = (trackId, newRating) => {
        setTracks((prev) => prev.map((t) => (t.id === trackId ? { ...t, rating: newRating } : t)));
    };
    const handleDeleteTrack = (trackId) => {
        setTracks((prev) => prev.filter((t) => t.id !== trackId));
        if (currentTrack?.id === trackId) setCurrentTrack(null);
    };

    // Playlist Handlers
    const handleCreatePlaylist = (newPlaylist) => {
        setPlaylists((prev) => [...prev, newPlaylist]);
    };

    const handleRenamePlaylist = (playlistId, newName, newDescription, newVisibility) => {
        setPlaylists((prev) =>
            prev.map((p) =>
                p.id === playlistId
                    ? {
                          ...p,
                          name: newName,
                          description: newDescription,
                          visibility: newVisibility,
                      }
                    : p,
            ),
        );
    };

    const handleDeletePlaylist = (playlistId) => {
        setPlaylists((prev) => prev.filter((p) => p.id !== playlistId));
    };

    const handleAddTrackToPlaylist = (playlistId, trackId) => {
        setPlaylists((prev) =>
            prev.map((p) => {
                if (p.id === playlistId) {
                    const exists = p.trackIds?.includes(trackId);
                    if (exists) return p;
                    return { ...p, trackIds: [...(p.trackIds || []), trackId] };
                }
                return p;
            }),
        );
    };

    const handleRemoveFromPlaylist = (playlistId, trackId) => {
        setPlaylists((prev) => prev.map((p) => (p.id === playlistId ? { ...p, trackIds: p.trackIds.filter((id) => id !== trackId) } : p)));
    };

    // Edit Music
    const handleEditTrack = (updatedTrack) => {
        setTracks((prev) => prev.map((t) => (t.id === updatedTrack.id ? updatedTrack : t)));
    };

    // Search Bar And Sort Filter Functions
    // State
    const [searchQuery, setSearchQuery] = useState("");
    const [filterOption, setFilterOption] = useState("all");
    const [sortOption, setSortOption] = useState("title");

    // Extract unique artists list for filter dropdown
    const artistsList = useMemo(() => {
        const set = new Set(tracks.map((t) => t.artist).filter(Boolean));
        return Array.from(set);
    }, [tracks]);

    // Process tracks based on Search, Filter, and Sort criteria
    const processedTracks = useMemo(() => {
        return (
            tracks
                // 1. Search Query Filter
                .filter((track) => {
                    const query = searchQuery.toLowerCase();
                    return track.title.toLowerCase().includes(query) || track.artist.toLowerCase().includes(query) || track.album.toLowerCase().includes(query);
                })
                // 2. Filter Dropdown
                .filter((track) => {
                    if (filterOption === "5-stars") return track.rating === 5;
                    if (filterOption.startsWith("artist:")) {
                        const selectedArtist = filterOption.replace("artist:", "");
                        return track.artist === selectedArtist;
                    }
                    return true; // "all"
                })
                // 3. Sorting Logic
                .sort((a, b) => {
                    if (sortOption === "title") {
                        return a.title.localeCompare(b.title); // A to Z
                    }
                    if (sortOption === "artist") {
                        return a.artist.localeCompare(b.artist); // A to Z
                    }
                    if (sortOption === "rating") {
                        return b.rating - a.rating; // Highest to Lowest
                    }
                    return 0;
                })
        );
    }, [tracks, searchQuery, filterOption, sortOption]);

    return (
        <ThemeProvider theme={darkTheme}>
            {/* Resets browser CSS default margins/paddings to dark background */}
            <CssBaseline />
            <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                {/* Your navigation routes */}
                <Routes>
                    <Route
                        path="/"
                        element={
                            <MainLayout
                                playlists={playlists}
                                currentTrack={currentTrack}
                                searchQuery={searchQuery}
                                onSearchChange={setSearchQuery}
                                filterOption={filterOption}
                                setFilterOption={setFilterOption} // 👈 Connect state setter
                                sortOption={sortOption}
                                setSortOption={setSortOption} // 👈 Connect state setter
                                artists={artistsList}
                            />
                        }
                    >
                        <Route
                            index
                            element={
                                <LibrarySite
                                    tracks={processedTracks}
                                    currentTrackId={currentTrack?.id}
                                    onSelectTrack={handleSelectTrack}
                                    onDeleteTrack={handleDeleteTrack}
                                    onToggleFavorite={handleToggleFavorite}
                                    playlists={playlists}
                                    onAddToPlaylist={handleAddTrackToPlaylist}
                                    onRatingChange={handleRatingChange}
                                    onEditTrack={handleEditTrack}
                                />
                            }
                        />

                        <Route
                            path="/top-rated"
                            element={
                                <TopRatedView
                                    tracks={processedTracks}
                                    currentTrackId={currentTrack?.id}
                                    onSelectTrack={handleSelectTrack}
                                    onDeleteTrack={handleDeleteTrack}
                                    onToggleFavorite={handleToggleFavorite}
                                    playlists={playlists}
                                    onAddToPlaylist={handleAddTrackToPlaylist}
                                    onRatingChange={handleRatingChange}
                                    onEditTrack={handleEditTrack}
                                />
                            }
                        />

                        <Route
                            path="/favorites"
                            element={
                                <Favorites
                                    tracks={processedTracks}
                                    currentTrackId={currentTrack?.id}
                                    onSelectTrack={handleSelectTrack}
                                    onDeleteTrack={handleDeleteTrack}
                                    onToggleFavorite={handleToggleFavorite}
                                    playlists={playlists}
                                    onAddToPlaylist={handleAddTrackToPlaylist}
                                    onRatingChange={handleRatingChange}
                                    onEditTrack={handleEditTrack}
                                />
                            }
                        />

                        <Route path="/add-song" element={<AddSong onAddTrack={handleAddTrack} />} />

                        <Route
                            path="playlist/:playlistId"
                            element={
                                <Playlist
                                    playlists={playlists}
                                    tracks={tracks}
                                    onRenamePlaylist={handleRenamePlaylist}
                                    onDeletePlaylist={handleDeletePlaylist}
                                    onSelectTrack={handleSelectTrack}
                                    onDeleteTrackFromLibrary={handleDeleteTrack}
                                    onToggleFavorite={handleToggleFavorite}
                                    onRemoveFromPlaylist={handleRemoveFromPlaylist}
                                    onEditTrack={handleEditTrack}
                                />
                            }
                        />

                        <Route path="/new-playlist" element={<NewPlaylist onCreatePlaylist={handleCreatePlaylist} />} />

                        <Route path="*" element={<div>Page Not Found</div>} />
                    </Route>
                </Routes>
            </Box>
        </ThemeProvider>
    );
};

export default App;

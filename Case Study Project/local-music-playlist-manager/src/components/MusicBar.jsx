import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, IconButton, Slider, Stack, Avatar } from "@mui/material";

// Icons
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import FastForwardIcon from "@mui/icons-material/FastForward";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const MusicBar = ({ drawerWidth, height, currentTrack }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.8);

    // Auto-play when a new song is selected
    useEffect(() => {
        if (currentTrack && currentTrack.url) {
            if (audioRef.current) {
                audioRef.current.src = currentTrack.url;
                audioRef.current
                    .play()
                    .then(() => {
                        setIsPlaying(true);
                    })
                    .catch((err) => {
                        console.warn("Playback error:", err);
                        setIsPlaying(false);
                    });
            }
        }
    }, [currentTrack]);

    // Toggle Play / Pause
    const handleTogglePlay = () => {
        if (!currentTrack || !audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    // Skip Backward 10 Seconds
    const handleRewind = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10);
        }
    };

    // Skip Forward 10 Seconds
    const handleFastForward = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = Math.min(duration, audioRef.current.currentTime + 10);
        }
    };

    // Time & Progress Handlers
    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    const handleSeek = (_, newValue) => {
        if (audioRef.current) {
            audioRef.current.currentTime = newValue;
            setCurrentTime(newValue);
        }
    };

    const handleVolumeChange = (_, newValue) => {
        setVolume(newValue);
        if (audioRef.current) {
            audioRef.current.volume = newValue;
        }
    };

    // Helper to format seconds -> MM:SS
    const formatTime = (secs) => {
        if (isNaN(secs) || secs === 0) return "0:00";
        const minutes = Math.floor(secs / 60);
        const seconds = Math.floor(secs % 60)
            .toString()
            .padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    return (
        <Box
            sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                height: height,
                bgcolor: "background.paper",
                borderTop: "1px solid #FF6B6B",
                zIndex: (theme) => theme.zIndex.drawer + 2,
                display: "flex",
                alignItems: "center",
                px: 3,
                justifyContent: "space-between",
            }}
        >
            {/* Invisible HTML5 Audio Player */}
            <audio
                ref={audioRef}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={() => setIsPlaying(false)}
            />

            {/* Currently Playing Track Info */}
            <Box sx={{ width: drawerWidth - 24, display: "flex", alignItems: "center", gap: 1.5 }}>
                {currentTrack && (
                    <Avatar variant="rounded" src={currentTrack.cover} sx={{ width: 40, height: 40, bgcolor: "#2B1417" }}>
                        {currentTrack.title?.charAt(0)}
                    </Avatar>
                )}
                <Box sx={{ overflow: "hidden" }}>
                    <Typography variant="body1" noWrap sx={{ fontWeight: "bold", color: "#FFF" }}>
                        {currentTrack ? currentTrack.title : "No Track Selected"}
                    </Typography>
                    <Typography variant="caption" noWrap sx={{ color: "text.secondary", display: "block" }}>
                        {currentTrack ? currentTrack.artist : "Select a song from library"}
                    </Typography>
                </Box>
            </Box>

            {/* Playback Controls & Timeline Slider */}
            <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center", maxWidth: 600, mx: "auto" }}>
                <Stack direction="row" spacing={1} alignItems="center">
                    <IconButton color="primary" onClick={handleRewind} disabled={!currentTrack}>
                        <FastRewindIcon />
                    </IconButton>
                    <IconButton
                        color="primary"
                        onClick={handleTogglePlay}
                        disabled={!currentTrack}
                        sx={{ bgcolor: "primary.main", color: "#FFF", "&:hover": { bgcolor: "#E05555" } }}
                    >
                        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                    </IconButton>
                    <IconButton color="primary" onClick={handleFastForward} disabled={!currentTrack}>
                        <FastForwardIcon />
                    </IconButton>
                </Stack>

                <Box sx={{ width: "100%", display: "flex", alignItems: "center", gap: 2 }}>
                    <Typography variant="caption" sx={{ color: "#9A9AB0" }}>
                        {formatTime(currentTime)}
                    </Typography>
                    <Slider
                        size="small"
                        min={0}
                        max={duration || 100}
                        value={currentTime}
                        onChange={handleSeek}
                        disabled={!currentTrack}
                        color="primary"
                        sx={{ flexGrow: 1 }}
                    />
                    <Typography variant="caption" sx={{ color: "#9A9AB0" }}>
                        {formatTime(duration)}
                    </Typography>
                </Box>
            </Box>

            {/* Volume Control */}
            <Stack direction="row" spacing={1} alignItems="center" sx={{ width: 180, justifyContent: "flex-end" }}>
                <VolumeDownIcon sx={{ color: "primary.main" }} />
                <Slider size="small" min={0} max={1} step={0.01} value={volume} onChange={handleVolumeChange} color="primary" sx={{ width: 80 }} />
                <VolumeUpIcon sx={{ color: "primary.main" }} />
            </Stack>
        </Box>
    );
};

export default MusicBar;
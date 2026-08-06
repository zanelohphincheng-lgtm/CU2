import React, { useState } from "react";
import { Box, Typography, TextField, FormControlLabel, Checkbox, Rating, Button, InputAdornment, Paper, Alert } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AddIcon from "@mui/icons-material/Add";
import ImageIcon from "@mui/icons-material/Image";

const AddSong = ({ onAddTrack }) => {
    const [formData, setFormData] = useState({
        title: "",
        artist: "",
        album: "",
        url: "",
        explicit: false,
        rating: 5,
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    // Support Local File Uploads
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            setFormData((prev) => ({
                ...prev,
                url: objectUrl,
                title: prev.title || file.name.replace(/\.[^/.]+$/, ""),
            }));
        }
    };

    // Calculate Audio Duration Dynamically
    const getAudioDuration = (src) => {
        return new Promise((resolve) => {
            const audio = new Audio(src);
            audio.onloadedmetadata = () => {
                const minutes = Math.floor(audio.duration / 60);
                const seconds = Math.floor(audio.duration % 60)
                    .toString()
                    .padStart(2, "0");
                resolve(`${minutes}:${seconds}`);
            };
            audio.onerror = () => resolve("3:30"); // Fallback duration if unreadable
        });
    };

    const handleRatingChange = (_, newValue) => {
        setFormData((prev) => ({ ...prev, rating: newValue || 0 }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess(false);

        // Basic Validation
        if (!formData.title.trim()) {
            setError("Track Title is required.");
            return;
        }
        if (!formData.url.trim()) {
            setError("Audio Source URL is required.");
            return;
        }

        const calculatedDuration = await getAudioDuration(formData.url.trim());

        // Generate a random play count (e.g., between 1,000 and 5,000,000)
        const randomPlays = Math.floor(Math.random() * 4999000 + 1000).toLocaleString();

        const newTrack = {
            id: Date.now(),
            title: formData.title.trim(),
            artist: formData.artist.trim() || "Unknown Artist",
            album: formData.album.trim() || "Single",
            url: formData.url.trim(),
            cover: formData.cover.trim() || "", // Avatar component will fallback to first letter if empty
            explicit: formData.explicit,
            rating: formData.rating,
            isFavorite: false,
            plays: randomPlays,
            duration: calculatedDuration,
        };

        onAddTrack?.(newTrack);

        setFormData({
            title: "",
            artist: "",
            album: "",
            url: "",
            cover: "",
            explicit: false,
            rating: 5,
        });
        setSuccess(true);
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", p: 2, mt: 5, mb: 7 }}>
            <Paper
                elevation={0}
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    width: "100%",
                    maxWidth: 900,
                    bgcolor: "#2B1417", // Dark red container
                    border: "1px solid #FF6B6B",
                    borderRadius: 2,
                    p: 4,
                    color: "#FFF",
                }}
            >
                {/* Title Section */}
                <Typography variant="h3" align="center" sx={{ fontWeight: "bold", mb: 1 }}>
                    Add Song
                </Typography>
                <Typography variant="h6" align="center" sx={{ color: "#D0A9AC", mb: 4 }}>
                    Add your own favorite music into the Library!
                </Typography>

                {/* Feedback Alerts */}
                {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {error}
                    </Alert>
                )}
                {success && (
                    <Alert severity="success" sx={{ mb: 2 }}>
                        Song added to Library successfully!
                    </Alert>
                )}

                {/* Form Fields Grid */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                    {/* Row 1: Title & Artist */}
                    <Box sx={{ display: "flex", gap: 2 }}>
                        <TextField
                            fullWidth
                            placeholder="Title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            sx={{
                                bgcolor: "#130C0E",
                                borderRadius: 1,
                                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                                input: { color: "#FFF" },
                            }}
                        />
                        <TextField
                            fullWidth
                            placeholder="Artist"
                            name="artist"
                            value={formData.artist}
                            onChange={handleChange}
                            sx={{
                                bgcolor: "#130C0E",
                                borderRadius: 1,
                                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                                input: { color: "#FFF" },
                            }}
                        />
                    </Box>

                    {/* Row 2: Album */}
                    <TextField
                        fullWidth
                        placeholder="Album"
                        name="album"
                        value={formData.album}
                        onChange={handleChange}
                        sx={{
                            bgcolor: "#130C0E",
                            borderRadius: 1,
                            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                            input: { color: "#FFF" },
                        }}
                    />

                    {/* Row 3: Cover Art URL */}
                    <TextField
                        fullWidth
                        placeholder="Cover Image URL (Optional)"
                        name="cover"
                        value={formData.cover}
                        onChange={handleChange}
                        sx={{ bgcolor: "#130C0E", borderRadius: 1, "& .MuiOutlinedInput-notchedOutline": { border: "none" }, input: { color: "#FFF" } }}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <ImageIcon sx={{ color: "#9A9AB0" }} />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />

                    {/* Row 4: Audio Source Input and File Picker */}
                    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                        <TextField
                            fullWidth
                            placeholder="Audio Source URL or pick Local File"
                            name="url"
                            value={formData.url}
                            onChange={handleChange}
                            sx={{
                                bgcolor: "#130C0E",
                                borderRadius: 1,
                                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                                input: { color: "#FFF" },
                            }}
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AttachFileIcon sx={{ color: "#9A9AB0" }} />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                        <Button variant="outlined" component="label" sx={{ color: "#FF6B6B", borderColor: "#FF6B6B", whiteSpace: "nowrap", height: "56px" }}>
                            Upload MP3
                            <input type="file" accept="audio/*" hidden onChange={handleFileUpload} />
                        </Button>
                    </Box>

                    {/* Checkbox: Explicit Content */}
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="explicit"
                                checked={formData.explicit}
                                onChange={handleChange}
                                sx={{
                                    color: "#FF6B6B",
                                    "&.Mui-checked": { color: "#FF6B6B" },
                                }}
                            />
                        }
                        label="Explicit (Contains strong language, adult or sexual themes, or mature references)"
                        sx={{ color: "#FFF" }}
                    />

                    {/* Star Rating Selection */}
                    <Box sx={{ mt: 1 }}>
                        <Typography variant="h6" sx={{ mb: 1, color: "#FFF" }}>
                            Ratings :
                        </Typography>
                        <Rating name="rating" value={formData.rating} onChange={handleRatingChange} size="large" sx={{ color: "#FFC107", fontSize: "2.5rem" }} />
                    </Box>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        startIcon={<AddIcon />}
                        sx={{
                            mt: 2,
                            py: 1.5,
                            fontWeight: "bold",
                            fontSize: "1rem",
                            alignSelf: "flex-start",
                        }}
                    >
                        Add Track
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default AddSong;

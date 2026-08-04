import { Stack, VolumeDown, VolumeUp, Slider } from "@mui/material";

const MusicBar = () => {
    return (
        <Stack spacing={2} direction="row" sx={{ alignItems: "center", mb: 1 }}>
            <VolumeDown />
            <Slider aria-label="Volume" value={value} onChange={handleChange} />
            <VolumeUp />
        </Stack>
    );
};

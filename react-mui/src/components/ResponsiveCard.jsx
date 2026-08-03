import { Box, Typography } from '@mui/material'
// Box for MUI is like your CONTAINER for your html :)
// The sx here is basically your style function to style your Box

export default function ResponsiveCard() {
  return (
    <Box
      sx={{
        // Uses spacing tokens: 2 * 8px = 16px padding
        p: 2, 
        // Token mapping: 'primary.main' resolves to hex color from theme
        backgroundColor: 'background.paper', 
        borderRadius: 2,
        boxShadow: 3,
        // Responsive widths based on theme breakpoints (xs, md)
        width: {
          xs: '100%', // 0px and up
          sm: '100%', // 600px and up
          md: '400px', // 900px and up
        },
        // Hover pseudo-class example
        '&:hover': {
          boxShadow: 6,
        },
      }}
    >
    {/* At here you can see Typography that's just basically your words, and variant is just choosing the sizing tag like h1 to h6 and p */}
    {/* The tag will be shown in Inspect Element and the important part of having h1, h2 or what is that the SEO(Search Engine Operator?) can have a better idea of what the title of your web is suppose to be */}
      <Typography variant="h6" color="text.primary">
        Responsive Box Component
      </Typography>
    </Box>
  );
}
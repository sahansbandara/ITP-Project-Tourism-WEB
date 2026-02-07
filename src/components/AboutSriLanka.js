'use client';
import * as React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

export default function AboutSriLanka() {
    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(135deg, #FDFBFB 0%, #F5F7FA 100%)',
                overflow: 'hidden',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center">
                    {/* Text Content */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                position: 'relative',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: -20,
                                    left: 0,
                                    width: 60,
                                    height: 4,
                                    backgroundColor: 'primary.main',
                                    borderRadius: 2,
                                }
                            }}
                        >
                            <Typography
                                component="span"
                                sx={{
                                    color: 'primary.main',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.2em',
                                    fontSize: '0.875rem',
                                    display: 'block',
                                    mb: 2,
                                    pt: 3,
                                }}
                            >
                                About Sri Lanka
                            </Typography>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: { xs: '2.5rem', md: '3rem' },
                                    fontWeight: 800,
                                    color: 'text.primary',
                                    mb: 3,
                                    lineHeight: 1.2,
                                }}
                            >
                                The Wonder of Asia <br />
                                <Box component="span" sx={{ color: 'primary.main' }}>Await's You</Box>
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'text.secondary',
                                    fontSize: '1.1rem',
                                    lineHeight: 1.8,
                                    mb: 4,
                                }}
                            >
                                Sri Lanka, an island gem in the Indian Ocean, creates a montage of captivating experiences.
                                From the golden beaches that rim the island to the misty tea-covered mountains of the interior,
                                every corner reveals a new story. Explore ancient cities that whisper tales of kings,
                                witness the gathering of gentle giants in the wild, and immerse yourself in a culture
                                warmed by genuine hospitality.
                            </Typography>

                            {/* Stats */}
                            <Grid container spacing={3}>
                                {[
                                    { label: 'Years History', value: '2500+' },
                                    { label: 'UNESCO Sites', value: '8' },
                                    { label: 'Wildlife Parks', value: '26' },
                                ].map((stat, index) => (
                                    <Grid item xs={4} key={index}>
                                        <Typography
                                            variant="h4"
                                            sx={{
                                                fontWeight: 800,
                                                color: 'primary.main',
                                                mb: 0.5,
                                            }}
                                        >
                                            {stat.value}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: 'text.secondary',
                                                fontWeight: 600,
                                            }}
                                        >
                                            {stat.label}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Grid>

                    {/* Image Collage */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ position: 'relative', height: { xs: 400, md: 500 } }}>
                            {/* Main Image */}
                            <Paper
                                elevation={4}
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    width: '85%',
                                    height: '85%',
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    zIndex: 1,
                                    transform: 'rotate(2deg)',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': { transform: 'rotate(0deg) scale(1.02)' }
                                }}
                            >
                                <Box
                                    component="img"
                                    src="https://images.unsplash.com/photo-1588598198321-9735fd99d0e2?w=800" // Sigiriya
                                    alt="Sigiriya Rock Fortress"
                                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Paper>

                            {/* Secondary Image - Bottom Left */}
                            <Paper
                                elevation={8}
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '55%',
                                    height: '50%',
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    zIndex: 2,
                                    border: '4px solid white',
                                    transform: 'translateY(10%)',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': { transform: 'translateY(10%) scale(1.05)' }
                                }}
                            >
                                <Box
                                    component="img"
                                    src="https://images.unsplash.com/photo-1625409893902-861c4701a82f?w=800" // Elephants
                                    alt="Elephants in Minneriya"
                                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Paper>

                            {/* Decorative Image - Top Left Floating */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '10%',
                                    left: '0%',
                                    width: '30%',
                                    height: '30%',
                                    zIndex: 0,
                                    opacity: 0.8,
                                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                                    overflow: 'hidden',
                                    background: 'linear-gradient(45deg, #0ea5e9 30%, #6366f1 90%)',
                                    display: { xs: 'none', md: 'block' },
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

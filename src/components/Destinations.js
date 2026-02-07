'use client';
import * as React from 'react';
import { Box, Container, Typography, Grid, Paper, useTheme, useMediaQuery } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { destinations } from '../data/mockData';

export default function Destinations() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const scrollRef = React.useRef(null);
    const [isHovered, setIsHovered] = React.useState(false);

    // Duplicate destinations for seamless scrolling on mobile
    const displayedDestinations = isMobile ? [...destinations, ...destinations] : destinations;

    React.useEffect(() => {
        if (!isMobile) return;

        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId;
        let lastTimestamp = 0;
        const speed = 0.5; // Pixels per millisecond approx, adjust for speed preference

        const scroll = (timestamp) => {
            if (!lastTimestamp) lastTimestamp = timestamp;

            // Only scroll if not hovered
            if (!isHovered) {
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                } else {
                    scrollContainer.scrollLeft += 1;
                }
            }

            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [isMobile, isHovered]);

    return (
        <Box
            id="destinations"
            sx={{
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(180deg, #F0F9FF 0%, #E0F2FE 100%)',
            }}
        >
            <Container maxWidth="lg">
                {/* Section Header */}
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography
                        component="span"
                        sx={{
                            color: 'primary.main',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.15em',
                            fontSize: '0.875rem',
                        }}
                    >
                        Explore
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            mt: 1,
                            mb: 2,
                            color: 'text.primary',
                        }}
                    >
                        Top Destinations
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'text.secondary',
                            maxWidth: 600,
                            mx: 'auto',
                        }}
                    >
                        From ancient ruins to pristine beaches, discover the diverse beauty
                        that makes Sri Lanka truly magical.
                    </Typography>
                </Box>

                <Box sx={{ mx: { xs: -2, md: 0 }, px: { xs: 2, md: 0 } }}>
                    <Grid
                        container
                        spacing={3}
                        ref={scrollRef}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onTouchStart={() => setIsHovered(true)}
                        onTouchEnd={() => setIsHovered(false)}
                        sx={{
                            flexWrap: { xs: 'nowrap', md: 'wrap' },
                            overflowX: { xs: 'auto', md: 'visible' },
                            scrollSnapType: 'none',
                            pb: { xs: 1, md: 0 },
                            '&::-webkit-scrollbar': { display: 'none' },
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            scrollBehavior: 'auto', // Important for instant jump
                        }}>
                        {displayedDestinations.map((destination, index) => {
                            // Correctly handle key for duplicates
                            const isDuplicate = index >= destinations.length;
                            const key = isDuplicate ? `${destination.id}-duplicate` : destination.id;

                            return (
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={index < 2 ? 6 : 4}
                                    key={key}
                                    sx={{
                                        minWidth: { xs: '80vw', sm: '400px', md: 'auto' },
                                        scrollSnapAlign: 'center',
                                        flexShrink: 0,
                                        // Hide duplicates on desktop to maintain layout integrity if they accidentally render
                                        display: isDuplicate ? { xs: 'block', md: 'none' } : 'block'
                                    }}
                                >
                                    <Paper
                                        sx={{
                                            position: 'relative',
                                            borderRadius: 4,
                                            overflow: 'hidden',
                                            height: { xs: 300, md: index < 2 ? 350 : 280 },
                                            cursor: 'pointer',
                                            '&:hover': {
                                                '& img': {
                                                    transform: 'scale(1.1)',
                                                },
                                                '& .overlay': {
                                                    background: 'linear-gradient(to top, rgba(3, 105, 161, 0.9) 0%, rgba(2, 132, 199, 0.4) 50%, transparent 100%)',
                                                },
                                            },
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={destination.image}
                                            alt={destination.name}
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform 0.5s ease',
                                            }}
                                        />
                                        <Box
                                            className="overlay"
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                background: 'linear-gradient(to top, rgba(12, 74, 110, 0.8) 0%, transparent 60%)',
                                                transition: 'background 0.3s ease',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'flex-end',
                                                p: 3,
                                            }}
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                                <LocationOnIcon sx={{ color: '#F59E0B', fontSize: 20, mr: 0.5 }} />
                                                <Typography
                                                    variant="h5"
                                                    sx={{
                                                        color: 'white',
                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    {destination.name}
                                                </Typography>
                                            </Box>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: 'rgba(255, 255, 255, 0.8)',
                                                }}
                                            >
                                                {destination.description}
                                            </Typography>
                                        </Box>
                                    </Paper>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
            </Container >
        </Box >
    );
}

'use client';
import * as React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    useTheme,
    alpha,
} from '@mui/material';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { destinations } from '../../data/mockData';

export default function DestinationsPage() {
    const theme = useTheme();

    return (
        <main>
            <Header />

            {/* Hero Section */}
            <Box
                sx={{
                    position: 'relative',
                    height: '60vh',
                    minHeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1582234032483-c28dd5347bc3?w=1600)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    },
                }}
            >
                <Container position="relative" sx={{ zIndex: 1, textAlign: 'center' }}>
                    <Typography
                        variant="h1"
                        sx={{
                            color: 'white',
                            fontSize: { xs: '2.5rem', md: '4rem' },
                            fontWeight: 800,
                            mb: 2,
                            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                        }}
                    >
                        Explore Sri Lanka
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            color: 'rgba(255, 255, 255, 0.9)',
                            maxWidth: 800,
                            mx: 'auto',
                            fontWeight: 500,
                        }}
                    >
                        Discover the hidden gems and iconic landmarks of the Pearl of the Indian Ocean
                    </Typography>
                </Container>
            </Box>

            {/* Destinations List */}
            <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f8fafc' }}>
                <Container maxWidth="lg">
                    {destinations.map((destination, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <Grid
                                container
                                spacing={{ xs: 4, md: 8 }}
                                key={destination.id}
                                alignItems="center"
                                sx={{
                                    mb: { xs: 8, md: 12 },
                                    flexDirection: {
                                        xs: 'column-reverse', // Image on top for mobile
                                        md: isEven ? 'row' : 'row-reverse'
                                    },
                                    '&:last-child': { mb: 0 }
                                }}
                            >
                                {/* Text Content */}
                                <Grid item xs={12} md={6}>
                                    <Box
                                        sx={{
                                            pr: { md: isEven ? 4 : 0 },
                                            pl: { md: !isEven ? 4 : 0 },
                                            textAlign: { xs: 'center', md: 'left' }
                                        }}
                                    >
                                        <Typography
                                            component="span"
                                            sx={{
                                                color: 'primary.main',
                                                fontWeight: 600,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.15em',
                                                fontSize: '0.875rem',
                                                display: 'block',
                                                mb: 2,
                                            }}
                                        >
                                            Destination 0{index + 1}
                                        </Typography>
                                        <Typography
                                            variant="h2"
                                            sx={{
                                                fontSize: { xs: '2rem', md: '2.5rem' },
                                                fontWeight: 800,
                                                mb: 3,
                                                color: 'text.primary',
                                            }}
                                        >
                                            {destination.name}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontSize: '1.125rem',
                                                color: 'text.secondary',
                                                mb: 4,
                                                lineHeight: 1.8,
                                                maxWidth: 500,
                                                mx: { xs: 'auto', md: 0 }
                                            }}
                                        >
                                            {destination.longDescription || destination.description}
                                        </Typography>

                                    </Box>
                                </Grid>

                                {/* Image Content */}
                                <Grid item xs={12} md={6}>
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            height: { xs: 300, md: 500 },
                                            width: '100%',
                                            borderRadius: 4,
                                            overflow: 'hidden',
                                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                            transition: 'transform 0.4s ease',
                                            '&:hover': {
                                                transform: 'scale(1.02)',
                                            }
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={destination.image}
                                            alt={destination.name}
                                            sx={{
                                                height: '100%',
                                                width: '100%',
                                                objectFit: 'cover',
                                            }}
                                        />
                                        {/* Decorative Overlay */}
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                background: 'linear-gradient(135deg, rgba(15, 118, 110, 0.1) 0%, transparent 100%)',
                                                pointerEvents: 'none',
                                            }}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        );
                    })}
                </Container>
            </Box>

            <Footer />
        </main>
    );
}

'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TourCard from '../../components/TourCard';
import { tourPackages } from '../../data/mockData';
import { Box, Typography, Container, Grid } from '@mui/material';

export default function ToursPage() {
    return (
        <main>
            <Header />
            <Box sx={{ pt: { xs: 8, md: 10 } }}>
                {/* Hero Section */}
                <Box
                    sx={{
                        textAlign: 'center',
                        py: { xs: 12, md: 20 },
                        background: 'linear-gradient(135deg, #06b6d4 0%, #0284c7 50%, #1e3a8a 100%)',
                        position: 'relative',
                        overflow: 'hidden',
                        color: 'white',
                        mb: 8,
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: 'url("https://images.unsplash.com/photo-1588598198321-9735fd99d0e2?w=1600")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: 0.15,
                            zIndex: 0,
                        },
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -50,
                            left: 0,
                            right: 0,
                            height: '100px',
                            background: 'white',
                            borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
                            transform: 'scaleX(1.5)',
                            zIndex: 1,
                        },
                    }}
                >
                    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                        <Typography
                            variant="h1"
                            sx={{
                                fontWeight: 800,
                                mb: 3,
                                fontSize: { xs: '3rem', md: '5rem' },
                                background: 'linear-gradient(to right, #ffffff, #e0f2fe)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                textShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                letterSpacing: '-0.02em',
                            }}
                        >
                            Explore Our Tours
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                maxWidth: 700,
                                mx: 'auto',
                                opacity: 0.9,
                                fontWeight: 500,
                                lineHeight: 1.8,
                                fontSize: { xs: '1.1rem', md: '1.25rem' },
                                textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            }}
                        >
                            Discover the perfect itinerary for your Sri Lankan adventure.
                            From cultural journeys to wildlife safaris.
                        </Typography>
                    </Container>
                </Box>

                {/* Tours Grid */}
                <Container maxWidth="lg" sx={{ mb: 12 }}>
                    <Grid container spacing={4}>
                        {tourPackages.map((tour, index) => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                lg={4}
                                key={tour.id}
                                sx={{
                                    animation: `fadeInUp 0.8s ease-out ${index * 0.1}s backwards`,
                                }}
                            >
                                <TourCard tour={tour} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </main>
    );
}

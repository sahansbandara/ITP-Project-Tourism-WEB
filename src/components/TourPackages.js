'use client';
import * as React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Button,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { tourPackages } from '../data/mockData';
import { useRouter } from 'next/navigation';

export default function TourPackages() {
    const router = useRouter();
    return (
        <Box
            id="tours"
            sx={{
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(180deg, #F0F9FF 0%, #FFFFFF 100%)',
                overflow: 'hidden',
            }}
        >
            <Container maxWidth="lg">
                {/* Section Header */}
                <Box sx={{ textAlign: 'center', mb: 8, position: 'relative', zIndex: 1 }}>
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
                            animation: 'fadeInDown 0.8s ease-out',
                        }}
                    >
                        Our Packages
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            mb: 2,
                            fontWeight: 800,
                            background: 'linear-gradient(135deg, #0C4A6E 0%, #0284C7 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            animation: 'fadeInUp 0.8s ease-out',
                        }}
                    >
                        Popular Tour Packages
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'text.secondary',
                            maxWidth: 600,
                            mx: 'auto',
                            fontSize: '1.1rem',
                            lineHeight: 1.6,
                            animation: 'fadeInUp 1s ease-out',
                        }}
                    >
                        Handpicked experiences designed to create unforgettable memories in the Pearl of the Indian Ocean.
                    </Typography>
                </Box>

                {/* Tour Cards Grid */}
                <Box
                    sx={{
                        mx: { xs: -2, md: 0 },
                        px: { xs: 2, md: 0 },
                    }}
                >
                    <Grid container spacing={4}
                        sx={{
                            flexWrap: { xs: 'nowrap', md: 'wrap' },
                            overflowX: { xs: 'auto', md: 'visible' },
                            scrollSnapType: { xs: 'x mandatory', md: 'none' },
                            pb: { xs: 1, md: 0 },
                            '&::-webkit-scrollbar': { display: 'none' },
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        {tourPackages.map((tour, index) => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                lg={4}
                                key={tour.id}
                                sx={{
                                    animation: `fadeInUp 0.8s ease-out ${index * 0.2}s backwards`,
                                    minWidth: { xs: '85vw', sm: '350px', md: 'auto' },
                                    scrollSnapAlign: 'center',
                                    flexShrink: 0,
                                }}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        borderRadius: 4,
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                                        },
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                    onClick={() => router.push('/tours')}
                                >
                                    <Box sx={{ position: 'relative', height: 240, overflow: 'hidden' }}>
                                        <CardMedia
                                            component="img"
                                            height="100%"
                                            image={tour.image}
                                            alt={tour.title}
                                            sx={{
                                                transition: 'transform 0.5s ease',
                                                '&:hover': {
                                                    transform: 'scale(1.1)',
                                                },
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                                                p: 2,
                                            }}
                                        >
                                            <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>
                                                {tour.title}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                            <Typography variant="body2" color="text.secondary">
                                                {tour.duration}
                                            </Typography>
                                            <Typography variant="h6" color="primary.main" fontWeight={700}>
                                                ${tour.price}
                                            </Typography>
                                        </Box>
                                        <Button
                                            fullWidth
                                            variant="outlined"
                                            color="primary"
                                            endIcon={<ArrowForwardIcon />}
                                            sx={{ borderRadius: 2 }}
                                        >
                                            View Details
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>


            </Container>
        </Box>
    );
}

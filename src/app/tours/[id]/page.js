'use client';
import * as React from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
    Box,
    Container,
    Typography,
    Grid,
    Button,
    Chip,
    Paper,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { tourPackages } from '../../../data/mockData';

export default function TourDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const { id } = params;

    const tour = tourPackages.find(t => t.id === parseInt(id));

    if (!tour) {
        return (
            <main>
                <Header />
                <Container sx={{ py: 20, textAlign: 'center' }}>
                    <Typography variant="h4">Tour not found</Typography>
                    <Button onClick={() => router.push('/tours')} sx={{ mt: 2 }} variant="contained">
                        Back to Tours
                    </Button>
                </Container>
                <Footer />
            </main>
        );
    }

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
                    alignItems: 'flex-end',
                    color: 'white',
                    pb: 8,
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `url(${tour.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: -2,
                    },
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.4) 100%)',
                        zIndex: -1,
                    }
                }}
            >
                <Container maxWidth="lg">
                    <Chip
                        label="Best Seller"
                        sx={{
                            bgcolor: '#F59E0B',
                            color: 'white',
                            fontWeight: 700,
                            mb: 2
                        }}
                    />
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '2.5rem', md: '4rem' },
                            fontWeight: 800,
                            mb: 2,
                            textShadow: '0 4px 20px rgba(0,0,0,0.3)'
                        }}
                    >
                        {tour.title}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <AccessTimeIcon />
                            <Typography variant="h6">{tour.duration}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <LocationOnIcon />
                            <Typography variant="h6">Sri Lanka</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <StarIcon sx={{ color: '#FBBF24' }} />
                            <Typography variant="h6">{tour.rating} ({tour.reviews} reviews)</Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Grid container spacing={6}>
                    {/* Left Content */}
                    <Grid item xs={12} md={8}>
                        {/* Overview */}
                        <Box sx={{ mb: 6 }}>
                            <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                                Overview
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.secondary' }}>
                                {tour.fullDescription || tour.description}
                            </Typography>
                        </Box>

                        <Divider sx={{ mb: 6 }} />

                        {/* Itinerary */}
                        <Box sx={{ mb: 6 }}>
                            <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: 'primary.main' }}>
                                Itinerary
                            </Typography>
                            {tour.itinerary ? (
                                <Box sx={{ position: 'relative', borderLeft: '2px solid #e2e8f0', ml: 2, pl: 4 }}>
                                    {tour.itinerary.map((day, index) => (
                                        <Box key={index} sx={{ mb: 5, position: 'relative' }}>
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    left: -41,
                                                    top: 0,
                                                    width: 16,
                                                    height: 16,
                                                    borderRadius: '50%',
                                                    bgcolor: 'primary.main',
                                                    border: '4px solid white',
                                                    boxShadow: '0 0 0 2px #e2e8f0'
                                                }}
                                            />
                                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
                                                Day {day.day}: {day.title}
                                            </Typography>
                                            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                                                {day.activity}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            ) : (
                                <Typography>Itinerary details coming soon.</Typography>
                            )}
                        </Box>

                        {/* Inclusions & Exclusions */}
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'success.main', display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <CheckCircleIcon /> Included
                                </Typography>
                                <List dense>
                                    {(tour.inclusions || []).map((item, index) => (
                                        <ListItem key={index}>
                                            <ListItemIcon sx={{ minWidth: 32 }}>
                                                <CheckCircleIcon fontSize="small" color="success" />
                                            </ListItemIcon>
                                            <ListItemText primary={item} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'error.main', display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <CancelIcon /> Not Included
                                </Typography>
                                <List dense>
                                    {(tour.exclusions || []).map((item, index) => (
                                        <ListItem key={index}>
                                            <ListItemIcon sx={{ minWidth: 32 }}>
                                                <CancelIcon fontSize="small" color="error" />
                                            </ListItemIcon>
                                            <ListItemText primary={item} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Right Booking Card - Sticky */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ position: 'sticky', top: 100 }}>
                            <Paper elevation={4} sx={{ p: 4, borderRadius: 4 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', mb: 3 }}>
                                    <Typography variant="h6" color="text.secondary">From</Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
                                        <Typography variant="h3" sx={{ fontWeight: 800, color: 'primary.main' }}>
                                            ${tour.price}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">/ person</Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ mb: 3 }}>
                                    <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>Duration</Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 2, bgcolor: '#f1f5f9', borderRadius: 2 }}>
                                        <CalendarMonthIcon color="action" />
                                        <Typography fontWeight={600}>{tour.duration}</Typography>
                                    </Box>
                                </Box>

                                <Button
                                    fullWidth
                                    variant="contained"
                                    size="large"
                                    onClick={() => router.push('/contact')}
                                    sx={{
                                        py: 2,
                                        fontSize: '1.1rem',
                                        fontWeight: 700,
                                        mb: 2,
                                        boxShadow: '0 8px 20px rgba(15, 118, 110, 0.3)'
                                    }}
                                >
                                    Book Now
                                </Button>
                                <Typography variant="caption" display="block" textAlign="center" color="text.secondary">
                                    No upfront payment required
                                </Typography>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <Footer />
        </main>
    );
}

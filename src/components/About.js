'use client';
import * as React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
} from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { companyInfo } from '../data/mockData';

export default function About() {
    const features = [
        {
            icon: <VerifiedUserIcon sx={{ fontSize: 40 }} />,
            title: 'Trusted & Reliable',
            description: 'Licensed by Sri Lanka Tourism with 12+ years of excellence.',
        },
        {
            icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
            title: '24/7 Support',
            description: 'Our team is always available to assist you throughout your journey.',
        },
        {
            icon: <PriceCheckIcon sx={{ fontSize: 40 }} />,
            title: 'Best Price Guarantee',
            description: 'We offer competitive pricing without compromising on quality.',
        },
        {
            icon: <TravelExploreIcon sx={{ fontSize: 40 }} />,
            title: 'Local Expertise',
            description: 'Experienced local guides who know every hidden gem of Sri Lanka.',
        },
    ];

    return (
        <Box
            id="about"
            sx={{
                py: { xs: 8, md: 12 },
                backgroundColor: 'white',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center">
                    {/* Image Grid */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(2, 1fr)',
                                gap: 2,
                            }}
                        >
                            <Box
                                component="img"
                                src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=400"
                                alt="Sri Lanka Temple"
                                sx={{
                                    width: '100%',
                                    height: 200,
                                    objectFit: 'cover',
                                    borderRadius: 3,
                                    gridColumn: '1 / 2',
                                }}
                            />
                            <Box
                                component="img"
                                src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=400"
                                alt="Sri Lanka Beach"
                                sx={{
                                    width: '100%',
                                    height: 250,
                                    objectFit: 'cover',
                                    borderRadius: 3,
                                    gridColumn: '2 / 3',
                                    mt: 4,
                                }}
                            />
                            <Box
                                component="img"
                                src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400"
                                alt="Tea Plantation"
                                sx={{
                                    width: '100%',
                                    height: 250,
                                    objectFit: 'cover',
                                    borderRadius: 3,
                                    gridColumn: '1 / 2',
                                    mt: -4,
                                }}
                            />
                            <Box
                                component="img"
                                src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400"
                                alt="Wildlife Safari"
                                sx={{
                                    width: '100%',
                                    height: 200,
                                    objectFit: 'cover',
                                    borderRadius: 3,
                                    gridColumn: '2 / 3',
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* Content */}
                    <Grid item xs={12} md={6}>
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
                            About Us
                        </Typography>
                        <Typography
                            variant="h2"
                            sx={{
                                mt: 1,
                                mb: 3,
                                color: 'text.primary',
                            }}
                        >
                            Your Gateway to Sri Lanka
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'text.secondary',
                                mb: 4,
                                lineHeight: 1.8,
                            }}
                        >
                            {companyInfo.description}
                            <br /><br />
                            Founded with a passion for sharing our beautiful island with the world,
                            we have helped over 15,000 travelers create unforgettable memories.
                            Our team of expert local guides ensures authentic experiences while
                            our dedication to service excellence keeps our guests coming back.
                        </Typography>

                        {/* Features */}
                        <Grid container spacing={2}>
                            {features.map((feature) => (
                                <Grid item xs={12} sm={6} key={feature.title}>
                                    <Paper
                                        sx={{
                                            p: 2.5,
                                            borderRadius: 3,
                                            backgroundColor: 'background.default',
                                            border: 'none',
                                            boxShadow: 'none',
                                        }}
                                    >
                                        <Box sx={{ color: 'primary.main', mb: 1.5 }}>
                                            {feature.icon}
                                        </Box>
                                        <Typography
                                            variant="h6"
                                            sx={{ fontWeight: 700, mb: 0.5, fontSize: '1rem' }}
                                        >
                                            {feature.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {feature.description}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

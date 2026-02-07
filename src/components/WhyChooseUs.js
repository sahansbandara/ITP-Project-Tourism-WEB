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

const features = [
    {
        icon: <VerifiedUserIcon sx={{ fontSize: 48 }} />,
        title: 'Trusted & Reliable',
        description: 'Licensed by Sri Lanka Tourism with 12+ years of excellence.',
    },
    {
        icon: <SupportAgentIcon sx={{ fontSize: 48 }} />,
        title: '24/7 Support',
        description: 'Our team is always available to assist you throughout your journey.',
    },
    {
        icon: <PriceCheckIcon sx={{ fontSize: 48 }} />,
        title: 'Best Price Guarantee',
        description: 'We offer competitive pricing without compromising on quality.',
    },
    {
        icon: <TravelExploreIcon sx={{ fontSize: 48 }} />,
        title: 'Local Expertise',
        description: 'Experienced local guides who know every hidden gem of Sri Lanka.',
    },
];

export default function WhyChooseUs() {
    return (
        <Box
            id="why-choose-us"
            sx={{
                py: { xs: 8, md: 12 },
                backgroundColor: '#f8fafc', // Light slate/gray background for contrast
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography
                        component="span"
                        sx={{
                            color: 'primary.main',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.15em',
                            fontSize: '0.875rem',
                            display: 'block',
                            mb: 1,
                        }}
                    >
                        Why Choose Us
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            color: 'text.primary',
                            fontWeight: 700,
                        }}
                    >
                        Experience the Difference
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={3} key={feature.title}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    height: '100%',
                                    borderRadius: 4,
                                    backgroundColor: 'white',
                                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.08)',
                                    },
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                }}
                            >
                                <Box
                                    sx={{
                                        color: 'primary.main',
                                        mb: 3,
                                        p: 2,
                                        borderRadius: '50%',
                                        backgroundColor: 'rgba(15, 118, 110, 0.08)',
                                    }}
                                >
                                    {feature.icon}
                                </Box>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 700,
                                        mb: 2,
                                        fontSize: '1.25rem',
                                    }}
                                >
                                    {feature.title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    sx={{
                                        lineHeight: 1.7,
                                    }}
                                >
                                    {feature.description}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

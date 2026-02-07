'use client';
import * as React from 'react';
import {
    Box,
    Typography,
    Card,
    Button,
    Chip,
    IconButton,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { useRouter } from 'next/navigation';

export default function TourCard({ tour }) {
    const router = useRouter();

    return (
        <Card
            sx={{
                height: 480, // Fixed height for uniformity
                position: 'relative',
                borderRadius: '32px',
                overflow: 'hidden',
                boxShadow: '0 10px 40px -10px rgba(2, 132, 199, 0.15)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    boxShadow: '0 30px 60px -15px rgba(2, 132, 199, 0.3)',
                    '& .card-image': {
                        transform: 'scale(1.15)',
                    },
                    '& .glass-content': {
                        transform: 'translateY(0)',
                        background: 'linear-gradient(to top, rgba(2, 132, 199, 0.95) 0%, rgba(12, 74, 110, 0.9) 100%)',
                    },
                    '& .hidden-on-rest': {
                        opacity: 1,
                        transform: 'translateY(0)',
                        maxHeight: '200px',
                    }
                },
            }}
        >
            {/* Background Image */}
            <Box
                component="img"
                src={tour.image}
                alt={tour.title}
                className="card-image"
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
            />

            {/* Top Badges */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 24,
                    left: 24,
                    right: 24,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    zIndex: 2,
                }}
            >
                {tour.originalPrice > tour.price ? (
                    <Chip
                        label={`${Math.round((1 - tour.price / tour.originalPrice) * 100)}% OFF`}
                        sx={{
                            background: 'rgba(255, 255, 255, 0.9)',
                            backdropFilter: 'blur(8px)',
                            color: '#EF4444',
                            fontWeight: 800,
                            borderRadius: '12px',
                            height: '32px',
                        }}
                    />
                ) : <Box />}

                <IconButton
                    sx={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(8px)',
                        color: 'text.secondary',
                        transition: 'all 0.2s',
                        '&:hover': {
                            background: '#fff',
                            color: 'red',
                            transform: 'scale(1.1)',
                        },
                    }}
                >
                    <FavoriteBorderIcon fontSize="small" />
                </IconButton>
            </Box>

            {/* Sliding Glass Content */}
            <Box
                className="glass-content"
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: 4,
                    background: 'linear-gradient(to top, rgba(12, 74, 110, 0.9) 0%, rgba(12, 74, 110, 0) 100%)',
                    backdropFilter: 'blur(4px)',
                    color: 'white',
                    transform: 'translateY(0)', // Initially slightly visible
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    height: '100%',
                    clipPath: 'inset(0 0 0 0)',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 40%)',
                }}
            >
                <Box sx={{ mt: 'auto' }}> {/* Push content to bottom */}
                    {/* Meta Info Row */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1, opacity: 0.9 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <AccessTimeIcon sx={{ fontSize: 16 }} />
                            <Typography variant="caption" fontWeight={600}>{tour.duration}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <LocationOnIcon sx={{ fontSize: 16 }} />
                            <Typography variant="caption" fontWeight={600}>Sri Lanka</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <StarIcon sx={{ fontSize: 16, color: '#FBBF24' }} />
                            <Typography variant="caption" fontWeight={600}>{tour.rating}</Typography>
                        </Box>
                    </Box>

                    {/* Title */}
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 800,
                            mb: 1,
                            fontSize: '1.75rem',
                            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                        }}
                    >
                        {tour.title}
                    </Typography>

                    {/* Price - Always Visible */}
                    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 2 }}>
                        <Typography variant="h5" sx={{ fontWeight: 800, color: '#bae6fd' }}>
                            ${tour.price}
                        </Typography>
                        <Typography variant="caption" sx={{ opacity: 0.8 }}>/ person</Typography>
                    </Box>

                    {/* Hidden Details - Reveal on Hover */}
                    <Box
                        className="hidden-on-rest"
                        sx={{
                            maxHeight: 0,
                            opacity: 0,
                            transform: 'translateY(20px)',
                            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                            overflow: 'hidden',
                        }}
                    >
                        <Typography variant="body2" sx={{ opacity: 0.9, mb: 2, lineHeight: 1.6 }}>
                            {tour.description}
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                            {tour.highlights.slice(0, 3).map((highlight) => (
                                <Chip
                                    key={highlight}
                                    label={highlight}
                                    size="small"
                                    sx={{
                                        background: 'rgba(255,255,255,0.2)',
                                        color: 'white',
                                        border: '1px solid rgba(255,255,255,0.3)',
                                    }}
                                />
                            ))}
                        </Box>

                        <Button
                            fullWidth
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            onClick={() => router.push(`/tours/${tour.id}`)}
                            sx={{
                                background: 'white',
                                color: 'primary.main',
                                fontWeight: 800,
                                py: 1.5,
                                borderRadius: '16px',
                                '&:hover': {
                                    background: '#f0f9ff',
                                },
                            }}
                        >
                            Book This Adventure
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Card >
    );
}

'use client';
import * as React from 'react';
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Avatar,
    Rating,
    IconButton,
} from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { testimonials } from '../data/mockData';

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, #0284C7 0%, #0369A1 100%)',
                    zIndex: -1,
                },
            }}
        >
            <Container maxWidth="md">
                {/* Section Header */}
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography
                        component="span"
                        sx={{
                            color: 'rgba(255, 255, 255, 0.7)',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.15em',
                            fontSize: '0.875rem',
                        }}
                    >
                        Testimonials
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            mt: 1,
                            color: 'white',
                        }}
                    >
                        What Our Travelers Say
                    </Typography>
                </Box>

                {/* Testimonial Card */}
                <Box sx={{ position: 'relative' }}>
                    <Card
                        sx={{
                            textAlign: 'center',
                            p: { xs: 3, md: 5 },
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(20px)',
                        }}
                    >
                        <FormatQuoteIcon
                            sx={{
                                fontSize: 60,
                                color: 'primary.light',
                                opacity: 0.5,
                                mb: 2,
                            }}
                        />

                        <CardContent>
                            <Rating
                                value={testimonials[activeIndex].rating}
                                readOnly
                                sx={{ mb: 3 }}
                            />

                            <Typography
                                variant="h6"
                                sx={{
                                    fontStyle: 'italic',
                                    color: 'text.secondary',
                                    mb: 4,
                                    lineHeight: 1.8,
                                    maxWidth: 600,
                                    mx: 'auto',
                                }}
                            >
                                "{testimonials[activeIndex].comment}"
                            </Typography>

                            <Avatar
                                sx={{
                                    width: 70,
                                    height: 70,
                                    mx: 'auto',
                                    mb: 2,
                                    background: 'linear-gradient(135deg, #14B8A6 0%, #0F766E 100%)',
                                    fontSize: '1.5rem',
                                    fontWeight: 700,
                                }}
                            >
                                {testimonials[activeIndex].avatar}
                            </Avatar>

                            <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>
                                {testimonials[activeIndex].name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {testimonials[activeIndex].country}
                            </Typography>
                            <Typography
                                variant="caption"
                                sx={{
                                    display: 'inline-block',
                                    mt: 1,
                                    px: 2,
                                    py: 0.5,
                                    borderRadius: 2,
                                    backgroundColor: 'primary.light',
                                    color: 'white',
                                    fontWeight: 600,
                                }}
                            >
                                {testimonials[activeIndex].tour}
                            </Typography>
                        </CardContent>
                    </Card>

                    {/* Navigation Buttons */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: 2,
                            mt: 4,
                        }}
                    >
                        <IconButton
                            onClick={handlePrev}
                            sx={{
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                },
                            }}
                        >
                            <ArrowBackIosIcon sx={{ fontSize: 18, ml: 0.5 }} />
                        </IconButton>
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                            {testimonials.map((_, index) => (
                                <Box
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    sx={{
                                        width: index === activeIndex ? 24 : 8,
                                        height: 8,
                                        borderRadius: 4,
                                        backgroundColor: index === activeIndex
                                            ? 'white'
                                            : 'rgba(255, 255, 255, 0.4)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                    }}
                                />
                            ))}
                        </Box>
                        <IconButton
                            onClick={handleNext}
                            sx={{
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                },
                            }}
                        >
                            <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
                        </IconButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

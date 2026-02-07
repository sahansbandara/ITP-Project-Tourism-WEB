'use client';
import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { companyInfo } from '../data/mockData';

const heroTexts = [
    "Discover the Pearl of the Indian Ocean",
    "Explore Ancient Kingdoms",
    "Experience Pristine Beaches",
    "Adventure Awaits in Sri Lanka",
];

export default function Hero() {
    const [index, setIndex] = React.useState(0);
    const [fade, setFade] = React.useState(true);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % heroTexts.length);
                setFade(true);
            }, 600); // Wait for fade out
        }, 4000); // Change text every 4 seconds

        return () => clearInterval(interval);
    }, []);

    const scrollToTours = () => {
        const element = document.querySelector('#tours');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box
            id="home"
            sx={{
                minHeight: '100vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',

                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to top, rgba(2, 132, 199, 0.8) 0%, rgba(3, 105, 161, 0.2) 100%)',
                    zIndex: -1,
                },
            }}
        >
            <Box
                component="video"
                autoPlay
                muted
                loop
                playsInline
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -2,
                }}
            >
                <source src="/Srilanka_Overall_Hero_1.mp4" type="video/mp4" />
            </Box>

            <Container maxWidth="lg">
                <Box
                    sx={{
                        textAlign: 'center',
                        color: 'white',
                        py: { xs: 8, md: 4 },
                    }}
                >
                    <Box
                        sx={{
                            minHeight: { xs: '120px', sm: '140px', md: '160px' },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 3,
                        }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                                fontWeight: 800,
                                lineHeight: 1.1,
                                textShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
                                opacity: fade ? 1 : 0,
                                transform: fade ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'all 0.6s ease-in-out',
                            }}
                        >
                            {heroTexts[index]}
                        </Typography>
                    </Box>

                    <Typography
                        variant="h6"
                        sx={{
                            maxWidth: 700,
                            mx: 'auto',
                            opacity: 0.9,
                            fontWeight: 400,
                            lineHeight: 1.7,
                            transition: 'opacity 0.6s ease-in-out',
                        }}
                    >
                        {companyInfo.description}
                    </Typography>
                </Box>

                {/* Scroll Indicator */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 40,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        animation: 'bounce 2s infinite',
                        '@keyframes bounce': {
                            '0%, 20%, 50%, 80%, 100%': {
                                transform: 'translateX(-50%) translateY(0)',
                            },
                            '40%': {
                                transform: 'translateX(-50%) translateY(-15px)',
                            },
                            '60%': {
                                transform: 'translateX(-50%) translateY(-7px)',
                            },
                        },
                    }}
                >
                    <KeyboardArrowDownIcon
                        sx={{
                            fontSize: 40,
                            color: 'rgba(255, 255, 255, 0.7)',
                            cursor: 'pointer',
                        }}
                        onClick={scrollToTours}
                    />
                </Box>
            </Container>
        </Box>
    );
}

'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#0284C7', // Ocean Blue
            light: '#38BDF8', // Light Blue
            dark: '#0369A1', // Deep Blue
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#0EA5E9', // Sky Blue
            light: '#7DD3FC',
            dark: '#0284C7',
            contrastText: '#ffffff',
        },
        background: {
            default: '#F0F9FF', // Very light blue/white
            paper: '#FFFFFF',
        },
        text: {
            primary: '#0C4A6E', // Deep ocean text
            secondary: '#075985', // Lighter ocean text
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 800,
            fontSize: '3.5rem',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
        },
        h2: {
            fontWeight: 700,
            fontSize: '2.5rem',
            lineHeight: 1.3,
            letterSpacing: '-0.01em',
        },
        h3: {
            fontWeight: 600,
            fontSize: '1.75rem',
            lineHeight: 1.4,
        },
        h4: {
            fontWeight: 600,
            fontSize: '1.25rem',
            lineHeight: 1.5,
        },
        h5: {
            fontWeight: 600,
            fontSize: '1.1rem',
            lineHeight: 1.5,
        },
        h6: {
            fontWeight: 600,
            fontSize: '1rem',
            lineHeight: 1.5,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.7,
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.6,
        },
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 600,
                    borderRadius: '50px',
                    padding: '12px 28px',
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: '0 8px 25px rgba(15, 118, 110, 0.3)',
                        transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                },
                containedPrimary: {
                    background: 'linear-gradient(135deg, #0284C7 0%, #0369A1 100%)',
                },
                containedSecondary: {
                    background: 'linear-gradient(135deg, #38BDF8 0%, #0284C7 100%)',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '20px',
                    boxShadow: '0 4px 20px rgba(2, 132, 199, 0.08)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(2, 132, 199, 0.15)',
                    },
                },
            },
        },
    },
});

export default theme;

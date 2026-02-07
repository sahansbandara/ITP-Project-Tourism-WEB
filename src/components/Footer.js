'use client';
import * as React from 'react';
import { Box, Container, Typography, Grid, IconButton, Link } from '@mui/material';
import ExploreIcon from '@mui/icons-material/Explore';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { companyInfo, navLinks } from '../data/mockData';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <FacebookIcon />, href: '#', label: 'Facebook' },
        { icon: <InstagramIcon />, href: '#', label: 'Instagram' },
        { icon: <TwitterIcon />, href: '#', label: 'Twitter' },
        { icon: <YouTubeIcon />, href: '#', label: 'YouTube' },
    ];

    const quickLinks = [
        { label: 'About Us', href: '#about' },
        { label: 'Our Tours', href: '#tours' },
        { label: 'Destinations', href: '#destinations' },
        { label: 'Contact', href: '#contact' },
    ];

    const moreLinks = [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cancellation Policy', href: '#' },
        { label: 'FAQs', href: '#' },
    ];

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#0C4A6E', // Deep ocean blue
                color: 'rgba(255, 255, 255, 0.8)',
                pt: { xs: 6, md: 8 },
                pb: 3,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} sx={{ mb: 6 }}>
                    {/* Company Info */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <ExploreIcon sx={{ fontSize: 36, color: 'primary.main', mr: 1 }} />
                            <Typography variant="h5" sx={{ fontWeight: 800, color: 'white' }}>
                                {companyInfo.name}
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.8 }}>
                            Experience the magic of Sri Lanka with our expertly crafted tours.
                            From ancient temples to pristine beaches, we make your travel dreams come true.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            {socialLinks.map((social) => (
                                <IconButton
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    sx={{
                                        color: 'rgba(255, 255, 255, 0.6)',
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        '&:hover': {
                                            backgroundColor: 'primary.main',
                                            color: 'white',
                                        },
                                    }}
                                >
                                    {social.icon}
                                </IconButton>
                            ))}
                        </Box>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: 'white', mb: 2 }}>
                            Quick Links
                        </Typography>
                        <Box component="nav">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    sx={{
                                        display: 'block',
                                        color: 'rgba(255, 255, 255, 0.7)',
                                        textDecoration: 'none',
                                        py: 0.75,
                                        transition: 'color 0.3s ease',
                                        '&:hover': {
                                            color: 'primary.light',
                                        },
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </Box>
                    </Grid>

                    {/* More Links */}
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: 'white', mb: 2 }}>
                            Support
                        </Typography>
                        <Box component="nav">
                            {moreLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    sx={{
                                        display: 'block',
                                        color: 'rgba(255, 255, 255, 0.7)',
                                        textDecoration: 'none',
                                        py: 0.75,
                                        transition: 'color 0.3s ease',
                                        '&:hover': {
                                            color: 'primary.light',
                                        },
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </Box>
                    </Grid>

                    {/* Contact Info */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: 'white', mb: 2 }}>
                            Contact Info
                        </Typography>
                        <Box sx={{ '& > *': { mb: 1.5 } }}>
                            <Typography variant="body2">
                                📍 {companyInfo.address}
                            </Typography>
                            <Typography variant="body2">
                                📞 {companyInfo.phone}
                            </Typography>
                            <Typography variant="body2">
                                ✉️ {companyInfo.email}
                            </Typography>
                            <Typography variant="body2">
                                💬 WhatsApp: {companyInfo.whatsapp}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                {/* Bottom Bar */}
                <Box
                    sx={{
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                        pt: 3,
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2,
                    }}
                >
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                        © {currentYear} {companyInfo.name}. All rights reserved.
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                        Crafted with ❤️ for amazing travel experiences
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

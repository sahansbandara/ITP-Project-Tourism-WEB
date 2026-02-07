'use client';
import * as React from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Container,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExploreIcon from '@mui/icons-material/Explore';
import { navLinks, companyInfo } from '../data/mockData';

import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50,
    });

    const isHome = pathname === '/';
    const showSolid = !isHome || trigger;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const scrollToSection = (href) => {
        setMobileOpen(false);

        // Handle route navigation (e.g. /contact)
        if (href.startsWith('/')) {
            router.push(href);
            return;
        }

        // Handle hash navigation
        if (pathname === '/') {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // If not on home page, navigate to home + hash
            router.push(`/${href}`);
        }
    };

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    background: showSolid
                        ? 'rgba(255, 255, 255, 0.95)'
                        : 'transparent',
                    backdropFilter: showSolid ? 'blur(20px)' : 'none',
                    boxShadow: showSolid ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
                    transition: 'all 0.3s ease',
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ py: 1 }}>
                        {/* Logo */}
                        <Box sx={{ display: 'flex', alignItems: 'center', mr: 4 }}>
                            <ExploreIcon
                                sx={{
                                    fontSize: 40,
                                    color: showSolid ? 'primary.main' : 'white',
                                    mr: 1,
                                    transition: 'color 0.3s ease',
                                }}
                            />
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href="#home"
                                sx={{
                                    fontWeight: 800,
                                    color: showSolid ? 'primary.main' : 'white',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s ease',
                                }}
                            >
                                {companyInfo.name}
                            </Typography>
                        </Box>

                        {/* Desktop Navigation */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 1 }}>
                            {navLinks.map((link) => (
                                <Button
                                    key={link.label}
                                    onClick={() => scrollToSection(link.href)}
                                    sx={{
                                        color: showSolid ? 'text.primary' : 'white',
                                        fontSize: '0.95rem',
                                        fontWeight: 500,
                                        px: 2,
                                        '&:hover': {
                                            backgroundColor: showSolid
                                                ? 'rgba(15, 118, 110, 0.08)'
                                                : 'rgba(255, 255, 255, 0.1)',
                                            transform: 'none',
                                            boxShadow: 'none',
                                        },
                                    }}
                                >
                                    {link.label}
                                </Button>
                            ))}
                        </Box>

                        {/* CTA Button */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => router.push('/contact')}
                                sx={{
                                    px: 3,
                                    py: 1.5,
                                }}
                            >
                                Book Now
                            </Button>
                        </Box>

                        {/* Mobile Menu Icon */}
                        <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
                            <IconButton
                                size="large"
                                onClick={handleDrawerToggle}
                                sx={{ color: showSolid ? 'primary.main' : 'white' }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                PaperProps={{
                    sx: {
                        width: '100%',
                        maxWidth: 320,
                        backgroundColor: 'primary.main', // Fallback
                        background: 'linear-gradient(135deg, #0284C7 0%, #0369A1 100%)', // Theme blue gradient
                        boxShadow: '-4px 0 20px rgba(0,0,0,0.2)',
                    }
                }}
            >
                {/* Drawer Header */}
                <Box sx={{
                    p: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid rgba(255,255,255,0.1)'
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <ExploreIcon sx={{ color: 'white', mr: 1, fontSize: 28 }} />
                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>
                            {companyInfo.name}
                        </Typography>
                    </Box>

                    <IconButton
                        onClick={handleDrawerToggle}
                        sx={{
                            color: 'white',
                            '&:hover': { background: 'rgba(255,255,255,0.1)' }
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>

                {/* Drawer Content */}
                <Box sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    justifyContent: 'space-between'
                }}>
                    <List>
                        {navLinks.map((link) => (
                            <ListItem key={link.label} disablePadding sx={{ mb: 1 }}>
                                <ListItemButton
                                    onClick={() => scrollToSection(link.href)}
                                    sx={{
                                        py: 1.5,
                                        px: 2,
                                        borderRadius: 2,
                                        transition: 'all 0.2s',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                            transform: 'translateX(5px)',
                                        },
                                        background: pathname === link.href ? 'rgba(255,255,255,0.1)' : 'transparent',
                                    }}
                                >
                                    <ListItemText
                                        primary={link.label}
                                        primaryTypographyProps={{
                                            fontSize: '1.1rem',
                                            fontWeight: 600,
                                            color: 'white',
                                            letterSpacing: '0.02em',
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                    <Box sx={{ pb: 4 }}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="secondary"
                            onClick={() => router.push('/contact')}
                            sx={{
                                py: 2,
                                borderRadius: 3,
                                backgroundColor: 'white',
                                color: 'primary.main',
                                fontWeight: 700,
                                fontSize: '1rem',
                                '&:hover': {
                                    backgroundColor: 'rgba(255,255,255,0.9)',
                                    transform: 'scale(1.02)'
                                }
                            }}
                        >
                            Book Your Trip Today
                        </Button>
                        <Typography
                            variant="caption"
                            display="block"
                            align="center"
                            sx={{ mt: 2, color: 'rgba(255,255,255,0.5)' }}
                        >
                            © {new Date().getFullYear()} {companyInfo.name}
                        </Typography>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
}

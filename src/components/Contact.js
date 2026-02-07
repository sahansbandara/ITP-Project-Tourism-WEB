'use client';
import * as React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    TextField,
    Button,
    Paper,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendIcon from '@mui/icons-material/Send';
import { companyInfo } from '../data/mockData';

export default function Contact() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('Thank you for your inquiry! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    const contactCards = [
        {
            icon: <LocationOnIcon sx={{ fontSize: 28 }} />,
            title: 'Visit Us',
            content: companyInfo.address,
        },
        {
            icon: <PhoneIcon sx={{ fontSize: 28 }} />,
            title: 'Call Us',
            content: companyInfo.phone,
        },
        {
            icon: <EmailIcon sx={{ fontSize: 28 }} />,
            title: 'Email Us',
            content: companyInfo.email,
        },
        {
            icon: <WhatsAppIcon sx={{ fontSize: 28 }} />,
            title: 'WhatsApp',
            content: companyInfo.whatsapp,
        },
    ];

    return (
        <Box
            id="contact"
            sx={{
                py: { xs: 8, md: 12 },
                backgroundColor: 'background.default',
            }}
        >
            <Container maxWidth="lg">
                {/* Section Header */}
                <Box sx={{ textAlign: 'center', mb: 8 }}>
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
                        Get In Touch
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            mt: 1,
                            mb: 2,
                            color: 'text.primary',
                        }}
                    >
                        Plan Your Dream Trip
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'text.secondary',
                            maxWidth: 600,
                            mx: 'auto',
                        }}
                    >
                        Ready to explore Sri Lanka? Get in touch with our travel experts
                        and let us create the perfect itinerary for you.
                    </Typography>
                </Box>

                {/* Contact Cards */}
                <Grid container spacing={3} sx={{ mb: 6 }}>
                    {contactCards.map((card, index) => (
                        <Grid item xs={6} md={3} key={index}>
                            <Paper
                                sx={{
                                    p: 3,
                                    textAlign: 'center',
                                    borderRadius: 3,
                                    height: '100%',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 10px 30px rgba(15, 118, 110, 0.15)',
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mx: 'auto',
                                        mb: 2,
                                        background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(15, 118, 110, 0.1) 100%)',
                                        color: 'primary.main',
                                    }}
                                >
                                    {card.icon}
                                </Box>
                                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                                    {card.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ wordBreak: 'break-word' }}
                                >
                                    {card.content}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                {/* Contact Form */}
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Card
                            sx={{
                                p: { xs: 3, md: 4 },
                                height: '100%',
                            }}
                        >
                            <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
                                Send Us a Message
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Your Name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Email Address"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Phone Number"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Your Message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            multiline
                                            rows={4}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            endIcon={<SendIcon />}
                                            sx={{ px: 5, py: 1.5 }}
                                        >
                                            Send Message
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card
                            sx={{
                                height: '100%',
                                overflow: 'hidden',
                                minHeight: 400,
                            }}
                        >
                            <Box
                                component="iframe"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58585988263!2d79.7861641!3d6.9270786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1704567890123!5m2!1sen!2sus"
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    border: 0,
                                    minHeight: 400,
                                }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

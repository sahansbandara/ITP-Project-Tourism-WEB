import Header from '../../components/Header';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Box from '@mui/material/Box';

export default function ContactPage() {
    return (
        <main>
            <Header />
            <Box sx={{ pt: { xs: 8, md: 10 } }}>
                <Contact />
            </Box>
            <Footer />
        </main>
    );
}

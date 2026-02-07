import Header from '../../components/Header';
import About from '../../components/About';
import Footer from '../../components/Footer';
import { Box } from '@mui/material';

export default function AboutPage() {
    return (
        <main>
            <Header />
            <Box sx={{ pt: { xs: 8, md: 10 } }}>
                <About />
            </Box>
            <Footer />
        </main>
    );
}

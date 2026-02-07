import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutSriLanka from '../components/AboutSriLanka';
import TourPackages from '../components/TourPackages';
import Destinations from '../components/Destinations';

import WhyChooseUs from '../components/WhyChooseUs';

import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutSriLanka />
      <TourPackages />
      <Destinations />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </main>
  );
}

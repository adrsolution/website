import react from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import AboutUsSection from './Components/AboutUsSection';
import ServicesSection from './Components/ServicesSection';
import ContactSection from './Components/ContactSection';
import Preloader from './Components/Preloader';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <main id="main">
          <AboutUsSection />
          <ServicesSection />
          <ContactSection />
      </main>
      <Preloader />
      <Footer />
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatIBuild from './components/WhatIBuild';
import Experience from './components/Experience';
import FeaturedWork from './components/FeaturedWork';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <div id="home" class="bg-cream text-navy font-sans antialiased selection:bg-navy selection:text-cream">
      <ScrollToTop />
      <Navbar />
      <Hero />
      <About />
      <WhatIBuild />
      <Experience />
      <FeaturedWork />
      <section id="contact" class="bg-cream py-16 lg:py-24 border-t border-navy/10">
        <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <ContactCTA />
        </div>
      </section>
      <Footer />
    </div>
  );
}

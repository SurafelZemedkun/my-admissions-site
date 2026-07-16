import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import SuccessStoriesSection from './components/SuccessStoriesSection';
import WhyUsSection from './components/WhyUsSection';
import BookingSection from './components/BookingSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <SuccessStoriesSection />
        <WhyUsSection />
        <BookingSection />
      </main>
      <Footer />
    </>
  );
} 

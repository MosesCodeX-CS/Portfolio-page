import React from 'react';
import ParticleBackground from '../components/UI/ParticleBackground';
import HeroSection from '../components/Home/HeroSection';
import ServicesSection from '../components/Home/ServicesSection';
import FeaturedProjectsSection from '../components/Home/FeaturedProjectsSection';
import TestimonialsSection from '../components/Home/TestimonialsSection';
import CertificationsSection from '../components/Home/CertificationsSection';

const HomePage = () => {
  return (
    <div className="relative">
      <ParticleBackground />
      <HeroSection homePreview />
      <ServicesSection homePreview />
      <FeaturedProjectsSection homePreview />
      <TestimonialsSection homePreview />
      <CertificationsSection homePreview />
    </div>
  );
};

export default HomePage;
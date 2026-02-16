import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { FeaturedProjectsSection } from '../components/FeaturedProjectsSection';

export const HomePage: React.FC = () => (
  <main className="page__content">
    <HeroSection />
    <FeaturedProjectsSection />
  </main>
);

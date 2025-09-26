import React from 'react';
import { ModeProvider } from '@/components/ModeProvider';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeatureCards from '@/components/FeatureCards';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <ModeProvider>
      <div className="min-h-screen bg-background mode-transition">
        <Header />
        <main>
          <Hero />
          <FeatureCards />
        </main>
        <Footer />
      </div>
    </ModeProvider>
  );
};

export default Index;

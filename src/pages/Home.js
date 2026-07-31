import React, { useEffect } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { PurposeSection } from '../components/home/PurposeSection';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { AppShowcase } from '../components/home/AppShowcase';
import { PremiumSection } from '../components/home/PremiumSection';
import { CTASection } from '../components/home/CTASection';

export function Home() {
  useEffect(() => {
    document.title = 'Al Quran';
  }, []);

  return (
    <main className="home-page">
      <HeroSection />
      <PurposeSection />
      <FeaturesSection />
      <AppShowcase />
      <PremiumSection />
      <CTASection />
    </main>
  );
}

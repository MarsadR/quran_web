import React, { useEffect } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { PurposeSection } from '../components/home/PurposeSection';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { AppShowcase } from '../components/home/AppShowcase';
import { PrayerSchedule } from '../components/home/PrayerSchedule';
import { PremiumSection } from '../components/home/PremiumSection';
import { CTASection } from '../components/home/CTASection';

export function Home() {
  useEffect(() => {
    document.title = 'Al Quran Super App - Your Ultimate Islamic Companion';
  }, []);

  return (
    <main className="home-page">
      <HeroSection />
      <PurposeSection />
      <FeaturesSection />
      <AppShowcase />
      <PrayerSchedule />
      <PremiumSection />
      <CTASection />
    </main>
  );
}

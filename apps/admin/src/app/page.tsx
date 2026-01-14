import { Navigation } from '@/components/landing/Navigation';
import { HeroSection } from '@/components/landing/HeroSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { CapabilitiesSection } from '@/components/landing/CapabilitiesSection';
import { SecuritySection } from '@/components/landing/SecuritySection';
import { StatsSection } from '@/components/landing/StatsSection';
import { CTASection } from '@/components/landing/CTASection';
import { Footer } from '@/components/landing/Footer';

export default function Page() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <CapabilitiesSection />
      <SecuritySection />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  );
}


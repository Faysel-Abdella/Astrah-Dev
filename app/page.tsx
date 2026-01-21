import RegionalFitSection from "@/components/regional-fit-section";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import YourCRM from "@/components/your-crm";
import FeatureShowcase from "@/components/feature-showcase";
import MigrationCTA from "@/components/migration-cta";
import PricingCTA from "@/components/pricing-cta";
import BottomCTA from "@/components/bottom-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden space-y-30">
      <HeroSection />
      <YourCRM />
      <RegionalFitSection />
      <FeatureShowcase />
      <MigrationCTA />
      <PricingCTA />
      <BottomCTA />
    </main>
  );
}

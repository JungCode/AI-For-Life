import { AnimatedBackground } from "@/shared/components/AnimatedBackground";

import {
  HeroSection,
  ExamplesSection,
  IntroductionSection,
} from "@/features/Dashboard/pages/Home/components";
import { FeaturesSection } from "@/features/Dashboard/pages/Home/components/FeaturesSection";
import { RagTechnologySection } from "@/features/Dashboard/pages/Home/components/RagTechnologySection";
import { ResearchFeaturesSection } from "@/features/Dashboard/pages/Home/components/ResearchFeaturesSection";
import { UseCasesSection } from "@/features/Dashboard/pages/Home/components/UseCasesSection";
import { Footer } from "@/features/Dashboard/layout/Footer";
import { Header } from "@/features/Dashboard/layout";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <main className="flex flex-col items-center">
          <HeroSection />
          <ExamplesSection />
          <RagTechnologySection />
          <ResearchFeaturesSection />
          <IntroductionSection />
          <UseCasesSection />
          <FeaturesSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

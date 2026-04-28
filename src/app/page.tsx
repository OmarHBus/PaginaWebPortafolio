import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProblemBenefit } from "@/components/sections/ProblemBenefit";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { DemoSection } from "@/components/sections/DemoSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ForWhoSection } from "@/components/sections/ForWhoSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";

export default function Home() {
  return (
    <div className="min-h-full">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemBenefit />
        <ServicesSection />
        <DemoSection />
        <PricingSection />
        <ProcessSection />
        <ForWhoSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

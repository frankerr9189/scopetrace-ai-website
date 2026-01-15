"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { WalkthroughSection } from "@/components/WalkthroughSection";
import { WhySection } from "@/components/WhySection";
import { ProductStatus } from "@/components/ProductStatus";
import { FinalCTA } from "@/components/FinalCTA";
import MoreInfoModal from "@/components/MoreInfoModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Fixed diagonal gradient pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute w-full h-full opacity-40"
          style={{
            background: `
              radial-gradient(circle at 0% 0%, transparent 0%, rgba(34, 211, 238, 0.08) 25%, transparent 50%),
              radial-gradient(circle at 0% 50%, transparent 0%, rgba(59, 130, 246, 0.12) 35%, transparent 60%),
              radial-gradient(circle at 0% 100%, transparent 0%, rgba(34, 211, 238, 0.08) 25%, transparent 50%)
            `
          }}
        />
      </div>
      
      <div className="relative z-10">
        <Navigation onMoreInfoClick={() => setIsModalOpen(true)} />
        <Hero />
        <HowItWorks onLearnMore={() => window.location.href = "/how-it-works"} />
        <WalkthroughSection />
        <WhySection />
        <ProductStatus />
        <FinalCTA onOpenModal={() => setIsModalOpen(true)} />
        <Footer />
      </div>

      <MoreInfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

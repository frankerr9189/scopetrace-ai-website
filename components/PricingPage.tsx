"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import MoreInfoModal from "@/components/MoreInfoModal";

export default function PricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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
          {/* Navigation */}
          <Navigation
            onMoreInfoClick={() => setIsModalOpen(true)}
          />

          {/* Main Content */}
          <section className="pt-32 pb-20 px-6 min-h-[80vh] flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-foreground mb-8">
                Pricing Information
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                Contact us to discuss pricing options tailored to your organization's needs.
              </p>
              <div className="border border-border/50 bg-card/50 rounded-lg p-12 inline-block">
                <p className="text-lg text-muted-foreground mb-4">
                  For pricing inquiries, please contact:
                </p>
                <a
                  href="mailto:Hello@scopetraceai.com"
                  className="text-2xl text-primary hover:text-primary/80 transition-colors"
                >
                  Hello@scopetraceai.com
                </a>
              </div>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </div>
      <MoreInfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

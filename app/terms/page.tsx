"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import MoreInfoModal from "@/components/MoreInfoModal";

export default function TermsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="relative z-10">
        <Navigation onMoreInfoClick={() => setIsModalOpen(true)} />
        
        <div className="max-w-4xl mx-auto px-6 py-24 mt-16">
          <h1 className="text-4xl md:text-5xl font-medium mb-8">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using ScopeTraceAI, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">2. Use License</h2>
              <p className="text-muted-foreground">
                Permission is granted to temporarily use ScopeTraceAI for personal and commercial purposes. This is the grant of a license, not a transfer of title.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">3. Disclaimer</h2>
              <p className="text-muted-foreground">
                The materials on ScopeTraceAI are provided on an 'as is' basis. ScopeTraceAI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">4. Limitations</h2>
              <p className="text-muted-foreground">
                In no event shall ScopeTraceAI or its suppliers be liable for any damages arising out of the use or inability to use the materials on ScopeTraceAI.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">5. Contact Information</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:Hello@scopetraceai.com" className="text-primary hover:underline">
                  Hello@scopetraceai.com
                </a>
              </p>
            </section>
          </div>
        </div>

        <Footer />
      </div>

      <MoreInfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import MoreInfoModal from "@/components/MoreInfoModal";

export default function PrivacyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="relative z-10">
        <Navigation onMoreInfoClick={() => setIsModalOpen(true)} />
        
        <div className="max-w-4xl mx-auto px-6 py-24 mt-16">
          <h1 className="text-4xl md:text-5xl font-medium mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">No Sale or Sharing of Data</h2>
              <p className="text-muted-foreground mb-4">
                ScopeTraceAI does not sell, rent, or trade your personal information or customer data to third parties. We do not share your data for marketing purposes or allow third parties to use your data for their own purposes.
              </p>
              <p className="text-muted-foreground">
                Your data is only processed and used to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 mt-2 space-y-2">
                <li>Provide and improve the ScopeTraceAI service</li>
                <li>Operate authorized integrations (such as Jira) that you have configured</li>
                <li>Meet our legal obligations and comply with applicable laws</li>
                <li>Respond to your requests and provide customer support</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground">
                We collect information that you provide directly to us, such as when you create an account, use our services, or contact us for support.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground">
                We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">3. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">4. Data Retention</h2>
              <p className="text-muted-foreground">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground">
                You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at{" "}
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

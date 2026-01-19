"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import MoreInfoModal from "@/components/MoreInfoModal";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use environment variable for override, or auto-detect local dev, default to production
  const registerUrl = 
    process.env.NEXT_PUBLIC_APP_REGISTER_URL || 
    (process.env.NODE_ENV === 'development' ? "http://localhost:5137/login" : "https://app.scopetraceai.com/register");

  const plans = [
    {
      name: "Free Tier",
      price: "$0",
      subtitle: "Perfect for evaluating ScopeTraceAI",
      bullets: [
        "1 user",
        "All agents included",
        "3 runs per agent",
        "Jira integration setup",
        "Basic run history"
      ],
      buttonText: "Get Started Free",
      buttonAction: registerUrl
    },
    {
      name: "User Tier",
      price: "$59/mo",
      subtitle: "For individuals and small teams",
      bullets: [
        "Up to 5 users",
        "All agents included",
        "Jira integrations",
        "Full run history",
        "Email support"
      ],
      buttonText: "Start User Tier",
      buttonAction: registerUrl
    },
    {
      name: "Team Tier",
      price: "$249/mo",
      subtitle: "For growing teams shipping faster",
      bullets: [
        "Up to 15 users",
        "All agents included",
        "Higher usage limits",
        "Priority processing",
        "Extended audit history"
      ],
      buttonText: "Start Team Tier",
      buttonAction: registerUrl
    },
    {
      name: "Enterprise",
      price: "Contact",
      subtitle: "For larger organizations and custom needs",
      bullets: [
        "Unlimited users",
        "Custom limits",
        "SSO / advanced governance",
        "Dedicated support",
        "Custom retention"
      ],
      buttonText: "Contact Us",
      buttonAction: "mailto:hello@scopetraceai.com?subject=ScopeTraceAI%20Enterprise%20Inquiry"
    }
  ];

  const faqs = [
    {
      question: "Do I need a credit card for Free Tier?",
      answer: "No."
    },
    {
      question: "Do all plans include all agents?",
      answer: "Yes."
    },
    {
      question: "Can I upgrade later?",
      answer: "Yes, upgrades are seamless."
    },
    {
      question: "How do you protect customer data?",
      answer: "We do not sell or share your data; see Privacy Policy."
    }
  ];

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
          <div className="max-w-7xl mx-auto px-6 py-24 mt-16">
            {/* Header */}
            <header className="mb-16 text-center">
              <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-6">
                Pricing
              </h1>
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
                Choose the plan that fits your team's needs.
              </p>
            </header>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className="bg-card border border-border/50 rounded-lg p-8 flex flex-col hover:border-primary/30 transition-all duration-300"
                >
                  <h3 className="text-2xl font-medium text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    {plan.price === "Contact" ? (
                      <div className="text-3xl font-medium text-foreground mb-2">
                        {plan.price}
                      </div>
                    ) : (
                      <div className="text-3xl font-medium text-foreground mb-2">
                        {plan.price}
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    {plan.subtitle}
                  </p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/90 text-sm">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.buttonAction.startsWith("mailto:") ? (
                    <a
                      href={plan.buttonAction}
                      className="w-full"
                    >
                      <Button
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                        size="lg"
                      >
                        {plan.buttonText}
                      </Button>
                    </a>
                  ) : (
                    <a
                      href={plan.buttonAction}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                        size="lg"
                      >
                        {plan.buttonText}
                      </Button>
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <section className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-medium text-center mb-12">
                Frequently Asked Questions
              </h2>
              <div className="space-y-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-border/50 pb-8 last:border-b-0">
                    <h3 className="text-xl font-medium text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
      <MoreInfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

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
      name: "Trial",
      price: "Free",
      subtitle: "Try it before you commit",
      bullets: [
        "1 user (Owner)",
        "3 total runs (lifetime)",
        "All core agents enabled",
        "Manual trial reset/extend (Owner)",
        "Email support"
      ],
      buttonText: "Start free",
      buttonAction: registerUrl
    },
    {
      name: "User",
      price: "$99 / month",
      subtitle: "Per month • for small teams",
      bullets: [
        "Up to 5 users",
        "50 runs / month (per tenant)",
        "Monthly usage reset",
        "Jira integration + write-back",
        "Audit-ready artifacts (AC/RTM/Test Plan)"
      ],
      buttonText: "Start User",
      buttonAction: registerUrl
    },
    {
      name: "Team",
      price: "$499 / month",
      subtitle: "Per month • for active delivery teams",
      bullets: [
        "Up to 10 users",
        "250 runs / month (per tenant)",
        "Monthly usage reset",
        "Priority processing",
        "Team-ready governance controls"
      ],
      buttonText: "Start Team",
      buttonAction: registerUrl
    },
    {
      name: "Enterprise",
      price: "Custom",
      subtitle: "Security, scale, and SLAs",
      bullets: [
        "Custom users & usage",
        "SSO / advanced controls (as needed)",
        "Dedicated onboarding",
        "SLA + support options",
        "Procurement-friendly terms"
      ],
      buttonText: "Contact sales",
      buttonAction: "mailto:hell@scopetraceai.com?subject=ScopeTraceAI%20Enterprise%20Pricing",
      note: "Email hell@scopetraceai.com for pricing."
    }
  ];

  const faqs = [
    {
      question: "Do I need a credit card for Trial?",
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
    },
    {
      question: "What is a run?",
      answer: "A run is one completed agent execution that produces a new artifact."
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
              <p className="text-sm text-muted-foreground/80 max-w-2xl mx-auto">
                Runs are shared per tenant. Paid plans reset monthly.
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
                    <div className="text-3xl font-medium text-foreground mb-2">
                      {plan.price}
                    </div>
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
                  {plan.note && (
                    <p className="text-xs text-muted-foreground/70 mb-4 text-center">
                      {plan.note}
                    </p>
                  )}
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

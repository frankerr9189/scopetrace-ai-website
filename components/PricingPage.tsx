"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import MoreInfoModal from "@/components/MoreInfoModal";
import { Button } from "@/components/ui/button";
import { Check, Info } from "lucide-react";

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
      priceSubtext: "7 days",
      subtitle: "Try it before you commit",
      users: "1 user",
      runs: "3 runs total",
      isMostPopular: false,
      features: [
        "Jira Read",
        "Jira Write-back (Limited)",
        "RTM Export (CSV + JSON)",
        "Audit Metadata"
      ],
      buttonText: "Start free",
      buttonAction: registerUrl
    },
    {
      name: "Individual",
      price: "$199",
      priceSubtext: "/month",
      subtitle: "For individual practitioners",
      users: "1 user",
      runs: "20 runs/month",
      isMostPopular: false,
      features: [
        "Jira Read",
        "Jira Write-back (Optional)",
        "RTM Export (CSV + JSON)",
        "Audit Metadata"
      ],
      buttonText: "Start Individual",
      buttonAction: registerUrl
    },
    {
      name: "Team",
      price: "$499",
      priceSubtext: "/month",
      subtitle: "For active delivery teams",
      users: "Up to 3 users",
      runs: "75 runs/month",
      isMostPopular: true,
      features: [
        "Jira Read",
        "Jira Write-back",
        "RTM Export (CSV + JSON)",
        "Audit Metadata"
      ],
      buttonText: "Start Team",
      buttonAction: registerUrl
    },
    {
      name: "Pro",
      price: "$899",
      priceSubtext: "/month",
      subtitle: "For larger teams",
      users: "Up to 5 users",
      runs: "200 runs/month",
      isMostPopular: false,
      features: [
        "Jira Read",
        "Jira Write-back",
        "RTM Export (CSV + JSON)",
        "Audit Metadata",
        "Priority Processing"
      ],
      buttonText: "Start Pro",
      buttonAction: registerUrl
    },
    {
      name: "Enterprise",
      price: null,
      priceSubtext: null,
      subtitle: "Security, scale, and SLAs",
      users: "6+ users",
      runs: "Custom runs",
      isMostPopular: false,
      features: [
        "Jira Read",
        "Jira Write-back",
        "RTM Export (CSV + JSON)",
        "Audit Metadata",
        "Priority Processing"
      ],
      buttonText: "Contact Sales",
      buttonAction: "mailto:hello@scopetraceai.com?subject=ScopeTraceAI%20Enterprise%20Pricing"
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
      answer: "One run generates a full test plan, RTM export, and audit metadata for a ticket or ticket set."
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
              <div className="flex items-center justify-center gap-2 mt-4">
                <span className="text-sm text-muted-foreground">Runs</span>
                <div className="group relative inline-block">
                  <Info className="w-4 h-4 text-muted-foreground cursor-help" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 text-xs text-foreground">
                    What's a run? One run generates a full test plan, RTM export, and audit metadata for a ticket or ticket set.
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-border"></div>
                  </div>
                </div>
              </div>
            </header>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-24">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-card border rounded-lg p-8 flex flex-col hover:border-primary/30 transition-all duration-300 relative ${
                    plan.isMostPopular 
                      ? "border-primary/50 shadow-lg scale-105 md:scale-105" 
                      : "border-border/50"
                  }`}
                >
                  {plan.isMostPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-2xl font-medium text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    {plan.price ? (
                      <div className="flex items-baseline gap-1">
                        <div className="text-3xl font-medium text-foreground">
                          {plan.price}
                        </div>
                        {plan.priceSubtext && (
                          <div className="text-lg text-muted-foreground">
                            {plan.priceSubtext}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-3xl font-medium text-foreground">
                        Custom
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {plan.subtitle}
                  </p>
                  
                  {/* Users and Runs - Prominently displayed */}
                  <div className="mb-6 space-y-2 pb-4 border-b border-border/30">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium text-sm">{plan.users}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium text-sm">{plan.runs}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/90 text-sm">{feature}</span>
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

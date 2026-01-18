"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { submitLeadToBackend, getUtmParams } from "@/lib/leads";
import { Play } from "lucide-react";

export function WalkthroughSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    company: "",
    useCase: "",
    phone: "",
    usesJira: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.role) {
      return;
    }

    setIsLoading(true);

    try {
      // Submit to Flask backend for DB persistence
      const name = `${formData.firstName} ${formData.lastName}`.trim();
      const message = formData.phone 
        ? `Phone: ${formData.phone}${formData.useCase ? ` | Use Case: ${formData.useCase}` : ''}`
        : (formData.useCase ? `Use Case: ${formData.useCase}` : undefined);

      const utmParams = getUtmParams();
      
      await submitLeadToBackend({
        name,
        email: formData.email,
        company: formData.company || undefined,
        role: formData.role || undefined,
        message: message || undefined,
        source: 'marketing_more_info',
        source_page: typeof window !== 'undefined' ? window.location.pathname : '/',
        ...utmParams,
      });

      // Also call Next.js route for Slack notifications (existing behavior preserved)
      try {
        await fetch("/api/lead", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            workEmail: formData.email,
            role: formData.role,
            company: formData.company || undefined,
            useCase: formData.useCase || undefined,
            phoneNumber: formData.phone || undefined,
          }),
        });
      } catch (slackError) {
        // Slack notification failure is non-blocking
        console.warn("Slack notification failed:", slackError);
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          role: "",
          company: "",
          useCase: "",
          phone: "",
          usesJira: ""
        });
        setIsLoading(false);
      }, 3000);
    } catch (error: any) {
      console.error("Error submitting form:", error);
      setIsLoading(false);
      // Could show error message to user here if needed
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Video */}
          <div className="relative">
            <div className="relative aspect-video bg-card border border-border/50 rounded-lg overflow-hidden group">
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                poster="/scopetrace-horizontal.png"
              >
                <source src="/ScopeTraceAI.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Play button overlay - shows on hover when video is paused */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-lg shadow-primary/30">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4 text-center">
              30-second walkthrough: Scope → Test → Jira
            </p>
          </div>

          {/* Right: Form */}
          <div className="bg-card border border-border/50 rounded-lg p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-2">Thank you for reaching out!</h3>
                <p className="text-muted-foreground">
                  We've received your request. Please contact{" "}
                  <a href="mailto:hello@scopetraceai.com" className="text-primary hover:underline">
                    hello@scopetraceai.com
                  </a>
                  {" "}if you need anything.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-medium text-foreground mb-6">
                  Request More Information
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* First Name */}
                  <div>
                    <label htmlFor="firstName" className="block text-sm text-foreground mb-2">
                      First name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full bg-card/50 border-border/50 focus:border-primary focus:ring-1 focus:ring-primary text-black"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label htmlFor="lastName" className="block text-sm text-foreground mb-2">
                      Last name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full bg-card/50 border-border/50 focus:border-primary focus:ring-1 focus:ring-primary text-black"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm text-foreground mb-2">
                      Work email <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-card/50 border-border/50 focus:border-primary focus:ring-1 focus:ring-primary text-black"
                    />
                  </div>

                  {/* Role */}
                  <div>
                    <label htmlFor="role" className="block text-sm text-foreground mb-2">
                      Role / Job Function <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="role"
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full h-10 bg-card/50 border border-border/50 rounded-md px-3 text-sm text-black focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    >
                      <option value="">Select a role</option>
                      <option value="Engineering / Development">Engineering / Development</option>
                      <option value="QA / Testing">QA / Testing</option>
                      <option value="Product / PM">Product / PM</option>
                      <option value="IT / Security">IT / Security</option>
                      <option value="Executive / Leadership">Executive / Leadership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm text-foreground mb-2">
                      Company <span className="text-muted-foreground text-xs">(optional)</span>
                    </label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-card/50 border-border/50 focus:border-primary focus:ring-1 focus:ring-primary text-black"
                    />
                  </div>

                  {/* Use Case */}
                  <div>
                    <label htmlFor="useCase" className="block text-sm text-foreground mb-2">
                      Primary use case <span className="text-muted-foreground text-xs">(optional)</span>
                    </label>
                    <select
                      id="useCase"
                      value={formData.useCase}
                      onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                      className="w-full h-10 bg-card/50 border border-border/50 rounded-md px-3 text-sm text-black focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    >
                      <option value="">Select a use case</option>
                      <option value="Requirements clarity / scope control">Requirements clarity / scope control</option>
                      <option value="Test plan generation">Test plan generation</option>
                      <option value="Jira integration / write-back">Jira integration / write-back</option>
                      <option value="Compliance / audit readiness">Compliance / audit readiness</option>
                      <option value="Evaluating AI testing tools">Evaluating AI testing tools</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm text-foreground mb-2">
                      Phone number <span className="text-muted-foreground text-xs">(optional)</span>
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-card/50 border-border/50 focus:border-primary focus:ring-1 focus:ring-primary text-black"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-6"
                  >
                    {isLoading ? "Submitting..." : "Request More Information"}
                  </Button>

                  {/* Footer microcopy */}
                  <p className="text-xs text-muted-foreground text-center">
                    We'll only use this to share information about ScopeTraceAI. No spam.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { submitLeadToBackend, getUtmParams } from "@/lib/leads";

interface LeadFormProps {
  onSuccess: () => void;
}

export default function LeadForm({ onSuccess }: LeadFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    role: "",
    company: "",
    useCase: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = "Please enter a valid email address";
    }
    if (!formData.role) {
      newErrors.role = "Role is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to Flask backend for DB persistence
      const name = `${formData.firstName} ${formData.lastName}`.trim();
      const message = formData.phoneNumber 
        ? `Phone: ${formData.phoneNumber}${formData.useCase ? ` | Use Case: ${formData.useCase}` : ''}`
        : (formData.useCase ? `Use Case: ${formData.useCase}` : undefined);

      const utmParams = getUtmParams();
      
      await submitLeadToBackend({
        name,
        email: formData.workEmail,
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
          body: JSON.stringify(formData),
        });
      } catch (slackError) {
        // Slack notification failure is non-blocking
        console.warn("Slack notification failed:", slackError);
      }

      setIsSuccess(true);
      setTimeout(() => {
        onSuccess();
      }, 2000);
    } catch (error: any) {
      console.error("Lead submission error:", error);
      setErrors({ submit: error.message || "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
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
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* First Name */}
      <div>
        <label htmlFor="firstName" className="block text-sm text-foreground mb-2">
          First name <span className="text-destructive">*</span>
        </label>
        <Input
          id="firstName"
          type="text"
          name="firstName"
          required
          value={formData.firstName}
          onChange={handleChange}
          className="w-full bg-card/50 border-border/50 focus:border-primary focus:ring-1 focus:ring-primary text-black"
        />
        {errors.firstName && (
          <p className="mt-1 text-sm text-destructive">{errors.firstName}</p>
        )}
      </div>

      {/* Last Name */}
      <div>
        <label htmlFor="lastName" className="block text-sm text-foreground mb-2">
          Last name <span className="text-destructive">*</span>
        </label>
        <Input
          id="lastName"
          type="text"
          name="lastName"
          required
          value={formData.lastName}
          onChange={handleChange}
          className="w-full bg-card/50 border-border/50 focus:border-primary focus:ring-1 focus:ring-primary text-black"
        />
        {errors.lastName && (
          <p className="mt-1 text-sm text-destructive">{errors.lastName}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="workEmail" className="block text-sm text-foreground mb-2">
          Work email <span className="text-destructive">*</span>
        </label>
        <Input
          id="workEmail"
          type="email"
          name="workEmail"
          required
          value={formData.workEmail}
          onChange={handleChange}
          className="w-full bg-card/50 border-border/50 focus:border-primary focus:ring-1 focus:ring-primary text-black"
        />
        {errors.workEmail && (
          <p className="mt-1 text-sm text-destructive">{errors.workEmail}</p>
        )}
      </div>

      {/* Role */}
      <div>
        <label htmlFor="role" className="block text-sm text-foreground mb-2">
          Role / Job Function <span className="text-destructive">*</span>
        </label>
        <select
          id="role"
          name="role"
          required
          value={formData.role}
          onChange={handleChange}
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
        {errors.role && (
          <p className="mt-1 text-sm text-destructive">{errors.role}</p>
        )}
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm text-foreground mb-2">
          Company <span className="text-muted-foreground text-xs">(optional)</span>
        </label>
        <Input
          id="company"
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
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
          name="useCase"
          value={formData.useCase}
          onChange={handleChange}
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
        <label htmlFor="phoneNumber" className="block text-sm text-foreground mb-2">
          Phone number <span className="text-muted-foreground text-xs">(optional)</span>
        </label>
        <Input
          id="phoneNumber"
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-full bg-card/50 border-border/50 focus:border-primary focus:ring-1 focus:ring-primary text-black"
        />
      </div>

      {errors.submit && (
        <p className="text-sm text-destructive">{errors.submit}</p>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base shadow-lg shadow-primary/20"
      >
        {isSubmitting ? "Submitting..." : "Request info"}
      </Button>

      {/* Footer microcopy */}
      <p className="text-xs text-muted-foreground text-center">
        We'll only use this to share information about ScopeTraceAI. No spam.
      </p>
    </form>
  );
}

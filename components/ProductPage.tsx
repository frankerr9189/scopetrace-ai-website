"use client";

import { useState } from "react";
import { FileText, TestTube, Shield, Lock, GitBranch, Users, Building2, Briefcase, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import MoreInfoModal from "@/components/MoreInfoModal";

export default function ProductPage() {
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

          {/* Main content */}
          <div className="max-w-7xl mx-auto px-6 py-24 mt-16">
            {/* SECTION 1 - Header / Positioning */}
            <header className="mb-24 text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-6">
                The ScopeTraceAI Platform
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                AI-powered scope clarity, test generation, and traceability — built for real-world delivery.
              </p>
              <p className="text-base text-muted-foreground/80">
                ScopeTraceAI acts as an intelligence layer between requirements, testing, and delivery — bringing structure, confidence, and auditability to the software lifecycle.
              </p>
            </header>

            {/* SECTION 2 - What ScopeTraceAI Delivers */}
            <section className="mb-32">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Card 1 - Scope Clarity */}
                <div className="bg-card/30 border border-border/50 rounded-lg p-8 hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-medium mb-4">Clear, Structured Scope</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Transform unstructured requirements into clearly defined, testable scope with explicit acceptance criteria and identified gaps.
                  </p>
                </div>

                {/* Card 2 - Test Readiness */}
                <div className="bg-card/30 border border-border/50 rounded-lg p-8 hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <TestTube className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-medium mb-4">Automated Test Planning</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Generate structured test plans and traceability matrices directly from approved scope — without manual translation.
                  </p>
                </div>

                {/* Card 3 - Coverage Confidence */}
                <div className="bg-card/30 border border-border/50 rounded-lg p-8 hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-medium mb-4">Coverage & Risk Visibility</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Understand what's covered, what's inferred, and where risk exists before execution begins.
                  </p>
                </div>

                {/* Card 4 - System Integrity */}
                <div className="bg-card/30 border border-border/50 rounded-lg p-8 hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <Lock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-medium mb-4">Traceability & Control</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Maintain deterministic links between requirements, tests, and outcomes with full audit metadata.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3 - Core Capabilities */}
            <section className="mb-32" id="capabilities">
              <h2 className="text-4xl font-medium text-center mb-12">Core Capabilities</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-card/20 border border-border/40 rounded-lg p-6">
                  <h3 className="font-medium mb-3 text-lg">Scope Normalization & Requirement Structuring</h3>
                  <p className="text-sm text-muted-foreground">
                    Ingests unstructured input and outputs normalized, deterministically numbered requirements with clear definitions.
                  </p>
                </div>

                <div className="bg-card/20 border border-border/40 rounded-lg p-6">
                  <h3 className="font-medium mb-3 text-lg">Acceptance Criteria Generation</h3>
                  <p className="text-sm text-muted-foreground">
                    Produces explicit, testable acceptance criteria for each requirement, ensuring clarity and reducing ambiguity.
                  </p>
                </div>

                <div className="bg-card/20 border border-border/40 rounded-lg p-6">
                  <h3 className="font-medium mb-3 text-lg">Requirement Clarity & Testability Scoring</h3>
                  <p className="text-sm text-muted-foreground">
                    Evaluates each requirement for clarity and testability, surfacing areas that need refinement before execution.
                  </p>
                </div>

                <div className="bg-card/20 border border-border/40 rounded-lg p-6">
                  <h3 className="font-medium mb-3 text-lg">Scope Review, Locking, & Versioning</h3>
                  <p className="text-sm text-muted-foreground">
                    Enables formal scope approval with immutable version control, preventing silent changes and maintaining accountability.
                  </p>
                </div>

                <div className="bg-card/20 border border-border/40 rounded-lg p-6">
                  <h3 className="font-medium mb-3 text-lg">Test Plan Generation</h3>
                  <p className="text-sm text-muted-foreground">
                    Automatically generates structured test plans including positive and negative test scenarios from locked requirements.
                  </p>
                </div>

                <div className="bg-card/20 border border-border/40 rounded-lg p-6">
                  <h3 className="font-medium mb-3 text-lg">Requirement-to-Test Traceability Matrix (RTM)</h3>
                  <p className="text-sm text-muted-foreground">
                    Establishes and maintains bidirectional traceability between every requirement and its corresponding test cases.
                  </p>
                </div>

                <div className="bg-card/20 border border-border/40 rounded-lg p-6">
                  <h3 className="font-medium mb-3 text-lg">Coverage Confidence & Risk Indicators</h3>
                  <p className="text-sm text-muted-foreground">
                    Identifies coverage gaps, untestable requirements, and areas relying on inferred behavior with confidence scoring.
                  </p>
                </div>

                <div className="bg-card/20 border border-border/40 rounded-lg p-6">
                  <h3 className="font-medium mb-3 text-lg">Jira Write-Back & Synchronization</h3>
                  <p className="text-sm text-muted-foreground">
                    Optionally writes structured requirements and test plans back to Jira, maintaining metadata and preventing duplicates.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 4 - Designed for Enterprise Use */}
            <section className="mb-32">
              <div className="bg-card/30 border border-border/50 rounded-lg p-12">
                <h2 className="text-3xl font-medium text-center mb-12">
                  Enterprise-Ready by Design
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-foreground/90">No training on customer data</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-foreground/90">Tenant-isolated processing</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-foreground/90">Deterministic, repeatable outputs</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-foreground/90">Full audit metadata per run</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 md:col-span-2 justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-foreground/90">Designed to align with ISO 27001 / SOC 2 workflows</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 5 - Who It's For */}
            <section className="mb-32">
              <h2 className="text-4xl font-medium text-center mb-12">Who It's For</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-card/30 border border-border/50 rounded-lg p-8 text-center">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 mx-auto">
                    <GitBranch className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">Engineering & Development Teams</h3>
                  <p className="text-sm text-muted-foreground">
                    Developers who need clear, testable requirements before writing code — reducing rework and miscommunication.
                  </p>
                </div>

                <div className="bg-card/30 border border-border/50 rounded-lg p-8 text-center">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 mx-auto">
                    <TestTube className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">QA & Test Organizations</h3>
                  <p className="text-sm text-muted-foreground">
                    QA teams who need automated test planning, full traceability, and coverage confidence without manual effort.
                  </p>
                </div>

                <div className="bg-card/30 border border-border/50 rounded-lg p-8 text-center">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 mx-auto">
                    <Briefcase className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">Product & Delivery Teams</h3>
                  <p className="text-sm text-muted-foreground">
                    Product managers and delivery leads who need scope control, clear outcomes, and accountability throughout the lifecycle.
                  </p>
                </div>

                <div className="bg-card/30 border border-border/50 rounded-lg p-8 text-center">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 mx-auto">
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">IT, Security, & Compliance Leaders</h3>
                  <p className="text-sm text-muted-foreground">
                    Teams that require full auditability, traceability, and deterministic outputs for regulated environments.
                  </p>
                </div>

                <div className="bg-card/30 border border-border/50 rounded-lg p-8 text-center">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 mx-auto">
                    <Users className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">Organizations Scaling Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    Companies growing rapidly who need to maintain quality and control without proportionally increasing QA headcount.
                  </p>
                </div>

                <div className="bg-card/30 border border-border/50 rounded-lg p-8 text-center">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 mx-auto">
                    <Building2 className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">Regulated Industries</h3>
                  <p className="text-sm text-muted-foreground">
                    Healthcare, finance, aerospace, and other industries with strict compliance, audit, and documentation requirements.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6 - Outcome-Oriented Summary */}
            <section className="mb-32">
              <div className="bg-gradient-to-br from-card/40 to-card/20 border border-primary/20 rounded-lg p-12">
                <h2 className="text-3xl font-medium text-center mb-10">
                  Built for clarity, confidence, and control.
                </h2>

                <div className="max-w-3xl mx-auto space-y-5">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-lg text-foreground/90">
                      Reduced rework caused by unclear scope
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-lg text-foreground/90">
                      Faster test planning without added headcount
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-lg text-foreground/90">
                      Earlier detection of risk and gaps
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-lg text-foreground/90">
                      Stronger audit and compliance posture
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-lg text-foreground/90">
                      Cleaner Jira and delivery workflows
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 7 - Call to Action */}
            <section className="text-center">
              <div className="max-w-2xl mx-auto">
                <Button
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-lg shadow-lg shadow-primary/20 mb-4"
                >
                  More information
                </Button>
                <p className="text-sm text-muted-foreground">
                  Learn how ScopeTraceAI fits into your delivery workflow.
                </p>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
      <MoreInfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

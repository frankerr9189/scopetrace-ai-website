"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Upload, FileText, Lock, TestTube, Shield, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import MoreInfoModal from "@/components/MoreInfoModal";

export default function HowItWorksPage() {
  const router = useRouter();
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
          <div className="max-w-5xl mx-auto px-6 py-24 mt-16">
            {/* Section 1 - Header */}
            <header className="mb-24 text-center">
              <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-6">
                How It Works
              </h1>
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
                From unclear scope to structured, testable, audit-ready outcomes.
              </p>
              <p className="text-base text-muted-foreground/80 max-w-2xl mx-auto">
                ScopeTraceAI turns real-world requirements into confident execution — without added process overhead.
              </p>
            </header>

            {/* Section 2 - Step-by-Step Flow */}
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Upload className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-sm font-medium text-primary">STEP 1</span>
                    <h2 className="text-3xl font-medium">Ingest Your Scope</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">
                    Start with what you already have. ScopeTraceAI ingests Jira tickets and free-text scope exactly as they exist today.
                  </p>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                      <span className="text-foreground/90">Jira stories, epics, and bugs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                      <span className="text-foreground/90">Free-text scope descriptions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                      <span className="text-foreground/90">Contextual notes and references</span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground/70 italic">
                    No templates. No reformatting.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-sm font-medium text-primary">STEP 2</span>
                    <h2 className="text-3xl font-medium">Normalize & Structure Requirements</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">
                    AI transforms unstructured input into normalized requirements.
                  </p>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                      <span className="text-foreground/90">Clearly defined requirements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                      <span className="text-foreground/90">Explicit acceptance criteria</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                      <span className="text-foreground/90">Identified ambiguities and gaps</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                      <span className="text-foreground/90">Clarity and testability scoring</span>
                    </li>
                  </ul>
                  <p className="text-sm text-primary/80">
                    Each requirement is deterministically numbered and traceable.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Lock className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-sm font-medium text-primary">STEP 3</span>
                    <h2 className="text-3xl font-medium">Review and Lock Scope</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">
                    Freeze what matters — with accountability and an audit trail.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                      <span className="text-foreground/90">Reviewed and approved scope</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                      <span className="text-foreground/90">Scope locking to prevent silent changes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                      <span className="text-foreground/90">Full version history and change tracking</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <RefreshCw className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-sm font-medium text-primary">STEP 4</span>
                    <h2 className="text-3xl font-medium">Write Back to Jira</h2>
                    <span className="text-sm text-muted-foreground">(Optional)</span>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">
                    Keep Jira clean and in sync.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                      <span className="text-foreground/90">Create Jira tickets from locked scope</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                      <span className="text-foreground/90">Structured acceptance criteria</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                      <span className="text-foreground/90">Preserved traceability metadata</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                      <span className="text-foreground/90">Duplicate prevention</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <TestTube className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-sm font-medium text-primary">STEP 5</span>
                    <h2 className="text-3xl font-medium">Generate Test Plans Automatically</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">
                    From requirements to tests — instantly.
                  </p>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                      <span className="text-foreground/90">Structured test plans</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                      <span className="text-foreground/90">Positive and negative scenarios</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                      <span className="text-foreground/90">Inferred coverage where detail is missing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                      <span className="text-foreground/90">Requirement-to-Test Traceability Matrix (RTM)</span>
                    </li>
                  </ul>
                  <p className="text-sm text-primary/80">
                    Every test links back to its originating requirement.
                  </p>
                </div>
              </div>

              {/* Step 6 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-sm font-medium text-primary">STEP 6</span>
                    <h2 className="text-3xl font-medium">Validate Coverage & Risk</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">
                    Know what's covered — and what isn't — before execution.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                      <span className="text-foreground/90">Coverage gaps</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                      <span className="text-foreground/90">Untestable or unclear requirements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                      <span className="text-foreground/90">Areas relying on inferred behavior</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                      <span className="text-foreground/90">Overall confidence scoring</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3 - Enterprise-Ready by Design */}
            <section className="mt-32 mb-16">
              <div className="bg-card/30 border border-border/50 rounded-lg p-12">
                <h2 className="text-3xl font-medium text-center mb-12">
                  Built for Enterprise Reality
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
                      <p className="text-foreground/90">Full audit metadata on every run</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 md:col-span-2 justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-foreground/90">Aligned with ISO 27001 / SOC 2 workflows</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA to go back */}
            <div className="text-center mt-16">
              <Button
                size="lg"
                onClick={() => router.push("/")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-lg shadow-lg shadow-primary/20"
              >
                Back to home
              </Button>
            </div>
          </div>
        </div>
      </div>
      <MoreInfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

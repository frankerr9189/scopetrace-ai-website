import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background grid effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px'
          }}
        />
        {/* Cyan glow */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, transparent 70%)'
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-medium tracking-tight leading-[1.1] text-foreground mb-6">
          Audit-Ready AI for Scope,<br />Testing, and Jira
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          Approved requirements → deterministic tests → Jira publishing.<br />
          AI-powered test generation built for audit-sensitive teams.
        </p>

        <div className="flex items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base shadow-lg shadow-primary/20"
          >
            Register New Account
          </Button>
        </div>

        {/* Trust pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/30">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            Jira-first
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/30">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            Approval-gated
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/30">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            Immutable outputs
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/30">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            Audit trail included
          </div>
        </div>
      </div>
    </section>
  );
}

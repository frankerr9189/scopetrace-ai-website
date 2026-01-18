import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ScopeTraceAI · <a href="https://www.scopetraceai.com" className="hover:text-foreground transition-colors">www.scopetraceai.com</a> · <a href="mailto:Hello@scopetraceai.com" className="hover:text-foreground transition-colors">Hello@scopetraceai.com</a>
            <span className="mx-2">·</span>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <span className="mx-2">·</span>
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-primary" />
              Jira-first
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-primary" />
              Approval-gated
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-primary" />
              Audit-ready
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

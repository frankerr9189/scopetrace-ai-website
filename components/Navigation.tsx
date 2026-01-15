"use client";

import Link from "next/link";
import { Button } from "./ui/button";

interface NavigationProps {
  onMoreInfoClick: () => void;
}

export function Navigation({ onMoreInfoClick }: NavigationProps) {

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#05070A] border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="hover:opacity-80 transition-opacity"
        >
          <img
            src="/scopetrace-horizontal.png"
            alt="ScopeTrace"
            className="h-14"
          />
        </Link>
        
        <div className="flex items-center gap-8">
          <Link
            href="/product"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Product
          </Link>
          <Link
            href="/how-it-works"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            How it Works
          </Link>
          <Link
            href="/security"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Security
          </Link>
          <Link
            href="/pricing"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Price Plan
          </Link>
          <Link
            href="https://app.scopetraceai.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Sign in
          </Link>
          <Button
            onClick={onMoreInfoClick}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-6"
          >
            More information
          </Button>
        </div>
      </div>
    </nav>
  );
}

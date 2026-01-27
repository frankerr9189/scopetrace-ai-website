"use client";

import { Button } from "./ui/button";
import { getMoreInfoMailtoLink } from "@/lib/utils";

interface FinalCTAProps {
  onOpenModal?: () => void;
}

export function FinalCTA({ onOpenModal }: FinalCTAProps) {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-medium tracking-tight leading-tight mb-8">
          Bring AI into your SDLC —<br />
          without losing control.
        </h2>
        
        <Button
          size="lg"
          onClick={() => {
            window.location.href = getMoreInfoMailtoLink();
          }}
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-lg shadow-lg shadow-primary/20"
        >
          More information
        </Button>
      </div>
    </section>
  );
}

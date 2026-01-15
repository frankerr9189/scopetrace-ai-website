"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import LeadForm from "./LeadForm";

interface MoreInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MoreInfoModal({ isOpen, onClose }: MoreInfoModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-[#0A0E14] border-2 border-primary rounded-lg shadow-2xl shadow-primary/20 w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          <h2 className="text-2xl font-medium text-foreground mb-2">
            More information
          </h2>
          <p className="text-muted-foreground mb-8">
            Share a few details and we'll send you everything you need about ScopeTraceAI.
          </p>

          <LeadForm onSuccess={onClose} />
        </div>
      </div>
    </div>
  );
}

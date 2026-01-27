import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Generates a mailto link for "More Information" requests
 * @param currentUrl - The current page URL (defaults to window.location.href if available)
 * @returns A properly encoded mailto: URL string
 */
export function getMoreInfoMailtoLink(currentUrl?: string): string {
  const email = "hello@scopetraceai.com";
  const subject = "ScopeTraceAI - More Information";
  
  // Get current URL - use provided URL, or try window.location, or fallback
  let pageUrl = currentUrl;
  if (!pageUrl && typeof window !== "undefined") {
    pageUrl = window.location.href;
  }
  if (!pageUrl) {
    pageUrl = "Unknown";
  }
  
  const body = `Hi ScopeTraceAI team,

I'd like more information about ScopeTraceAI.

Page: ${pageUrl}

Company:
Role:
What I'm trying to solve:

Thanks,`;

  // URL encode the subject and body
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  
  return `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
}

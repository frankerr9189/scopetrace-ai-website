/**
 * Lead submission utility
 * Submits leads to the Flask backend API for database persistence
 */

interface LeadPayload {
  name?: string;
  email: string;
  company?: string;
  role?: string;
  message?: string;
  source?: string;
  source_page?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

interface LeadResponse {
  id: string;
  status: string;
}

/**
 * Extract UTM parameters from current URL
 */
export function getUtmParams(): {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
} {
  if (typeof window === 'undefined') {
    return {};
  }

  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || undefined,
    utm_medium: params.get('utm_medium') || undefined,
    utm_campaign: params.get('utm_campaign') || undefined,
    utm_term: params.get('utm_term') || undefined,
    utm_content: params.get('utm_content') || undefined,
  };
}

/**
 * Get the API base URL based on environment
 */
function getApiBase(): string {
  // If explicitly set, use that
  if (process.env.NEXT_PUBLIC_API_BASE) {
    return process.env.NEXT_PUBLIC_API_BASE;
  }
  
  // In development, default to local backend
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:5050';
  }
  
  // Production default
  return 'https://api.scopetraceai.com';
}

export async function submitLeadToBackend(payload: LeadPayload): Promise<LeadResponse> {
  const apiBase = getApiBase();
  const url = `${apiBase}/api/v1/leads`;

  // Trim and validate string lengths
  const trimmedPayload: LeadPayload = {
    name: payload.name?.trim().substring(0, 200) || undefined,
    email: payload.email.trim().substring(0, 254),
    company: payload.company?.trim().substring(0, 200) || undefined,
    role: payload.role?.trim().substring(0, 200) || undefined,
    message: payload.message?.trim().substring(0, 2000) || undefined,
    source: payload.source?.trim().substring(0, 500) || undefined,
    source_page: payload.source_page?.trim().substring(0, 500) || undefined,
    utm_source: payload.utm_source?.trim().substring(0, 200) || undefined,
    utm_medium: payload.utm_medium?.trim().substring(0, 200) || undefined,
    utm_campaign: payload.utm_campaign?.trim().substring(0, 200) || undefined,
    utm_term: payload.utm_term?.trim().substring(0, 200) || undefined,
    utm_content: payload.utm_content?.trim().substring(0, 200) || undefined,
  };

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedPayload.email)) {
    throw new Error('Invalid email format');
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(trimmedPayload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to submit lead: ${errorText || response.statusText}`);
  }

  return response.json();
}

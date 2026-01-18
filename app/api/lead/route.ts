import { NextRequest, NextResponse } from "next/server";
import { sendSlackNotification } from "@/lib/slack";
import { sendEmailNotification } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      workEmail,
      role,
      company,
      useCase,
      phoneNumber,
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !workEmail || !role) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const leadData = {
      firstName,
      lastName,
      workEmail,
      role,
      company: company || undefined,
      useCase: useCase || undefined,
      phoneNumber: phoneNumber || undefined,
    };

    // Persist to backend database (Flask API)
    // This is additive - Slack notifications remain unchanged
    // Use NEXT_PUBLIC_API_BASE if set, otherwise fallback based on environment
    const apiBase = process.env.NEXT_PUBLIC_API_BASE || 
      (process.env.NODE_ENV === 'development' 
        ? 'http://localhost:5050' 
        : 'https://scopetraceai-platform.onrender.com');
    const backendUrl = `${apiBase}/api/v1/leads`;
    
    try {
      const name = `${firstName} ${lastName}`.trim();
      const message = phoneNumber ? `Phone: ${phoneNumber}${useCase ? ` | Use Case: ${useCase}` : ''}` : (useCase ? `Use Case: ${useCase}` : undefined);
      
      // Get UTM params from request URL if available
      const url = new URL(request.url);
      const utmParams: Record<string, string | undefined> = {};
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
        const value = url.searchParams.get(param);
        if (value) utmParams[param] = value;
      });

      await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email: workEmail,
          company: company || undefined,
          role: role || undefined,
          message: message || undefined,
          source: 'marketing_more_info',
          source_page: '/',
          ...utmParams,
        }),
      });
      // Backend persistence is best-effort; don't fail if it errors
    } catch (backendError) {
      console.error('Failed to persist lead to backend:', backendError);
      // Continue with Slack/email notifications even if backend fails
    }

    // Send notifications (both can fail, but we still return success if at least one succeeds)
    // IMPORTANT: Slack notifications remain unchanged - this is additive only
    const slackSuccess = await sendSlackNotification(leadData);
    const emailSuccess = await sendEmailNotification(leadData);

    // Log results for debugging
    console.log("Notification results:", {
      slack: slackSuccess ? "success" : "failed",
      email: emailSuccess ? "success" : "failed",
    });

    if (!emailSuccess) {
      const hasApiKey = !!process.env.RESEND_API_KEY;
      const hasToEmail = !!process.env.RESEND_TO_EMAIL;
      console.error("Email notification failed. Configuration:", {
        hasApiKey,
        hasToEmail,
        fromEmail: process.env.RESEND_FROM_EMAIL || "ScopeTraceAI <noreply@scopetraceai.com>",
      });
    }

    // Return success even if one fails (as per requirements)
    // But include debug info in development
    const response: any = { ok: true };
    if (process.env.NODE_ENV === "development" && !emailSuccess) {
      response.debug = {
        emailFailed: true,
        slackSucceeded: slackSuccess,
        hasApiKey: !!process.env.RESEND_API_KEY,
        hasToEmail: !!process.env.RESEND_TO_EMAIL,
      };
    }
    return NextResponse.json(response);
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

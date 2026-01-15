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

    // Send notifications (both can fail, but we still return success if at least one succeeds)
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

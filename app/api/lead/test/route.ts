import { NextResponse } from "next/server";
import { sendEmailNotification } from "@/lib/email";

export async function GET() {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.RESEND_TO_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL || "ScopeTraceAI <noreply@scopetraceai.com>";

  const config = {
    hasApiKey: !!apiKey,
    hasToEmail: !!toEmail,
    hasFromEmail: !!fromEmail,
    toEmail: toEmail ? `${toEmail.substring(0, 3)}***` : "not set",
    fromEmail: fromEmail,
  };

  // Try to send a test email
  let testResult = null;
  if (apiKey && toEmail) {
    try {
      testResult = await sendEmailNotification({
        firstName: "Test",
        lastName: "User",
        workEmail: "test@example.com",
        role: "Test Role",
      });
    } catch (error: any) {
      testResult = {
        success: false,
        error: error.message || String(error),
      };
    }
  }

  return NextResponse.json({
    config,
    testResult: testResult === null 
      ? "Skipped - missing configuration" 
      : typeof testResult === "boolean" 
        ? (testResult ? "Success" : "Failed - check server logs")
        : testResult,
  });
}

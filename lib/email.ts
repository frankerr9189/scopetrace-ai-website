import { Resend } from "resend";

export async function sendEmailNotification(data: {
  firstName: string;
  lastName: string;
  workEmail: string;
  role: string;
  company?: string;
  useCase?: string;
  phoneNumber?: string;
}): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.RESEND_TO_EMAIL;
  // Use Resend's test domain for local dev (works without verification)
  // For production, set RESEND_FROM_EMAIL to your verified domain
  const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey || !toEmail) {
    console.error("Email configuration missing:", {
      hasApiKey: !!apiKey,
      hasToEmail: !!toEmail,
    });
    return false;
  }

  try {
    const resend = new Resend(apiKey);

    const emailBody = `
New lead submission from ScopeTraceAI website:

Name: ${data.firstName} ${data.lastName}
Email: ${data.workEmail}
Role: ${data.role}
${data.company ? `Company: ${data.company}` : ""}
${data.useCase ? `Use Case: ${data.useCase}` : ""}
${data.phoneNumber ? `Phone: ${data.phoneNumber}` : ""}
    `.trim();

    const result = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: "New Lead: ScopeTraceAI Website",
      text: emailBody,
    });

    if (result.error) {
      console.error("Resend API error:", JSON.stringify(result.error, null, 2));
      if (result.error.message) {
        console.error("Error message:", result.error.message);
      }
      return false;
    }

    if (!result.data) {
      console.error("Resend API returned no data. Full response:", JSON.stringify(result, null, 2));
      return false;
    }

    console.log("Email sent successfully. Email ID:", result.data.id);
    return true;
  } catch (error) {
    console.error("Failed to send email notification:", error);
    return false;
  }
}

export async function sendSlackNotification(data: {
  firstName: string;
  lastName: string;
  workEmail: string;
  role: string;
  company?: string;
  useCase?: string;
  phoneNumber?: string;
}): Promise<boolean> {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn("SLACK_WEBHOOK_URL not configured");
    return false;
  }

  try {
    const text = `New lead submission from ScopeTraceAI website:\n\n` +
      `*Name:* ${data.firstName} ${data.lastName}\n` +
      `*Email:* ${data.workEmail}\n` +
      `*Role:* ${data.role}\n` +
      (data.company ? `*Company:* ${data.company}\n` : "") +
      (data.useCase ? `*Use Case:* ${data.useCase}\n` : "") +
      (data.phoneNumber ? `*Phone:* ${data.phoneNumber}\n` : "");

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error("Failed to send Slack notification:", error);
    return false;
  }
}

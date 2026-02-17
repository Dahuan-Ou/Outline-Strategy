import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import type { ContactFormData, ContactApiResponse } from "@/lib/types";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildEmailHtml(data: ContactFormData): string {
  const { firstName, lastName, email, company, message } = data;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(15, 23, 42, 0.08);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 32px 40px;">
              <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 700;">
                New Contact Form Submission
              </h1>
              <p style="margin: 8px 0 0; color: #94a3b8; font-size: 14px;">
                Received from raveena.com
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                    <span style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Name</span><br />
                    <span style="color: #0f172a; font-size: 16px; font-weight: 500;">${escapeHtml(firstName)} ${escapeHtml(lastName)}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                    <span style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</span><br />
                    <a href="mailto:${escapeHtml(email)}" style="color: #047857; font-size: 16px; font-weight: 500; text-decoration: none;">${escapeHtml(email)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                    <span style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Company</span><br />
                    <span style="color: #0f172a; font-size: 16px; font-weight: 500;">${escapeHtml(company)}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0;">
                    <span style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Project Details</span><br />
                    <p style="color: #0f172a; font-size: 15px; line-height: 1.7; margin: 8px 0 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 40px; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; color: #94a3b8; font-size: 12px;">
                This email was sent from the Raveena website contact form. Reply directly to respond to ${escapeHtml(firstName)}.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function validateFormData(data: unknown): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data || typeof data !== "object") {
    return { valid: false, errors: ["Invalid request body"] };
  }

  const form = data as Record<string, unknown>;

  if (
    !form.firstName ||
    typeof form.firstName !== "string" ||
    form.firstName.trim().length === 0
  ) {
    errors.push("First name is required");
  }
  if (
    !form.lastName ||
    typeof form.lastName !== "string" ||
    form.lastName.trim().length === 0
  ) {
    errors.push("Last name is required");
  }
  if (!form.email || typeof form.email !== "string") {
    errors.push("Email is required");
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      errors.push("Invalid email format");
    }
  }
  if (
    !form.company ||
    typeof form.company !== "string" ||
    form.company.trim().length === 0
  ) {
    errors.push("Company is required");
  }
  if (
    !form.message ||
    typeof form.message !== "string" ||
    form.message.trim().length === 0
  ) {
    errors.push("Project description is required");
  }

  // Length guards against abuse
  for (const key of ["firstName", "lastName", "email", "company"]) {
    if (typeof form[key] === "string" && (form[key] as string).length > 200) {
      errors.push(`${key} exceeds maximum length`);
    }
  }
  if (typeof form.message === "string" && form.message.length > 5000) {
    errors.push("Message exceeds maximum length");
  }

  return { valid: errors.length === 0, errors };
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<ContactApiResponse>> {
  try {
    const body: unknown = await request.json();

    // Validate
    const validation = validateFormData(body);
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, message: validation.errors.join(", ") },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, company, message } =
      body as ContactFormData;

    // Check API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { success: false, message: "Server configuration error" },
        { status: 500 }
      );
    }

    // Send email via Resend
    // NOTE: Change the `from` address once you verify a custom domain in Resend
    const { error } = await resend.emails.send({
      from: "Raveena Website <onboarding@resend.dev>",
      to: ["dahuan.ou@gmail.com", "raveena.r.rajput@gmail.com"],
      replyTo: email,
      subject: `New Contact: ${firstName} ${lastName} from ${company}`,
      html: buildEmailHtml({ firstName, lastName, email, company, message }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, message: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

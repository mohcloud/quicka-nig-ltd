export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  let apiKey = process.env.BREVO_API_KEY?.trim();
  if (apiKey && !apiKey.startsWith("xkeysib-") && apiKey.length > 40) {
    apiKey = `xkeysib-${apiKey}`;
  }
  const senderEmail = "info@quickanigeria.com";
  const senderName = "Quicka Nig Ltd";
  const receiverEmail = "mohammed_techconcept@outlook.com";

  if (!apiKey) {
    throw new Error("BREVO_API_KEY is not configured in environment variables.");
  }

  const { name, email, phone, message } = data;
  const formattedDate = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Africa/Lagos",
  });

  // Admin Notification Email HTML Template
  const adminHtmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>New Website Inquiry</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f9; margin: 0; padding: 24px; color: #111C30; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e5e7eb; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
        .header { background-color: #1A2B48; padding: 24px; text-align: center; border-bottom: 4px solid #FF6B00; }
        .header h1 { color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.5px; }
        .content { padding: 32px 24px; }
        .badge { display: inline-block; background-color: #FFF3E6; color: #FF6B00; font-weight: 700; font-size: 12px; text-transform: uppercase; padding: 4px 10px; border-radius: 4px; margin-bottom: 16px; }
        .field-group { margin-bottom: 20px; border-bottom: 1px solid #f3f4f6; padding-bottom: 16px; }
        .field-label { font-size: 12px; text-transform: uppercase; color: #6b7280; font-weight: 600; margin-bottom: 4px; }
        .field-value { font-size: 15px; color: #111C30; font-weight: 500; }
        .message-box { background-color: #F8F9FA; border-left: 4px solid #FF6B00; padding: 16px; border-radius: 0 4px 4px 0; font-size: 15px; line-height: 1.6; color: #1f2937; white-space: pre-wrap; }
        .footer { background-color: #f9fafb; padding: 16px 24px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #e5e7eb; }
        .cta-btn { display: inline-block; background-color: #FF6B00; color: #ffffff !important; text-decoration: none; font-weight: 600; font-size: 14px; padding: 10px 20px; border-radius: 4px; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <a href="https://www.quickanigeria.com" target="_blank" style="text-decoration: none; display: inline-block;">
            <img src="https://www.quickanigeria.com/images/quicka1.png" alt="Quicka Nigeria Ltd" style="height: 55px; width: auto; max-width: 100%; display: block; margin: 0 auto 10px auto; border: 0;" />
          </a>
          <h1 style="color: #ffffff; margin: 0; font-size: 18px; font-weight: 700; letter-spacing: 0.5px;">QUICKA NIGERIA LTD</h1>
        </div>
        <div class="content">
          <div class="badge">New Contact Inquiry</div>
          <h2 style="margin: 0 0 20px 0; font-size: 18px; color: #1A2B48;">You received a new message from the website contact form</h2>

          <div class="field-group">
            <div class="field-label">Sender Name</div>
            <div class="field-value">${name}</div>
          </div>

          <div class="field-group">
            <div class="field-label">Email Address</div>
            <div class="field-value"><a href="mailto:${email}" style="color: #FF6B00; text-decoration: none;">${email}</a></div>
          </div>

          <div class="field-group">
            <div class="field-label">Phone Number</div>
            <div class="field-value">${phone || "Not provided"}</div>
          </div>

          <div class="field-group">
            <div class="field-label">Received Date & Time</div>
            <div class="field-value">${formattedDate}</div>
          </div>

          <div>
            <div class="field-label">Message Details</div>
            <div class="message-box">${message}</div>
          </div>

          <div style="text-align: center;">
            <a href="mailto:${email}?subject=Re:%20Inquiry%20to%20Quicka%20Nigeria%20Ltd" class="cta-btn">Reply to ${name}</a>
          </div>
        </div>
        <div class="footer">
          This email was generated automatically by the Quicka Nigeria Ltd contact form.
        </div>
      </div>
    </body>
    </html>
  `;

  // Brevo Transactional Email API payload
  const payload = {
    sender: {
      name: senderName,
      email: senderEmail,
    },
    to: [
      {
        email: receiverEmail,
        name: "Quicka Nig Team",
      },
    ],
    replyTo: {
      email: email,
      name: name,
    },
    subject: `New Contact Request from ${name}`,
    htmlContent: adminHtmlContent,
  };

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    const errorMessage = errorBody?.message || response.statusText;
    console.error("Brevo API Error:", errorBody);
    throw new Error(`Failed to send email via Brevo: ${errorMessage}`);
  }

  return await response.json();
}

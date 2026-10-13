import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/brevo";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null);

    if (!body) {
      return NextResponse.json(
        { success: false, error: "Invalid request payload." },
        { status: 400 }
      );
    }

    const { name, email, phone, message, honeypot } = body;

    // Honeypot spam trap: if a bot filled in this hidden field, pretend it succeeded
    if (honeypot) {
      return NextResponse.json({
        success: true,
        message: "Message received.",
      });
    }

    // Required fields validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Message is required." },
        { status: 400 }
      );
    }

    // Attempt to send email via Brevo
    await sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      phone: phone ? String(phone).trim() : undefined,
      message: message.trim(),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent successfully. We will get back to you soon.",
    });
  } catch (error: any) {
    console.error("Contact API error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred while processing your request.";

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { firstName, lastName, email, message } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Production: integrate with email service (Resend, SendGrid, etc.)
    // or CRM webhook using environment variables.
    console.info("[contact]", {
      firstName,
      lastName,
      email,
      company: body.company,
      enquiry: body.enquiry,
      message,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}

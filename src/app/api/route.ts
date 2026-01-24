import { Resend } from "resend";
import prisma from "../../../lib/prisma";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      message,
      countryCode,
      phoneNumber,
      services = [],
      isConsentGiven = false,
      isMarketingConsentGiven = false,
    } = body || {};

    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Persist to database
    const saved = await prisma.form.create({
      data: {
        name,
        email,
        message,
        countryCode: countryCode || null,
        phoneNumber: phoneNumber || null,
        services: Array.isArray(services) ? services : [],
        isConsentGiven: Boolean(isConsentGiven),
        isMarketingConsentGiven: Boolean(isMarketingConsentGiven),
      },
    });

    // Fire-and-forget email; failure should not block response
    // obaidahmadexec
    try {
      await resend.emails.send({
        from: "Astrix Digital Media <contact@astrixdigitalmedia.com>",
        to: ["obaidahmadexec@gmail.com", "mohdzaid49272@gmail.com"],
        replyTo: email,
        subject: "New Contact Form Submission",
        html: `
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Country Code:</strong> ${countryCode}</p>
          <p><strong>Phone Number:</strong> ${phoneNumber}</p>
          <p><strong>Services:</strong> ${services.join(", ")}</p>
          <p><strong>Consent Given:</strong> ${isConsentGiven}</p>
          <p><strong>Marketing Consent Given:</strong> ${isMarketingConsentGiven}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });
    } catch (emailError) {
      console.error("Resend email error:", emailError);
    }

    return Response.json({ success: true, data: saved });
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json({ error: "Failed to submit form" }, { status: 500 });
  }
}

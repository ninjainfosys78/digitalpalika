import { NextResponse } from "next/server";
import { sendEmailNotification } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    console.log("Incoming Contact Request:", formData);

    try {
      const subject = `New Contact Form Submission from ${formData.firstName || ''} ${formData.lastName || ''}`;
      const { buildEmailTemplate } = await import("@/lib/mail");
      const html = buildEmailTemplate("New Contact Form Submission", {
        "First Name": formData.firstName,
        "Last Name": formData.lastName,
        "Email": formData.email,
        "Consent Provided": formData.consent ? 'Yes' : 'No',
        "Message": formData.message,
      });
      const text = `New Contact Form Submission\nFirst Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nEmail: ${formData.email}\nConsent Provided: ${formData.consent ? 'Yes' : 'No'}\nMessage: ${formData.message}`;
      
      const emailRes = await sendEmailNotification(subject, text, html);
      if (!emailRes) {
        return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
      }

      return NextResponse.json({ success: true });
    } catch (err: any) {
      console.error("Email Sending Error:", err);
      return NextResponse.json(
        { error: "Internal server error while sending email." },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("Internal Contact API Error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    )
  }
}

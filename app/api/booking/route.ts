import { NextResponse } from "next/server";
import pb from "@/lib/pocketbase";

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    console.log("Incoming Booking Request:", formData);

    try {
      const record = await pb.collection("bookings").create(formData);
      console.log("Successfully created booking record:", record.id);
      
      try {
        const { sendEmailNotification } = await import("@/lib/mail");
        const subject = `New Booking Request from ${formData.name || 'User'}`;
        const { buildEmailTemplate } = await import("@/lib/mail");
        const html = buildEmailTemplate("New Booking Request", {
          "Name": formData.name,
          "Email": formData.email,
          "Phone": formData.phone,
          "Preferred Date": formData.preferred_date,
          "Project Description": formData.project_description,
        });
        const text = `New Booking Request\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPreferred Date: ${formData.preferred_date}\nProject Description: ${formData.project_description}`;
        await sendEmailNotification(subject, text, html);
      } catch (mailErr) {
        console.error("Failed to send email notification", mailErr);
      }

      return NextResponse.json({ success: true });
    } catch (err: any) {
      console.error("PocketBase Booking Error:", err.status, err.data);
      return NextResponse.json(
        { error: "PocketBase rejected the data.", details: err.data },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error("Internal Booking API Error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    )
  }
}

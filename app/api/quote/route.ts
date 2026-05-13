import { NextResponse } from "next/server";
import pb from "@/lib/pocketbase";

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    console.log("Incoming Quote Request:", formData);

    try {
      const record = await pb.collection("quote_requests").create(formData);
      console.log("Successfully created quote record:", record.id);

      try {
        const { sendEmailNotification } = await import("@/lib/mail");
        const subject = `New Quote Request from ${formData.name || 'User'} (${formData.company || 'Company'})`;
        const { buildEmailTemplate } = await import("@/lib/mail");
        const html = buildEmailTemplate("New Quote Request", {
          "Name": formData.name,
          "Email": formData.email,
          "Company": formData.company,
          "Service Type": formData.service_type,
          "Budget Range": formData.budget_range,
          "Project Details": formData.project_details,
        });
        const text = `New Quote Request\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nService Type: ${formData.service_type}\nBudget Range: ${formData.budget_range}\nProject Details: ${formData.project_details}`;
        await sendEmailNotification(subject, text, html);
      } catch (mailErr) {
        console.error("Failed to send email notification", mailErr);
      }

      return NextResponse.json({ success: true });
    } catch (err: any) {
      console.error("PocketBase Quote Error:", err.status, err.data);
      return NextResponse.json(
        { error: "PocketBase rejected the data.", details: err.data },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error("Internal Quote API Error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    )
  }
}

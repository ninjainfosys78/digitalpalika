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
        const html = `
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Company:</strong> ${formData.company}</p>
          <p><strong>Service Type:</strong> ${formData.service_type}</p>
          <p><strong>Budget Range:</strong> ${formData.budget_range}</p>
          <p><strong>Project Details:</strong> ${formData.project_details}</p>
        `;
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

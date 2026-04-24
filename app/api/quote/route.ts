import { NextResponse } from "next/server";
import pb from "@/lib/pocketbase";

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    console.log("Incoming Quote Request:", formData);

    try {
      const record = await pb.collection("quote_requests").create(formData);
      console.log("Successfully created quote record:", record.id);
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

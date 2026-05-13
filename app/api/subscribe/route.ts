import { NextResponse } from "next/server";
import pb from "@/lib/pocketbase";

const COLLECTION = "pbc_2371097426";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }


    // Try to insert the subscriber
    try {
      console.log("Attempting to create newsletter record for:", email);
      const record = await pb.collection(COLLECTION).create({
        email: email,
        subscribed_at: new Date().toISOString(),
      });
      console.log("PocketBase success. ID:", record.id);
      
      return NextResponse.json({ success: true });
    } catch (err: any) {
      console.error("PocketBase Create Error:", err.status, err.data);
      // Handle duplicate email (PocketBase returns 400 for unique constraint violations)
      if (err.status === 400 && JSON.stringify(err.data).includes("unique")) {
        return NextResponse.json(
          { error: "You are already subscribed!" },
          { status: 400 }
        );
      }
      throw err;
    }
  } catch (error: any) {
    console.error("Subscription API Final Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to subscribe. Please try again later." },
      { status: 500 }
    );
  }
}

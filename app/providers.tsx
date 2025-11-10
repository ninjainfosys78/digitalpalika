import React from "react";
import { cookies } from "next/headers";
import { LanguageProvider } from "@/context/LanguageContext";

export default async function Providers({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const cookieVal = cookieStore.get("lang")?.value;
  const initialLang = cookieVal === "en" || cookieVal === "ne" ? cookieVal : "ne";
  return <LanguageProvider initialLang={initialLang as "en" | "ne"}>{children}</LanguageProvider>;
}
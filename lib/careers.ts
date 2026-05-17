import pb from "@/lib/pocketbase";

export type JobOpening = {
  id: string;
  title: string;
  department: string;
  location: string;
  description: string;
  isActive: boolean;
};

// Helper to safely get field from PocketBase record with case insensitivity
function getField(record: any, key: string): string {
  if (!record) return "";
  const lowerKey = key.toLowerCase();
  for (const rKey of Object.keys(record)) {
    if (rKey.toLowerCase() === lowerKey) {
      return record[rKey] || "";
    }
  }
  return "";
}

export async function getJobOpenings(lang: "en" | "ne"): Promise<JobOpening[]> {
  try {
    const records = await pb.collection("Ninja_Careers").getFullList({
      filter: "is_active = true",
      sort: "created",
    });
    const isEn = lang === "en";
    return records.map((record: any) => ({
      id: record.id,
      title: getField(record, isEn ? "title_en" : "title_ne"),
      department: getField(record, isEn ? "department_en" : "department_ne"),
      location: getField(record, isEn ? "location_en" : "location_ne"),
      description: getField(record, isEn ? "description_en" : "description_ne"),
      isActive: record.is_active || false,
    }));
  } catch (e) {
    console.error("Error fetching careers:", e);
    return [];
  }
}

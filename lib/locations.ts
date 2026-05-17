import pb from "@/lib/pocketbase";

export type OfficeLocation = {
  city: string;
  address: string;
  phone: string;
  email: string;
  mapUrl: string;
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

export async function getOfficeLocations(lang: "en" | "ne"): Promise<OfficeLocation[]> {
  try {
    const records = await pb.collection("Ninja_Locations").getFullList({
      sort: "order,created",
    });
    const isEn = lang === "en";
    return records.map((record: any) => ({
      city: getField(record, isEn ? "city_en" : "city_ne"),
      address: getField(record, isEn ? "address_en" : "address_ne"),
      phone: getField(record, "phone"),
      email: getField(record, "email"),
      mapUrl: getField(record, "map_url"),
    }));
  } catch (e) {
    console.error("Error fetching locations:", e);
    return [];
  }
}

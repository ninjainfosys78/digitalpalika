import pb from "@/lib/pocketbase";

const TRUSTED_COLLECTION = "Ninja_trustedby";

export interface TrustedLogoRecord {
  id: string;
  logo: string;
  logoName: string;
}

export async function fetchTrustedLogos(): Promise<TrustedLogoRecord[]> {
  try {
    const records: any[] = await pb.collection(TRUSTED_COLLECTION).getFullList();

    return records
      .map((r: any) => {
        const file = r.Logo ?? r.logo ?? null;
        if (!file) return null;

        const name = (r.Logo_name ?? r.logo_name ?? r.name ?? "").toString().trim();

        return {
          id: r.id,
          logo: pb.files.getUrl(r, file),
          logoName: name,
        };
      })
      .filter((x: TrustedLogoRecord | null): x is TrustedLogoRecord => x !== null);
  } catch (e) {
    console.error("Error fetching trusted logos:", e);
    return [];
  }
}

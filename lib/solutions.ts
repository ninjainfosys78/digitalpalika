import pb from "@/lib/pocketbase";

export type SolutionCard = {
  id: string;
  title_en: string;
  title_ne: string;
  description_en: string;
  description_ne: string;
  imageUrl: string | null;
};

type SolutionRecord = {
  id: string;
  Title_en: string;
  Title_ne: string;
  Description_en: string;
  Description_ne: string;
  Image?: string;
};

export async function getSolutionsCards(): Promise<SolutionCard[]> {
  const records = await pb
    .collection("NinjaLanding_Solutions")
    .getFullList<SolutionRecord>({
      sort: "created",
    });

  return records.map((record) => ({
    id: record.id,
    title_en: record.Title_en,
    title_ne: record.Title_ne,
    description_en: record.Description_en,
    description_ne: record.Description_ne,
    imageUrl: record.Image ? pb.files.getURL(record, record.Image) : null,
  }));
}

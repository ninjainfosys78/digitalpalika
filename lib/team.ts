import pb from "@/lib/pocketbase";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  name_ne?: string;
  role_ne?: string;
  imageUrl: string | null;
  bio_en: string;
  bio_ne: string;
};

type TeamRecord = {
  id: string;
  Name_EN?: string;
  Position_EN?: string;
  Description_EN?: string;
  Name_NE?: string;
  Position_NE?: string;
  Description_NE?: string;
  Image?: string;
};

const COLLECTION_NAME = "eShasan_leadership";

const FALLBACK_TEAM: TeamMember[] = [
  {
    id: "dh4nrwfh9uvamvv",
    name: "Trilochan Bhusal",
    role: "Chief Technology Officer",
    name_ne: "त्रिलोचन भुसाल",
    role_ne: "मुख्य प्राविधिक अधिकृत",
    imageUrl: "/trump.jpeg",
    bio_en: "Leading the technical vision at Ninja Infosys with over a decade of experience in building scalable enterprise systems and high-performance engineering teams.",
    bio_ne: "निन्जा इन्फोसिसमा प्राविधिक दृष्टिको नेतृत्व गर्दै, स्केलेबल इन्टरप्राइज सिस्टम र उच्च-कार्यक्षमता इन्जिनियरिङ टोलीहरू निर्माणमा एक दशकभन्दा बढीको अनुभव।",
  },
];

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const records = await pb
      .collection(COLLECTION_NAME)
      .getFullList<TeamRecord>({
        sort: "created",
      });

    if (records.length === 0) return FALLBACK_TEAM;

    return records.map((record) => {
      const name = record.Name_EN || "";
      const role = record.Position_EN || "";
      const name_ne = record.Name_NE || name;
      const role_ne = record.Position_NE || role;
      const bio_en = record.Description_EN || "";
      const bio_ne = record.Description_NE || bio_en;
      const imageField = record.Image;

      return {
        id: record.id,
        name,
        role,
        name_ne,
        role_ne,
        bio_en,
        bio_ne,
        imageUrl: imageField ? pb.files.getURL(record, imageField) : "/insights.jpg",
      };
    });
  } catch (e) {
    console.error("Error fetching team members:", e);
    return FALLBACK_TEAM;
  }
}



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
    id: "fb-ramesh",
    name: "Ramesh Chhetri",
    role: "Founder & CEO",
    name_ne: "रमेश क्षेत्री",
    role_ne: "संस्थापक र सीईओ",
    imageUrl: "/ceo.jpg",
    bio_en: "He drives the company’s strategic vision and commitment to digital transformation. He focuses on delivering high-impact IT solutions and e-governance systems, bridging the gap between technical innovation and practical business needs.",
    bio_ne: "उहाँले कम्पनीको रणनीतिक दृष्टिकोण र डिजिटल रूपान्तरणप्रतिको प्रतिबद्धतालाई अगाडि बढाउनुहुन्छ। उहाँ प्राविधिक आविष्कार र व्यावहारिक व्यापारिक आवश्यकताहरूबीचको अन्तरलाई कम गर्दै उच्च-प्रभाव आईटी समाधानहरू र ई-सुशासन प्रणालीहरू प्रदान गर्नमा केन्द्रित हुनुहुन्छ।",
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

    const members = records.map((record) => {
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

    // Filter out Trilochan Bhusal if he exists in DB
    const filteredMembers = members.filter(m => !m.name.toLowerCase().includes("trilochan"));

    // Ensure Ramesh Chhetri is always first
    return filteredMembers.sort((a, b) => {
      if (a.name.toLowerCase().includes("ramesh")) return -1;
      if (b.name.toLowerCase().includes("ramesh")) return 1;
      return 0;
    });
  } catch (e) {
    console.error("Error fetching team members:", e);
    return FALLBACK_TEAM;
  }
}



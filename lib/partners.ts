import pb from "@/lib/pocketbase";

export type Partner = {
  id: string;
  name_en: string;
  name_ne: string;
  category_en: string;
  category_ne: string;
  description_en: string;
  description_ne: string;
  logoUrl: string;
  order: number;
};

type PartnerRecord = {
  id: string;
  Name: string;
  Name_ne?: string;
  Category: string;
  Category_ne?: string;
  Description_en: string;
  Description_ne: string;
  Logo?: string;
  Order?: number;
};

const COLLECTION = "NinjaLanding_Partners";

// Fallback data
const FALLBACK_PARTNERS: Partner[] = [
  {
    id: "fb-nt",
    name_en: "Nepal Telecom",
    name_ne: "नेपाल टेलिकम",
    category_en: "Strategic Partners",
    category_ne: "रणनीतिक साझेदारहरू",
    description_en: "Digital infrastructure and nationwide connectivity solutions.",
    description_ne: "डिजिटल पूर्वाधार र राष्ट्रव्यापी कनेक्टिभिटी समाधान।",
    logoUrl: "/nt-logo.png",
    order: 1,
  },
  {
    id: "fb-ncell",
    name_en: "Ncell",
    name_ne: "एनसेल",
    category_en: "Strategic Partners",
    category_ne: "रणनीतिक साझेदारहरू",
    description_en: "Collaborative telecommunication network optimizations.",
    description_ne: "सहयोगी दूरसञ्चार नेटवर्क अप्टिमाइजेसनहरू।",
    logoUrl: "/partners/Ncell.jpg",
    order: 2,
  },
  {
    id: "fb-wl",
    name_en: "WorldLink",
    name_ne: "वर्ल्डलिङ्क",
    category_en: "Strategic Partners",
    category_ne: "रणनीतिक साझेदारहरू",
    description_en: "High-speed internet backbone and enterprise systems.",
    description_ne: "उच्च-गति इन्टरनेट ब्याकबोन र एन्टरप्राइज प्रणालीहरू।",
    logoUrl: "/partners/Worldlink.jpg",
    order: 3,
  },
  {
    id: "fb-pb",
    name_en: "Prabhu Bank",
    name_ne: "प्रभु बैंक",
    category_en: "Technology Partners",
    category_ne: "प्रविधि साझेदारहरू",
    description_en: "Streamlined fintech ecosystems and digital corporate banking solutions.",
    description_ne: "सुव्यवस्थित फिनटेक इकोसिस्टम र डिजिटल कर्पोरेट बैंकिङ समाधान।",
    logoUrl: "/partners/Prabhu.jpg",
    order: 4,
  },
  {
    id: "fb-ktm",
    name_en: "Kathmandu Municipality",
    name_ne: "काठमाडौं महानगरपालिका",
    category_en: "Governance & NGO",
    category_ne: "सुशासन र एनजीओ",
    description_en: "Smart city initiatives and digital citizen services.",
    description_ne: "स्मार्ट सिटी पहलहरू र डिजिटल नागरिक सेवाहरू।",
    logoUrl: "/partners/kathmandu.png",
    order: 5,
  },
];

export async function getPartners(): Promise<Partner[]> {
  try {
    const records = await pb
      .collection(COLLECTION)
      .getFullList<PartnerRecord>({ sort: "Order,created" });

    if (records.length === 0) return FALLBACK_PARTNERS;

    return records.map((r) => ({
      id: r.id,
      name_en: r.Name ?? "",
      name_ne: r.Name_ne || r.Name || "",
      category_en: r.Category ?? "",
      category_ne: r.Category_ne || r.Category || "",
      description_en: r.Description_en ?? "",
      description_ne: r.Description_ne || r.Description_en || "",
      logoUrl: r.Logo ? pb.files.getURL(r, r.Logo) : "/placeholder.jpg",
      order: r.Order ?? 0,
    }));
  } catch {
    return FALLBACK_PARTNERS;
  }
}

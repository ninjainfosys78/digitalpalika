import type { LocalizedString } from "@/context/LanguageContext";

export interface FeatureRailItem {
    id: number;
    image: string;
    description: LocalizedString;
}

export const featuresRailData: FeatureRailItem[] = [
    {
        id: 1,
        image: "/feature1.png",
        description: {
            en: "Integrated mobile and web-based system",
            ne: "एकीकृत मोबाइल र वेब-आधारित प्रणाली",
        },
    },
    {
        id: 2,
        image: "/feature2.png",
        description: {
            en: "Online access to citizen services and information",
            ne: "नागरिक सेवा र जानकारीमा अनलाइन पहुँच",
        },
    },
    {
        id: 3,
        image: "/feature3.png",
        description: {
            en: "Online application, registration, and certificate issuance for municipal services",
            ne: "पालिका सेवाहरूको लागि अनलाइन आवेदन, दर्ता, र प्रमाणपत्र जारी",
        },
    },
    {
        id: 4,
        image: "/feature4.png",
        description: {
            en: "Personal, business, and institutional information",
            ne: "व्यक्तिगत, व्यवसायिक, र संस्थागत जानकारी",
        },
    },
    {
        id: 5,
        image: "/feature5.png",
        description: {
            en: "Active citizen participation in daily municipal activities",
            ne: "दैनिक पालिका गतिविधिमा सक्रिय नागरिक सहभागिता",
        },
    },
];

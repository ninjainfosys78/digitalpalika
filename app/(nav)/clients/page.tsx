"use client";

import { Fragment, useState, useMemo } from "react";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { clients } from "@/lib/siteData";
import { useLanguage } from "@/context/LanguageContext";
import Demo from "@/components/demo"; // Import the demo section

// List of provinces for dropdown (with Nepali translation)
const provinces = [
    { en: "Koshi Province", ne: "कोशी प्रदेश" },
    { en: "Madhesh Province", ne: "मधेश प्रदेश" },
    { en: "Bagmati Province", ne: "बागमती प्रदेश" },
    { en: "Gandaki Province", ne: "गण्डकी प्रदेश" },
    { en: "Lumbini Province", ne: "लुम्बिनी प्रदेश" },
    { en: "Karnali Province", ne: "कर्णाली प्रदेश" },
    { en: "Sudurpashchim Province", ne: "सुदूरपश्चिम प्रदेश" }
];

// Helper to get province name in current language
function getProvinceName(province: string, lang: "en" | "ne"): string {
    const found = provinces.find(
        p =>
            p.en === province ||
            p.ne === province ||
            (province === "Province 1" && p.en === "Koshi Province") ||
            (province === "Province 2" && p.en === "Madhesh Province") ||
            (province === "Province 3" && p.en === "Bagmati Province") ||
            (province === "Province 4" && p.en === "Gandaki Province") ||
            (province === "Province 5" && p.en === "Lumbini Province") ||
            (province === "Province 6" && p.en === "Karnali Province") ||
            (province === "Province 7" && p.en === "Sudurpashchim Province")
    );
    return found ? (found[lang] ?? found.en) : province;
}

function getLocationText(location: string, lang: "en" | "ne"): string {
    // All 46 client locations with Nepali translation
    const locationMap: Record<string, { en: string; ne: string }> = {
        "Rolpa": { en: "Rolpa", ne: "रोल्पा" },
        "Kathmandu": { en: "Kathmandu", ne: "काठमाडौं" },
        "Rupandehi": { en: "Rupandehi", ne: "रुपन्देही" },
        "Dang": { en: "Dang", ne: "दाङ" },
        "Humla": { en: "Humla", ne: "हुम्ला" },
        "Nepal": { en: "Nepal", ne: "नेपाल" },
        "Smart city initiatives": { en: "Smart city initiatives", ne: "स्मार्ट सिटी पहल" },
        "Mazkot Jajarkot": { en: "Mazkot Jajarkot", ne: "माझकोट जाजरकोट" },
        "Ghorahi": { en: "Ghorahi", ne: "घोराही" },
        "Gaidhawa": { en: "Gaidhawa", ne: "गैडहवा" },
        "Adanchuli": { en: "Adanchuli", ne: "अदानचुली" },
        "Junichande": { en: "Junichande", ne: "जुनीचाँदे" },
        "Madhuwan": { en: "Madhuwan", ne: "मधुवन" },
        "Mohattari": { en: "Mohattari", ne: "महोत्तरी" },
        "Bardibas": { en: "Bardibas", ne: "बर्दिबास" },
        "Banke": { en: "Banke", ne: "बाँके" },
        "Biratnagar": { en: "Biratnagar", ne: "विराटनगर" },
        "Dhangadhi": { en: "Dhangadhi", ne: "धनगढी" },
        "Pokhara": { en: "Pokhara", ne: "पोखरा" },
        "Butwal": { en: "Butwal", ne: "बुटवल" },
        "Hetauda": { en: "Hetauda", ne: "हेटौंडा" },
        "Jumla": { en: "Jumla", ne: "जुम्ला" },
        "Surkhet": { en: "Surkhet", ne: "सुर्खेत" },
        "Nepalgunj": { en: "Nepalgunj", ne: "नेपालगञ्ज" },
        "Gaur": { en: "Gaur", ne: "गौर" },
        "Rajbiraj": { en: "Rajbiraj", ne: "राजविराज" },
        "Dhankuta": { en: "Dhankuta", ne: "धनकुटा" },
        "Bhojpur": { en: "Bhojpur", ne: "भोजपुर" },
        "Bharatpur": { en: "Bharatpur", ne: "भरतपुर" },
        "Lamjung": { en: "Lamjung", ne: "लमजुङ" },
        "Palpa": { en: "Palpa", ne: "पाल्पा" },
        "Gulmi": { en: "Gulmi", ne: "गुल्मी" },
        "Syangja": { en: "Syangja", ne: "स्याङ्जा" },
        "Tanahun": { en: "Tanahun", ne: "तनहुँ" },
        "Parbat": { en: "Parbat", ne: "पर्वत" },
        "Baglung": { en: "Baglung", ne: "बागलुङ" },
        "Kaski": { en: "Kaski", ne: "कास्की" },
        "Makwanpur": { en: "Makwanpur", ne: "मकवानपुर" },
        "Chitwan": { en: "Chitwan", ne: "चितवन" },
        "Nawalparasi": { en: "Nawalparasi", ne: "नवलपरासी" },
        "Saptari": { en: "Saptari", ne: "सप्तरी" },
        "Siraha": { en: "Siraha", ne: "सिराहा" },
        "Doti": { en: "Doti", ne: "डोटी" },
        "Dadeldhura": { en: "Dadeldhura", ne: "डडेलधुरा" },
        "Baitadi": { en: "Baitadi", ne: "बैतडी" },
        "Achham": { en: "Achham", ne: "अछाम" },
        "Bardiya": { en: "Bardiya", ne: "बर्दिया" },
        "Jajarkot": { en: "Jajarkot", ne: "जाजरकोट" },
        "Salyan": { en: "Salyan", ne: "सल्यान" },
        "Dailekh": { en: "Dailekh", ne: "दैलेख" },
        "Kanchanpur": { en: "Kanchanpur", ne: "कञ्चनपुर" },
        "Rukum": { en: "Rukum", ne: "रुकुम" },
        "Bajura": { en: "Bajura", ne: "बाजुरा" },
        "Dolpa": { en: "Dolpa", ne: "डोल्पा" },
        "Janakpur": { en: "Janakpur", ne: "जनकपुर" },
        "Birendranagar": { en: "Birendranagar", ne: "वीरेन्द्रनगर" },
        "Kirtipur": { en: "Kirtipur", ne: "कीर्तिपुर" },
        "Tripureshwor": { en: "Tripureshwor", ne: "त्रिपुरेश्वर" },
        "Bhaktapur": { en: "Bhaktapur", ne: "भक्तपुर" },
        "Lalitpur": { en: "Lalitpur", ne: "ललितपुर" },
        "Dhulikhel": { en: "Dhulikhel", ne: "धुलिखेल" },
        // ...existing locations...
    };
    return locationMap[location]?.[lang] || location;
}

export default function ClientsPage() {
    return (
        <Fragment>
            <Header />
            <main className="bg-white min-h-screen">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <ClientsContent />
                </div>
                {/* Demo section full width, outside container */}
                <Demo />
            </main>
            <Footer />
        </Fragment>
    );
}

function ClientsContent() {
    const { t, lang } = useLanguage();
    const [search, setSearch] = useState("");
    const [province, setProvince] = useState<string>("");

    // Filter clients by search and province
    const filteredClients = useMemo(() => {
        return clients.filter(client => {
            const clientProvince = getProvinceName(client.province, "en");
            const matchesProvince = province ? clientProvince === province : true;
            const matchesSearch =
                t(client.name).toLowerCase().includes(search.toLowerCase()) ||
                (client.location && getLocationText(client.location, lang).toLowerCase().includes(search.toLowerCase()));
            return matchesProvince && matchesSearch;
        });
    }, [search, province, t, lang]);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Heading */}
            <div className="text-center mb-6">
                <span className="block text-[#003893] font-semibold mb-2">
                    {t({ en: "Our Client", ne: "हाम्रा ग्राहक" })}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">
                    {t({
                        en: "Trusted by local bodies across Nepal for digital transformation",
                        ne: "डिजिटल रूपान्तरणका लागि नेपालभरका स्थानीय निकायहरूद्वारा विश्वास गरिएको।"
                    })}
                </h2>
                <div className="mx-auto w-24 h-0.5 bg-gray-300 rounded mb-4" />
            </div>

            {/* Search and Province Filter */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
                <input
                    type="text"
                    placeholder={t({ en: "Search Clients", ne: "ग्राहकहरू खोज्नुहोस्" })}
                    className="w-full sm:w-1/3 border border-gray-300 rounded px-4 py-2 text-base"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <select
                    className="w-full sm:w-56 border border-gray-300 rounded px-4 py-2 text-base"
                    value={province}
                    onChange={e => setProvince(e.target.value)}
                >
                    <option value="">{t({ en: "Choose Province", ne: "प्रदेश छान्नुहोस्" })}</option>
                    {provinces.map(p => (
                        <option key={p.en} value={p.en}>
                            {lang === "ne" ? p.ne : p.en}
                        </option>
                    ))}
                </select>
            </div>

            {/* Clients Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredClients.map(client => (
                    <div
                        key={client.id}
                        className="border border-blue-100 bg-white rounded-none p-4 flex flex-col items-start hover:shadow transition min-h-[220px] max-h-[240px] justify-between"
                        style={{ minHeight: 0 }}
                    >
                        <img
                            src={client.image}
                            alt={t(client.name)}
                            className="w-16 h-16 object-contain mb-3"
                        />
                        <div className="font-semibold text-black text-base mb-1 text-left w-full">
                            {t(client.name)}
                        </div>
                        {client.location && (
                            <div className="flex items-center text-gray-500 text-sm mb-2 w-full">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                                    <circle cx="12" cy="9" r="2.5"/>
                                </svg>
                                {getLocationText(client.location, lang)}
                            </div>
                        )}
                        {client.province && (
                            <span className="inline-block bg-blue-100 text-[#003893] text-xs font-medium px-3 py-1 rounded w-fit text-left">
                                {getProvinceName(client.province, lang)}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
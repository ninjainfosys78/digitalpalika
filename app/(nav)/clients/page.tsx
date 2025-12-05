"use client";

import { Fragment, useState, useMemo } from "react";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { useLanguage } from "@/context/LanguageContext";
import Demo from "@/components/demo";
import { useClients } from "@/hooks/useClients";
import pb, { type Client } from "@/lib/pocketbase";

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
    
    // Fetch clients from PocketBase
    const { clients, loading, error } = useClients();

    // Filter clients by search and province
    const filteredClients = useMemo(() => {
        return clients.filter(client => {
            const clientName = lang === "ne" ? client.ne_name : client.en_name;
            const clientLocation = lang === "ne" ? client.ne_location : client.en_location;
            const clientProvince = lang === "ne" ? client.ne_province : client.en_province;
            
            const matchesProvince = province ? clientProvince === province : true;
            const matchesSearch =
                clientName.toLowerCase().includes(search.toLowerCase()) ||
                clientLocation.toLowerCase().includes(search.toLowerCase());
            return matchesProvince && matchesSearch;
        });
    }, [search, province, clients, lang]);

    // Helper function to get image URL
    const getImageUrl = (client: Client) => {
        try {
            if (!client.image) return '/placeholder-logo.png';
            
            const imageFile = Array.isArray(client.image) ? client.image[0] : client.image;
            
            if (!imageFile) return '/placeholder-logo.png';
            
            return pb.files.getURL(client, imageFile, { thumb: '100x100' });
        } catch (error) {
            console.error('Error loading image:', error);
            return '/placeholder-logo.png';
        }
    };

    if (loading) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="text-center">
                    <p className="text-gray-600">{t({ en: "Loading clients...", ne: "ग्राहकहरू लोड हुँदैछ..." })}</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="text-center text-red-600">
                    <p>{error}</p>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Heading */}
            <div className="text-center mb-6">
                <span className="block text-[#003893] font-semibold mb-2">
                    {t({ en: "Our Client", ne: "हाम्रा ग्राहक" })}
                </span>
                <h2 className="text-[28px] font-bold text-black mb-2">
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
                        <option key={p.en} value={lang === "ne" ? p.ne : p.en}>
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
                    >
                        <img
                            src={getImageUrl(client)}
                            alt={lang === "ne" ? client.ne_name : client.en_name}
                            className="w-16 h-16 object-contain mb-3"
                        />
                        <div className="font-semibold text-black text-base mb-1 text-left w-full">
                            {lang === "ne" ? client.ne_name : client.en_name}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm mb-2 w-full">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                                <circle cx="12" cy="9" r="2.5"/>
                            </svg>
                            {lang === "ne" ? client.ne_location : client.en_location}
                        </div>
                        <span className="inline-block bg-blue-100 text-[#003893] text-xs font-medium px-3 py-1 rounded w-fit text-left">
                            {lang === "ne" ? client.ne_province : client.en_province}
                        </span>
                    </div>
                ))}
            </div>
        </>
    );
}
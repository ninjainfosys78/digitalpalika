"use client";

import { Fragment, useState, useMemo } from "react";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { useLanguage } from "@/context/LanguageContext";
import Demo from "@/components/demo";
import { clients } from "@/lib/siteData";

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
                <Demo />
            </main>
            <Footer />
        </Fragment>
    );
}

function ClientsContent() {
    const { t } = useLanguage();
    const [search, setSearch] = useState("");
    const [province, setProvince] = useState<string>("");

    const filteredClients = useMemo(() => {
        return clients.filter(client => {
            const clientName = t(client.name);

            const matchesProvince = province ? client.province === province : true;
            const matchesSearch =
                clientName.toLowerCase().includes(search.toLowerCase()) ||
                client.location.toLowerCase().includes(search.toLowerCase());
            return matchesProvince && matchesSearch;
        });
    }, [search, province, t]);

    return (
        <>
            <div className="text-center mb-10">
                <h2 className="text-[28px] font-bold mb-2 text-[#003893]">
                    {t({ en: "Our Esteemed Clients and Partners", ne: "हाम्रा आदरणीय ग्राहक र साझेदारहरू" })}
                </h2>
                <div className="mx-auto w-24 h-0.5 bg-gray-300 rounded mb-4" />
                <p className="text-black max-w-3xl mx-auto">
                    {t({
                        en: "Trusted by local bodies across Nepal for digital transformation.",
                        ne: "डिजिटल रूपान्तरणका लागि नेपालभरका स्थानीय निकायहरूद्वारा विश्वास गरिएको।"
                    })}
                </p>
            </div>

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
                            {t(p)}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {filteredClients.map(client => (
                    <div
                        key={client.id}
                        className="
                            p-4 flex flex-col items-center justify-center h-42
                            bg-white border border-slate-300 rounded-none
                            transform transition-transform duration-200 ease-out
                            hover:scale-105
                        "
                    >
                        <img
                            src={client.image}
                            alt={t(client.name)}
                            className="w-12 h-12 object-contain mb-2"
                        />
                        <span className="text-black font-inter text-sm text-center">
                            {t(client.name)}, {client.location}
                        </span>
                    </div>
                ))}
            </div>
        </>
    );
}
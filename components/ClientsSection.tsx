"use client";

import { clients } from '@/lib/siteData'; 
import { useLanguage } from '@/context/LanguageContext';

export function ClientsSection() {
    const { t } = useLanguage();

    // Localized titles
    const title = t({ 
        en: 'Our Esteemed Clients and Partners', 
        ne: 'हाम्रा आदरणीय ग्राहक र साझेदारहरू' 
    });
    const subtitle = t({ 
        en: 'Trusted by local bodies across Nepal for digital transformation.', 
        ne: 'डिजिटल रूपान्तरणका लागि नेपालभरका स्थानीय निकायहरूद्वारा विश्वास गरिएको।' 
    });

    return (
        <section className="py-20 bg-paper">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                {/* Title and Subtitle */}
                <h2 className="text-4xl font-work-sans font-extrabold mb-5 text-blue-900">
                    {title}
                </h2>
                <p className="text-xl text-black max-w-3xl mx-auto mb-16">
                    {subtitle}
                </p>

                {/* Clients Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {clients.map(client => (
                        <div
                            key={client.id}
                            className="p-4 flex flex-col items-center justify-center h-42 bg-white rounded-lg border border-slate-300"
                        >
                            <img
                                src={client.image}
                                alt={t(client.name)}
                                className="w-12 h-12 object-contain mb-2"
                            />
                            <span className="text-black font-inter text-sm text-center">
                                {t(client.name)}
                            </span>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    );
}
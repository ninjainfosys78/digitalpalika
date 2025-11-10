import { useLanguage } from '@/context/LanguageContext';
import { siteData } from '@/lib/siteData';

/**
 * Statistics Component
 * Displays key metrics from the siteData in an impactful, easy-to-read grid.
 */
export const Statistics = () => {
    // 1. Get the translation function 't' from the Language Context
    const { t } = useLanguage();
    // 2. Access the statistics data from siteData
    const stats = siteData.statistics;

    return (
        <section className="py-12 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {/* Map over the statistics array to render each item */}
                    {stats.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col items-center justify-center text-center p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.03] transform"
                        >
                            {/* Statistic Value (Large, bold, and primary color) */}
                            <p className="text-4xl md:text-5xl font-extrabold text-indigo-700 tracking-tight mb-2">
                                {/* The value is translated to show either English or Nepali numbers */}
                                {t(item.value)}
                            </p>
                            {/* Statistic Label (Translated and subdued) */}
                            <p className="text-sm md:text-base font-medium text-gray-600">
                                {t(item.label)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
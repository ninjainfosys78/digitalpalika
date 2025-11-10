"use client";

import { useLanguage } from '@/context/LanguageContext';

/**
 * The Stats component displays key statistics about the Digital Municipality
 * It is used on the homepage to showcase the impact and reach of the municipality's digital services.
 */
export default function Stats() {
	// 1. Access the current language from the LanguageContext
	const { lang } = useLanguage();

	return (
		<section className="pt-6 sm:pt-8 md:pt-12">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
					{/* Service-providing Local Levels */}
					<div className="flex flex-col items-center to-white p-4 sm:p-6 hover:scale-105 transition">
						<span className="bg-[#001841]/10 text-[#001841] p-3 sm:p-4 mb-2 sm:mb-4">
							<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M7 13h10M7 17h10M7 9h10M5 7v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2z" />
							</svg>
						</span>
						<div className="text-2xl sm:text-3xl md:text-4xl text-[#001841] mb-1 sm:mb-2">
							{lang === 'ne' ? '७० +' : '70 +'}
						</div>
						<div className="text-gray-600 text-center text-sm sm:text-base">
							{lang === 'ne' ? 'सेवा प्रवाह स्थानीय तह' : 'Service-providing Local Levels'}
						</div>
					</div>

					{/* Beneficiary Citizens */}
					<div className="flex flex-col items-center p-4 sm:p-6 hover:scale-105 transition">
						<span className="bg-[#001841]/10 text-[#001841] p-3 sm:p-4 mb-2 sm:mb-4">
							<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M17 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 110-8 4 4 0 010 8zm6 8v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
							</svg>
						</span>
						<div className="text-2xl sm:text-3xl md:text-4xl text-[#001841] mb-1 sm:mb-2">
							{lang === 'ne' ? '८,००,००० +' : '800,000 +'}
						</div>
						<div className="text-gray-600 text-center text-sm sm:text-base">
							{lang === 'ne' ? 'लाभान्वित नागरिक' : 'Beneficiary Citizens'}
						</div>
					</div>

					{/* Beneficiary Representatives */}
					<div className="flex flex-col items-center p-4 sm:p-6 hover:scale-105 transition">
						<span className="bg-[#001841]/10 text-[#001841] p-3 sm:p-4 mb-2 sm:mb-4">
							<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M12 17v-2a4 4 0 018 0v2M16 11a4 4 0 110-8 4 4 0 010 8z" />
							</svg>
						</span>
						<div className="text-2xl sm:text-3xl md:text-4xl text-[#001841] mb-1 sm:mb-2">
							{lang === 'ne' ? '२५०० +' : '2500 +'}
						</div>
						<div className="text-gray-600 text-center text-sm sm:text-base">
							{lang === 'ne' ? 'लाभान्वित प्रतिनिधिहरु' : 'Beneficiary Representatives'}
						</div>
					</div>

					{/* Happy Service Recipients */}
					<div className="flex flex-col items-center p-4 sm:p-6 hover:scale-105 transition">
						<span className="bg-[#001841]/10 text-[#001841] p-3 sm:p-4 mb-2 sm:mb-4">
							<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-4a5 5 0 100-10 5 5 0 000 10z" />
							</svg>
						</span>
						<div className="text-2xl sm:text-3xl md:text-4xl text-[#001841] mb-1 sm:mb-2">
							{lang === 'ne' ? '३०० +' : '300 +'}
						</div>
						<div className="text-gray-600 text-center text-sm sm:text-base">
							{lang === 'ne' ? 'खुसी सेवाग्राहीहरु' : 'Happy Service Recipients'}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
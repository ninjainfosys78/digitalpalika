"use client";

import { useLanguage } from '@/context/LanguageContext';

export default function FeatureRail() {
	const { t, lang } = useLanguage();

	// active language key
	const active = lang === 'ne' ? 'ne' : 'en';

	// features list: image src, en and ne descriptions
	const features = [
		{
			img: '/feature1.png',
			en: 'Integrated mobile and web-based system',
			ne: 'एकीकृत मोबाइल र वेबमा आधारित प्रणाली',
		},
		{
			img: '/feature2.png',
			en: 'Online access to citizen services and information',
			ne: 'नागरिकका सेवा र जानकारीको अनलाइनमा पहुँच',
		},
		{
			img: '/feature3.png',
			en: 'Online application, registration, and certificate issuance for municipal services',
			ne: 'पालिकाले प्रवाह गर्ने सेवाहरुलाई अनलाइनमार्फत आवेदन लिने, दर्ता गर्ने र प्रमाणपत्र प्रदान',
		},
		{
			img: '/feature4.png',
			en: 'Personal, business, and institutional information',
			ne: 'व्यक्तिगत, व्यवसाय र संस्थागत जानकारी',
		},
		{
			img: '/feature5.png',
			en: 'Active citizen participation in daily municipal activities',
			ne: 'पालिकाको दैनिक गतिविधिहरुमा नागरिकको सक्रिय संलग्नता',
		},
	];

	return (
		<section className="w-full py-12 md:py-16" style={{ backgroundColor: '#eef6fb' }}>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
				{/* small section label */}
				<p className="text-sm text-[#003893] font-medium mb-3">
					{active === 'ne' ? 'विशेषताहरु' : 'Features'}
				</p>

				{/* main heading */}
				<h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-3 sm:mb-4 text-[#000000] mb-4">
					{active === 'ne'
						? 'स्मार्ट, जडित डिजिटल प्लेटफर्म मार्फत स्थानीय शासनलाई सरल बनाउँदै।'
						: 'Simplifying local governance through a smart, connected digital platform.'}
				</h2>

				{/* thin underline */}
				<div className="w-24 h-[2px] mx-auto mb-8" style={{ backgroundColor: '#003893' }}></div>

				{/* features grid: responsive 1 → 2 → 3 → 5 */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-start mb-8">
					{features.map((f, idx) => (
						<div key={idx} className="flex flex-col items-start text-left">
							{/* image */}
							{/* make container square */}
							<div className="w-full aspect-square overflow-hidden bg-white">
								{/* image fills the square */}
								<img
									src={f.img}
									alt={active === 'ne' ? f.ne : f.en}
									className="w-full h-full object-cover"
								/>
							</div>

							{/* small divider under image */}
							<div className="w-10 h-[2px] mt-3 mb-3" style={{ backgroundColor: '#003893' }}></div>

							{/* description (normal weight) */}
							<p className="text-sm text-[#000000] leading-relaxed">
								{active === 'ne' ? f.ne : f.en}
							</p>
						</div>
					))}
				</div>

				{/* centered CTA button */}
				<div className="mx-auto max-w-xs">
					<a
						href="/features"
						className="inline-flex items-center justify-center gap-2 w-full bg-[#003893] hover:bg-[#002f72] text-white text-sm py-3"
					>
						{t({ en: 'Learn more', ne: 'थप विवरण हेर्नुहोस्' })}
						<svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
							<path d="M5 12h14M13 5l6 7-6 7" strokeLinecap="round" strokeLinejoin="round"></path>
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
}

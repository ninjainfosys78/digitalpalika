"use client";

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';

export default function Hero() {
	return <HomeContent />;
}

const HomeContent = () => {
	// LANGUAGE (up)
	const { lang } = useLanguage();
	const [showScrollTop, setShowScrollTop] = useState(false);

	// text for both languages
	const title = {
		en: 'Digital Municipality (ERP Software)',
		ne: 'डिजिटल पालिका (ERP Software)',
	};
	const description = {
		en:
			'Digital Municipality is a system designed to save time and make citizens’ tasks easier. It empowers every local body with information and modern technology, aiming to transform them into technology-enabled and technology-friendly digital municipalities.',
		ne:
			'समयको बचत र जनताको काम सहज रूपमा सम्पन्न गर्नको लागि र हरेक स्थानीय निकायलाई सूचना तथा आधुनिक प्रविधिको माध्यमबाट सशक्त बनाउँदै प्रविधि युक्त, प्रविधि मैत्री डिजिटल पालिकाको रूपमा रूपान्तरण गर्न परिकल्पना गरिएको एक प्रणाली डिजिटल पालिका हो।',
	};
	const cta = {
		en: 'Book Demo',
		ne: 'डेमो बुक गर्नुहोस्',
	};

	const active = lang === 'ne' ? 'ne' : 'en';

	return (
		<>
			{/* Hero Section */}
			<section className="bg-white text-[#000000] min-h-screen flex items-start pt-0 relative">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start gap-6 sm:gap-8">
					{/* Left text column */}
					<div className="md:w-2/5 flex-1 pt-40">
						{/* Title: only active language */}
						<h1 className="text-[54px] font-extrabold mb-4 leading-tight">
							<span className="block">{title[active]}</span>
						</h1>

						{/* Description: only active language */}
						<div className="max-w-2xl">
							<p className="text-[16px] mb-4 text-justify text-[#000000]">
								<span className="block">{description[active]}</span>
							</p>

							{/* CTA: only active language */}
							<a
								href="/contact"
								className="inline-flex items-center gap-3 bg-[#003893] hover:bg-[#002f72] text-white font-semibold px-5 py-3"
							>
								<span className="leading-none">{cta[active]}</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<path d="M5 12h14" />
							<path d="M12 5l7 7-7 7" />
						</svg>
							</a>
						</div>
					</div>

					{/* Right image column with diagonal clip */}
					<div className="flex-1 w-full md:w-3/5 relative flex justify-center items-start">
						{/* make image wrapper full viewport height so bottom covers hero */}
						<div
							className="w-full h-screen overflow-hidden"
							style={{
								clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0 100%)",
							}}
						>
							<img
								src="/herosection.png"
								alt="ERP Demo"
								className="w-full h-full object-cover grayscale"
								// pull image up slightly so bottom doesn't extend too far below hero
								style={{ transform: "translateY(-11%) translateZ(0)" }}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
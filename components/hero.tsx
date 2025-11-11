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
		ne: 'डिजिटल पालिका (ईआरपी सफ्टवेयर)',
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
			{/* responsive heights: ~50% viewport on small screens, full-screen on lg */}
			<section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen flex items-start bg-white overflow-hidden">
				{/* MOBILE: half-bleed background image + dark brand overlay (visible when hamburger shows) */}
				<div className="absolute inset-0 block lg:hidden">
					<img
						src="/herosection.png"
						alt="ERP Demo"
						className="w-full h-full object-cover grayscale opacity-60"
					/>
					{/* dark brand overlay to make text readable */}
					<div className="absolute inset-0 opacity-20 pointer-events-none" />
				</div>

				{/* Content container */}
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start gap-6 sm:gap-8 relative z-10">
					{/* Left text column (reduced top padding on small screens so lower content shows up) */}
					<div className="w-full md:w-2/5 flex-1 py-8 md:py-20 lg:py-40">
						{/* Title */}
						<h1 className="font-extrabold mb-4 leading-tight
							text-3xl sm:text-4xl md:text-5xl lg:text-[54px]
							text-black lg:text-[#000000] text-left lg:text-left">
							<span className="block">{title[active]}</span>
						</h1>

						{/* Description */}
						<div className="md:py-10 max-w-3xl lg:mx-0">
							<p className="mb-4
								text-base sm:text-lg md:text-[16px]
								text-black lg:text-[#000000] text-left lg:text-justify">
								<span className="block">{description[active]}</span>
							</p>

							{/* CTA */}
							<a
								href="/contact"
								className="inline-flex items-center gap-3 bg-[#003893] hover:bg-[#002f72] text-white font-semibold px-5 py-3 mx-auto lg:mx-0"
								role="button"
							>
								<span className="leading-none">{cta[active]}</span>
								<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<path d="M5 12h14" />
									<path d="M12 5l7 7-7 7" />
								</svg>
							</a>
						</div>
					</div>

					{/* Right image column for large screens (keep diagonal clip) */}
					<div className="hidden lg:flex flex-1 w-full md:w-3/5 relative justify-center items-start">
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
								style={{ transform: "translateY(-11%) translateZ(0)" }}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
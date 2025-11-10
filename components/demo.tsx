"use client";

import { useLanguage } from '@/context/LanguageContext';

export default function Demo() {
	const { t } = useLanguage();

	return (
		<section className="bg-[#e9eff7] py-10 md:py-12">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
				{/* Heading: slightly smaller and tighter like the image */}
				<h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-3 sm:mb-4 text-[#000000] mb-3">
					{t({ en: 'Do you want to see the demo?', ne: 'डेमो हेर्न चाहनु हुन्छ ?' })}
				</h2>

				{/* Narrow, centered paragraph to match line breaks in image */}
				<p className="mx-auto max-w-[620px] text-xs sm:text-sm md:text-base text-[#374151] mb-6 leading-relaxed">
					{t({
						en: "Hello, we are continuously campaigning to transform you and your municipality into digital. We want to understand the situation and needs of your municipality and show a demo to transform it into a technology-friendly digital municipality.",
						ne: 'नमस्कार, हामी तपाई र तपाईको पालिका डिजिटलमा रूपान्तरणको लागि निरन्तर अभियानमा छौं । हामी तपाईको पालिकाको अवस्था र आवश्यकताहरु बुझेर प्रबिधि मेत्री डिजिटल पालिकाको रूपमा रूपान्तरण गर्न डेमो देखाउन चाहन्छौं ।'
					})}
				</p>

				{/* Compact centered CTA with right arrow */}
				<div className="mx-auto w-fit">
					<a
						href="/contact"
						className="inline-flex items-center gap-3 bg-[#003893] hover:bg-[#002f72] text-white text-sm px-5 py-2 transition"
						aria-label="See demo"
					>
						<span>{t({ en: 'See Demo', ne: 'डेमो हेर्नुहोस्' })}</span>
						<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<path d="M5 12h14" />
							<path d="M12 5l7 7-7 7" />
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
}

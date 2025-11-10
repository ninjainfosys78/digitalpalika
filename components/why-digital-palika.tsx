"use client";

import { useLanguage } from '@/context/LanguageContext';

export default function WhyDigitalPalika() {
	const { t, lang } = useLanguage();

	return (
		<section className="bg-white py-6 sm:py-8 md:py-12">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
				<div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
					<div className="flex-1 md:pr-8">
						<h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-3 sm:mb-4 text-[#000000] text-left">
							{t({ en: 'Why Digital Palika?', ne: 'डिजिटल पालिका किन ?' })}
						</h2>
						<p className="mb-3 sm:mb-4 text-justify text-left text-[#000000] text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
							{t({
								en: 'Digital Palika is a cloud-based mobile and web platform system. It integrates all municipal services and activities in one place, making them available to municipal officials. Services can be obtained from it.',
								ne: 'डिजिटल पालिकामा क्लाउडमा आधारित मोबाइल र वेब (प्लेटफर्म) प्रणाली हो । यसले सबै नगरपालिका सेवाहरू र गतिविधिहरूलाई एक ठाउँमा एकीकृत गर नगरपालिकाको अधिकारीहरूलाई उपलब्ध गराउँदै । यसमा आफ्नो सेवाहरू प्राप्त गर्न सकिन्छ ।'
							})}
						</p>
						<ul className="list-disc pl-5 space-y-2 text-[#000000] text-sm sm:text-base max-w-2xl mx-auto">
							<li className="text-left">
								{t({
									en: 'Municipality (Direct contact services for residents)',
									ne: 'नगरपालिका (पालिकावासीहरूलाई सिधा सम्पर्क सेवा लिन)'
								})}
							</li>
							<li className="text-left">
								{t({
									en: "Provide contact services through the municipality's computerized system",
									ne: 'पालिकाको कम्प्युटराइज्ड सिस्टम मार्फत सम्पर्क सेवा प्रदान गर्न'
								})}
							</li>
							<li className="text-left">
								{t({
									en: "Manage and easily obtain the municipality's investments and employment growth",
									ne: 'पालिकाको लगानी आदि छिटो अनि रोजगारको बृद्धि सजिलै प्राप्त गर्न गराई व्यवस्थापन गर्न'
								})}
							</li>
						</ul>
					</div>

					<div className="flex-1 flex justify-center md:justify-end">
						<img
							src="/WhyPalika.png"
							alt="Why Digital Palika Illustration"
							className="max-w-full h-auto object-contain w-full sm:w-3/4 md:w-2/3 lg:w-[60%]"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

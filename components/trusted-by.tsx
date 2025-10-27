"use client";

interface TrustedByProps {
  language: "en" | "ne";
}

const trustedList = {
  en: [
    "Kathmandu Metropolitan City",
    "Pokhara Metropolitan City",
    "LB Mall & Company",
    "ISRC",
    "Vumi Engineering Consortium",
    "Phonepay",
    "Aakash SMS",
    "Prabhu Bank",
    "Government of Nepal",
  ],
  ne: [
    "काठमाडौं महानगरपालिका",
    "पोखरा महानगरपालिका",
    "एलबी मल्ल एण्ड कम्पनी",
    "आईएसआरसी",
    "भूमि इन्जिनियरिङ कन्सोर्टियम",
    "फोनपे",
    "आकाश एसएमएस",
    "प्रभु बैंक",
    "नेपाल सरकार",
  ],
};

export default function TrustedBy({ language }: TrustedByProps) {
  return (
    <section className="text-ni-paper py-10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <h3 className="text-3xl sm:text-4xl font-bold mb-2 text-left text-black">
          {language === "ne" ? "विश्वास गर्नेहरू" : "Trusted By"}
        </h3>
        <div className="mb-8"></div>
        <div className="flex flex-wrap gap-x-10 gap-y-4 items-center">
          {trustedList[language].map((name) => (
            <span
              key={name}
              className="text-lg md:text-xl font-semibold text-black opacity-80 whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

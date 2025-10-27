"use client"

import { ArrowRight } from "lucide-react"

interface TestimonialsProps {
  language: "en" | "ne"
}

export default function Testimonials({ language }: TestimonialsProps) {
  const content =
    language === "en"
      ? {
          title: "Testimonials",
          testimonials: [
            {
              name: "Ranjish Mishra",
              role: "Information Officer, Ministry of Land Management, Nepal",
              quote:
                "Ninja Infosys works with such determination and great sincerity in the service of software development and website designing. We highly acknowledge their commitment to delivering high-quality solutions and their responsiveness throughout every project phase.",
            },
            {
              name: "Balkrishna Sharma",
              role: "CEO, LB Malla & Company",
              quote:
                "Overall, the Ninja Infosys team is a group of highly motivated and professional individuals. Their mix of expertise and enthusiasm makes for reliable, exciting collaboration. We have been impressed with their technical depth and consistency in execution.",
            },
            {
              name: "Bimala KC",
              role: "Former Minister, Ministry of Land Management",
              quote:
                "Ninja Infosys has made it possible for students to obtain their results directly on their mobile phones via SMS, freeing them from unnecessary hassles. Their innovative solutions are practical and impactful, especially in simplifying public access to information.",
            },
            {
              name: "Shiv Ram Adhikari",
              role: "Province Director",
              quote:
                "I am very happy with the services of Ninja Infosys. I personally liked the website they designed. The main thing is, they are always available when needed and deliver with professionalism and precision.",
            },
          ],
        }
      : {
          title: "प्रशंसापत्र",
          testimonials: [
            {
              name: "रञ्जिश मिश्र",
              role: "सूचना अधिकारी, भूमि व्यवस्था मन्त्रालय, नेपाल",
              quote:
                "निन्जा इन्फोसिसले सफ्टवेयर विकास र वेबसाइट डिजाइन सेवामा दृढता र इमानदारीका साथ काम गर्छ। हामी तिनीहरूको उच्च गुणस्तरको समाधान र प्रत्येक परियोजना चरणमा देखाएको उत्तरदायित्वको उच्च कदर गर्छौं।",
            },
            {
              name: "बलकृष्ण शर्मा",
              role: "सीईओ, एलबी मल्ल एण्ड कम्पनी",
              quote:
                "समग्रमा, निन्जा इन्फोसिसको टोली अत्यन्त प्रेरित र व्यावसायिक छ। तिनीहरूको विशेषज्ञता र उत्साहको संयोजनले भरपर्दो र रोमाञ्चक सहकार्य सम्भव बनाउँछ। हामी तिनीहरूको प्राविधिक गहिराइ र कार्यान्वयनमा निरन्तरताबाट प्रभावित छौं।",
            },
            {
              name: "बिमला केसी",
              role: "पूर्व मन्त्री, भूमि व्यवस्था मन्त्रालय",
              quote:
                "निन्जा इन्फोसिसले विद्यार्थीहरूलाई एसएमएसमार्फत मोबाइलमा नै नतिजा प्राप्त गर्न सक्ने बनाएको छ, जसले अनावश्यक झन्झटबाट मुक्ति दिएको छ। तिनीहरूको नवप्रवर्तनशील समाधानहरू व्यवहारिक र प्रभावकारी छन्, विशेष गरी सार्वजनिक सूचना पहुँचलाई सरल बनाउन।",
            },
            {
              name: "शिव राम अधिकारी",
              role: "प्रदेश निर्देशक",
              quote:
                "म निन्जा इन्फोसिसको सेवाबाट धेरै सन्तुष्ट छु। व्यक्तिगत रूपमा, मलाई तिनीहरूले डिजाइन गरेको वेबसाइट मन पर्यो। मुख्य कुरा, तिनीहरू सधैं आवश्यक पर्दा उपलब्ध छन् र व्यावसायिकता तथा शुद्धताका साथ डेलिभर गर्छन्।",
            },
          ],
        }

  const t = content

  return (
    <section className="bg-[#1e3a8a] text-ni-paper py-16">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <h3 className="text-3xl sm:text-4xl font-bold mb-2 text-left">
          {t.title}
        </h3>
        {/* Removed the <hr />, but kept the gap */}
        <div className="mb-8"></div>
        <div className="grid gap-8 md:grid-cols-2">
          {t.testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-gray-50 border border-gray-200 p-8 flex flex-col"
            >
              <h4 className="text-xl font-semibold mb-1 text-ni-ink">{item.name}</h4>
              <div className="font-medium text-ni-accent mb-2">{item.role}</div>
              <p className="text-ni-ink">{item.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

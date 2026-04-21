"use client";

import React from "react";
import { ArrowRight, Mail, MapPin, Calendar } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import Link from "next/link";

interface GlobalCTAProps {
  onOfficesOpen: () => void;
}

export default function GlobalCTA({ onOfficesOpen }: GlobalCTAProps) {
  const { language } = useLanguage();

  const content =
    language === "en"
      ? {
          title: "Let's Build What's Next. Together.",
          subtitle: "Connect with our experts to turn your strategic intent into resilient infrastructure.",
          actions: [
            {
              icon: Calendar,
              title: "Schedule a Consultation",
              desc: "Discuss your project goals with our lead consultants.",
              cta: "Book now",
              href: "/contact",
              primary: true
            },
            {
              icon: Mail,
              title: "Request a Quote",
              desc: "Get a detailed technical and financial estimate.",
              cta: "Get started",
              href: "/contact",
              primary: false
            },
            {
              icon: MapPin,
              title: "Talk to Our Team",
              desc: "Visit our global offices or speak to a regional lead.",
              cta: "Find a location",
              href: "#",
              primary: false,
              isAction: true
            }
          ]
        }
      : {
          title: "आउनुहोस्, सँगै के अगाडि छ निर्माण गरौं।",
          subtitle: "तपाईंको रणनीतिक इरादालाई लचिलो पूर्वाधारमा परिणत गर्न हाम्रा विशेषज्ञहरूसँग जोड्नुहोस्।",
          actions: [
            {
              icon: Calendar,
              title: "परामर्श तालिका बनाउनुहोस्",
              desc: "हाम्रा प्रमुख परामर्शदाताहरूसँग तपाईंको परियोजना लक्ष्यहरू छलफल गर्नुहोस्।",
              cta: "अहिले बुक गर्नुहोस्",
              href: "/contact",
              primary: true
            },
            {
              icon: Mail,
              title: "उद्धरण अनुरोध गर्नुहोस्",
              desc: "विस्तृत प्राविधिक र आर्थिक अनुमान प्राप्त गर्नुहोस्।",
              cta: "सुरु गर्नुहोस्",
              href: "/contact",
              primary: false
            },
            {
              icon: MapPin,
              title: "हाम्रो टोलीसँग कुरा गर्नुहोस्",
              desc: "हाम्रा विश्वव्यापी कार्यालयहरूमा जानुहोस् वा क्षेत्रीय प्रमुखसँग कुरा गर्नुहोस्।",
              cta: "स्थान खोज्नुहोस्",
              href: "#",
              primary: false,
              isAction: true
            }
          ]
        };

  return (
    <section id="contact" className="bg-[#0b0d12] py-24 border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header Area */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <h2 className="text-[42px] sm:text-[56px] font-heading font-bold text-white leading-[1.1] mb-6">
            {content.title}
          </h2>
          <p className="text-xl text-white/60 leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        {/* 3-Column Interaction Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.actions.map((action, idx) => {
            const Icon = action.icon;
            const Wrapper = action.isAction ? 'button' : Link;
            
            return (
              <div 
                key={idx} 
                className={`p-10 flex flex-col justify-between transition-all duration-300 border ${
                  action.primary 
                    ? 'bg-[#E31B23] border-[#E31B23] text-white shadow-xl shadow-[#E31B23]/10 h-full' 
                    : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                }`}
              >
                <div>
                  <div className={`mb-6 p-3 inline-block ${action.primary ? 'bg-white/20' : 'bg-white/10'}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4">{action.title}</h3>
                  <p className={`mb-10 text-[15px] leading-relaxed ${action.primary ? 'text-white/80' : 'text-white/60'}`}>
                    {action.desc}
                  </p>
                </div>

                {action.isAction ? (
                  <button 
                    onClick={() => action.title.includes("Team") && onOfficesOpen()}
                    className={`inline-flex items-center gap-3 font-bold group cursor-pointer ${action.primary ? 'text-white' : 'text-[#E31B23]'}`}
                  >
                    <span className="underline underline-offset-8 decoration-2">{action.cta}</span>
                    <ArrowRight className="mt-1 transition-transform group-hover:translate-x-2" size={18} />
                  </button>
                ) : (
                  <Link 
                    href={action.href}
                    className={`inline-flex items-center gap-3 font-bold group ${action.primary ? 'text-white' : 'text-[#E31B23]'}`}
                  >
                    <span className="underline underline-offset-8 decoration-2">{action.cta}</span>
                    <ArrowRight className="mt-1 transition-transform group-hover:translate-x-2" size={18} />
                  </Link>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

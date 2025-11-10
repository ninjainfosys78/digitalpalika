"use client";

import { Fragment, useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}

const HomeContent = () => {
  const { t, lang } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Function to handle smooth scrolling down to stats
  const handleScrollToStats = () => {
    const statsSection = document.getElementById('stats');
    if (statsSection) {
      statsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to handle smooth scrolling back to top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTop && window.scrollY > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.scrollY <= 400) {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScrollTop]);

  const modules = [
    { en: 'Digital Citizen', ne: 'डिजिटल नागरिक' },
    { en: 'Office Automation', ne: 'अफिस अटोमेसन' },
    { en: 'Public Transportation System', ne: 'सार्वजनिक यातायात प्रणाली' },
    { en: 'Grievance Portal', ne: 'गुनासो पोर्टल' },
    { en: 'Bank Taxation', ne: 'बैंक ट्याक्सेसन' },
    { en: 'Digital Sign (EPS)', ne: 'डिजिटल साइन (EPS)' },
    { en: 'Government / Public Registration System', ne: 'सरकारी / सार्वजनिक दर्ता प्रणाली' },
    { en: 'Recommendation System', ne: 'सिफारिस प्रणाली' },
    { en: 'Digital Card System', ne: 'डिजिटल कार्ड प्रणाली' },
    { en: 'Lining and Register System', ne: 'लाइनिङ तथा रजिष्टर प्रणाली' },
    { en: 'License (Renewal) System', ne: 'इजाजत (नवीकरण) प्रणाली' },
    { en: 'Project Management System', ne: 'योजना व्यवस्थापन प्रणाली' },
    { en: 'Subsidy Management System', ne: 'अनुदान व्यवस्थापन प्रणाली' },
    { en: 'Inventory System', ne: 'इन्भेन्ट्री प्रणाली' },
    { en: 'Digital Palika GIS', ne: 'डिजिटल पालिका जीआईएस' },
    { en: 'Digital IVR Call System', ne: 'डिजिटल IVR कल सिस्टम' },
    { en: 'Monitoring and Evaluation System', ne: 'अनुगमन तथा मूल्यांकन प्रणाली' },
    { en: 'Municipality Information Portal', ne: 'पालिका सूचना पोर्टल' },
    { en: 'Municipality Accounting Portal', ne: 'पालिका लेखा पोर्टल' },
    { en: 'Integrated Mobile Application', ne: 'एकीकृत मोबाइल एप्लिकेसन' },
  ];

  const clients = [
    { name: { en: 'Gangaramchhal Palika, Rolpa', ne: 'गंगारामचल पालिका, रोल्पा' } },
    { name: { en: 'Kathmandu Metropolitan City, Kathmandu', ne: 'काठमाडौं महानगरपालिका, काठमाडौं' } },
    { name: { en: 'Rohini Rural Municipality, Kapilvastu', ne: 'रोहिणी गाउँपालिका, कपिलवस्तु' } },
    { name: { en: 'Choradi Sub-Metropolitan City, Choradi Ward', ne: 'चोरादी उपमहानगरपालिका, चोरादी वड' } },
    { name: { en: 'Adanchuli Rural Municipality, Hatlodda', ne: 'अदनचुली गाउँपालिका, हाटलोडा' } },
    { name: { en: 'Gorkha Rural Municipality, Syangja, Nepal', ne: 'गोरखा गाउँपालिका, स्याङ्जा, नेपाल' } },
  ];

  return (
    <Fragment>
      {/* Sticky Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#001841] via-[#001841] to-[#001841] text-white min-h-screen flex items-center relative opacity-95 transition-opacity duration-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight ml-0 sm:ml-4 md:ml-16 lg:ml-28">
              {t({ en: 'Digital Municipality (ERP Software)', ne: 'डिजिटल पालिका (ERP Software)' })}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 font-medium text-justify ml-0 sm:ml-4 md:ml-16 lg:ml-28">
              {t({
                en: "Digital Municipality is a system designed to save time and make citizens’ tasks easier. It empowers every local body with information and modern technology, aiming to transform them into technology-enabled and technology-friendly digital municipalities.",
                ne: "समयको बचत र जनताको काम सहज रूपमा सम्पन्न गर्नको लागि र हरेक स्थानीय निकायलाई सूचना तथा आधुनिक प्रविधिको माध्यमबाट सशक्त बनाउँदै प्रविधि युक्त, प्रविधि मैत्री डिजिटल पालिकाको रूपमा रूपान्तरण गर्न परिकल्पना गरिएको एक प्रणाली डिजिटल पालिका हो।"
              })}
            </p>
            <a
              href="/contact"
              className="inline-block bg-white hover:bg-gray-100 text-[#001841] font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-none shadow transition ml-0 sm:ml-4 md:ml-16 lg:ml-28"
            >
              {t({ en: 'Book Demo', ne: 'डेमो बुक गर्नुहोस्' })}
            </a>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img
              src="/ERPDemo.png"
              alt="ERP Demo"
              className="rounded-xl max-w-full h-auto object-contain w-full sm:w-3/4 md:w-2/3 lg:w-1/2"
              style={{ minHeight: "200px", maxHeight: "400px" }}
            />
          </div>
        </div>

        {/* --- SCROLL DOWN ARROW --- */}
        <div className="absolute bottom-12 sm:bottom-20 left-1/2 -translate-x-1/2">
          <button
            onClick={handleScrollToStats}
            className="p-2 sm:p-3 text-white bg-white/20 rounded-full animate-bounce focus:outline-none hover:bg-white/30 transition-colors"
            aria-label="Scroll down"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 sm:h-6 w-5 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </section>

      {/* --- INVISIBLE ANCHOR FOR SMOOTHER SCROLLING --- */}
      <div id="stats" style={{ position: 'relative', top: '-80px' }}></div>

      {/* Stats Section */}
      <section className="bg-white pt-6 sm:pt-8 md:pt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
            <div className="flex flex-col items-center bg-gradient-to-br from-[#001841]/10 to-white p-4 sm:p-6 hover:scale-105 transition">
              <span className="bg-[#001841]/10 text-[#001841] p-3 sm:p-4 mb-2 sm:mb-4">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 13h10M7 17h10M7 9h10M5 7v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2z"/></svg>
              </span>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#001841] mb-1 sm:mb-2">
                {lang === 'ne' ? '७० +' : '70 +'}
              </div>
              <div className="text-gray-600 text-center text-sm sm:text-base">
                {lang === 'ne' ? 'सेवा प्रवाह स्थानीय तह' : 'Service-providing Local Levels'}
              </div>
            </div>
            <div className="flex flex-col items-center bg-gradient-to-br from-[#001841]/10 to-white p-4 sm:p-6 hover:scale-105 transition">
              <span className="bg-[#001841]/10 text-[#001841] p-3 sm:p-4 mb-2 sm:mb-4">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 110-8 4 4 0 010 8zm6 8v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
              </span>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#001841] mb-1 sm:mb-2">
                {lang === 'ne' ? '८,००,००० +' : '800,000 +'}
              </div>
              <div className="text-gray-600 text-center text-sm sm:text-base">
                {lang === 'ne' ? 'लाभान्वित नागरिक' : 'Beneficiary Citizens'}
              </div>
            </div>
            <div className="flex flex-col items-center bg-gradient-to-br from-[#001841]/10 to-white p-4 sm:p-6 hover:scale-105 transition">
              <span className="bg-[#001841]/10 text-[#001841] p-3 sm:p-4 mb-2 sm:mb-4">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 17v-2a4 4 0 018 0v2M16 11a4 4 0 110-8 4 4 0 010 8z"/></svg>
              </span>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#001841] mb-1 sm:mb-2">
                {lang === 'ne' ? '२५०० +' : '2500 +'}
              </div>
              <div className="text-gray-600 text-center text-sm sm:text-base">
                {lang === 'ne' ? 'लाभान्वित प्रतिनिधिहरु' : 'Beneficiary Representatives'}
              </div>
            </div>
            <div className="flex flex-col items-center bg-gradient-to-br from-[#001841]/10 to-white p-4 sm:p-6 hover:scale-105 transition">
              <span className="bg-[#001841]/10 text-[#001841] p-3 sm:p-4 mb-2 sm:mb-4">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-4a5 5 0 100-10 5 5 0 000 10z"/></svg>
              </span>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#001841] mb-1 sm:mb-2">
                {lang === 'ne' ? '३०० +' : '300 +'}
              </div>
              <div className="text-gray-600 text-center text-sm sm:text-base">
                {lang === 'ne' ? 'खुसी सेवाग्राहीहरु' : 'Happy Service Recipients'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section as a Card */}
      <section className="w-full pb-6 sm:pb-8 md:pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#001841]/5 border border-[#001841]/10 w-full max-w-xs sm:max-w-md md:max-w-6xl mx-auto p-4 sm:p-6 md:p-8" style={{ borderRadius: 0 }}>
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#001841] mb-2 hover:scale-105 transition-transform duration-300">
                {lang === 'ne' ? 'विशेषताहरु' : 'Features'}
              </h2>
              <p className="text-[#000000] max-w-xs sm:max-w-md md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
                {lang === 'ne'
                  ? 'डिजिटल पालिका नागरिक, स्थानीय तह र प्रतिनिधिहरुलाई एकीकृत प्रणाली मार्फत छिटो र प्रभावकारी रुपमा नियम, व्यवस्थापन र डेलिभर गर्न सकिने प्रणाली हो।'
                  : 'Digital Municipality is a system for citizens, local levels, and representatives to deliver rules, management, and services quickly and effectively through an integrated platform.'}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              <div className="flex items-start bg-white border border-[#001841]/10 p-2 sm:p-3 md:p-4 hover:scale-105 transition-transform duration-300" style={{ borderRadius: 0 }}>
                <span className="bg-[#001841]/5 text-[#001841] p-2 sm:p-3 flex items-center justify-center mt-1">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>
                </span>
                <span className="text-[#000000] text-justify ml-2 sm:ml-3 text-sm sm:text-base">
                  {lang === 'ne'
                    ? 'एकीकृत मोबाइल र वेबमा आधारित प्रणाली'
                    : 'Integrated mobile and web-based system'}
                </span>
              </div>
              <div className="flex items-start bg-white border border-[#001841]/10 p-2 sm:p-3 md:p-4 hover:scale-105 transition-transform duration-300" style={{ borderRadius: 0 }}>
                <span className="bg-[#001841]/5 text-[#001841] p-2 sm:p-3 flex items-center justify-center mt-1">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20v-6M6 12l6-6 6 6"/></svg>
                </span>
                <span className="text-[#000000] text-justify ml-2 sm:ml-3 text-sm sm:text-base">
                  {lang === 'ne'
                    ? 'नागरिकका सेवा र जानकारीको अनलाइनमा पहुँच'
                    : 'Online access to citizen services and information'}
                </span>
              </div>
              <div className="flex items-start bg-white border border-[#001841]/10 p-2 sm:p-3 md:p-4 hover:scale-105 transition-transform duration-300" style={{ borderRadius: 0 }}>
                <span className="bg-[#001841]/5 text-[#001841] p-2 sm:p-3 flex items-center justify-center mt-1">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                </span>
                <span className="text-[#000000] text-justify ml-2 sm:ml-3 text-sm sm:text-base">
                  {lang === 'ne'
                    ? 'पालिकाले प्रवाह गर्ने सेवाहरुलाई अनलाइनमार्फत आवेदन लिने, दर्ता गर्ने र प्रमाणपत्र प्रदान'
                    : 'Online application, registration, and certificate issuance for municipal services'}
                </span>
              </div>
              <div className="flex items-start bg-white border border-[#001841]/10 p-2 sm:p-3 md:p-4 hover:scale-105 transition-transform duration-300" style={{ borderRadius: 0 }}>
                <span className="bg-[#001841]/5 text-[#001841] p-2 sm:p-3 flex items-center justify-center mt-1">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 9h8M8 13h8"/></svg>
                </span>
                <span className="text-[#000000] text-justify ml-2 sm:ml-3 text-sm sm:text-base">
                  {lang === 'ne'
                    ? 'व्यक्तिगत, व्यवसाय र संस्थागत जानकारी'
                    : 'Personal, business, and institutional information'}
                </span>
              </div>
              <div className="flex items-start bg-white border border-[#001841]/10 p-2 sm:p-3 md:p-4 hover:scale-105 transition-transform duration-300" style={{ borderRadius: 0 }}>
                <span className="bg-[#001841]/5 text-[#001841] p-2 sm:p-3 flex items-center justify-center mt-1">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20v-6M6 12l6-6 6 6"/></svg>
                </span>
                <span className="text-[#000000] text-justify ml-2 sm:ml-3 text-sm sm:text-base">
                  {lang === 'ne'
                    ? 'पालिकाको दैनिक गतिविधिहरुमा नागरिकको सक्रिय संलग्नता'
                    : 'Active citizen participation in daily municipal activities'}
                </span>
              </div>
              <div className="flex items-start bg-white border border-[#001841]/10 p-2 sm:p-3 md:p-4 hover:scale-105 transition-transform duration-300" style={{ borderRadius: 0 }}>
                <span className="bg-[#001841]/5 text-[#001841] p-2 sm:p-3 flex items-center justify-center mt-1">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>
                </span>
                <span className="text-[#000000] text-justify ml-2 sm:ml-3 text-sm sm:text-base">
                  {lang === 'ne'
                    ? 'सेवाग्राहीलाई अडियो, भिडियो मार्फत जानकारी'
                    : 'Information for service recipients via audio and video'}
                </span>
              </div>
              <div className="flex items-start bg-white border border-[#001841]/10 p-2 sm:p-3 md:p-4 hover:scale-105 transition-transform duration-300" style={{ borderRadius: 0 }}>
                <span className="bg-[#001841]/5 text-[#001841] p-2 sm:p-3 flex items-center justify-center mt-1">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                </span>
                <span className="text-[#000000] text-justify ml-2 sm:ml-3 text-sm sm:text-base">
                  {lang === 'ne'
                    ? 'पालिकाको जनप्रतिनिधि, कर्मचारी र सेवाग्राहीको समयको बचत'
                    : 'Time-saving for representatives, staff, and service recipients'}
                </span>
              </div>
              <div className="flex items-start bg-white border border-[#001841]/10 p-2 sm:p-3 md:p-4 hover:scale-105 transition-transform duration-300" style={{ borderRadius: 0 }}>
                <span className="bg-[#001841]/5 text-[#001841] p-2 sm:p-3 flex items-center justify-center mt-1">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 9h8M8 13h8"/></svg>
                </span>
                <span className="text-[#000000] text-justify ml-2 sm:ml-3 text-sm sm:text-base">
                  {lang === 'ne'
                    ? 'पालिकालाई एकीकृत सफ्टवेयरमा आबद्ध गरी सूचना, तथ्यांक, सेवाप्रवाहमा सजज'
                    : 'Integrated software for easy access to information, data, and service delivery'}
                </span>
              </div>
              <div className="flex items-start bg-white border border-[#001841]/10 p-2 sm:p-3 md:p-4 hover:scale-105 transition-transform duration-300" style={{ borderRadius: 0 }}>
                <span className="bg-[#001841]/5 text-[#001841] p-2 sm:p-3 flex items-center justify-center mt-1">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <text x="12" y="16" textAnchor="middle" fontSize="12" fill="currentColor">i</text>
                  </svg>
                </span>
                <span className="text-[#000000] text-justify ml-2 sm:ml-3 text-sm sm:text-base">
                  {lang === 'ne'
                    ? 'पालिकाको दैनिक कार्यसम्पादन गर्न सहयोग'
                    : 'Support for daily municipal operations'}
                </span>
              </div>
            </div>

            <div className="text-center mt-4 sm:mt-6">
              <a
                href="/features"
                className="inline-block bg-[#001841] hover:bg-[#001841]/90 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 shadow transition"
              >
                {t({ en: 'See More Details', ne: 'थप विवरण हेर्नुहोस्' })}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="bg-[#001841] py-6 sm:py-8 md:py-12 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 md:mb-8 text-center">
            {lang === 'ne' ? 'डिजिटल पालिकामा रहेका प्रणालीहरु' : 'Modules in Digital Palika'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-xs sm:max-w-md md:max-w-6xl mx-auto">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-white p-2 sm:p-3 md:p-4 rounded-none flex flex-col items-center shadow hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-gray-200 text-gray-500 p-2 sm:p-3 rounded-full mb-1 sm:mb-2">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <p className="text-[#001841] font-semibold text-center text-sm sm:text-base">
                  {lang === 'ne' ? module.ne : module.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Digital Palika Section */}
      <section className="bg-white py-6 sm:py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-xs sm:max-w-md md:max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-3 sm:mb-4 text-[#001841]">
                {t({ en: 'Why Digital Palika?', ne: 'डिजिटल पालिका किन ?' })}
              </h2>
              <p className="mb-3 sm:mb-4 text-justify text-[#001841] text-sm sm:text-base md:text-lg">
                {t({
                  en: 'Digital Palika is a cloud-based mobile and web platform system. It integrates all municipal services and activities in one place, making them available to municipal officials. Services can be obtained from it.',
                  ne: 'डिजिटल पालिकामा क्लाउडमा आधारित मोबाइल र वेब (प्लेटफर्म) प्रणाली हो । यसले सबै नगरपालिका सेवाहरू र गतिविधिहरूलाई एक ठाउँमा एकीकृत गर नगरपालिकाको अधिकारीहरूलाई उपलब्ध गराउँदै । यसमा आफ्नो सेवाहरू प्राप्त गर्न सकिन्छ ।'
                })}
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#001841] text-sm sm:text-base">
                <li>
                  {t({
                    en: 'Municipality (Direct contact services for residents)',
                    ne: 'नगरपालिका (पालिकावासीहरूलाई सिधा सम्पर्क सेवा लिन)'
                  })}
                </li>
                <li>
                  {t({
                    en: 'Provide contact services through the municipality\'s computerized system',
                    ne: 'पालिकाको कम्प्युटराइज्ड सिस्टम मार्फत सम्पर्क सेवा प्रदान गर्न'
                  })}
                </li>
                <li>
                  {t({
                    en: 'Manage and easily obtain the municipality\'s investments and employment growth',
                    ne: 'पालिकाको लगानी आदि छिटो अनि रोजगारको बृद्धि सजिलै प्राप्त गर्न गराई व्यवस्थापन गर्न'
                  })}
                </li>
              </ul>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <img
                src="/WhyPalika.png"
                alt="Why Digital Palika Illustration"
                className="max-w-full h-auto object-contain w-full sm:w-3/4 md:w-2/3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="bg-[#001841] py-6 sm:py-8 md:py-12 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-xs sm:max-w-md md:max-w-6xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-3 sm:mb-4">
            {t({ en: 'Do you want to see the demo?', ne: 'डेमो हेर्न चाहनु हुन्छ ?' })}
          </h2>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-2xl mx-auto text-justify">
            {t({
              en: 'Hello, we are continuously campaigning to transform you and your municipality into digital. We want to understand the situation and needs of your municipality and show a demo to transform it into a technology-friendly digital municipality.',
              ne: 'नमस्कार, हामी तपाई र तपाईको पालिका डिजिटलमा रूपान्तरणको लागि निरन्तर अभियानमा छौं । हामी तपाईको पालिकाको अवस्था र आवश्यकताहरु बुझेर प्रबिधि मेत्री डिजिटल पालिकाको रूपमा रूपान्तरण गर्न डेमो देखाउन चाहन्छौं ।'
            })}
          </p>
          <a
            href="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-[#001841] font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-none shadow transition"
          >
            {t({ en: 'See Demo', ne: 'डेमो हेर्नुहोस्' })}
          </a>
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-white py-6 sm:py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-6 text-[#001841] text-center">
              {t({ en: 'Our Clients', ne: 'हाम्रा ग्राहकहरू' })}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-gray-100 border border-gray-200 p-4 hover:scale-105 transition-transform"
                >
                  <img
                    src="/emblemofNepal.png"
                    alt={`${lang === 'ne' ? client.name.ne : client.name.en} Emblem`}
                    className="max-w-full h-auto object-contain w-16 mb-2"
                  />
                  <p className="text-[#001841] font-semibold text-center text-sm sm:text-base">
                    {lang === 'ne' ? client.name.ne : client.name.en}
                  </p>
                </div>
              ))}
            </div>
            <a
              href="/clients"
              className="inline-block bg-[#001841] hover:bg-[#001841]/90 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 transition"
            >
              {t({ en: 'See More Clients', ne: 'थप विवरण हेर्नुहोस्' })}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* --- NEW SCROLL TO TOP BUTTON --- */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-4 sm:bottom-6 md:bottom-10 right-4 sm:right-6 md:right-10 p-2 sm:p-3 rounded-full bg-white text-[#001841] shadow-lg hover:bg-gray-100 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </Fragment>
  );
};
"use client";


import { Fragment } from "react";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPage() {
  const { t, lang } = useLanguage();
  return (
    <Fragment>
      <Header />
      <main className="bg-white min-h-screen pb-12">
        <div className="max-w-4xl mx-auto px-4 pt-12 text-center">
          <h2 className="text-xl font-bold text-[#003893] mb-2">{t({ en: "Privacy Policy", ne: "गोपनीयता नीति" })}</h2>
          <h1 className="text-3xl sm:text-4xl font-normal text-black mb-4 leading-snug">
            {t({
              en: "We believe privacy should be simple, transparent, and centered around you. Here's exactly how we handle your information.",
              ne: "हामी विश्वास गर्छौं कि गोपनीयता सरल, पारदर्शी र तपाईंको वरिपरि केन्द्रित हुनुपर्छ। यहाँ हामी तपाईंको जानकारीलाई कसरी व्यवस्थापन गर्छौं भन्ने कुरा छ।"
            })}
          </h1>
          <div className="mx-auto w-32 h-0.5 bg-[#003893] rounded mb-8" />
        </div>

        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="flex items-center mb-4">
            <div className="bg-gray-100 rounded p-2 mr-4">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <rect x="6" y="10" width="12" height="8" rx="2" fill="#222" />
                <rect x="8" y="6" width="8" height="4" rx="2" fill="#222" />
              </svg>
            </div>
            <span className="text-2xl font-bold">{t({ en: "What We Collect", ne: "हामी के संकलन गर्छौं" })}</span>
          </div>
          <div className="bg-[#e9edf5] rounded-md mb-4 p-4 border-l-4 border-[#003893]">
            <div className="font-semibold text-[#003893] mb-1 text-sm">{t({ en: "Simply Put", ne: "सजिलो भाषामा" })}</div>
            <div className="text-[#2563eb] text-base">
              {t({
                en: "We only collect the absolute essentials needed to provide our service. No creeping, no hidden trackers.",
                ne: "हामी सेवा प्रदान गर्न आवश्यक अत्यावश्यक मात्र जानकारी संकलन गर्छौं। कुनै लुकेका ट्र्याकरहरू छैनन्।"
              })}
            </div>
          </div>
          <div className="text-gray-700 mb-2">
            {t({
              en: "When you use our services, we collect information that you provide directly to us. This includes:",
              ne: "जब तपाईं हाम्रो सेवा प्रयोग गर्नुहुन्छ, हामी तपाईंले सिधै प्रदान गर्नुभएको जानकारी संकलन गर्छौं। यसमा समावेश छन्:"
            })}
          </div>
          <ul className="list-disc pl-8 text-gray-700 mb-2">
            <li>
              <span className="font-semibold">{t({ en: "Account Information:", ne: "खाता जानकारी:" })} </span>
              {t({ en: "Your name, email address, and password hash.", ne: "तपाईंको नाम, इमेल ठेगाना, र पासवर्ड ह्यास।" })}
            </li>
            <li>
              <span className="font-semibold">{t({ en: "Usage Data:", ne: "प्रयोग डेटा:" })} </span>
              {t({ en: "Information about how you interact with our application to help us improve features.", ne: "हामीलाई सुविधाहरू सुधार गर्न मद्दत गर्न तपाईंले हाम्रो एप्लिकेसनसँग कसरी अन्तरक्रिया गर्नुहुन्छ भन्ने जानकारी।" })}
            </li>
            <li>
              <span className="font-semibold">{t({ en: "Device Information:", ne: "डिभाइस जानकारी:" })} </span>
              {t({ en: "Basic details about the device and browser you use to access our services.", ne: "तपाईंले हाम्रो सेवा पहुँच गर्न प्रयोग गर्नुभएको डिभाइस र ब्राउजरको आधारभूत विवरणहरू।" })}
            </li>
          </ul>
          <div className="text-gray-700">
            {t({
              en: "We do not collect sensitive personal information such as health data, political opinions, or religious beliefs.",
              ne: "हामी संवेदनशील व्यक्तिगत जानकारी जस्तै स्वास्थ्य डेटा, राजनीतिक विचार, वा धार्मिक विश्वासहरू संकलन गर्दैनौं।"
            })}
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="flex items-center mb-4">
            <div className="bg-gray-100 rounded p-2 mr-4">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="#222" strokeWidth="2" fill="none" />
                <circle cx="12" cy="12" r="3" fill="#222" />
              </svg>
            </div>
            <span className="text-2xl font-bold">{t({ en: "How We Use Your Data", ne: "हामी तपाईंको डेटा कसरी प्रयोग गर्छौं" })}</span>
          </div>
          <div className="bg-[#e9edf5] rounded-md mb-4 p-4 border-l-4 border-[#003893]">
            <div className="font-semibold text-[#003893] mb-1 text-sm">{t({ en: "Simply Put", ne: "सजिलो भाषामा" })}</div>
            <div className="text-[#2563eb] text-base">
              {t({
                en: "Your data is used solely to make the app work for you. We don't sell it to advertisers. Ever.",
                ne: "तपाईंको डेटा केवल तपाईंको लागि एप काम गर्न प्रयोग गरिन्छ। हामी यसलाई विज्ञापनदातालाई कहिल्यै बेच्दैनौं।"
              })}
            </div>
          </div>
          <div className="text-gray-700 mb-2">
            {t({
              en: "We use the information we collect for the following purposes:",
              ne: "हामीले संकलन गरेको जानकारी निम्न उद्देश्यका लागि प्रयोग गर्छौं:"
            })}
          </div>
          <ul className="list-disc pl-8 text-gray-700 space-y-2">
            <li>{t({ en: "To provide, maintain, and improve our services.", ne: "हाम्रो सेवा प्रदान, कायम राख्न र सुधार गर्न।" })}</li>
            <li>{t({ en: "To process transactions and send related information, including confirmations and invoices.", ne: "कारोबार प्रक्रिया गर्न र सम्बन्धित जानकारी पठाउन, जस्तै पुष्टि र बिलहरू।" })}</li>
            <li>{t({ en: "To send you technical notices, updates, security alerts, and support messages.", ne: "तपाईंलाई प्राविधिक सूचना, अद्यावधिक, सुरक्षा सतर्कता, र सहयोग सन्देशहरू पठाउन।" })}</li>
            <li>{t({ en: "To respond to your comments, questions, and requests.", ne: "तपाईंका टिप्पणी, प्रश्न, र अनुरोधहरूमा प्रतिक्रिया दिन।" })}</li>
          </ul>
        </section>

        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="flex items-center mb-4">
            <div className="bg-gray-100 rounded p-2 mr-4">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <rect x="6" y="4" width="12" height="16" rx="6" stroke="#222" strokeWidth="2" fill="none" />
                <path d="M12 8v4l2 2" stroke="#222" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <span className="text-2xl font-bold">{t({ en: "Your Rights", ne: "तपाईंका अधिकारहरू" })}</span>
          </div>
          <div className="bg-[#e9edf5] rounded-md mb-4 p-4 border-l-4 border-[#003893]">
            <div className="font-semibold text-[#003893] mb-1 text-sm">{t({ en: "Simply Put", ne: "सजिलो भाषामा" })}</div>
            <div className="text-[#2563eb] text-base">
              {t({
                en: "It's your data. You can ask to see it, fix it, or delete it whenever you want.",
                ne: "यो तपाईंको डेटा हो। तपाईं जब चाहनुहुन्छ हेर्न, सच्याउन वा मेटाउन अनुरोध गर्न सक्नुहुन्छ।"
              })}
            </div>
          </div>
          <div className="text-gray-700 mb-4">
            {t({
              en: "Depending on your location, you may have certain rights regarding your personal information:",
              ne: "तपाईंको स्थान अनुसार, तपाईंलाई व्यक्तिगत जानकारी सम्बन्धी केही अधिकारहरू हुन सक्छन्:"
            })}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-100 rounded p-4">
              <div className="font-bold mb-1">{t({ en: "Access", ne: "पहुँच" })}</div>
              <div className="text-gray-700 text-sm">{t({ en: "Request a copy of the personal data we hold about you.", ne: "हामीसँग रहेको तपाईंको व्यक्तिगत डेटा प्रतिलिपि अनुरोध गर्नुहोस्।" })}</div>
            </div>
            <div className="bg-gray-100 rounded p-4">
              <div className="font-bold mb-1">{t({ en: "Deletion", ne: "मेटाउने" })}</div>
              <div className="text-gray-700 text-sm">{t({ en: "Ask us to delete your personal data from our systems.", ne: "हाम्रो प्रणालीबाट तपाईंको व्यक्तिगत डेटा मेटाउन अनुरोध गर्नुहोस्।" })}</div>
            </div>
            <div className="bg-gray-100 rounded p-4">
              <div className="font-bold mb-1">{t({ en: "Correction", ne: "सुधार" })}</div>
              <div className="text-gray-700 text-sm">{t({ en: "Update or correct inaccuracies in your personal data.", ne: "तपाईंको व्यक्तिगत डेटामा भएका त्रुटिहरू सुधार वा अद्यावधिक गर्नुहोस्।" })}</div>
            </div>
            <div className="bg-gray-100 rounded p-4">
              <div className="font-bold mb-1">{t({ en: "Portability", ne: "पोर्टेबिलिटी" })}</div>
              <div className="text-gray-700 text-sm">{t({ en: "Receive your data in a structured, machine-readable format.", ne: "तपाईंको डेटा संरचित, मेसिन-पढ्न मिल्ने ढाँचामा प्राप्त गर्नुहोस्।" })}</div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="flex items-center mb-4">
            <div className="bg-gray-100 rounded p-2 mr-4">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="#222" strokeWidth="2" fill="none" />
                <circle cx="9" cy="10" r="1" fill="#222" />
                <circle cx="15" cy="14" r="1" fill="#222" />
                <circle cx="12" cy="16" r="1" fill="#222" />
              </svg>
            </div>
            <span className="text-2xl font-bold">{t({ en: "Cookies & Tracking", ne: "कुकीहरू र ट्र्याकिङ" })}</span>
          </div>
          <div className="bg-[#e9edf5] rounded-md mb-4 p-4 border-l-4 border-[#003893]">
            <div className="font-semibold text-[#003893] mb-1 text-sm">{t({ en: "Simply Put", ne: "सजिलो भाषामा" })}</div>
            <div className="text-[#2563eb] text-base">
              {t({
                en: "We use cookies to keep you logged in and remember your preferences. You can turn them off if you like.",
                ne: "हामी तपाईंलाई लगइन राख्न र तपाईंको प्राथमिकता सम्झन कुकीहरू प्रयोग गर्छौं। तपाईं चाहनुहुन्छ भने तिनीहरू बन्द गर्न सक्नुहुन्छ।"
              })}
            </div>
          </div>
          <div className="text-gray-700 mb-2">
            {t({
              en: "We use cookies and similar tracking technologies to track the activity on our service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.",
              ne: "हामी हाम्रो सेवामा गतिविधि ट्र्याक गर्न र केही जानकारी राख्न कुकीहरू र यस्तै ट्र्याकिङ प्रविधिहरू प्रयोग गर्छौं। कुकीहरू सानो डेटा फाइलहरू हुन् जसमा अनामिक अद्वितीय पहिचानकर्ता हुन सक्छ।"
            })}
          </div>
          <div className="text-gray-700">
            {t({
              en: "You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.",
              ne: "तपाईं आफ्नो ब्राउजरलाई सबै कुकीहरू अस्वीकार गर्न वा कुकी पठाउँदा सूचित गर्न निर्देशन दिन सक्नुहुन्छ। तर, यदि तपाईंले कुकीहरू स्वीकार गर्नुभएन भने, तपाईंले हाम्रो सेवाका केही भागहरू प्रयोग गर्न सक्नुहुन्न।"
            })}
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="flex items-center mb-4">
            <div className="bg-gray-100 rounded p-2 mr-4">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <rect x="4" y="6" width="16" height="12" rx="2" fill="#222" />
                <path d="M4 6l8 7 8-7" stroke="#fff" strokeWidth="2" />
              </svg>
            </div>
            <span className="text-2xl font-bold">{t({ en: "Contact Us", ne: "सम्पर्क गर्नुहोस्" })}</span>
          </div>
          <div className="bg-[#e9edf5] rounded-md mb-4 p-4 border-l-4 border-[#003893]">
            <div className="font-semibold text-[#003893] mb-1 text-sm">{t({ en: "Simply Put", ne: "सजिलो भाषामा" })}</div>
            <div className="text-[#2563eb] text-base">
              {t({
                en: "Got questions? We're actually human and we'd love to help clarify anything.",
                ne: "प्रश्नहरू छन्? हामी साँच्चिकै मानव हौं र तपाईंलाई स्पष्ट पार्न मद्दत गर्न चाहन्छौं।"
              })}
            </div>
          </div>
          <div className="text-gray-700 mb-2">
            {t({
              en: "If you have any questions about this Privacy Policy, please contact us:",
              ne: "यदि तपाईंलाई यस गोपनीयता नीति सम्बन्धी कुनै प्रश्न छ भने, कृपया हामीलाई सम्पर्क गर्नुहोस्:"
            })}
          </div>
          <div className="flex items-center gap-3 mt-2">
            <div className="bg-gray-100 rounded p-2">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <rect x="4" y="6" width="16" height="12" rx="2" fill="#222" />
                <path d="M4 6l8 7 8-7" stroke="#fff" strokeWidth="2" />
              </svg>
            </div>
            <span className="text-base font-medium text-black">info@ninjainfosys.com</span>
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}
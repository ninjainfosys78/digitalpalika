"use client";

import { Fragment } from "react";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { useLanguage } from "@/context/LanguageContext";

export default function TermsPage() {
    const { t, lang } = useLanguage();

    return (
        <Fragment>
            <Header />
            <main className="bg-white min-h-screen pt-10">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="text-center mb-10">
                        <span className="block font-bold text-lg mb-2 text-[#003893]">
                            {t({
                                en: "Terms of Service",
                                ne: "सेवा सर्तहरू"
                            })}
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-normal text-black mb-4 leading-snug">
                            {t({
                                en: "The ground rules for using our platform. We've tried to keep the legalese to a minimum.",
                                ne: "हाम्रो प्लेटफर्म प्रयोग गर्नका लागि आधारभूत नियमहरू। हामीले कानुनी भाषालाई न्यूनतम राख्न प्रयास गरेका छौं।"
                            })}
                        </h2>
                        <div className="mx-auto w-32 h-0.5 bg-[#003893] rounded" />
                    </div>

                    <section className="mb-10">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="bg-gray-100 rounded p-2">
                                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                                    <rect x="6" y="10" width="12" height="8" rx="2" fill="#222" />
                                    <rect x="8" y="6" width="8" height="4" rx="2" fill="#222" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold">
                                {t({
                                    en: "Account Terms",
                                    ne: "खाता सर्तहरू"
                                })}
                            </span>
                        </div>
                        <div className="bg-[#e9edf5] rounded-md mb-4 p-4 border-l-4 border-[#003893]">
                            <div className="font-semibold text-[#003893] mb-1 text-sm">
                                {t({ en: "Simply Put", ne: "सजिलो भाषामा" })}
                            </div>
                            <div className="text-[#2563eb] text-base">
                                {t({
                                    en: "You're responsible for your account security. Please don't share your password with the entire internet.",
                                    ne: "तपाईं आफ्नो खाताको सुरक्षाको लागि जिम्मेवार हुनुहुन्छ। कृपया आफ्नो पासवर्ड इन्टरनेटमा सबैसँग साझा नगर्नुहोस्।"
                                })}
                            </div>
                        </div>
                        <div className="text-gray-700 mb-2">
                            {t({
                                en: "To access certain features of the Service, you must register for an account. When you register, you agree to provide accurate, current, and complete information.",
                                ne: "सेवाका केही सुविधाहरू पहुँच गर्न, तपाईंले खाता दर्ता गर्नुपर्छ। दर्ता गर्दा, तपाईंले सही, अद्यावधिक, र पूर्ण जानकारी दिन सहमत हुनुहुन्छ।"
                            })}
                        </div>
                        <div className="text-gray-700">
                            {t({
                                en: "You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. We encourage you to use \"strong\" passwords (passwords that use a combination of upper and lower case letters, numbers and symbols) with your account.",
                                ne: "सेवा पहुँच गर्न प्रयोग गरिने पासवर्डको सुरक्षाको जिम्मेवारी तपाईंको हो। तपाईंको पासवर्ड अन्तर्गत गरिने कुनै पनि गतिविधि वा कार्यको जिम्मेवारी पनि तपाईंको हो। हामी तपाईंलाई आफ्नो खातामा \"बलियो\" पासवर्ड (ठूलो र सानो अक्षर, अंक र चिन्हहरूको संयोजन) प्रयोग गर्न प्रोत्साहित गर्छौं।"
                            })}
                        </div>
                    </section>

                    <section className="mb-10">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="bg-gray-100 rounded p-2">
                                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10" stroke="#222" strokeWidth="2" fill="none" />
                                    <path d="M9 12l2 2 4-4" stroke="#222" strokeWidth="2" fill="none" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold">
                                {t({
                                    en: "Acceptable Use",
                                    ne: "स्वीकार्य प्रयोग"
                                })}
                            </span>
                        </div>
                        <div className="bg-[#e9edf5] rounded-md mb-4 p-4 border-l-4 border-[#003893]">
                            <div className="font-semibold text-[#003893] mb-1 text-sm">
                                {t({ en: "Simply Put", ne: "सजिलो भाषामा" })}
                            </div>
                            <div className="text-[#2563eb] text-base">
                                {t({
                                    en: "Be nice. Don't do illegal things, don't spam people, and don't try to break our site.",
                                    ne: "शिष्ट हुनुहोस्। गैरकानुनी कार्य नगर्नुहोस्, मानिसहरूलाई स्प्याम नगर्नुहोस्, र हाम्रो साइट बिगार्ने प्रयास नगर्नुहोस्।"
                                })}
                            </div>
                        </div>
                        <div className="text-gray-700 mb-2">
                            {t({
                                en: "You agree not to engage in any of the following prohibited activities:",
                                ne: "तपाईंले निम्न प्रतिबन्धित गतिविधिहरूमा संलग्न नहुने सहमति दिनुहुन्छ:"
                            })}
                        </div>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>{t({ en: "Copying, distributing, or disclosing any part of the Service in any medium.", ne: "सेवाको कुनै पनि भाग कुनै पनि माध्यममा प्रतिलिपि, वितरण वा खुलासा नगर्नुहोस्।" })}</li>
                            <li>{t({ en: "Using any automated system, including 'robots,' 'spiders,' 'offline readers,' etc.", ne: "कुनै पनि स्वचालित प्रणाली (जस्तै 'रोबोट', 'स्पाइडर', 'अफलाइन रिडर' आदि) प्रयोग नगर्नुहोस्।" })}</li>
                            <li>{t({ en: "Transmitting spam, chain letters, or other unsolicited email.", ne: "स्प्याम, चेन पत्र वा अन्य अनावश्यक इमेल नपठाउनुहोस्।" })}</li>
                            <li>{t({ en: "Attempting to interfere with, compromise the system integrity or security.", ne: "प्रणालीको अखण्डता वा सुरक्षामा हस्तक्षेप गर्ने प्रयास नगर्नुहोस्।" })}</li>
                            <li>{t({ en: "Taking any action that imposes, or may impose at our sole discretion an unreasonable or disproportionately large load on our infrastructure.", ne: "हाम्रो पूर्वाधारमा अनुपयुक्त वा अत्यधिक भार पर्ने कुनै पनि कार्य नगर्नुहोस्।" })}</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="bg-gray-100 rounded p-2">
                                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10" stroke="#222" strokeWidth="2" fill="none" />
                                    <text x="12" y="16" textAnchor="middle" fontSize="16" fill="#222">!</text>
                                </svg>
                            </div>
                            <span className="text-xl font-bold">
                                {t({
                                    en: "Liability & Disclaimers",
                                    ne: "दायित्व र अस्वीकरणहरू"
                                })}
                            </span>
                        </div>
                        <div className="bg-[#e9edf5] rounded-md mb-4 p-4 border-l-4 border-[#003893]">
                            <div className="font-semibold text-[#003893] mb-1 text-sm">
                                {t({ en: "Simply Put", ne: "सजिलो भाषामा" })}
                            </div>
                            <div className="text-[#2563eb] text-base">
                                {t({
                                    en: "We do our best to keep things running perfectly, but technology isn't perfect. We provide the service 'as is'.",
                                    ne: "हामी सबै कुरा राम्रोसँग चलाउन प्रयास गर्छौं, तर प्रविधि पूर्ण छैन। सेवा 'जस्ताको तस्तै' प्रदान गरिन्छ।"
                                })}
                            </div>
                        </div>
                        <div className="text-gray-700 mb-2">
                            {t({
                                en: "The Service is provided on an \"AS IS\" and \"AS AVAILABLE\" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.",
                                ne: "सेवा \"जस्ताको तस्तै\" र \"उपलब्ध भए अनुसार\" आधारमा प्रदान गरिन्छ। सेवा कुनै पनि प्रकारको ग्यारेन्टी बिना प्रदान गरिन्छ, चाहे स्पष्ट होस् वा अप्रत्यक्ष, जसमा व्यापारयोग्यता, विशेष उद्देश्यका लागि उपयुक्तता, गैर-उल्लंघन वा प्रदर्शनको आधार समावेश छन्।"
                            })}
                        </div>
                        <div className="text-gray-700">
                            {t({
                                en: "We do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.",
                                ne: "हामी ग्यारेन्टी गर्दैनौं कि: (a) सेवा निरन्तर, सुरक्षित वा कुनै विशेष समय वा स्थानमा उपलब्ध हुनेछ; (b) कुनै पनि त्रुटि वा दोषहरू सुधार गरिनेछ; (c) सेवा भाइरस वा अन्य हानिकारक तत्वहरूबाट मुक्त हुनेछ; वा (d) सेवाको प्रयोगबाट प्राप्त परिणामहरू तपाईंको आवश्यकताहरू पूरा गर्नेछन्।"
                            })}
                        </div>
                    </section>

                    <section className="mb-10">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="bg-gray-100 rounded p-2">
                                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                                    <rect x="6" y="10" width="20" height="8" rx="2" fill="#222" />
                                    <rect x="10" y="6" width="8" height="4" rx="2" fill="#222" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold">
                                {t({
                                    en: "Termination",
                                    ne: "समाप्ति"
                                })}
                            </span>
                        </div>
                        <div className="bg-[#e9edf5] rounded-md mb-4 p-4 border-l-4 border-[#003893]">
                            <div className="font-semibold text-[#003893] mb-1 text-sm">
                                {t({ en: "Simply Put", ne: "सजिलो भाषामा" })}
                            </div>
                            <div className="text-[#2563eb] text-base">
                                {t({
                                    en: "We can end this relationship if rules are broken. You can leave anytime you want.",
                                    ne: "यदि नियमहरू उल्लंघन भएमा हामी यो सम्बन्ध समाप्त गर्न सक्छौं। तपाईं चाहनुहुन्छ भने जुनसुकै बेला छोड्न सक्नुहुन्छ।"
                                })}
                            </div>
                        </div>
                        <div className="text-gray-700 mb-2">
                            {t({
                                en: "We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.",
                                ne: "हामी कुनै पनि कारणले, पूर्व सूचना वा जिम्मेवारी बिना, तपाईंको खाता तुरुन्तै समाप्त वा निलम्बन गर्न सक्छौं, विशेष गरी यदि तपाईंले सर्तहरू उल्लंघन गर्नुभयो भने।"
                            })}
                        </div>
                        <div className="text-gray-700">
                            {t({
                                en: "Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service or delete your account from the settings page.",
                                ne: "समाप्तिपछि, सेवा प्रयोग गर्ने तपाईंको अधिकार तुरुन्तै समाप्त हुनेछ। यदि तपाईं आफ्नो खाता समाप्त गर्न चाहनुहुन्छ भने, सेवा प्रयोग गर्न छोड्न सक्नुहुन्छ वा सेटिङ्स पृष्ठबाट आफ्नो खाता हटाउन सक्नुहुन्छ।"
                            })}
                        </div>
                    </section>

                    <section className="mb-10">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="bg-gray-100 rounded p-2">
                                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                                    <rect x="4" y="4" width="16" height="16" rx="2" fill="#222" />
                                    <path d="M8 8h8v2H8zM8 12h8v2H8z" fill="#fff" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold">
                                {t({
                                    en: "Contact Us",
                                    ne: "सम्पर्क गर्नुहोस्"
                                })}
                            </span>
                        </div>
                        <div className="bg-[#e9edf5] rounded-md mb-4 p-4 border-l-4 border-[#003893]">
                            <div className="font-semibold text-[#003893] mb-1 text-sm">
                                {t({ en: "Simply Put", ne: "सजिलो भाषामा" })}
                            </div>
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
                </div>
            </main>
            <Footer />
        </Fragment>
    );
}
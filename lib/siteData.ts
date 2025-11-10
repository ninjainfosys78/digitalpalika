// lib/siteData.ts

import { LocalizedString, NavItem } from '../context/LanguageContext';

export interface StatisticItem {
    id: number;
    value: LocalizedString; 
    label: LocalizedString;
}

export interface ModuleItem {
    id: number;
    label: LocalizedString;
    iconName: string; 
    colorClass: string; 
    description?: LocalizedString; 
}

export interface FooterLinkGroup {
    title: LocalizedString;
    links: { label: LocalizedString; href: string }[];
}

export interface ContactDetail {
    label: LocalizedString;
    value: LocalizedString;
}

// NEW INTERFACE FOR ABOUT PAGE SECTIONS
export interface AboutPageSection {
    id: string;
    title: LocalizedString;
    content: LocalizedString[] | { type: 'list'; items: LocalizedString[] };
    image?: string;
    imagePosition?: 'left' | 'right';
}


export interface FullSiteContent {
    header: {
        navItems: NavItem[];
    };
    hero: {
        title: LocalizedString;
        subtitle: LocalizedString;
        description: LocalizedString;
        ctaText: LocalizedString;
        ctaLink: string;
    };
    statistics: StatisticItem[];
    modules: {
        title: LocalizedString;
        description: LocalizedString;
        items: ModuleItem[];
    };
    demoCta: {
        title: LocalizedString;
        description: LocalizedString;
        ctaText: LocalizedString;
    };
    // NEW: Add aboutPage content here
    aboutPage: {
        sections: AboutPageSection[];
    };
        featuresPage: {
        title: LocalizedString;
        subtitle: LocalizedString;
        items: FeatureItem[];
    };
    footer: {
        companyName: LocalizedString;
        companyMoto: LocalizedString;
        quickLinks: FooterLinkGroup;
        userSupport: FooterLinkGroup;
        contactInfo: {
            title: LocalizedString;
            details: ContactDetail[];
            note: LocalizedString; // QR code description
        };
        copyright: LocalizedString;
        isoText: LocalizedString;
    };
}
export interface FeatureItem {
    id: number;
    icon: string; 
    title: LocalizedString;
    description: LocalizedString;
}

export const siteData: FullSiteContent = {
    header: {
        navItems: [
            { label: { en: 'Home', ne: 'गृह पृष्ठ' }, href: '/' },
            { label: { en: 'About Us', ne: 'हाम्रो बारेमा' }, href: '/about' },
            { label: { en: 'Our Clients', ne: 'हाम्रो ग्राहकहरु' }, href: '/clients' },
            { label: { en: 'Features', ne: 'विशेषताहरु' }, href: '/features' },
            { label: { en: 'Contact', ne: 'सम्पर्क' }, href: '/contact' },
        ],
    },
    hero: {
        title: { en: 'Digital Palika', ne: 'डिजिटल पालिका' },
        subtitle: { en: 'for #01 ERP', ne: 'उत्कृष्ट ERP को लागी' },
        description: { 
            en: 'Transforming local government management with digital efficiency for municipalities in Nepal.', 
            ne: 'स्थानीय तहको कार्यसंचालनलाई डिजिटल दक्षताका साथ रूपान्तरण गर्दै नेपालका पालिकाहरूको लागि।' 
        },
        ctaText: { en: 'Explore More', ne: 'थप अन्वेषण गर्नुहोस्' },
        ctaLink: '/explore',
    },
    statistics: [
        { id: 1, value: { en: '70 +', ne: '७० +' }, label: { en: 'Service-providing Local Levels', ne: 'सेवा प्रवाह स्थानीय तह' } },
        { id: 2, value: { en: '8,00,000 +', ne: '८,००,००० +' }, label: {
            en: 'लाभान्वित नागरिक',
            ne: ''
        } },
        { id: 3, value: { en: '2,500 +', ne: '२,५०० +' }, label: { en: 'Active Professionals', ne: 'लाभान्वित प्रतिनिधिहरु' } },
        { id: 4, value: { en: '300 +', ne: '३०० +' }, label: { en: 'Exclusive Features', ne: 'खुसी सेवाग्राहीहरु' } }
    ],
    modules: {
        title: { en: 'Digital Municipality Modules', ne: 'डिजिटल पालिका मोड्युल' },
        description: { en: 'A comprehensive system designed to streamline local government operations, as seen in the video.', ne: 'पालिका भित्रको सम्पूर्ण कार्यहरूलाई व्यवस्थित गर्न तयार पारिएको एक व्यापक प्रणाली, भिडियोमा देखाइए अनुसार।' },
        items: [
            { id: 1, label: { en: 'Digital Citizen Register', ne: 'डिजिटल नागरिक वडापत्र' }, iconName: 'clipboardCheck', colorClass: 'bg-indigo-700/80 text-white' },
            { id: 2, label: { en: 'Office Automation', ne: 'अफिस अटोमेसन' }, iconName: 'box', colorClass: 'bg-yellow-400/80 text-gray-900' },
            { id: 3, label: { en: 'Vehicle Service Management', ne: 'सवारी सेवा व्यवस्थापन' }, iconName: 'car', colorClass: 'bg-purple-400/80 text-gray-900' },
            { id: 4, label: { en: 'Complaint Portal', ne: 'गुनासो पोर्टल' }, iconName: 'messageSquare', colorClass: 'bg-red-400/80 text-gray-900' },
            { id: 5, label: { en: 'Meeting Management', ne: 'बैठक व्यवस्थापन' }, iconName: 'users', colorClass: 'bg-green-400/80 text-gray-900' },
            { id: 6, label: { en: 'Electricity/Water/Tax (EBPS)', ne: 'विद्युतीय कर नक्सा पास (EBPS)' }, iconName: 'zap', colorClass: 'bg-pink-400/80 text-gray-900' },
            { id: 7, label: { en: 'Institution/Business Registration', ne: 'संस्था/व्यवसाय दर्ता' }, iconName: 'building', colorClass: 'bg-blue-400/80 text-gray-900' },
            { id: 8, label: { en: 'Recommendation', ne: 'सिफारिस' }, iconName: 'fileText', colorClass: 'bg-teal-400/80 text-gray-900' },
            { id: 9, label: { en: 'Research & Evaluation', ne: 'अनुसन्धान र मूल्यांकन' }, iconName: 'barChart', colorClass: 'bg-orange-400/80 text-gray-900' },
            { id: 10, label: { en: 'Estimate System', ne: 'Estimate प्रणाली' }, iconName: 'calculator', colorClass: 'bg-lime-400/80 text-gray-900' },
            { id: 11, label: { en: 'Digital GL Profile', ne: 'डिजिटल जी.एल प्रोफाइल' }, iconName: 'globe', colorClass: 'bg-amber-400/80 text-gray-900' },
            { id: 12, label: { en: 'Integrated Mobile App', ne: 'Integrated Mobile Application' }, iconName: 'smartphone', colorClass: 'bg-cyan-400/80 text-gray-900' }
        ]
    },
    demoCta: {
        title: { 
            en: 'Ready to see a demo?', 
            ne: 'डेमो हेर्न चाहनुहुन्छ?' 
        },
        description: { 
            en: 'Explore the full capabilities of Digital ePalika, tailored to meet the needs of Nepal\'s local governments.', 
            ne: 'नेपालका स्थानीय सरकारको आवश्यकता पूरा गर्नको लागि डिजाइन गरिएको डिजिटल ePalika को पूर्ण क्षमताहरू अन्वेषण गर्नुहोस्।' 
        },
        ctaText: { en: 'Book a Demo', ne: 'डेमो बुक गर्नुहोस्' }
    },
    // NEW ABOUT PAGE CONTENT ADDED HERE based on your images
    aboutPage: {
        sections: [
            {
                id: 'introduction',
                title: { en: 'Introduction', ne: 'परिचय' },
                content: [
                    {
                        en: "In the context of our country surrounded by digital technology, the Government of Nepal is connecting all local bodies with digital technology. It is everyone's responsibility to make local bodies, employees, representatives, and public officials technology-friendly to meet today's needs.",
                        ne: 'डिजिटल प्रविधिले घेरिएको हाम्रो देशको परिवेशमा नेपाल सरकारले सबै स्थानीय निकायलाई डिजिटल प्रविधिसँग जोड्ने काम गरिरहेको छ । यसले स्थानीय निकाय, कर्मचारी, प्रतिनिधि र जनप्रतिनिधिलाई प्रविधिमैत्री बनाउनु पर्ने आजको आवश्यकतालाई पूरा गर्नु पर्ने सबैको जिम्मेवारी हो ।'
                    },
                    {
                        en: "Taking on this responsibility, Ninja Infosys has guided all municipalities towards becoming digital through an integrated good governance (ERP) system.",
                        ne: 'यो सँगै, जिम्मेवारीलाई वहन गर्दै निन्जा इन्फोसिस्ले सबै पालिकाहरूलाई डिजिटल बन्दै एकीकृत सुशासन (ERP) प्रणालीको लागि मार्गदर्शन गरेको छ ।'
                    },
                    {
                        en: "This campaign helps municipalities become fully technology-friendly by enabling daily operations such as digital citizen registry, registration and dispatch system, work management system, and complaint management system through digital means. Under the 'Digital Municipality' campaign, we believe in bringing every municipal activity to the hands of the people, managing with high transparency principles, using appropriate technology, and utilizing it to achieve sustainable development goals.",
                        ne: 'यस अभियानले पालिकाहरूलाई पूर्ण प्रविधिमैत्री बनाउन डिजिटल नागरिक वडापत्र, दर्ता चलानी प्रणाली, कार्य व्यवस्थापन प्रणाली, गुनासो व्यवस्थापन प्रणाली जस्ता कार्यहरूलाई दैनिक डिजिटलमाध्यबाट कार्यसम्पादन गर्न सहयोग गर्छ । “डिजिटल पालिका” अभियानअन्तर्गत हामीले पालिकाका हरेक गतिविधि जनताको हातमा पुऱ्याउन, उच्च पारदर्शिता सिद्धान्त व्यवस्थापन गर्नु पर्ने, उपयुक्त प्रविधिको प्रयोगमा आधारित हुनु पर्ने र यसलाई दिगो विकासको लक्ष्य हासिल गर्न प्रयोग गरिनु पर्ने विश्वास गर्छौँ।'
                    },
                    {
                        en: "Additionally, through 'Digital Municipality', revenue collection systems, grant management systems, judicial committee systems, training management systems, and consumer and mass citizen operational activities can also be made technology-friendly, directly connecting municipalities and citizens. Cooperation from various organizations or donor agencies is also needed in the Digital Municipality campaign initiated by Ninja Infosys.",
                        ne: 'यसका अलावा “डिजिटल पालिका” को माध्यमबाट राजस्व संकलन प्रणाली, अनुदान व्यवस्थापन प्रणाली, न्यायिक समिति प्रणाली, तालिम व्यवस्थापन प्रणाली, उपभोक्ता तथा थोक नागरिक परिचालनकात्मक कार्यसञ्चालनलाई पनि प्रविधिमैत्री बनाउँदै, पालिका र जनतालाई सिधै जोड्ने काम गर्न सकिन्छ । निन्जा इन्फोसिस्ले सुरु गरेको डिजिटल पालिका अभियानमा हामी सबैको सहकार्य आवश्यक छ । यस सहकार्यमा विभिन्न संघ-संस्था वा दातृ निकायहरूका पनि साथ र सहयोग हामीलाई चाहिएको छ ।'
                    },
                    {
                        en: "Let's work together with your support and cooperation to make all municipalities fully technology-friendly.",
                        ne: '“आउनुहोस्, तपाइँहरूको साथ र सहयोग लिएर हामी सबै पालिकाहरूलाई पूर्ण प्रविधिमैत्री बनाऔं ।”'
                    }
                ],
                image: '/Itro.png',
                imagePosition: 'right'
            },
            {
                id: 'objectives',
                title: { en: 'Objectives', ne: 'उद्देश्य' },
                content: {
                    type: 'list',
                    items: [
                        {
                            en: "Make local bodies technology-friendly.",
                            ne: 'डिजिटल प्रविधिमैत्री देवी बनाउनु।'
                        },
                        {
                            en: "Support municipalities in daily operations as digital municipalities.",
                            ne: 'पालिकालाई डिजिटल पालिकामै दैनिक कार्यसम्पादन गर्न सहयोग पुग्नु।'
                        },
                        {
                            en: "Provide information to everyone through mobile apps and other visual media.",
                            ne: 'मोबाइल एप मार्फत सबैजना जानकारीलाई साथै अन्य दृश्य माध्यमले जानकारी गराउनु।'
                        },
                        {
                            en: "Enable most services provided by municipalities to accept applications, process, and deliver services online.",
                            ne: 'पालिकाले प्रवाह गर्ने सेवाहरू मध्ये धेरै जसो सेवालाई अनलाइन मार्फत आवेदन लिने, कार्य सम्पादन गर्ने र सेवा प्रदान गर्ने।'
                        },
                        {
                            en: "Save time for representatives, employees, and service recipients of municipalities.",
                            ne: 'पालिकाको जनप्रतिनिधि, कर्मचारी र सेवाग्राहीको समय बचत गर्नु।'
                        },
                        {
                            en: "Prepare an integrated system for revenue collection, information, statistics, service delivery, and reporting.",
                            ne: 'पालिकालाई एकीकृत राजस्व संकलन, सूचना, तथ्यांक, सेवाप्रवाह र सोको रिपोर्टसहित निकाल्न मिल्ने गरि तयार हुनु।'
                        },
                        {
                            en: "Help local bodies manage issues like misuse of translation, actual details, and statistics when connecting with technology.",
                            ne: 'स्थानीय तहलाई प्रविधि सँग जोड्दा अनुवाद दुरुपयोग, वास्तविक विवरण, तथ्यांक लगायत देखिने त्रुटि पालिकाहरूलाई स्थानीय तहमा हुने प्रकारको समस्यालाई बेअसर व्यवस्थापनमा सहयोग पुग्नु।'
                        },
                        {
                            en: "Ensure that the concept of complete digital e-municipality allows all work processes, services, and citizen experiences to be performed and felt through technology.",
                            ne: 'सम्पूर्ण डिजिटल ई-पालिकाको अवधारणाले पालिकाहरूको सम्पूर्ण कार्य प्रणाली, सेवा जोड्दा, प्रविधि मार्फत नै सबैको कार्यसम्पादन गर्दा र स्थानीयवासीले यसै पालिकामै पुगेको अनुभूति प्राप्त गर्ने।'
                        },
                        {
                            en: "Integrate all municipal services online.",
                            ne: 'पालिकाको सम्पूर्ण सेवाहरूलाई अनलाइन बनाउन यो विवरण वस्तुस्थितिमा एकीकृत हुनु।'
                        },
                        {
                            en: "Provide an integrated mobile and web-based system.",
                            ne: 'एकीकृत मोबाइल र वेबमा आधारित प्रणाली प्रदान गर्नु।'
                        },
                        {
                            en: "Increase active participation of citizens in daily municipal activities.",
                            ne: 'पालिकाको दैनिक गतिविधिहरूमा नागरिकको सक्रिय संलग्नता बढाउनु।'
                        }
                    ]
                },
                image: '/Objectives.png',
                imagePosition: 'right'
            }
        ]
    },
    featuresPage: {
            title: { en: 'Core Digital Palika Features', ne: 'मुख्य डिजिटल पालिका विशेषताहरू' },
            subtitle: { 
                en: 'Our platform is built on six foundational pillars designed to simplify local governance and enhance citizen service.', 
                ne: 'हाम्रो प्लेटफर्म स्थानीय शासनलाई सरल बनाउन र नागरिक सेवा बढाउन डिजाइन गरिएका छवटा आधारभूत स्तम्भहरूमा निर्मित छ।' 
            },
            items: [
                {
                    id: 1,
                    icon: 'monitor', // Represents the desktop/web icon
                    title: { en: 'Mobile & Web System', ne: 'मोबाइल र वेबमा' },
                    description: { en: 'Integrated mobile and web-based system.', ne: 'एकीकृत मोबाइल र वेबमा आधारित प्रणाली' },
                },
                {
                    id: 2,
                    icon: 'building', // Represents the building/office icon
                    title: { en: 'Information Hub', ne: 'जानकारी' },
                    description: { en: 'Individual, business, and institutional data.', ne: 'व्यक्तिगत, व्यवसाय र संस्थागत जानकारी' },
                },
                {
                    id: 3,
                    icon: 'list-check', // Represents the checklist/daily activities icon
                    title: { en: 'Daily Activities', ne: 'दैनिक गतिविधिहरू' },
                    description: { en: 'Enhancing citizen participation in daily municipal activities.', ne: 'पालिकाको दैनिक गतिविधिहरूमा नागरिकको सक्रिय संलग्नता' },
                },
                {
                    id: 4,
                    icon: 'calculator', // Represents the calculator/online access icon
                    title: { en: 'Online Access', ne: 'अनलाइनमा पहुँच' },
                    description: { en: 'Access to citizen services and information online.', ne: 'नागरिकका सेवा र जानकारीको अनलाइनमा पहुँच' },
                },
                {
                    id: 5,
                    icon: 'info-circle', // Represents the info icon
                    title: { en: 'Workflow Support', ne: 'कार्यसम्पादन गर्न सहयोग' },
                    description: { en: 'Support for daily work execution in the municipality.', ne: 'पालिकाको दैनिक कार्यसम्पादन गर्न सहयोग' },
                },
                {
                    id: 6,
                    icon: 'video', // Represents the video icon
                    title: { en: 'Client Information', ne: 'सेवाग्राहीलाई जानकारी' },
                    description: { en: 'Providing information to clients via audio and video.', ne: 'सेवाग्राहीलाई अडियो, भिडियो मार्फत जानकारी' },
                },
                {
                    id: 7,
                    icon: 'smartphone', // Online Services
                    title: { en: 'Online Services', ne: 'अनलाइन सेवाहरु' },
                    description: { en: 'Simplifying access to municipal services online.', ne: 'पालिकाले प्रवाह गर्ने सेवाहरुलाई अनलाइन मार्फत आवेदन लिने, दर्ता गर्ने र प्रमाणपत्र प्रदान' },
                },
                {
                    id: 8,
                    icon: 'zap', // Time Saving
                    title: { en: 'Time Saving', ne: 'समय बचत' },
                    description: { en: 'Saving time for representatives, employees, and clients.', ne: 'पालिकाको जनप्रतिनिधि, कर्मचारी र सेवाग्राहीको समयको बचत' },
                },
                {
                    id: 9,
                    icon: 'box', // Unified Software
                    title: { en: 'Unified Software', ne: 'एकीकृत सफ्टवेयर' },
                    description: { en: 'Integrating various municipal functions into a unified software platform.', ne: 'पालिकालाई एकीकृत सफ्टवेयरमा आवद्ध गरि सुचना, तथ्यांक, सेवाप्रवाहमा सहज' },
                },
                {
                    id: 10,
                    icon: 'list-check', // Workflow Automation
                    title: { en: 'Workflow Automation', ne: 'कार्यप्रवाह स्वचालन' },
                    description: { en: 'Automating workflows for efficiency.', ne: 'सेसमग्र पालिकाको कामलाई प्रबिधि मार्फत नै गर्ने' },
                },
                {
                    id: 11,
                    icon: 'users', // Client Experience
                    title: { en: 'Client Experience', ne: 'पालिकाबासीको अनुभुती' },
                    description: { en: 'Providing a seamless experience for citizens interacting with the municipality sitting from home.', ne: 'पालिकाबासीले घरमै बसेर पालिका पुगेको अनुभुती' },
                },
            ],
        },

    footer: {
        companyName: { en: 'Digital Palika', ne: 'डिजिटल पालिका' },
        companyMoto: { 
            en: 'A comprehensive system transforming local governance.', 
            ne: 'स्थानीय शासनलाई रूपान्तरण गर्ने एक व्यापक प्रणाली।' 
        },
        quickLinks: {
            title: { en: 'Quick Links', ne: 'द्रुत लिंकहरू' },
            links: [
                { label: { en: 'Home', ne: 'गृह पृष्ठ' }, href: '/' },
                { label: { en: 'About Us', ne: 'हाम्रो बारेमा' }, href: '/about' },
                { label: { en: 'Products', ne: 'उत्पादनहरू' }, href: '/products' },
                { label: { en: 'Features', ne: 'विशेषताहरू' }, href: '/features' },
            ],
        },
        userSupport: {
            title: { en: 'User Support', ne: 'उपयोगकर्ता सहयोग' },
            links: [
                { label: { en: 'Service Information', ne: 'सेवाहरू' }, href: '/services' },
                { label: { en: 'Privacy Policy', ne: 'गोपनीयता नीति' }, href: '/privacy' },
                { label: { en: 'Career', ne: 'करियर' }, href: '/career' },
                { label: { en: 'FAQs', ne: 'बारम्बार सोधिने प्रश्नहरू' }, href: '/faq' },
            ],
        },
        contactInfo: {
            title: { en: 'Get in Touch', ne: 'सम्पर्कमा रहनुहोस्' },
            details: [
                { label: { en: 'Office', ne: 'प्रधान कार्यालय' }, value: { en: 'Ninja Infosys Pvt. Ltd., Kathmandu', ne: 'निन्जा इन्फोसिस् प्रा. लि., काठमाडौं' } },
                { label: { en: 'Corporate Office', ne: 'कर्पोरेट कार्यालय' }, value: { en: 'Anamnagar-29, Kathmandu', ne: 'अनामनगर-२९, काठमाडौं' } },
                { label: { en: 'Phone', ne: 'फोन' }, value: { en: '01-5934348', ne: '०१-५९३४३४८' } },
                { label: { en: 'Mobile', ne: 'सम्पर्क नम्बर' }, value: { en: '9854334348', ne: '९८५४३३४३४८' } },
            ],
            note: { en: 'Scan QR for quick contact.', ne: 'छिटो सम्पर्कको लागि QR स्क्यान गर्नुहोस्।' }
        },
        copyright: { en: `© ${new Date().getFullYear()} Ninja Infosys. All rights reserved.`, ne: `© ${new Date().getFullYear()} निन्जा इन्फोसिस्। सबै अधिकार सुरक्षित।` },
        isoText: { en: 'ISO Certified', ne: 'ISO प्रमाणित' }
    },
};
export interface ClientItem {
    id: number;
    image: string; 
    name: LocalizedString;
}

export const clients: ClientItem[] = [
    {
        id: 1,
        image: '/emblemofNepal.png',
        name: { en: 'Gangadev Rural Municipality, Rolpa', ne: 'गंगादेव गाउँपालिका, रोल्पा' }
    },
     {
        id: 2,
        image: '/emblemofNepal.png',
        name: { en: 'Kathmandu Metropolitan City, Kathmandu', ne: 'काठमाडौँ महानगरपालिका, काठमाडौँ' }
    },
        {
        id: 3,
        image: '/emblemofNepal.png',
        name: { en: 'Rohini Rural Municipality, Rupandehi', ne: 'रोहिणी गाउँपालिका, रुपन्देही' }
    },
        {
        id: 4,
        image: '/emblemofNepal.png',
        name: { en: 'Ghorahi Sub-Metropolitan City, Ghorahi, Dang', ne: 'घोराही उपमहानगरपालिका, घोराही, दाङ' }
    },
        {
        id: 5,
        image: '/emblemofNepal.png',
        name: { en: 'Adanchuli Rural Municipality, Humla', ne: 'अदानचुली गाउँपालिका, हुम्ला' }
    },
        {
        id: 6,
        image: '/emblemofNepal.png',
        name: { en: 'Gaidahawa Rural Municipality, Rupandehi, Nepal', ne: 'गैडहवा गाउँपालिका , रुपन्देही, नेपाल' }
    },
        {
        id: 7,
        image: '/emblemofNepal.png',
        name: { en: 'Madhuwan Municipality, Madhuwan -6 Bardiya', ne: 'मधुवन नगरपालिका, मधुवन - ६ बर्दिया' }
    },
        {
        id: 8,
        image: '/emblemofNepal.png',
        name: { en: 'Junichande Rural Municipality, Mazkot Jajarkot', ne: 'जुनीचाँदे गाउँपालिका, मजकोट जाजरकोट' }
    },
        {
        id: 9,
        image: '/emblemofNepal.png',
        name: { en: 'Bheri Municipality, Khalanga, Jajarkot, Karnali Province, Nepal', ne: 'भेरी नगरपालिका, खलंगा, जाजरकोट, कर्णाली प्रदेश, नेपाल' }
    },
        {
        id: 10,
        image: '/emblemofNepal.png',
        name: { en: 'Bardibas Municipality, Mohattari', ne: 'बर्दिबास नगरपालिका, मोहत्तरी' }
    },
        {
        id: 11,
        image: '/emblemofNepal.png',
        name: { en: 'Kumakh Rural Municipality, Salyan', ne: 'कुमाख गाउँपालिका, सल्यान' }
    },
        {
        id: 12,
        image: '/emblemofNepal.png',
        name: { en: 'Janaki Rural Municipality, Banke', ne: 'जानकी गाउँपालिका, बाँके' }
    },
        {
        id: 13,
        image: '/emblemofNepal.png',
        name: { en: 'Dungeshwar Rural Municipality, Dailekh', ne: 'डुङ्गेश्वर गाउँपालिका, दैलेख' }
    },
        {
        id: 14,
        image: '/emblemofNepal.png',
        name: { en: 'Baijnath Rural Municipality, Rampur, Banke', ne: 'बैजनाथ गाउँपालिका, रामपुर, बाँके' }
    },
        {
        id: 15,
        image: '/emblemofNepal.png',
        name: { en: 'Laljhadi Rural Municipality, Sudurpashchim Province, Kanchanpur', ne: 'लालझाडी गाउँपालिका, सुदूरपश्चिम प्रदेश ,कंचनपुर' }
    },
        {
        id: 16,
        image: '/emblemofNepal.png',
        name: { en: 'Rajpur Rural Municipality, Gangadi, Dang', ne: 'राजपुर गाउँपालिका, गंगदी, दाङ' }
    },
        {
        id: 17,
        image: '/emblemofNepal.png',
        name: { en: 'Narainapur Rural Municipality, Narainapur, Banke', ne: 'नरैनापुर गाउँपालिका, नरैनापुर, बाँके' }
    },
        {
        id: 18,
        image: '/emblemofNepal.png',
        name: { en: 'Putha Uttarganga Rural Municipality, Taksera, Rukum (East)', ne: 'पुथा उत्तरगंगा गाउँपालिका, तकसेरा, रुकुम (पूर्वी भाग)' }
    },
        {
        id: 19,
        image: '/emblemofNepal.png',
        name: { en: 'Chingad Rural Municipality, Avalanching, Surkhet, Karnali Province, Nepal', ne: 'चिङ्गाड गाउँपालिका, अवलचिङ्ग, सुर्खेत, कर्णाली प्रदेश, नेपाल' }
    },
        {
        id: 20,
        image: '/emblemofNepal.png',
        name: { en: 'Himali Rural Municipality, Bajura', ne: 'हिमाली गाउँपालिका, बाजुरा' }
    },
        {
        id: 21,
        image: '/emblemofNepal.png',
        name: { en: 'Nepalgunj Sub-Metropolitan City, Banke', ne: 'नेपालगंज उपमहानगरपालिका , बाँके' }
    },
        {
        id: 22,
        image: '/emblemofNepal.png',
        name: { en: 'Khajura Municipality, Khajura, Banke', ne: 'खजुरा नगरपालिका, खजुरा, बाँके' }
    },
        {
        id: 23,
        image: '/emblemofNepal.png',
        name: { en: 'Kohalpur Municipality, Banke', ne: 'कोहलपुर नगरपालिका , बाँके' }
    },
        {
        id: 24,
        image: '/emblemofNepal.png',
        name: { en: 'Mudkechula Rural Municipality, Dolpa', ne: 'मुड्केचुला गाउँपालिका, डोल्पा' }
    },
        {
        id: 25,
        image: '/emblemofNepal.png',
        name: { en: 'Bagchaur Municipality, Salyan', ne: 'बागचौर नगरपालिका, सल्यान' }
    },
        {
        id: 26,
        image: '/emblemofNepal.png',
        name: { en: 'Ministry of Land Management, Agriculture and Cooperatives, Madhesh Province', ne: 'भूमि व्यवस्था, कृषि तथा सहकारी मन्त्रालय, मधेश प्रदेश' }
    },
        {
        id: 27,
        image: '/emblemofNepal.png',
        name: { en: 'Ministry of Agriculture and Land Management, Gandaki Province', ne: 'कृषि तथा भूमि व्यवस्था मन्त्रालय, गण्डकी प्रदेश' }
    },
        {
        id: 28,
        image: '/emblemofNepal.png',
        name: { en: 'Ministry of Land Management, Agriculture and Cooperatives, Karnali Province', ne: 'भूमि व्यवस्था, कृषि तथा सहकारी मन्त्रालय, कर्णाली प्रदेश' }
    },
        {
        id: 29,
        image: '/emblemofNepal.png',
        name: { en: 'Ministry of Physical Infrastructure and Urban Development, Karnali Province', ne: 'भौतिक पूर्वाधार तथा शहरी विकास मन्त्रालय, कर्णाली प्रदेश' }
    },
        {
        id: 30,
        image: '/emblemofNepal.png',
        name: { en: 'Ministry of Industry, Tourism, Forest and Environment, Sudurpashchim Province', ne: 'उद्योग, पर्यटन, वन तथा वातावरण मन्त्रालय, सुदूरपश्चिम प्रदेश' }
    },
        {
        id: 31,
        image: '/emblemofNepal.png',
        name: { en: 'Budhanilkantha Municipality, Hattigauda, Kathmandu', ne: 'बुढानीलकण्ठ नगरपालिका, हात्तीगौडा, काठमाण्डौ' }
    },
        {
        id: 32,
        image: '/emblemofNepal.png',
        name: { en: 'Agriculture Research Directorate, Nepalgunj', ne: 'कृषि अनुशन्धान निर्देशनालय, नेपालगंज' }
    },
        {
        id: 33,
        image: '/emblemofNepal.png',
        name: { en: 'Directorate of Agriculture Development, Karnali Province.', ne: 'कृषि विकास निर्देशनालय, कर्णाली प्रदेश' }
    },
        {
        id: 34,
        image: '/emblemofNepal.png',
        name: { en: 'Directorate of Agriculture Development, Sudurpashchim Province.', ne: 'कृषि विकास निर्देशनालय, सुदूरपश्चिममा प्रदेश' }
    },
        {
        id: 35,
        image: '/emblemofNepal.png',
        name: { en: 'Directorate of Livestock Development, Sudurpashchim Province.', ne: 'पशुपंक्षी विकास निर्देशनालय , सुदूरपश्चिममा प्रदेश' }
    },
        {
        id: 36,
        image: '/KathmanduUniversity.png',
        name: { en: 'Kathmandu University, Dhulikhel, Kavre', ne: 'काठमाडौं विश्वविद्यालय, धुलिखेल, काभ्रे' }
    },
        {
        id: 37,
        image: '/savetheChildren.png',
        name: { en: 'Save the Children, Kathmandu, Nepal', ne: 'सेभ द चिल्ड्रेन, काठमाडौं, नेपाल' }
    },
        {
        id: 38,
        image: '/tribhuvanUniversity.png',
        name: { en: 'Tribhuvan University, Kirtipur, Nepal', ne: 'त्रिभुवन विश्वविद्यालय, कीर्तिपुर, नेपाल' }
    },
        {
        id: 39,
        image: '/emblemofNepal.png',
        name: { en: 'Rajpur Rural Municipality, Gangadi, Dang', ne: 'राजपुर गाउँपालिका , गंगदी, दाङ' }
    },
        {
        id: 40,
        image: '/emblemofNepal.png',
        name: { en: 'Madhuban Municipality, Bardiya, Nepal', ne: 'मधुवन नगरपालिका, बर्दिया, नेपाल' }
    },
        {
        id: 41,
        image: '/emblemofNepal.png',
        name: { en: 'Department of Industry, Tripureshwor, Kathmandu', ne: 'उद्योग विभाग, त्रिपुरेश्वर, काठमाडौं' }
    },
    {
        id: 42,
        image: '/emblemofNepal.png',
        name: { en: 'Directorate of Agricultural Development, Pokhara, Nepal', ne: 'कृषि विकास निर्देशनालय, पोखरा, नेपाल' }
    },
     {
        id: 43,
        image: '/emblemofNepal.png',
        name: { en: 'Directorate of Health Services, Birendranagar, Surkhet', ne: 'स्वास्थ्य सेवा निर्देशनालय, वीरेन्द्रनगर, सुर्खेत' }
    },
     {
        id: 44,
        image: '/emblemofNepal.png',
        name: { en: 'Adarsha Rural Municipality, Doti, Sudurpashchim Province', ne: 'आदर्श गाउँपालिका, डोटी सुदूरपश्चिम प्रदेश' }
    },
     {
        id: 45,
        image: '/emblemofNepal.png',
        name: { en: 'Suryabinayak Municipality, Bhaktapur, Bagmati Province', ne: 'सूर्यविनायक नगरपालिका, भक्तपुर, बागमती प्रदेश' }
    },
     {
        id: 46,
        image: '/emblemofNepal.png',
        name: { en: 'Lalitpur Metropolitan City, Lalitpur Bagmati Province', ne: 'ललितपुर महानगरपालिका, ललितपुर बागमती प्रदेश' }
    },
];
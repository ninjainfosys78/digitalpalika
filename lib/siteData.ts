// lib/siteData.ts

import { LocalizedString } from '../context/LanguageContext';

// Define NavItem interface here instead of importing it
export interface NavItem {
    label: LocalizedString;
    href: string;
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

export interface StatisticItem {
  id: string;
  label: string;
  value: number | string;
  // add other fields you use
}

export interface FullSiteContent {
    header: {
        navItems: NavItem[];
    };
    
    aboutPage: {
        sections: AboutPageSection[];
    };
    
    featuresPage: {
        title: LocalizedString;
        subtitle: LocalizedString;
        items: FeatureItem[];
    };
    
    // Add modules section
    modulesSection: {
        title: LocalizedString;
        subtitle: LocalizedString;
        modules: {
            id: string;
            icon: string;
            title: LocalizedString;
        }[];
    };
    
    footer: {
        companyName: LocalizedString;
        companyMoto: LocalizedString;
        quickLinks: FooterLinkGroup;
        userSupport: FooterLinkGroup;
        contactInfo: {
            title: LocalizedString;
            details: ContactDetail[];
            note: LocalizedString;
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
                            ne: 'पालिकाले प्रवाह गर्ने सेवाहरू मध्य धेरै जसो सेवालाई अनलाइन मार्फत आवेदन लिने, कार्य सम्पादन गर्ने र सेवा प्रदान गर्ने।'
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

    modulesSection: {
        title: {
            en: 'Digital Palika Modules',
            ne: 'डिजिटल पालिकामा रहेका प्रणालीहरू'
        },
        subtitle: {
            en: 'Comprehensive digital solutions for modern municipalities',
            ne: 'आधुनिक नगरपालिकाहरूको लागि व्यापक डिजिटल समाधान'
        },
        modules: [
            {
                id: 'digital-archive',
                icon: '📄',
                title: {
                    en: 'Digital Archive System',
                    ne: 'डिजिटल नागरिक बडापत्र'
                }
            },
            {
                id: 'office-automation',
                icon: '🔄',
                title: {
                    en: 'Office Automation',
                    ne: 'अफिस अटोमेसन'
                }
            },
            {
                id: 'citizen-charter',
                icon: '🚛',
                title: {
                    en: 'Citizen Charter and Record Management',
                    ne: 'पालिका लेखापरीक्षण तथा रेकर्ड व्यवस्थापन'
                }
            },
            {
                id: 'public-health',
                icon: '📱',
                title: {
                    en: 'Integrated Mobile Application',
                    ne: 'एकीकृत मोबाइल एप्लिकेशन'
                }
            },
            {
                id: 'disaster-management',
                icon: '⚠️',
                title: {
                    en: 'Grant Management System',
                    ne: 'अनुदान व्यवस्थापन प्रणाली'
                }
            },
            {
                id: 'education-management',
                icon: '📚',
                title: {
                    en: 'Hospital System',
                    ne: 'इस्पिटल'
                }
            },
            {
                id: 'revenue-collection',
                icon: '💰',
                title: {
                    en: 'Digital House Mapping',
                    ne: 'डिजिटल एन. जि. प्रोफाइल'
                }
            },
            {
                id: 'representative-management',
                icon: '👥',
                title: {
                    en: 'Digital IVR Call System',
                    ne: 'डिजिटल IVR Call System'
                }
            },
            {
                id: 'digital-record',
                icon: '📋',
                title: {
                    en: 'Digital Card System',
                    ne: 'डिजिटल कार्ड प्रणाली'
                }
            },
            {
                id: 'complaint-center',
                icon: '📞',
                title: {
                    en: 'Complaint and Roster System',
                    ne: 'गुनासो तथा रोस्टर प्रणाली'
                }
            },
            {
                id: 'court-management',
                icon: '⚖️',
                title: {
                    en: 'Court (Judicial) System',
                    ne: 'इजलास (न्यायीक) प्रणाली'
                }
            },
            {
                id: 'project-monitoring',
                icon: '✅',
                title: {
                    en: 'Project Management System',
                    ne: 'योजना व्यवस्थापन प्रणाली'
                }
            },
            {
                id: 'asset-management',
                icon: '🏛️',
                title: {
                    en: 'Bank Management System',
                    ne: 'बैठक व्यवस्थापन प्रणाली'
                }
            },
            {
                id: 'hospital-management',
                icon: '🏥',
                title: {
                    en: 'Birth Registration and Mapping',
                    ne: 'विद्युतीय घर नक्सा पास'
                }
            },
            {
                id: 'house-mapping',
                icon: '🏠',
                title: {
                    en: 'Organization/Department System',
                    ne: 'संस्था/ व्यवसाय दर्ता प्रणाली'
                }
            },
            {
                id: 'ivr-system',
                icon: '☎️',
                title: {
                    en: 'Recommendation System',
                    ne: 'सिफारिस प्रणाली'
                }
            },
            {
                id: 'gis-mapping',
                icon: '🗺️',
                title: {
                    en: 'Digital Archive Record',
                    ne: 'डिजिटल नागरिक बडापत्र'
                }
            },
            {
                id: 'palika-budget',
                icon: '💵',
                title: {
                    en: 'Office Automation',
                    ne: 'अफिस अटोमेसन'
                }
            },
            {
                id: 'health-profile',
                icon: '📊',
                title: {
                    en: 'Service Fee Management System',
                    ne: 'सेवारी शुल्क व्यवस्थापन प्रणाली'
                }
            },
            {
                id: 'digital-id',
                icon: '🆔',
                title: {
                    en: 'Complaint Portal',
                    ne: 'गुनासो पोर्टल'
                }
            }
        ]
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
                { label: { en: 'Modules', ne: 'प्रणालीहरू' }, href: '/module' },
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
                { label: { en: 'Address', ne: 'ठेगाना' }, value: { en: 'Baneshwor-10, Kathmandu', ne: 'बानेश्वर-१०, काठमाडौं' } },
                { label: { en: 'Email', ne: 'इमेल' }, value: { en: 'info@ninjainfosys.com', ne: 'info@ninjainfosys.com' } },
                { label: { en: 'Telephone', ne: 'टेलिफोन' }, value: { en: '01-5922361', ne: '०१-५९२२३६१' } },
                { label: { en: 'Phone', ne: 'फोन' }, value: { en: '+977-9851343348', ne: '+९७७-९८५१३४३३४८' } },
                { label: { en: 'Sales', ne: 'बिक्री' }, value: { en: '+977-9858042433', ne: '+९७७-९८५८०४२४३३' } },
                { label: { en: 'Support', ne: 'सहयोग' }, value: { en: '9858042647', ne: '९८५८०४२६४७' } },
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
    location: string;
    province: string;
}

export const clients: ClientItem[] = [
    { id: 1, image: '/emblemofNepal.png', name: { en: 'Gangadev Rural Municipality', ne: 'गंगादेव गाउँपालिका' }, location: 'Rolpa', province: 'Lumbini Province' },
    { id: 2, image: '/emblemofNepal.png', name: { en: 'Kathmandu Metropolitan City', ne: 'काठमाडौँ महानगरपालिका' }, location: 'Kathmandu', province: 'Bagmati Province' },
    { id: 3, image: '/emblemofNepal.png', name: { en: 'Rohini Rural Municipality', ne: 'रोहिणी गाउँपालिका' }, location: 'Rupandehi', province: 'Lumbini Province' },
    { id: 4, image: '/emblemofNepal.png', name: { en: 'Ghorahi Sub-Metropolitan City', ne: 'घोराही उपमहानगरपालिका' }, location: 'Dang', province: 'Sudurpashchim Province' },
    { id: 5, image: '/emblemofNepal.png', name: { en: 'Adanchuli Rural Municipality', ne: 'अदानचुली गाउँपालिका' }, location: 'Humla', province: 'Karnali Province' },
    { id: 6, image: '/emblemofNepal.png', name: { en: 'Gaidahawa Rural Municipality', ne: 'गैडहवा गाउँपालिका' }, location: 'Rupandehi', province: 'Lumbini Province' },
    { id: 7, image: '/emblemofNepal.png', name: { en: 'Madhuwan Municipality', ne: 'मधुवन नगरपालिका' }, location: 'Bardiya', province: 'Sudurpashchim Province' },
    { id: 8, image: '/emblemofNepal.png', name: { en: 'Junichande Rural Municipality', ne: 'जुनीचाँदे गाउँपालिका' }, location: 'Jajarkot', province: 'Gandaki Province' },
    { id: 9, image: '/emblemofNepal.png', name: { en: 'Bheri Municipality', ne: 'भेरी नगरपालिका' }, location: 'Jajarkot', province: 'Karnali Province' },
    { id: 10, image: '/emblemofNepal.png', name: { en: 'Bardibas Municipality', ne: 'बर्दिबास नगरपालिका' }, location: 'Mohattari', province: 'Madhesh Province' },
    { id: 11, image: '/emblemofNepal.png', name: { en: 'Kumakh Rural Municipality', ne: 'कुमाख गाउँपालिका' }, location: 'Salyan', province: 'Karnali Province' },
    { id: 12, image: '/emblemofNepal.png', name: { en: 'Janaki Rural Municipality', ne: 'जानकी गाउँपालिका' }, location: 'Banke', province: 'Sudurpashchim Province' },
    { id: 13, image: '/emblemofNepal.png', name: { en: 'Dungeshwar Rural Municipality', ne: 'डुङ्गेश्वर गाउँपालिका' }, location: 'Dailekh', province: 'Karnali Province' },
    { id: 14, image: '/emblemofNepal.png', name: { en: 'Baijnath Rural Municipality', ne: 'बैजनाथ गाउँपालिका' }, location: 'Banke', province: 'Sudurpashchim Province' },
    { id: 15, image: '/emblemofNepal.png', name: { en: 'Laljhadi Rural Municipality', ne: 'लालझाडी गाउँपालिका' }, location: 'Kanchanpur', province: 'Sudurpashchim Province' },
    { id: 16, image: '/emblemofNepal.png', name: { en: 'Rajpur Rural Municipality', ne: 'राजपुर गाउँपालिका' }, location: 'Dang', province: 'Sudurpashchim Province' },
    { id: 17, image: '/emblemofNepal.png', name: { en: 'Narainapur Rural Municipality', ne: 'नरैनापुर गाउँपालिका' }, location: 'Banke', province: 'Sudurpashchim Province' },
    { id: 18, image: '/emblemofNepal.png', name: { en: 'Putha Uttarganga Rural Municipality', ne: 'पुथा उत्तरगंगा गाउँपालिका' }, location: 'Rukum', province: 'Gandaki Province' },
    { id: 19, image: '/emblemofNepal.png', name: { en: 'Chingad Rural Municipality', ne: 'चिङ्गाड गाउँपालिका' }, location: 'Surkhet', province: 'Karnali Province' },
    { id: 20, image: '/emblemofNepal.png', name: { en: 'Himali Rural Municipality', ne: 'हिमाली गाउँपालिका' }, location: 'Bajura', province: 'Sudurpashchim Province' },
    { id: 21, image: '/emblemofNepal.png', name: { en: 'Nepalgunj Sub-Metropolitan City', ne: 'नेपालगंज उपमहानगरपालिका' }, location: 'Banke', province: 'Sudurpashchim Province' },
    { id: 22, image: '/emblemofNepal.png', name: { en: 'Khajura Municipality', ne: 'खजुरा नगरपालिका' }, location: 'Banke', province: 'Sudurpashchim Province' },
    { id: 23, image: '/emblemofNepal.png', name: { en: 'Kohalpur Municipality', ne: 'कोहलपुर नगरपालिका' }, location: 'Banke', province: 'Sudurpashchim Province' },
    { id: 24, image: '/emblemofNepal.png', name: { en: 'Mudkechula Rural Municipality', ne: 'मुड्केचुला गाउँपालिका' }, location: 'Dolpa', province: 'Karnali Province' },
    { id: 25, image: '/emblemofNepal.png', name: { en: 'Bagchaur Municipality', ne: 'बागचौर नगरपालिका' }, location: 'Salyan', province: 'Karnali Province' },
    { id: 26, image: '/emblemofNepal.png', name: { en: 'Ministry of Land Management', ne: 'भूमि व्यवस्था, कृषि तथा सहकारी मन्त्रालय' }, location: 'Janakpur', province: 'Madhesh Province' },
    { id: 27, image: '/emblemofNepal.png', name: { en: 'Ministry of Agriculture and Land Management', ne: 'कृषि तथा भूमि व्यवस्था मन्त्रालय' }, location: 'Pokhara', province: 'Gandaki Province' },
    { id: 28, image: '/emblemofNepal.png', name: { en: 'Ministry of Land Management, Agriculture and Cooperatives', ne: 'भूमि व्यवस्था, कृषि तथा सहकारी मन्त्रालय' }, location: 'Birendranagar', province: 'Karnali Province' },
    { id: 29, image: '/emblemofNepal.png', name: { en: 'Ministry of Physical Infrastructure and Urban Development', ne: 'भौतिक पूर्वाधार तथा शहरी विकास मन्त्रालय' }, location: 'Birendranagar', province: 'Karnali Province' },
    { id: 30, image: '/emblemofNepal.png', name: { en: 'Ministry of Industry, Tourism, Forest and Environment', ne: 'उद्योग, पर्यटन, वन तथा वातावरण मन्त्रालय' }, location: 'Dhangadhi', province: 'Sudurpashchim Province' },
    { id: 31, image: '/emblemofNepal.png', name: { en: 'Budhanilkantha Municipality', ne: 'बुढानीलकण्ठ नगरपालिका' }, location: 'Kathmandu', province: 'Bagmati Province' },
    { id: 32, image: '/savetheChildren.png', name: { en: 'Save the Children', ne: 'सेभ द चिल्ड्रेन' }, location: 'Kathmandu', province: 'Bagmati Province' },
    { id: 33, image: '/tribhuvanUniversity.png', name: { en: 'Tribhuvan University', ne: 'त्रिभुवन विश्वविद्यालय' }, location: 'Kirtipur', province: 'Bagmati Province' },
    { id: 34, image: '/emblemofNepal.png', name: { en: 'Rajpur Rural Municipality', ne: 'राजपुर गाउँपालिका' }, location: 'Dang', province: 'Sudurpashchim Province' },
    { id: 35, image: '/emblemofNepal.png', name: { en: 'Madhuban Municipality', ne: 'मधुवन नगरपालिका' }, location: 'Bardiya', province: 'Sudurpashchim Province' },
    { id: 36, image: '/emblemofNepal.png', name: { en: 'Department of Industry', ne: 'उद्योग विभाग' }, location: 'Tripureshwor', province: 'Bagmati Province' },
    { id: 37, image: '/emblemofNepal.png', name: { en: 'Directorate of Agricultural Development', ne: 'कृषि विकास निर्देशनालय' }, location: 'Pokhara', province: 'Gandaki Province' },
    { id: 38, image: '/emblemofNepal.png', name: { en: 'Directorate of Health Services', ne: 'स्वास्थ्य सेवा निर्देशनालय' }, location: 'Birendranagar', province: 'Karnali Province' },
    { id: 39, image: '/emblemofNepal.png', name: { en: 'Adarsha Rural Municipality', ne: 'आदर्श गाउँपालिका'}, location: 'Doti', province: 'Sudurpashchim Province' },
    { id: 40, image: '/emblemofNepal.png', name: { en: 'Suryabinayak Municipality', ne: 'सूर्यविनायक नगरपालिका' }, location: 'Bhaktapur', province: 'Bagmati Province' },
    { id: 41, image: '/emblemofNepal.png', name: { en: 'Lalitpur Metropolitan City', ne: 'ललितपुर महानगरपालिका' }, location: 'Lalitpur', province: 'Bagmati Province' },
    { id: 42, image: '/emblemofNepal.png', name: { en: 'Agriculture Research Directorate', ne: 'कृषि अनुशन्धान निर्देशनालय' }, location: 'Nepalgunj', province: 'Sudurpashchim Province' },
    { id: 43, image: '/emblemofNepal.png', name: { en: 'Directorate of Agriculture Development', ne: 'कृषि विकास निर्देशनालय' }, location: 'Birendranagar', province: 'Karnali Province' },
    { id: 44, image: '/emblemofNepal.png', name: { en: 'Directorate of Agriculture Development', ne: 'कृषि विकास निर्देशनालय' }, location: 'Dhangadhi', province: 'Sudurpashchim Province' },
    { id: 45, image: '/emblemofNepal.png', name: { en: 'Directorate of Livestock Development', ne: 'पशुपंक्षी विकास निर्देशनालय' }, location: 'Dhangadhi', province: 'Sudurpashchim Province' },
    { id: 46, image: '/KathmanduUniversity.png', name: { en: 'Kathmandu University', ne: 'काठमाडौं विश्वविद्यालय' }, location: 'Dhulikhel', province: 'Bagmati Province' },
];
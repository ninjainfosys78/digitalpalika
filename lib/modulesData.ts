import {
    ScrollText,
    Building2,
    Fuel,
    MessageSquareWarning,
    CalendarCheck,
    Home,
    Briefcase,
    FileCheck,
    IdCard,
    GraduationCap,
    Gavel,
    ClipboardCheck,
    HandCoins,
    Calculator,
    Landmark,
    PhoneCall,
    BarChart3,
    Newspaper,
    FileWarning,
    Smartphone,
    type LucideIcon,
} from "lucide-react";
import type { LocalizedString } from "@/context/LanguageContext";

export interface StaticModule {
    id: string;
    name: LocalizedString;
    icon: LucideIcon;
}

export const modulesData: StaticModule[] = [
    { id: "digital-citizen-charter", name: { en: "Digital Citizen Charter", ne: "डिजिटल नागरिक बडापत्र" }, icon: ScrollText },
    { id: "office-automation", name: { en: "Office Automation", ne: "अफिस अटोमेसन" }, icon: Building2 },
    { id: "fuel-management-system", name: { en: "Fuel Management System", ne: "इन्धन व्यवस्थापन प्रणाली" }, icon: Fuel },
    { id: "grievance-portal", name: { en: "Grievance Portal", ne: "गुनासो पोर्टल" }, icon: MessageSquareWarning },
    { id: "meeting-system", name: { en: "Meeting System", ne: "बैठक प्रणाली" }, icon: CalendarCheck },
    { id: "digital-house-map-pass", name: { en: "Digital House Map Pass", ne: "विद्युतीय घर नक्सा पास" }, icon: Home },
    { id: "institution-business-registration", name: { en: "Institution/Business Registration", ne: "संस्था/ व्यवसाय दर्ता" }, icon: Briefcase },
    { id: "recommendation", name: { en: "Recommendation", ne: "सिफारिस" }, icon: FileCheck },
    { id: "digital-card-system", name: { en: "Digital Card System", ne: "डिजिटल कार्ड प्रणाली" }, icon: IdCard },
    { id: "training-and-roster-system", name: { en: "Training and Roster System", ne: "तालिम तथा रोस्टर प्रणाली" }, icon: GraduationCap },
    { id: "court-judicial", name: { en: "Court (Judicial)", ne: "इजलास (न्यायिक)" }, icon: Gavel },
    { id: "planning-management-system", name: { en: "Planning Management System", ne: "योजना व्यवस्थापन प्रणाली" }, icon: ClipboardCheck },
    { id: "grant-management", name: { en: "Grant Management", ne: "अनुदान व्यवस्थापन" }, icon: HandCoins },
    { id: "estimate-system", name: { en: "Estimate System", ne: "Estimate सिस्टम" }, icon: Calculator },
    { id: "digital-lg-profile", name: { en: "Digital LG Profile", ne: "डिजिटल एल. जी प्रोफाइल" }, icon: Landmark },
    { id: "digital-avr-call-system", name: { en: "Digital AVR Call System", ne: "डिजिटल AVR Call System" }, icon: PhoneCall },
    { id: "monitoring-and-evaluation-system", name: { en: "Monitoring and Evaluation System", ne: "अनुगमन र मूल्यांकन प्रणाली" }, icon: BarChart3 },
    { id: "municipality-news-portal", name: { en: "Municipality News Portal", ne: "पालिका न्यूज पोर्टल" }, icon: Newspaper },
    { id: "irregularity-management", name: { en: "Irregularity Management", ne: "बेरुजू व्यवस्थापन" }, icon: FileWarning },
    { id: "mobile-application", name: { en: "Mobile Application", ne: "Mobile Application" }, icon: Smartphone },
];

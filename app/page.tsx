"use client";

import { Fragment, useState, useEffect } from 'react';
import { Header } from '@/components/header';
import Footer from '@/components/footer';
import { LanguageProvider } from '@/context/LanguageContext';
import Hero from '@/components/hero';
import Stats from '@/components/stats';
import FeatureRail from '@/components/features-rail';
import WhyDigitalPalika from '@/components/why-digital-palika';
import Demo from '@/components/demo';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}

const HomeContent = () => {
   const [showScrollTop, setShowScrollTop] = useState(false);

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

   return (
     <Fragment>
       <Header />

       <Hero />

       <div id="stats" style={{ position: 'relative', top: '-80px' }}></div>

       <Stats />

       <FeatureRail />

       <WhyDigitalPalika />

       <Demo />

       <Footer />

       {showScrollTop && (
         <button
           onClick={handleScrollToTop}
           className="fixed bottom-4 sm:bottom-6 md:bottom-10 right-4 sm:right-6 md:right-10 p-2 sm:p-3 rounded-full bg-white text-[#003893] shadow-lg hover:bg-gray-100 transition-all duration-300 z-50"
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
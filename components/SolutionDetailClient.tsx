"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import GlobalCTA from "@/components/global-cta";
import dynamic from "next/dynamic";

const OfficesModal = dynamic(() => import("@/components/offices-modal"), {
  ssr: false,
});

export default function SolutionDetailClient({ solution, bannerUrl }: { solution: any, bannerUrl: string | null }) {
  const [officesOpen, setOfficesOpen] = useState(false);

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grayscale opacity-40">
           {bannerUrl && (
             <Image 
               src={bannerUrl} 
               alt="Banner" 
               fill 
               className="object-cover"
             />
           )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black" />
        
        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-16 mt-12">
          <Link 
            href="/solutions" 
            className="inline-flex items-center gap-2 text-white/60 hover:text-[#d52020] transition-colors mb-12 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest">Back to Solutions</span>
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-8xl font-heading font-bold text-white leading-tight tracking-tighter mb-8">
              {solution.title_en}
            </h1>
            <p className="text-xl lg:text-3xl text-white/70 font-light leading-relaxed max-w-2xl">
              {solution.description_en}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
               <div className="space-y-6">
                 <h2 className="text-[12px] font-bold uppercase tracking-[0.4em] text-[#d52020]">Deep Dive</h2>
                 <h3 className="text-3xl lg:text-5xl font-heading font-bold">Engineering for <span className="text-[#d52020]">Scale</span></h3>
               </div>
               
               <p className="text-lg text-white/60 leading-relaxed max-w-xl">
                 Our approach to {solution.title_en} focuses on creating resilient, high-performance architectures that grow with your needs. We emphasize security, data integrity, and a seamless user experience across all digital touchpoints.
               </p>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                  <div className="p-8 border border-white/10 bg-white/5 hover:border-[#d52020]/30 transition-colors">
                     <h4 className="text-lg font-bold mb-4">Security First</h4>
                     <p className="text-sm text-white/50">End-to-end encryption and robust authentication protocols integrated into the core.</p>
                  </div>
                  <div className="p-8 border border-white/10 bg-white/5 hover:border-[#d52020]/30 transition-colors">
                     <h4 className="text-lg font-bold mb-4">Cloud Native</h4>
                     <p className="text-sm text-white/50">Built to scale automatically with modern cloud infrastructures and microservices.</p>
                  </div>
               </div>
            </div>

            <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden rounded-none border border-white/10">
               {solution.imageUrl && (
                 <Image 
                   src={solution.imageUrl} 
                   alt={solution.title_en} 
                   fill 
                   className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                 />
               )}
            </div>
          </div>
        </div>
      </section>

      <GlobalCTA onOfficesOpen={() => setOfficesOpen(true)} />
      
      {officesOpen && (
        <OfficesModal
          isOpen={officesOpen}
          onClose={() => setOfficesOpen(false)}
        />
      )}
    </main>
  );
}

"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface CarouselItem {
  id: string;
  title: string;
  category: string;
  image: string;
  link: string;
  description: string;
}

const ITEMS: CarouselItem[] = [
  {
    id: "1",
    category: "Operations",
    title: "The Future of Smart Manufacturing",
    description: "How AI and IoT are redefining the factory floor for the next decade of production.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600",
    link: "/blogs/smart-manufacturing",
  },
  {
    id: "2",
    category: "Sustainability",
    title: "Accelerating the Net-Zero Transition",
    description: "Strategic frameworks for organizations to achieve carbon neutrality while maintaining growth.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1600",
    link: "/blogs/net-zero",
  },
  {
    id: "3",
    category: "Digital",
    title: "Unlocking Value in the Metaverse",
    description: "Exploring the commercial potential and social implications of persistent virtual environments.",
    image: "/assets/insights/metaverse.jpeg",
    link: "/blogs/metaverse-value",
  },
];

export default function FeaturedCarousel() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % ITEMS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + ITEMS.length) % ITEMS.length);
  }, []);

  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(next, 6000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next, isHovered]);

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-black group"
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
      
      {/* Slides */}
      {ITEMS.map((item, idx) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              priority={idx === 0}
            />
            <div className="absolute inset-0 bg-black/25 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 2xl:px-16 flex flex-col justify-center">
            <div className={`max-w-2xl transform transition-transform duration-1000 ${
              idx === current ? "translate-y-0" : "translate-y-10"
            }`}>
              <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#006FB7] mb-4">
                {item.category}
              </div>
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                {item.title}
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                {item.description}
              </p>
              <Link
                href={item.link}
                className="inline-flex items-center gap-3 text-white font-bold group/btn"
              >
                <span className="text-lg underline underline-offset-8 decoration-2 decoration-[#006FB7] group-hover/btn:decoration-white transition-colors">
                  Read more
                </span>
                <ArrowRight className="mt-1 transition-transform group-hover/btn:translate-x-2" />
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <div className="absolute bottom-12 left-6 sm:left-8 lg:left-12 2xl:left-16 z-20 flex items-center gap-4">
        <button
          onClick={prev}
          className="p-3 border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className="p-3 border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
        
        {/* Indicators */}
        <div className="ml-8 flex gap-2">
          {ITEMS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-[2px] transition-all duration-500 ${
                idx === current ? "w-12 bg-[#006FB7]" : "w-6 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

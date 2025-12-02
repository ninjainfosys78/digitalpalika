"use client";

import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { fetchTrustedLogos, TrustedLogoRecord } from "@/lib/trustedby";

export default function TrustedBy() {
  const { language } = useLanguage();
  const [logos, setLogos] = useState<TrustedLogoRecord[]>([]);
  const [dbg, setDbg] = useState({
    innerWidth: 0,
    parentWidth: 0,
    animationName: "",
    animationPlayState: "",
    reducedMotion: false,
  });

  const marqueeRootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetchTrustedLogos()
      .then((data) => {
        if (cancelled) return;
        setLogos(data);
      })
      .catch(() => {
        if (cancelled) return;
        setLogos([]);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const list = logos;

  return (
    <section className="pt-6 pb-10 bg-black -mt-0 relative z-[5]">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <div
          ref={marqueeRootRef as any}
          className="marquee mt-6"
          aria-hidden={false}
          aria-label={language === "ne" ? "विश्वास गर्ने लोगोहरू" : "Trusted logos"}
        >
          <div className="marquee__inner" role="presentation">
            <div className="marquee__group" aria-hidden="true">
              {list.map((item, idx) => (
                <div className="marquee__item" key={`g1-${item.id}-${idx}`}>
                  <img
                    src={item.logo}
                    alt={item.logoName}
                    onError={(e) => {
                      const el = e.currentTarget as HTMLImageElement;
                      el.classList.add("hidden");
                      const parent = el.parentElement;
                      if (parent) {
                        const fb = parent.querySelector(".trusted-fallback") as HTMLElement | null;
                        if (fb) fb.classList.remove("hidden");
                      }
                    }}
                    className="h-14 w-auto object-contain block"
                  />
                  <div className="trusted-fallback hidden text-gray-300 text-center">
                    {item.logoName}
                  </div>
                </div>
              ))}
            </div>

            <div className="marquee__group" aria-hidden="true">
              {list.map((item, idx) => (
                <div className="marquee__item" key={`g2-${item.id}-${idx}`}>
                  <img
                    src={item.logo}
                    alt={item.logoName}
                    onError={(e) => {
                      const el = e.currentTarget as HTMLImageElement;
                      el.classList.add("hidden");
                      const parent = el.parentElement;
                      if (parent) {
                        const fb = parent.querySelector(".trusted-fallback") as HTMLElement | null;
                        if (fb) fb.classList.remove("hidden");
                      }
                    }}
                    className="h-14 w-auto object-contain block"
                  />
                  <div className="trusted-fallback hidden text-gray-300 text-center">
                    {item.logoName}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          id="trusted-by-debug"
          className="hidden absolute right-2 top-2 z-[60] bg-black/60 text-white text-xs px-2 py-1 rounded-md pointer-events-none leading-[1.2]"
          aria-hidden="true"
        >
          <DebugInfo dbg={dbg} />
        </div>

        <MarqueeDebugger setDbg={setDbg} marqueeRootRef={marqueeRootRef} />

        <style>{`
          .marquee {
            overflow: hidden;
            width: 100%;
            position: relative;
            -webkit-mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
                    mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
          }

          .marquee__inner {
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            animation: marquee-scroll 18s linear infinite;
            animation-timing-function: linear;
            will-change: transform;
            transform: translate3d(0,0,0);
          }

          .marquee__group {
            display: flex;
            gap: 24px;
            align-items: center;
            flex: 0 0 auto;
            white-space: nowrap;
          }

          .marquee__item {
            flex: 0 0 auto;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 120px;
            padding: 6px 8px;
            box-sizing: border-box;
            transition: transform 220ms ease, opacity 220ms ease;
            will-change: transform, opacity;
            opacity: 1;
          }

          .marquee__item img {
            display: block;
            height: 56px;
            width: auto;
            max-width: 100%;
            object-fit: contain;
            transition: opacity 300ms ease, transform 300ms ease;
            will-change: opacity, transform;
          }

          .marquee:hover .marquee__inner,
          .marquee:focus-within .marquee__inner {
            animation-play-state: paused;
          }

          @keyframes marquee-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @media (max-width: 640px) {
            .marquee__group { gap: 12px; }
            .marquee__item { min-width: 90px; padding: 6px 6px; }
            .marquee__inner { animation-duration: 26s; }
          }
        `}</style>
      </div>
    </section>
  );
}

function DebugInfo({ dbg }: { dbg: any }) {
  return (
    <div>
      <div>inner: {Math.round(dbg.innerWidth)}px</div>
      <div>parent: {Math.round(dbg.parentWidth)}px</div>
      <div>anim: {dbg.animationName || "—"}</div>
      <div>state: {dbg.animationPlayState || "—"}</div>
      <div>reduced: {dbg.reducedMotion ? "yes" : "no"}</div>
    </div>
  );
}

function MarqueeDebugger({
  setDbg,
  marqueeRootRef,
}: {
  setDbg: (v: any) => void;
  marqueeRootRef?: React.RefObject<HTMLElement | null>;
}) {
  useEffect(() => {
    let rafId: number | null = null;

    const update = () => {
      const inner = document.querySelector(".marquee__inner") as HTMLElement | null;
      const parent = inner?.parentElement as HTMLElement | null;
      const computed = inner ? getComputedStyle(inner) : null;
      const animationName = computed ? computed.animationName : "";
      const animationPlayState = computed ? computed.animationPlayState : "";
      const innerW = inner ? inner.getBoundingClientRect().width : 0;
      const parentW = parent ? parent.getBoundingClientRect().width : 0;
      const reducedMotion =
        window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setDbg({
        innerWidth: innerW,
        parentWidth: parentW,
        animationName,
        animationPlayState,
        reducedMotion,
      });
      console.log("TrustedBy debug:", {
        innerW,
        parentW,
        animationName,
        animationPlayState,
        reducedMotion,
      });

      const needJSFallback =
        reducedMotion ||
        animationPlayState === "paused" ||
        animationName === "none" ||
        (innerW && parentW && innerW <= parentW + 1);

      if (!inner) return;

      if (!needJSFallback) {
        inner.style.animation = "marquee-scroll 18s linear infinite";
        inner.style.transform = "";
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
        return;
      }

      inner.style.animation = "none";
      const groupWidth = inner.scrollWidth / 2 || 0;
      if (!groupWidth) return;
      const speed = 50;
      let start = performance.now();

      const step = (time: number) => {
        const elapsed = (time - start) / 1000;
        const shift = (elapsed * speed) % groupWidth;
        inner.style.transform = `translateX(-${shift}px)`;
        rafId = requestAnimationFrame(step);
      };
      if (!rafId) rafId = requestAnimationFrame(step);
    };

    update();
    window.addEventListener("resize", update);
    const obs = new MutationObserver(update);
    const root = marqueeRootRef?.current ?? document.querySelector(".marquee");
    if (root) obs.observe(root, { childList: true, subtree: true });
    return () => {
      window.removeEventListener("resize", update);
      obs.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [setDbg, marqueeRootRef]);
  return null;
}

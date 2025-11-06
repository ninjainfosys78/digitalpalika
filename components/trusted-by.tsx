"use client";

// small runtime diagnostics to help debug marquee animation on some machines
import { useEffect, useState, useRef } from "react";

// trusted items: put your images in public/logos/ with the filenames below
const trustedList = {
  en: [
    { name: "Kathmandu Metropolitan City", img: "/kathamndu-mahanagarpalika.png" },
    { name: "Pokhara Metropolitan City", img: "/pokhara-mahanagarpalika.png" },
    { name: "LB Mall & Company", img: "/LB-mall.png" },
    { name: "ISRC", img: "/isrc.png" },
    { name: "Vumi Engineering Consortium", img: "/vumi-engineering.png" },
    { name: "Phonepay", img: "/fone-pay.png" },
    { name: "Aakash SMS", img: "/aakash-sms.png" },
    { name: "Prabhu Bank", img: "/prabhu-bank.png" },
    { name: "Government of Nepal", img: "/nepal-sarkar.png" },
  ],
  // Nepali labels reuse the same image files (change if you have different assets)
  ne: [
    { name: "काठमाडौं महानगरपालिका", img: "/logos/kathmandu-metropolitan-city.png" },
    { name: "पोखरा महानगरपालिका", img: "/logos/pokhara-metropolitan-city.png" },
    { name: "एलबी मल्ल एण्ड कम्पनी", img: "/logos/lb-mall-company.png" },
    { name: "आईएसआरसी", img: "/logos/isrc.png" },
    { name: "भूमि इन्जिनियरिङ कन्सोर्टियम", img: "/logos/vumi-engineering-consortium.png" },
    { name: "फोनपे", img: "/logos/phonepay.png" },
    { name: "आकाश एसएमएस", img: "/logos/aakash-sms.png" },
    { name: "प्रभु बैंक", img: "/logos/prabhu-bank.png" },
    { name: "नेपाल सरकार", img: "/logos/government-of-nepal.png" },
  ],
};

interface TrustedByProps {
  language: "en" | "ne";
}

export default function TrustedBy({ language }: TrustedByProps) {
  const list = trustedList[language]; // array of { name, img }
  const [dbg, setDbg] = useState({
    innerWidth: 0,
    parentWidth: 0,
    animationName: "",
    animationPlayState: "",
    reducedMotion: false,
  });

  // ref for the marquee container so JS can animate if needed
  const marqueeRootRef = useRef<HTMLElement | null>(null)
  // (removed manual force toggle) - fallback will run automatically if CSS animation is unavailable

  return (
    <section className="pt-6 pb-10 bg-black -mt-8 relative z-[5]">
      {/* pulled up to overlap hero and remove gap */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* animated marquee: two identical groups inside a moving container for a continuous loop */}
        <div
          ref={marqueeRootRef as any}
          className="marquee mt-6"
          aria-hidden={false}
          aria-label={language === "ne" ? "विश्वास गर्ने लोगोहरू" : "Trusted logos"}
        >
          <div className="marquee__inner" role="presentation">
            {/* first group */}
            <div className="marquee__group" aria-hidden="true">
              {list.map((item, idx) => (
                <div className="marquee__item" key={`g1-${item.img}-${idx}`}>
                  <img
                    src={item.img}
                    alt={item.name}
                    onError={(e) => {
                      const el = e.currentTarget as HTMLImageElement;
                      // use Tailwind utility class toggles instead of direct style writes
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
                    {item.name}
                  </div>
                </div>
              ))}
            </div>

            {/* second identical group for seamless loop */}
            <div className="marquee__group" aria-hidden="true">
              {list.map((item, idx) => (
                <div className="marquee__item" key={`g2-${item.img}-${idx}`}>
                  <img
                    src={item.img}
                    alt={item.name}
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
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* debug overlay (kept in DOM but hidden) */}
        <div
          id="trusted-by-debug"
          className="hidden absolute right-2 top-2 z-[60] bg-black/60 text-white text-xs px-2 py-1 rounded-md pointer-events-none leading-[1.2]"
          aria-hidden="true"
        >
          <DebugInfo dbg={dbg} />
        </div>

        {/* runtime measurement script (hooks) */}
        <MarqueeDebugger setDbg={setDbg} marqueeRootRef={marqueeRootRef} />

        {/* marquee CSS */}
        <style>{`
          .marquee {
            overflow: hidden;
            width: 100%;
            position: relative; /* keep overlays/fades positioned relative to the bar */
            /* mask on the non-animated parent keeps the fade fixed while inner content moves */
            -webkit-mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
                    mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
          }
 
           /* Keep everything on a single line to prevent wrapping/overlap */
           .marquee__inner {
             display: flex;
             flex-wrap: nowrap;           /* prevent wrapping */
             align-items: center;
             /* animate from 0 to -50% to slide one full group width */
             animation: marquee-scroll 18s linear infinite;
             animation-timing-function: linear;
             will-change: transform;
             transform: translate3d(0,0,0);
            /* no mask here — mask lives on the parent so it doesn't move with the animation */
           }

          /* Each group must stay inline and not shrink */
          .marquee__group {
            display: flex;
            gap: 24px;                   /* slightly smaller gap to avoid crowding */
            align-items: center;
            flex: 0 0 auto;              /* do not shrink or grow */
            white-space: nowrap;         /* ensure no internal wrapping */
          }

          /* Add small transitions on the items so they feel smoother when coming/going.
             These transitions are subtle and won't affect the primary CSS translate animation. */
          .marquee__item {
            flex: 0 0 auto;              /* preserve intrinsic size */
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 120px;           /* comfortable minimum */
            padding: 6px 8px;           /* tighter padding */
            box-sizing: border-box;
            transition: transform 220ms ease, opacity 220ms ease;
            will-change: transform, opacity;
            opacity: 1;
          }

          /* Ensure images don't overflow their item and stay block-level.
             Use a small transition on opacity/transform to make them feel smoother. */
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

        {/* removed small spacer to eliminate gap */}
      </div>

      {/* removed marquee CSS since list is now static horizontal */}
    </section>
  );
}

// small component to render debug info
function DebugInfo({ dbg }: { dbg: any }) {
  return (
    <div>
      <div>inner: {Math.round(dbg.innerWidth)}px</div>
      <div>parent: {Math.round(dbg.parentWidth)}px</div>
      <div>anim: {dbg.animationName || "—"}</div>
      <div>state: {dbg.animationPlayState || "—"}</div>
      <div>reduced: {dbg.reducedMotion ? "yes" : "no"}</div>
    </div>
  )
}

// hook-like helper component (keeps file client-side)
function MarqueeDebugger({
  setDbg,
  marqueeRootRef,
}: {
  setDbg: (v: any) => void
  marqueeRootRef?: React.RefObject<HTMLElement | null>
}) {
  useEffect(() => {
    let rafId: number | null = null

    const update = () => {
      const inner = document.querySelector(".marquee__inner") as HTMLElement | null
      const parent = inner?.parentElement as HTMLElement | null
      const computed = inner ? getComputedStyle(inner) : null
      const animationName = computed ? computed.animationName : ""
      const animationPlayState = computed ? computed.animationPlayState : ""
      const innerW = inner ? inner.getBoundingClientRect().width : 0
      const parentW = parent ? parent.getBoundingClientRect().width : 0
      const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches
      setDbg({
        innerWidth: innerW,
        parentWidth: parentW,
        animationName,
        animationPlayState,
        reducedMotion,
      })
      console.log("TrustedBy debug:", { innerW, parentW, animationName, animationPlayState, reducedMotion })

      // Decide if we must use JS fallback:
      // - browser/OS requested reduced-motion
      // - computed animation is paused or not present
      // - or track width is less/equal than container (so CSS translate may appear static)
      const needJSFallback =
        reducedMotion ||
        animationPlayState === "paused" ||
        animationName === "none" ||
        (innerW && parentW && innerW <= parentW + 1)

      if (!inner) return

      if (!needJSFallback) {
        // ensure CSS animation is active
        inner.style.animation = "marquee-scroll 18s linear infinite"
        inner.style.transform = ""
        if (rafId) {
          cancelAnimationFrame(rafId)
          rafId = null
        }
        return
      }

      // Use JS rAF fallback to animate
      inner.style.animation = "none"
      const groupWidth = inner.scrollWidth / 2 || 0
      if (!groupWidth) return
      const speed = 50 // px per second (adjust speed)
      let start = performance.now()

      const step = (time: number) => {
        const elapsed = (time - start) / 1000
        const shift = (elapsed * speed) % groupWidth
        inner.style.transform = `translateX(-${shift}px)`
        rafId = requestAnimationFrame(step)
      }
      if (!rafId) rafId = requestAnimationFrame(step)
    }

    update()
    window.addEventListener("resize", update)
    const obs = new MutationObserver(update)
    const root = marqueeRootRef?.current ?? document.querySelector(".marquee")
    if (root) obs.observe(root, { childList: true, subtree: true })
    return () => {
      window.removeEventListener("resize", update)
      obs.disconnect()
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [setDbg, marqueeRootRef])
  return null
}

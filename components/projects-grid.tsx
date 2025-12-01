"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { fetchProjects, ProjectItem, ProjectCategory } from "@/lib/projects";

type Lang = "en" | "ne";
type Cat = "All" | ProjectCategory;
type Variant = "work" | "solutions";

interface ProjectsGridProps {
  language: Lang;
  title: string;
  variant?: Variant;
}

export default function ProjectsGrid({
  language,
  title,
  variant = "work",
}: ProjectsGridProps) {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [projActive, setProjActive] = useState<Cat>("All");
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    let mounted = true;
    fetchProjects()
      .then((data) => {
        if (mounted) setProjects(data);
      })
      .catch((err) => {
        console.error("Error loading projects from PocketBase", err);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const categoryLabels = useMemo(() => {
    const map = new Map<
      string,
      {
        en: string;
        ne: string;
      }
    >();

    projects.forEach((p) => {
      const key = p.category_en || "";
      if (!key) return;
      if (!map.has(key)) {
        map.set(key, {
          en: p.category_en,
          ne: p.category_ne || p.category_en,
        });
      }
    });

    return map;
  }, [projects]);

  const filters: Cat[] = useMemo(() => {
    const unique: string[] = [];
    projects.forEach((p) => {
      const key = p.category_en || "";
      if (!key) return;
      if (!unique.includes(key)) unique.push(key);
    });
    return ["All", ...unique];
  }, [projects]);

  const translateCat = (cat: Cat) => {
    if (cat === "All") return language === "en" ? "All" : "सबै";
    const entry = categoryLabels.get(cat);
    if (!entry) return cat;
    return language === "en" ? entry.en : entry.ne;
  };

  const filtered = useMemo(
    () =>
      projActive === "All"
        ? projects
        : projects.filter((p) => p.category_en === projActive),
    [projActive, projects]
  );

  const isWork = variant === "work";

  useEffect(() => {
    setProjActive("All");
  }, [language]);

  return (
    <>
      <header className="flex items-center justify-between gap-4">
        <h2
          className={
            isWork
              ? "font-semibold text-[32px]"
              : "text-2xl font-semibold text-white"
          }
        >
          {title}
        </h2>

        <div className="relative flex items-center gap-2">
          <button
            onClick={() => {
              setProjActive("All");
              setFilterOpen(false);
            }}
            className={
              isWork
                ? `px-4 py-2 text-sm font-medium border transition-colors ${
                    projActive === "All"
                      ? "border-[#e3e3e3] text-[#e3e3e3]"
                      : "border-[#000000]/20 text-[#e3e3e3] hover:border-[#e3e3e3]/60"
                  }`
                : `px-4 py-2 text-sm font-medium border rounded-[4px] transition-colors ${
                    projActive === "All"
                      ? "border-white text-white"
                      : "border-white/30 text-white hover:border-white/60"
                  }`
            }
          >
            {language === "en" ? "All" : "सबै"}
          </button>

          <button
            onClick={() => setFilterOpen((s) => !s)}
            aria-expanded={filterOpen}
            className={
              isWork
                ? "px-4 py-2 text-sm font-medium border inline-flex items-center gap-1"
                : "px-4 py-2 text-sm font-medium border border-white/30 text-white hover:border-white/60 inline-flex items-center gap-1 rounded-[4px]"
            }
          >
            {language === "en" ? "Filter" : "फिल्टर"}
            <ChevronDown
              size={16}
              className={`transition-transform ${
                filterOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {filterOpen && filters.length > 1 && (
            <div
              role="menu"
              className={
                isWork
                  ? "absolute right-0 top-12 w-56 border border-black/10 bg-[#000000] shadow-xl ring-1 ring-black/5 p-2 z-20"
                  : "absolute right-0 top-12 w-56 border border-white/20 bg-black text-white shadow-xl ring-1 ring-white/10 p-2 z-20 rounded-[4px]"
              }
            >
              {filters
                .filter((c) => c !== "All")
                .map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      setProjActive(c);
                      setFilterOpen(false);
                    }}
                    role="menuitem"
                    aria-selected={projActive === c}
                    className={
                      isWork
                        ? `w-full cursor-pointer text-left px-3 py-2 text-sm transition-colors ${
                            projActive === c
                              ? "text-[#141414] font-medium bg-ni-paper"
                              : "text-[#e3e3e3]/90"
                          } hover:bg-[#141414] hover:text-[#e3e3e3] hover:border hover:border-white focus:outline-none focus:ring-2 focus:ring-white/30`
                        : `w-full cursor-pointer text-left px-3 py-2 rounded-[4px] text-sm transition-colors ${
                            projActive === c
                              ? "bg-white text-black"
                              : "hover:bg-white hover:text-black"
                          }`
                    }
                  >
                    {translateCat(c)}
                  </button>
                ))}
            </div>
          )}
        </div>
      </header>

      <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((p) => {
          const titleText =
            language === "en" ? p.title_en : p.title_ne || p.title_en;
          const blurbText =
            language === "en" ? p.blurb_en : p.blurb_ne || p.blurb_en;
          const imageSrc = p.image || "/placeholder.jpg";
          const categoryLabel = translateCat(p.category_en);

          return (
            <div
              key={p.id}
              className={
                isWork
                  ? "group relative block select-none overflow-hidden border border-[#e3e3e3] bg-[#000000] p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  : "group relative block select-none overflow-hidden border border-white/15 bg-black p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-white"
              }
            >
              <div
                className={
                  isWork
                    ? "relative aspect-[16/10] bg-ni-paper/60 flex items-center justify-center text-ni-slate overflow-hidden"
                    : "relative aspect-[16/10] bg-black flex items-center justify-center text-white/60 overflow-hidden"
                }
              >
                <img
                  src={imageSrc}
                  alt={titleText}
                  className="object-cover w-full h-full grayscale"
                  onError={(e) => {
                    const targ = e.currentTarget as HTMLImageElement;
                    if (targ.src.endsWith("placeholder.jpg")) return;
                    targ.src = "/placeholder.jpg";
                  }}
                />
              </div>
              <div className="p-6">
                <div
                  className={
                    isWork
                      ? "text-xs font-semibold tracking-wide text-[#e3e3e3]/80"
                      : "text-xs font-semibold tracking-wide text-white/80"
                  }
                >
                  {categoryLabel}
                </div>
                <h3 className="mt-1 text-xl py-2 font-semibold transition-colors">
                  {titleText}
                </h3>
                <p
                  className={
                    isWork ? "mt-2 text-[#e3e3e3]/80" : "mt-2 text-white/80"
                  }
                >
                  {blurbText}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

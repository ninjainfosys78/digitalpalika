// lib/insights.ts
import { getAllPostsMeta } from "@/lib/posts";
import type { InsightCard } from "@/components/insights-rail";

export async function getTopInsights(limit = 3): Promise<InsightCard[]> {
  const posts = await getAllPostsMeta(); 

  return posts.slice(0, limit).map((p) => ({
    title: p.title || p.slug,
    title_ne: p.title_ne || p.title || p.slug,
    deck: p.excerpt || p.deck || "",
    deck_ne: p.excerpt_ne || p.excerpt || p.deck || "",
    readTime: p.readTime || "",
    url: `/blogs/${p.slug}`,
    image: p.image || "",
  }));
}

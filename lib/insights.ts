import { getAllPostsMeta } from "@/lib/posts"

export function getTopInsights(limit = 3) {
  const posts = getAllPostsMeta().slice(0, limit)
  return posts.map((p) => ({
    title: p.title || p.slug,
    deck: p.excerpt || p.deck || "",
    readTime: p.readTime || "",
    url: `/blogs/${p.slug}`,
    image: p.image || "",
  }))
}
// to show top 3 insights on the homepage
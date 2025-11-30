import fs from "fs";
import path from "path";
import matter from "gray-matter";
import "server-only";
export type PostMeta = {
  slug: string;
  title: string;
  deck: string;
  readTime: string;
  kicker: string;
  date: string;
  image: string;
  excerpt: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content", "blogs");

// recursively collect *.mdx files
function walkMDXFiles(dir: string, acc: string[] = []): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      const idx = path.join(full, "index.mdx");
      if (fs.existsSync(idx)) acc.push(idx);
      else walkMDXFiles(full, acc);
    } else if (e.isFile() && e.name.endsWith(".mdx")) {
      acc.push(full);
    }
  }
  return acc;
}

function toSlug(filePath: string): string {
  const rel = path.relative(CONTENT_DIR, filePath).replace(/\\/g, "/");
  return rel.endsWith("/index.mdx")
    ? rel.replace("/index.mdx", "")
    : rel.replace(/\.mdx$/, "");
}

export function getAllPostsMeta(): PostMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = walkMDXFiles(CONTENT_DIR);

  const posts = files.map((file) => {
    const raw = fs.readFileSync(file, "utf8");
    const { data, content } = matter(raw);
    const slug = toSlug(file);

    // grab first non-empty paragraph
    const firstParagraph = content
      .split(/\n{2,}/)
      .find((p) => p.trim().length > 0)
      ?.replace(/[#>*_`~\[\]\(\)!-]/g, "")
      .trim()
      .slice(0, 220);

    const excerpt = firstParagraph
      ? firstParagraph + (firstParagraph.length >= 220 ? "..." : "")
      : "";

    return {
      slug,
      title: data.title ?? "",
      deck: "",
      readTime: data.readTime ?? "",
      kicker: data.kicker ?? "",
      date: data.date ?? "",
      image: data.image ?? "",
      excerpt,
    } as PostMeta;
  });

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

export function getPostSourceBySlug(slug: string): string | null {
  const flat = path.join(CONTENT_DIR, `${slug}.mdx`);
  const idx = path.join(CONTENT_DIR, slug, "index.mdx");
  if (fs.existsSync(flat)) return fs.readFileSync(flat, "utf8");
  if (fs.existsSync(idx)) return fs.readFileSync(idx, "utf8");
  return null;
}
//all MDX filesystem logic
// src/lib/posts.ts
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type PostMeta = {
  slug: string;
  title: string;
  deck: string;
  readTime: string;
  kicker: string;
  date: string;   // ISO or readable string
  image: string;  // /public path
};

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blogs');

// recursively collect *.mdx and .../index.mdx
function walkMDXFiles(dir: string, acc: string[] = []): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      const idx = path.join(full, 'index.mdx');
      if (fs.existsSync(idx)) acc.push(idx);
      else walkMDXFiles(full, acc);
    } else if (e.isFile() && e.name.endsWith('.mdx')) {
      acc.push(full);
    }
  }
  return acc;
}

function toSlug(filePath: string): string {
  const rel = path.relative(CONTENT_DIR, filePath).replace(/\\/g, '/');
  return rel.endsWith('/index.mdx')
    ? rel.replace('/index.mdx', '')
    : rel.replace(/\.mdx$/, '');
}

export function getAllPostsMeta(): PostMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = walkMDXFiles(CONTENT_DIR);
  const posts = files.map((file) => {
    const raw = fs.readFileSync(file, 'utf8');
    const { data } = matter(raw);
    const slug = (data.slug as string) || toSlug(file);
    return {
      slug,
      title: data.title ?? '',
      deck: data.deck ?? '',
      readTime: data.readTime ?? '',
      kicker: data.kicker ?? '',
      date: data.date ?? '',
      image: data.image ?? '',
    } as PostMeta;
  });
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

export function getPostSourceBySlug(slug: string): string | null {
  const flat = path.join(CONTENT_DIR, `${slug}.mdx`);
  const idx = path.join(CONTENT_DIR, slug, 'index.mdx');
  if (fs.existsSync(flat)) return fs.readFileSync(flat, 'utf8');
  if (fs.existsSync(idx)) return fs.readFileSync(idx, 'utf8');
  return null;
}

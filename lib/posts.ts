import "server-only";
import pb from "@/lib/pocketbase";

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

const BLOGS_COLLECTION = "Ninja_Blogs";

function getImageUrl(record: any): string {
  if (!record.Image) return "";
  return pb.files.getURL(record, record.Image);
}

function calculateReadTime(content: string): string {
  if (!content) return "";
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function buildExcerpt(content: string, maxLen = 220): string {
  const plain = content.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  if (!plain) return "";
  if (plain.length <= maxLen) return plain;
  return plain.slice(0, maxLen) + "...";
}

export async function getAllPostsMeta(): Promise<PostMeta[]> {
  const records = await pb.collection(BLOGS_COLLECTION).getFullList({
    sort: "-Published_date",
  });

  const posts: PostMeta[] = records.map((r: any) => {
    const content: string = r.Content ?? "";
    const rawSlug = r.Slug || r.Title || "insight";
    const slug = rawSlug.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-");

    return {
      slug: slug,
      title: r.Title ?? "",
      deck: "",
      readTime: r.ReadTime || calculateReadTime(content),
      kicker: r.Kicker ?? "",
      date: r.Published_date ?? "",
      image: getImageUrl(r),
      excerpt: buildExcerpt(content),
    };
  });

  // Sort by date descending
  posts.sort((a, b) => {
    const dA = new Date(a.date).getTime() || 0;
    const dB = new Date(b.date).getTime() || 0;
    return dB - dA;
  });

  return posts;
}

export async function getPostBySlug(slug: string): Promise<{
  meta: PostMeta;
  content: string;
} | null> {
  try {
    const record: any = await pb
      .collection(BLOGS_COLLECTION)
      .getFirstListItem(`Slug = "${slug}"`);

    const content: string = record.Content ?? "";

    const meta: PostMeta = {
      slug: record.Slug,
      title: record.Title ?? "",
      deck: "",
      readTime: record.ReadTime || calculateReadTime(content),
      kicker: record.Kicker ?? "",
      date: record.Published_date ?? "",
      image: getImageUrl(record),
      excerpt: buildExcerpt(content),
    };

    return { meta, content };
  } catch {
    return null;
  }
}


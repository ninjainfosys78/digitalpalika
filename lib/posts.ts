import "server-only";
import pb from "@/lib/pocketbase";

export type PostMeta = {
  slug: string;
  title: string;
  title_ne: string;
  deck: string;
  readTime: string;
  kicker: string;
  date: string;
  image: string;
  excerpt: string;
  excerpt_ne: string;
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
  if (!content) return "";
  const plain = content.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  if (!plain) return "";
  if (plain.length <= maxLen) return plain;
  return plain.slice(0, maxLen) + "...";
}

export async function getAllPostsMeta(): Promise<PostMeta[]> {
  try {
    const records = await pb.collection(BLOGS_COLLECTION).getFullList({
      sort: "-Published_date",
    });

    return records.map((r: any) => {
      const content: string = r.Content ?? "";
      const content_ne: string = r.Content_ne || content; // Fallback to EN if NE is empty
      const rawSlug = r.Slug || r.Title || "insight";
      const slug = rawSlug.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-");

      return {
        slug,
        title: r.Title ?? "",
        title_ne: r.Title_ne || r.Title || "",
        deck: "",
        readTime: r.ReadTime || calculateReadTime(content),
        kicker: r.Kicker ?? "",
        date: r.Published_date ?? "",
        image: getImageUrl(r),
        excerpt: buildExcerpt(content),
        excerpt_ne: buildExcerpt(content_ne),
      };
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<{
  meta: PostMeta;
  content: string;
  content_ne: string;
} | null> {
  try {
    const record: any = await pb
      .collection(BLOGS_COLLECTION)
      .getFirstListItem(`Slug = "${slug}"`);

    const content: string = record.Content ?? "";
    const content_ne: string = record.Content_ne || content; // Fallback to EN

    const meta: PostMeta = {
      slug: record.Slug,
      title: record.Title ?? "",
      title_ne: record.Title_ne || record.Title || "",
      deck: "",
      readTime: record.ReadTime || calculateReadTime(content),
      kicker: record.Kicker ?? "",
      date: record.Published_date ?? "",
      image: getImageUrl(record),
      excerpt: buildExcerpt(content),
      excerpt_ne: buildExcerpt(content_ne),
    };

    return { meta, content, content_ne };
  } catch (err) {
    console.error(`Error details for slug ${slug}:`, err);
    return null;
  }
}

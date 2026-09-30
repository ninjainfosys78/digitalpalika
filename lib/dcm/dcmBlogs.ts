import type { Language } from "@/context/LanguageContext";

export const BLOGS_CONTENT_SLUG = "digital-blogs";

export interface DcmBlogItem {
  id: string;
  slug: string;
  name: string;
  eng_name: string | null;
  description: string | null;
  eng_description: string | null;
  published_date: string | null;
  created_at: string;
}

export interface BlogItem {
  id: string;
  slug: string;
  title: Record<Language, string>;
  summary: Record<Language, string>;
  publishedDate: string;
}

export function toBlogItem(item: DcmBlogItem): BlogItem {
  const description = item.description ?? "";
  return {
    id: item.id,
    slug: item.slug,
    title: { ne: item.name, en: item.eng_name || item.name },
    summary: { ne: description, en: item.eng_description || description },
    publishedDate: item.published_date ?? item.created_at,
  };
}

export interface DcmBlogFile {
  id: string;
  file_url: string;
  mime_type: string;
}

export interface DcmBlogDetail extends DcmBlogItem {
  files: DcmBlogFile[];
}

export interface BlogDetail extends BlogItem {
  imageUrls: string[];
}

export function toBlogDetail(item: DcmBlogDetail): BlogDetail {
  const imageUrls = (item.files ?? []).filter(file => file.mime_type.startsWith("image/")).map(file => file.file_url);
  return { ...toBlogItem(item), imageUrls };
}

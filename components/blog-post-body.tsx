// components/blog-post-body.tsx
import { SafeMDX } from "@/lib/safe-mdx";

export default function BlogPostBody({ source }: { source: string }) {
  const trimmed = source.trim();

  const isLikelyHtml =
    trimmed.startsWith("<") ||
    trimmed.includes("</p>") ||
    trimmed.includes("<br");

  if (isLikelyHtml) {
    return (
      <article className="prose prose-invert prose-lg max-w-none leading-relaxed mt-6">
        <div dangerouslySetInnerHTML={{ __html: source }} />
      </article>
    );
  }

  return (
    <article className="prose prose-invert prose-lg max-w-none leading-relaxed mt-6">
      <div dangerouslySetInnerHTML={{ __html: source }} />
    </article>
  );
}

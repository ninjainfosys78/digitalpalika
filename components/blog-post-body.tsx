import { SafeMDX } from "@/lib/safe-mdx";

export default function BlogPostBody({ source }: { source: string }) {
  return (
    <article className="prose prose-invert prose-lg max-w-none leading-relaxed mt-6">
      <SafeMDX source={source} />
    </article>
  );
}
//renders the blog content inside the blog detail page.
// lib/safe-mdx.tsx  (or src/lib/safe-mdx.tsx)
import "server-only";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

type Props = Omit<MDXRemoteProps, "source"> & { source: string };

// whitelist server-safe components if you need
const components = {};

export function SafeMDX({ source }: Props) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
        },
      }}
    />
  );
}

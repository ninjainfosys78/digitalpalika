
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

type Props = Omit<MDXRemoteProps, "source"> & { source: string };

const components = {
  h1: (props: any) => (
    <h1 className="font-bold text-3xl sm:text-4xl leading-tight pt-8 pb-4" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="font-bold text-2xl sm:text-3xl leading-tight pt-8 pb-3" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="font-semibold text-xl sm:text-2xl leading-snug pt-6 pb-2" {...props} />
  ),
  p:  (props: any) => <p className="my-3" {...props} />,
  hr: (props: any) => <hr className="my-6 border-white/15" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-5 my-3" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-5 my-3" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-white/80 pl-4 italic my-4" {...props} />
  ),
  a: (props: any) => (
    <a className="underline underline-offset-4 hover:opacity-80" {...props} />
  ),
};

export function SafeMDX({ source }: Props) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: "wrap" }],
          ],
        },
      }}
    />
  );
}

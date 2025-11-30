// app/blogs/page.tsx
import Header from "@/components/header";
import Footer from "@/components/footer";
import BlogsClient from "@/components/blogs-client";
import { getAllPostsMeta } from "@/lib/posts";

export const dynamic = "force-static";

export default function BlogsPage() {
  const posts = getAllPostsMeta();

  return (
    <>
      <Header />

      <main>
        <BlogsClient posts={posts} />
      </main>

      <Footer />
    </>
  );
}
//server side blogs page rendering
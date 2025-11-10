// app/blogs/page.tsx
import Link from "next/link";
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

      {/* Render client wrapper (renders hero + posts) */}
      <main>
        <BlogsClient posts={posts} />
      </main>

      <Footer />
    </>
  );
}

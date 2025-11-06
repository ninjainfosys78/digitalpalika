import { getAllPostsMeta } from '@/lib/posts'
import BlogsClient from '@/components/blogs-client'

export const dynamic = 'force-static'

export default function BlogsPage() {
  const posts = getAllPostsMeta().slice(0, 6) // show only first 6 cards

  return <BlogsClient posts={posts} />
}

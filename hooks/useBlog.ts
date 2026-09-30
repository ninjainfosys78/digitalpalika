import { useEffect, useState } from 'react';
import type { BlogDetail } from '@/lib/dcm/dcmBlogs';

export function useBlog(slug: string) {
    const [blog, setBlog] = useState<BlogDetail | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchBlog() {
            try {
                const response = await fetch(`/api/blogs/${encodeURIComponent(slug)}/`);
                if (!response.ok) throw new Error(`Status ${response.status}`);
                setBlog(await response.json());
            } catch (err) {
                console.error('Error fetching blog:', err);
            } finally {
                setLoading(false);
            }
        }

        fetchBlog();
    }, [slug]);

    return { blog, loading };
}

import { useEffect, useState } from 'react';
import type { BlogItem } from '@/lib/dcm/dcmBlogs';

const BLOGS_API_URL = '/api/blogs/';

export function useBlogs() {
    const [blogs, setBlogs] = useState<BlogItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchBlogs() {
            try {
                const response = await fetch(BLOGS_API_URL);
                if (!response.ok) throw new Error(`Status ${response.status}`);
                setBlogs(await response.json());
            } catch (err) {
                console.error('Error fetching blogs:', err);
            } finally {
                setLoading(false);
            }
        }

        fetchBlogs();
    }, []);

    return { blogs, loading };
}

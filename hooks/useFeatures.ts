import { useEffect, useState } from 'react';
import pb, { type Feature } from '@/lib/pocketbase';

export function useFeatures() {
    const [features, setFeatures] = useState<Feature[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchFeatures() {
            try {
                setLoading(true);
                const records = await pb.collection('Digital_palika_Features').getFullList<Feature>({
                    sort: '-created',
                });
                setFeatures(records);
                setError(null);
            } catch (err) {
                console.error('Error fetching features:', err);
                setError('Failed to load features');
            } finally {
                setLoading(false);
            }
        }

        fetchFeatures();
    }, []);

    return { features, loading, error };
}
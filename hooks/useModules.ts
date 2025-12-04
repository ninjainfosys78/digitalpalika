import { useEffect, useState } from 'react';
import pb, { type Module } from '@/lib/pocketbase';

export function useModules() {
    const [modules, setModules] = useState<Module[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchModules() {
            try {
                setLoading(true);
                const records = await pb.collection('Digital_palika_Modules').getFullList<Module>({
                    sort: '-created',
                });
                setModules(records);
                setError(null);
            } catch (err) {
                console.error('Error fetching modules:', err);
                setError('Failed to load modules');
            } finally {
                setLoading(false);
            }
        }

        fetchModules();
    }, []);

    return { modules, loading, error };
}
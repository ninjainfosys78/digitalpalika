import { useEffect, useState } from 'react';
import pb, { type Client } from '@/lib/pocketbase';

export function useClients() {
    const [clients, setClients] = useState<Client[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchClients() {
            try {
                setLoading(true);
                const records = await pb.collection('Digital_palika_Clients').getFullList<Client>({
                    sort: '-created',
                });
                setClients(records);
                setError(null);
            } catch (err) {
                console.error('Error fetching clients:', err);
                setError('Failed to load clients');
            } finally {
                setLoading(false);
            }
        }

        fetchClients();
    }, []);

    return { clients, loading, error };
}
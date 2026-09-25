import { useEffect, useState } from 'react';
import type { ClientItem } from '@/lib/siteData';

const CLIENTS_API_URL = '/api/clients/';

export function useClients() {
    const [clients, setClients] = useState<ClientItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchClients() {
            try {
                const response = await fetch(CLIENTS_API_URL);
                if (!response.ok) throw new Error(`Status ${response.status}`);
                const items: ClientItem[] = await response.json();
                setClients(items);
            } catch (err) {
                console.error('Error fetching clients:', err);
            } finally {
                setLoading(false);
            }
        }

        fetchClients();
    }, []);

    return { clients, loading };
}

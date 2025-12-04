import PocketBase from 'pocketbase';

export const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL || 'https://cms.ninjainfosys.com/');

pb.autoCancellation(false);

export default pb;

// Updated Client interface to handle image as array or string
export interface Client {
    id: string;
    ne_name: string;
    en_name: string;
    ne_location: string;
    en_location: string;
    ne_province: string;
    en_province: string;
    image: string | string[]; // Can be string or array
    collectionId?: string;
    collectionName?: string;
    created?: string;
    updated?: string;
}

export type { Client as ClientType };

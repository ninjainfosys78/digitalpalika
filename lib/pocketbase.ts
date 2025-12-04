import PocketBase from "pocketbase";

const baseUrl = process.env.NEXT_PUBLIC_PB_URL || "http://127.0.0.1:8090";

const pb = new PocketBase(baseUrl);

pb.autoCancellation(false);

export default pb;

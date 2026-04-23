import PocketBase from "pocketbase";

const baseUrl = process.env.NEXT_PUBLIC_PB_URL || "https://cms.ninjainfosys.com";

const pb = new PocketBase(baseUrl);
pb.autoCancellation(false);
// Set a reasonable timeout so we don't hang if the server is unreachable
(pb as any).timeout = 5000; 

export default pb;

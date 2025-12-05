import PocketBase from "pocketbase";

const baseUrl = process.env.NEXT_PUBLIC_PB_URL || "https://cms.ninjainfosys.com";

const pb = new PocketBase(baseUrl);
pb.autoCancellation(false);

export default pb;

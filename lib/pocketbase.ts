import PocketBase from "pocketbase";

const baseUrl = process.env.NEXT_PUBLIC_PB_URL as string;

if (!baseUrl) {
  throw new Error("NEXT_PUBLIC_PB_URL is not set");
}

const pb = new PocketBase(baseUrl);

pb.autoCancellation(false);

export default pb;

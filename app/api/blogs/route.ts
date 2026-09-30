import { DCM_BASE_URL } from "@/lib/dcm/dcmClients";
import { BLOGS_CONTENT_SLUG, toBlogItem, type DcmBlogItem } from "@/lib/dcm/dcmBlogs";

// Same-origin relay so the browser never makes a cross-origin call to the DCM API.
export async function GET() {
  const upstream = await fetch(`${DCM_BASE_URL}/${BLOGS_CONTENT_SLUG}`, { headers: { Accept: "application/json" } });
  if (!upstream.ok) {
    return Response.json({ error: "Failed to load blogs" }, { status: upstream.status });
  }

  const body: { data?: { items?: DcmBlogItem[] } } = await upstream.json();
  return Response.json((body.data?.items ?? []).map(toBlogItem));
}

import { DCM_BASE_URL } from "@/lib/dcm/dcmClients";
import { BLOGS_CONTENT_SLUG, toBlogDetail, type DcmBlogDetail } from "@/lib/dcm/dcmBlogs";

// Same-origin relay so the browser never makes a cross-origin call to the DCM API.
export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const upstream = await fetch(`${DCM_BASE_URL}/${BLOGS_CONTENT_SLUG}/${encodeURIComponent(slug)}`, {
    headers: { Accept: "application/json" },
  });
  if (!upstream.ok) {
    return Response.json({ error: "Failed to load blog" }, { status: upstream.status });
  }

  const body: { data?: { item?: DcmBlogDetail } } = await upstream.json();
  if (!body.data?.item) {
    return Response.json({ error: "Blog not found" }, { status: 404 });
  }
  return Response.json(toBlogDetail(body.data.item));
}

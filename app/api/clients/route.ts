import { DCM_BASE_URL, toClientItem, type DcmSubContent } from "@/lib/dcm/dcmClients";

// Same-origin relay so the browser never makes a cross-origin call to the DCM API.
export async function GET() {
  const upstream = await fetch(`${DCM_BASE_URL}/clients`, { headers: { Accept: "application/json" } });
  if (!upstream.ok) {
    return Response.json({ error: "Failed to load clients" }, { status: upstream.status });
  }

  const body: { data?: { items?: DcmSubContent[] } } = await upstream.json();
  return Response.json((body.data?.items ?? []).map(toClientItem));
}

const DCM_CONTACT_URL =
  "https://ninjainfosys.app.eshasan.com/api/public/dcm/digitalpalika/contact";

// Same-origin relay: the DCM API only allows its own app origins via CORS, so the browser posts here instead.
export async function POST(request: Request) {
  const upstream = await fetch(DCM_CONTACT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: await request.text(),
  });

  return new Response(await upstream.text(), {
    status: upstream.status,
    headers: { "Content-Type": upstream.headers.get("Content-Type") ?? "application/json" },
  });
}

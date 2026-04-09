import { NextRequest, NextResponse } from "next/server";

const WIKIMEDIA_PREFIX = "https://upload.wikimedia.org/wikipedia/commons/";

function isAllowedUrl(decoded: string): boolean {
  if (decoded.startsWith(WIKIMEDIA_PREFIX)) return true;
  try {
    const u = new URL(decoded);
    if (u.hostname !== "images.rappi.com") return false;
    if (!u.pathname.startsWith("/products/")) return false;
    if (u.pathname.includes("..")) return false;
    return true;
  } catch {
    return false;
  }
}

/** Pide a Rappi un tamaño útil para el carrusel (el og:image suele ir a 10x10). */
function upstreamUrl(decoded: string): string {
  if (!decoded.startsWith("https://images.rappi.com/products/")) {
    return decoded;
  }
  const u = new URL(decoded);
  u.searchParams.set("d", "360x360");
  u.searchParams.set("e", "webp");
  u.searchParams.set("q", "82");
  return u.toString();
}

/**
 * Proxy de imágenes para el carrusel: Wikimedia (evita 429 en el cliente) y CDN de Rappi (mismas fotos que el catálogo).
 */
export async function GET(request: NextRequest) {
  const raw = request.nextUrl.searchParams.get("u");
  if (!raw) {
    return new NextResponse("Missing u", { status: 400 });
  }
  let decoded: string;
  try {
    decoded = decodeURIComponent(raw);
  } catch {
    return new NextResponse("Invalid u", { status: 400 });
  }
  if (!isAllowedUrl(decoded)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const toFetch = upstreamUrl(decoded);

  const upstream = await fetch(toFetch, {
    headers: {
      "User-Agent":
        "TurboStream/1.0 (viewer demo; +https://github.com) Next.js image proxy",
      Accept: "image/*,image/webp",
    },
    next: { revalidate: 86400 },
  });

  if (!upstream.ok) {
    return new NextResponse(null, { status: upstream.status === 429 ? 502 : upstream.status });
  }

  const body = await upstream.arrayBuffer();
  const contentType = upstream.headers.get("content-type") ?? "image/jpeg";

  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}

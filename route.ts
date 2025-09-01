import { NextResponse } from "next/server";
const routes = ["/", "/shop", "/radio", "/records", "/hnh-mess", "/affiliate", "/care", "/community", "/about", "/press", "/accessibility", "/legal"];
export function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const urls = routes.map((r) => `<url><loc>${base}${r}</loc><changefreq>weekly</changefreq></url>`).join("");
  return new NextResponse(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { "Content-Type": "application/xml" },
  });
}

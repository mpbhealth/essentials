import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";
import { PAGES } from "@/lib/content-registry";

export async function GET() {
  const items = PAGES.map(p => `
    <item>
      <title>${p.title}</title>
      <link>${SITE.domain}${p.url}</link>
      <guid>${SITE.domain}${p.url}</guid>
      <pubDate>${new Date(p.lastmod ?? Date.now()).toUTCString()}</pubDate>
      ${p.description ? `<description><![CDATA[${p.description}]]></description>` : ""}
    </item>`).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>${SITE.brand} — Updates</title>
      <link>${SITE.domain}</link>
      <description>New pages and updates for Essentials.</description>
      ${items}
    </channel>
  </rss>`;

  return new NextResponse(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" }});
}

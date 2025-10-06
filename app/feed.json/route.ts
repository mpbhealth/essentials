import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";
import { PAGES } from "@/lib/content-registry";

export async function GET() {
  const body = {
    version: "https://jsonfeed.org/version/1",
    title: `${SITE.brand} — Updates`,
    home_page_url: SITE.domain,
    feed_url: `${SITE.domain}/feed.json`,
    items: PAGES.map(p => ({
      id: `${SITE.domain}${p.url}`,
      url: `${SITE.domain}${p.url}`,
      title: p.title,
      content_text: p.description ?? p.title,
      date_published: p.lastmod ?? new Date().toISOString()
    }))
  };
  return NextResponse.json(body, { headers: { "Content-Type": "application/feed+json; charset=utf-8" }});
}

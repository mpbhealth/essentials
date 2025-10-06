import { SITE } from "@/lib/site";
import { PAGES } from "@/lib/content-registry";

export default async function sitemap() {
  return PAGES.map(p => ({
    url: `${SITE.domain}${p.url}`,
    lastModified: p.lastmod ?? new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: p.url === "/" ? 1.0 : 0.7
  }));
}
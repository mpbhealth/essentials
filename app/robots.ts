import { SITE } from '@/lib/site';

export default function robots() {
  const rules = [
    { userAgent: "*", allow: "/" },
    { userAgent: "Googlebot", allow: "/" },
    { userAgent: "Bingbot", allow: "/" },
    { userAgent: "Google-Extended", allow: "/" },
    { userAgent: "GPTBot", allow: "/" },
    { userAgent: "PerplexityBot", allow: "/" },
    { userAgent: "ClaudeBot", allow: "/" }
  ];
  return { rules, sitemap: `${SITE.domain}/sitemap.xml`, host: SITE.domain };
}
import { SITE } from '@/lib/site';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const allowTraining = process.env.ALLOW_TRAINING === "true";

  const rules: MetadataRoute.Robots['rules'] = [
    {
      userAgent: "*",
      allow: "/",
      disallow: ['/admin/'],
    },
    {
      userAgent: "Googlebot",
      allow: "/",
    },
    {
      userAgent: "Bingbot",
      allow: "/",
    },
  ];

  if (allowTraining) {
    rules.push(
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      }
    );
  } else {
    rules.push(
      {
        userAgent: "Google-Extended",
        disallow: "/",
      },
      {
        userAgent: "GPTBot",
        disallow: "/",
      },
      {
        userAgent: "PerplexityBot",
        disallow: "/",
      },
      {
        userAgent: "ClaudeBot",
        disallow: "/",
      }
    );
  }

  return {
    rules,
    sitemap: `${SITE.domain}/sitemap.xml`,
    host: SITE.domain,
  };
}
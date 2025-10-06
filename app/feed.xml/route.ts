import { contentRegistry } from '@/lib/content-registry';
import { SITE } from '@/lib/site';

export async function GET() {
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE.brand}</title>
    <link>${SITE.domain}</link>
    <description>Medical cost sharing for everyday healthcare needs</description>
    <language>en-us</language>
    <atom:link href="${SITE.domain}/feed.xml" rel="self" type="application/rss+xml"/>
    ${contentRegistry
      .map(
        page => `
    <item>
      <title>${page.title}</title>
      <link>${SITE.domain}${page.slug}</link>
      <description>${page.description}</description>
      <pubDate>${new Date(page.lastModified).toUTCString()}</pubDate>
      <guid isPermaLink="true">${SITE.domain}${page.slug}</guid>
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

import { contentRegistry } from '@/lib/content-registry';
import { SITE } from '@/lib/site';

export async function GET() {
  const feed = {
    version: 'https://jsonfeed.org/version/1.1',
    title: SITE.brand,
    home_page_url: SITE.domain,
    feed_url: `${SITE.domain}/feed.json`,
    description: 'Medical cost sharing for everyday healthcare needs',
    items: contentRegistry.map(page => ({
      id: `${SITE.domain}${page.slug}`,
      url: `${SITE.domain}${page.slug}`,
      title: page.title,
      content_text: page.description,
      date_published: new Date(page.lastModified).toISOString(),
    })),
  };

  return Response.json(feed, {
    headers: {
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

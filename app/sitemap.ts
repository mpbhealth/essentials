import { MetadataRoute } from 'next';
import { contentRegistry } from '@/lib/content-registry';
import { SITE } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return contentRegistry.map(page => ({
    url: `${SITE.domain}${page.slug}`,
    lastModified: new Date(page.lastModified),
    changeFrequency: 'weekly' as const,
    priority: page.slug === '/' ? 1.0 : 0.8,
  }));
}
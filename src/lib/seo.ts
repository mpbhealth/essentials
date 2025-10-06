import { SITE } from './site';

export const seo = {
  title: (pageTitle?: string) => pageTitle ? `${pageTitle} | ${SITE.brand}` : SITE.brand,
  description: (desc: string) => desc,
  canonical: (path: string) => `${SITE.domain}${path}`,
  openGraph: (title: string, description: string, path: string) => ({
    title,
    description,
    url: `${SITE.domain}${path}`,
    siteName: SITE.brand,
    locale: 'en_US',
    type: 'website',
  }),
  twitter: (title: string, description: string) => ({
    card: 'summary_large_image',
    title,
    description,
  })
};

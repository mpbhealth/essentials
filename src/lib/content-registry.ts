import { SITE } from './site';

export interface PageMeta {
  slug: string;
  title: string;
  description: string;
  lastModified: string;
}

export const contentRegistry: PageMeta[] = [
  {
    slug: '/',
    title: 'Essentials — Everyday healthcare, made affordable',
    description: 'A medical cost sharing program for routine needs. Not insurance.',
    lastModified: '2025-10-06'
  },
  {
    slug: '/how-it-works/',
    title: 'How Essentials Works',
    description: 'Learn how medical cost sharing through Essentials helps manage everyday healthcare needs.',
    lastModified: '2025-10-06'
  },
  {
    slug: '/pricing/',
    title: 'Pricing & Contributions',
    description: 'Transparent contribution amounts for the Essentials medical cost sharing program.',
    lastModified: '2025-10-06'
  },
  {
    slug: '/faq/',
    title: 'Frequently Asked Questions',
    description: 'Get answers to common questions about the Essentials cost sharing program.',
    lastModified: '2025-10-06'
  },
  {
    slug: '/compare/',
    title: 'Essentials vs. Traditional Insurance',
    description: 'Understand the key differences between medical cost sharing and traditional health insurance.',
    lastModified: '2025-10-06'
  },
  {
    slug: '/eligibility/',
    title: 'Eligibility Requirements',
    description: 'Review eligibility criteria for joining the Essentials medical cost sharing program.',
    lastModified: '2025-10-06'
  },
  {
    slug: '/about/',
    title: 'About MPB Health',
    description: 'Learn about MPB Health and our commitment to affordable healthcare solutions.',
    lastModified: '2025-10-06'
  },
  {
    slug: '/editorial-policy/',
    title: 'Editorial Policy',
    description: 'Our standards for content accuracy, medical review, and editorial integrity.',
    lastModified: '2025-10-06'
  },
  {
    slug: '/medical-review/',
    title: 'Medical Review Process',
    description: 'How we ensure medical accuracy through expert review and regular updates.',
    lastModified: '2025-10-06'
  },
  {
    slug: '/disclosures/',
    title: 'Important Disclosures',
    description: 'Legal disclosures and limitations of the Essentials cost sharing program.',
    lastModified: '2025-10-06'
  }
];

export const getPageMeta = (slug: string): PageMeta | undefined => {
  return contentRegistry.find(p => p.slug === slug);
};

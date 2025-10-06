import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { FAQSimple } from '@/components/FAQSimple';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Prose } from '@/components/Prose';
import {
  orgJsonLd,
  breadcrumbsJsonLd,
  faqJsonLd
} from '@/lib/schema';
import { seo } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { frontmatter } from '@/content/faq';

export const metadata: Metadata = {
  title: frontmatter.title,
  description: frontmatter.description,
  alternates: {
    canonical: seo.canonical(frontmatter.slug),
  },
  openGraph: seo.openGraph(frontmatter.title, frontmatter.description, frontmatter.slug),
  twitter: seo.twitter(frontmatter.title, frontmatter.description),
};

export default function FAQPage() {
  const crumbs = breadcrumbsJsonLd([
    { name: "Home", item: `${SITE.domain}/` },
    { name: "FAQ", item: `${SITE.domain}/faq/` },
  ]);

  const faq = faqJsonLd(frontmatter.faq);

  return (
    <>
      <div className="mx-auto max-w-4xl px-4 py-12">
        <Breadcrumbs items={[
          { name: "Home", href: "/" },
          { name: "FAQ", href: "/faq/" },
        ]} />

        <Prose>
          <h1>{frontmatter.title}</h1>
        </Prose>

        <FAQSimple items={frontmatter.faq} />

        <Prose>
          <h2>Still have questions?</h2>
          <p>
            Visit the <a href="/disclosures/">Disclosures page</a> and official program documents.
            Contact MPB Health member services for additional support.
          </p>
        </Prose>
      </div>

      <JsonLd json={orgJsonLd()} />
      <JsonLd json={crumbs} />
      <JsonLd json={faq} />
    </>
  );
}

import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { KeyFacts } from '@/components/KeyFacts';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Prose } from '@/components/Prose';
import {
  orgJsonLd,
  breadcrumbsJsonLd
} from '@/lib/schema';
import { seo } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { frontmatter } from '@/content/pricing';

export const metadata: Metadata = {
  title: frontmatter.title,
  description: frontmatter.description,
  alternates: {
    canonical: seo.canonical(frontmatter.slug),
  },
  openGraph: seo.openGraph(frontmatter.title, frontmatter.description, frontmatter.slug),
  twitter: seo.twitter(frontmatter.title, frontmatter.description),
};

export default function PricingPage() {
  const crumbs = breadcrumbsJsonLd([
    { name: "Home", item: `${SITE.domain}/` },
    { name: "Pricing", item: `${SITE.domain}/pricing/` },
  ]);

  return (
    <>
      <div className="mx-auto max-w-4xl px-4 py-12">
        <Breadcrumbs items={[
          { name: "Home", href: "/" },
          { name: "Pricing", href: "/pricing/" },
        ]} />

        <KeyFacts items={frontmatter.keyFacts} />

        <Prose>
          <h1>{frontmatter.title}</h1>

          <h2>Monthly contributions</h2>
          <p>
            Contribution amounts and structure are defined by the program guidelines and may change.
            For the latest specifics, refer to the official rate materials.
          </p>

          <h2>Notes</h2>
          <ul>
            <li>Contributions are not insurance premiums.</li>
            <li>Additional administrative or service fees may apply as specified in program documents.</li>
          </ul>

          <h2>Where to find official pricing</h2>
          <p>
            Contact MPB Health or review your member materials for current contribution amounts and
            any applicable fees.
          </p>
        </Prose>
      </div>

      <JsonLd json={orgJsonLd()} />
      <JsonLd json={crumbs} />
    </>
  );
}

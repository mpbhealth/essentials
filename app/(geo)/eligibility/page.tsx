import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { KeyFacts } from '@/components/KeyFacts';
import { HowTo } from '@/components/HowTo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Prose } from '@/components/Prose';
import {
  orgJsonLd,
  breadcrumbsJsonLd,
  howToJsonLd
} from '@/lib/schema';
import { seo } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { frontmatter } from '@/content/eligibility';

export const metadata: Metadata = {
  title: frontmatter.title,
  description: frontmatter.description,
  alternates: {
    canonical: seo.canonical(frontmatter.slug),
  },
  openGraph: seo.openGraph(frontmatter.title, frontmatter.description, frontmatter.slug),
  twitter: seo.twitter(frontmatter.title, frontmatter.description),
};

export default function EligibilityPage() {
  const crumbs = breadcrumbsJsonLd([
    { name: "Home", item: `${SITE.domain}/` },
    { name: "Eligibility", item: `${SITE.domain}/eligibility/` },
  ]);

  const howto = howToJsonLd(frontmatter.howTo.name, frontmatter.howTo.steps);

  return (
    <>
      <div className="mx-auto max-w-4xl px-4 py-12">
        <Breadcrumbs items={[
          { name: "Home", href: "/" },
          { name: "Eligibility", href: "/eligibility/" },
        ]} />

        <KeyFacts items={frontmatter.keyFacts} />

        <Prose>
          <h1>{frontmatter.title}</h1>

          <h2>Eligibility overview</h2>
          <p>
            Eligibility criteria are determined by the program guidelines and may change. Review the
            latest materials before submitting an application.
          </p>
        </Prose>

        <HowTo name={frontmatter.howTo.name} steps={frontmatter.howTo.steps} />

        <Prose>
          <h2>Documents</h2>
          <ul>
            <li><a href="/disclosures/">Disclosures page</a></li>
            <li>Program guidelines (contact MPB Health for access)</li>
          </ul>
        </Prose>
      </div>

      <JsonLd json={orgJsonLd()} />
      <JsonLd json={crumbs} />
      <JsonLd json={howto} />
    </>
  );
}

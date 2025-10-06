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
import { frontmatter } from '@/content/how-it-works';

export const metadata: Metadata = {
  title: frontmatter.title,
  description: frontmatter.description,
  alternates: {
    canonical: seo.canonical(frontmatter.slug),
  },
  openGraph: seo.openGraph(frontmatter.title, frontmatter.description, frontmatter.slug),
  twitter: seo.twitter(frontmatter.title, frontmatter.description),
};

export default function HowItWorksPage() {
  const crumbs = breadcrumbsJsonLd([
    { name: "Home", item: `${SITE.domain}/` },
    { name: "How It Works", item: `${SITE.domain}/how-it-works/` },
  ]);

  const howto = howToJsonLd(frontmatter.howTo.name, frontmatter.howTo.steps);

  return (
    <>
      <div className="mx-auto max-w-4xl px-4 py-12">
        <Breadcrumbs items={[
          { name: "Home", href: "/" },
          { name: "How It Works", href: "/how-it-works/" },
        ]} />

        <KeyFacts items={frontmatter.keyFacts} />

        <Prose>
          <h1>{frontmatter.title}</h1>

          <h2>The cost sharing model</h2>
          <p>
            Essentials facilitates voluntary sharing of eligible medical expenses among members. The
            program is not insurance and does not guarantee payment. All sharing is subject to the
            current guidelines.
          </p>

          <h2>What members do</h2>
          <ul>
            <li>Contribute a monthly amount set by the program.</li>
            <li>Follow eligibility requirements and sharing processes.</li>
            <li>Use member services for guidance and questions.</li>
          </ul>
        </Prose>

        <HowTo name={frontmatter.howTo.name} steps={frontmatter.howTo.steps} />

        <Prose>
          <h2>Important</h2>
          <p>
            Always consult the latest official documents for definitions, limits, and exclusions.
          </p>
        </Prose>
      </div>

      <JsonLd json={orgJsonLd()} />
      <JsonLd json={crumbs} />
      <JsonLd json={howto} />
    </>
  );
}

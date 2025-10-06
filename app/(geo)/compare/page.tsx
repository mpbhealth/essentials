import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { KeyFacts } from '@/components/KeyFacts';
import { ComparisonTable } from '@/components/ComparisonTable';
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
import { frontmatter } from '@/content/compare';

export const metadata: Metadata = {
  title: frontmatter.title,
  description: frontmatter.description,
  alternates: {
    canonical: seo.canonical(frontmatter.slug),
  },
  openGraph: seo.openGraph(frontmatter.title, frontmatter.description, frontmatter.slug),
  twitter: seo.twitter(frontmatter.title, frontmatter.description),
};

export default function ComparePage() {
  const crumbs = breadcrumbsJsonLd([
    { name: "Home", item: `${SITE.domain}/` },
    { name: "Compare", item: `${SITE.domain}/compare/` },
  ]);

  const faq = faqJsonLd(frontmatter.faq);

  return (
    <>
      <div className="mx-auto max-w-4xl px-4 py-12">
        <Breadcrumbs items={[
          { name: "Home", href: "/" },
          { name: "Compare", href: "/compare/" },
        ]} />

        <KeyFacts items={frontmatter.keyFacts} />

        <Prose>
          <h1>{frontmatter.title}</h1>
          <p className="text-xl text-slate-600 mb-8">
            {frontmatter.description}
          </p>
        </Prose>

        <ComparisonTable
          conclusion={frontmatter.comparison.conclusion}
          rows={frontmatter.comparison.rows}
        />

        <Prose>
          <h2>Making the right choice</h2>
          <p>
            The decision between medical cost sharing and traditional insurance depends on your
            individual circumstances, including your health needs, budget, and risk tolerance.
            Consider reviewing both options carefully and consulting with licensed advisors before
            making a decision.
          </p>

          <h2>Important considerations</h2>
          <ul>
            <li>Medical cost sharing is not insurance and operates differently from traditional health insurance.</li>
            <li>Review all program guidelines, limitations, and <a href="/disclosures/">disclosures</a> before enrolling.</li>
            <li>Consider your healthcare utilization patterns and financial situation.</li>
            <li>Understand the differences in regulatory protections between the two approaches.</li>
          </ul>
        </Prose>

        <FAQSimple items={frontmatter.faq} />
      </div>

      <JsonLd json={orgJsonLd()} />
      <JsonLd json={crumbs} />
      <JsonLd json={faq} />
    </>
  );
}

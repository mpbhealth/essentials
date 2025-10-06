import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Prose } from '@/components/Prose';
import { EATBlock } from '@/components/EATBlock';
import {
  orgJsonLd,
  breadcrumbsJsonLd
} from '@/lib/schema';
import { seo } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { frontmatter } from '@/content/editorial-policy';

export const metadata: Metadata = {
  title: frontmatter.title,
  description: frontmatter.description,
  alternates: {
    canonical: seo.canonical(frontmatter.slug),
  },
  openGraph: seo.openGraph(frontmatter.title, frontmatter.description, frontmatter.slug),
  twitter: seo.twitter(frontmatter.title, frontmatter.description),
};

export default function EditorialPolicyPage() {
  const crumbs = breadcrumbsJsonLd([
    { name: "Home", item: `${SITE.domain}/` },
    { name: "Editorial Policy", item: `${SITE.domain}/editorial-policy/` },
  ]);

  return (
    <>
      <div className="mx-auto max-w-4xl px-4 py-12">
        <Breadcrumbs items={[
          { name: "Home", href: "/" },
          { name: "Editorial Policy", href: "/editorial-policy/" },
        ]} />

        <Prose>
          <h1>{frontmatter.title}</h1>

          <h2>Our Mission</h2>
          <p>
            MPB Health is committed to providing accurate, trustworthy information about the
            Essentials medical cost sharing program. This editorial policy outlines our standards
            for content creation, review, and maintenance.
          </p>

          <h2>Content Accuracy</h2>
          <p>
            All content on this site is carefully researched and fact-checked. We base our
            information on:
          </p>
          <ul>
            <li>Official program documents and guidelines</li>
            <li>Regulatory requirements and compliance standards</li>
            <li>Current industry best practices</li>
            <li>Verified member support data</li>
          </ul>

          <h2>Medical Review Process</h2>
          <p>
            Content related to healthcare topics undergoes medical review by qualified healthcare
            professionals. Our <a href="/medical-review/">medical review process</a> ensures accuracy
            and clinical appropriateness of health-related information.
          </p>

          <h2>Editorial Independence</h2>
          <p>
            While MPB Health creates and maintains this content, our editorial team maintains
            independence in how information is presented. We prioritize accuracy and transparency
            over promotional messaging.
          </p>

          <h2>Content Updates</h2>
          <p>
            We review and update content regularly to ensure accuracy. Major updates include:
          </p>
          <ul>
            <li>Quarterly reviews of all program information</li>
            <li>Immediate updates when program terms change</li>
            <li>Annual comprehensive audits of all content</li>
            <li>Updates to reflect regulatory changes</li>
          </ul>

          <h2>Transparency</h2>
          <p>
            We clearly identify:
          </p>
          <ul>
            <li>When content is informational versus promotional</li>
            <li>That Essentials is not insurance</li>
            <li>Program limitations and exclusions</li>
            <li>Sources of information used</li>
          </ul>

          <h2>Corrections Policy</h2>
          <p>
            If we discover errors in our content, we correct them promptly and transparently. Material
            corrections are noted with update dates. Report errors to <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>

          <h2>Not Medical Advice</h2>
          <p>
            Content on this site is for informational purposes only and does not constitute medical,
            legal, or financial advice. Always consult qualified professionals for advice specific
            to your situation.
          </p>

          <h2>Contact Us</h2>
          <p>
            Questions about our editorial policy? Contact us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
        </Prose>

        <EATBlock
          lastReviewed={frontmatter.lastReviewed}
        />
      </div>

      <JsonLd json={orgJsonLd()} />
      <JsonLd json={crumbs} />
    </>
  );
}

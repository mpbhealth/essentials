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
import { frontmatter } from '@/content/disclosures';

export const metadata: Metadata = {
  title: frontmatter.title,
  description: frontmatter.description,
  alternates: {
    canonical: seo.canonical(frontmatter.slug),
  },
  openGraph: seo.openGraph(frontmatter.title, frontmatter.description, frontmatter.slug),
  twitter: seo.twitter(frontmatter.title, frontmatter.description),
};

export default function DisclosuresPage() {
  const crumbs = breadcrumbsJsonLd([
    { name: "Home", item: `${SITE.domain}/` },
    { name: "Disclosures", item: `${SITE.domain}/disclosures/` },
  ]);

  return (
    <>
      <div className="mx-auto max-w-4xl px-4 py-12">
        <Breadcrumbs items={[
          { name: "Home", href: "/" },
          { name: "Disclosures", href: "/disclosures/" },
        ]} />

        <Prose>
          <h1>{frontmatter.title}</h1>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <p className="font-semibold text-yellow-900 mb-2">Important Notice</p>
            <p className="text-yellow-800">
              Please read these disclosures carefully before enrolling in Essentials. This program
              is not insurance and operates differently from traditional health coverage.
            </p>
          </div>

          <h2>Not Insurance</h2>
          <p>
            Essentials is a medical cost sharing program, <strong>not insurance</strong>. It is not
            subject to insurance regulations and does not provide the same protections or guarantees
            as health insurance. Members voluntarily participate in a community that shares eligible
            healthcare costs.
          </p>

          <h2>No Guarantee of Payment</h2>
          <p>
            There is no guarantee that medical expenses will be shared or paid. Cost sharing is based
            on program guidelines, available funds, and the voluntary participation of members. The
            program does not guarantee coverage of any specific medical expense.
          </p>

          <h2>Limitations and Exclusions</h2>
          <p>
            Essentials has specific guidelines about what expenses are eligible for sharing. Many
            conditions, treatments, and expenses may not be eligible. Review the complete program
            guidelines for details on limitations and exclusions.
          </p>

          <h2>Not Regulated as Insurance</h2>
          <p>
            Medical cost sharing programs are not regulated by state insurance departments. They do
            not have the same regulatory oversight, consumer protections, or financial requirements
            as insurance companies.
          </p>

          <h2>Pre-Existing Conditions</h2>
          <p>
            Costs related to pre-existing conditions may have limitations or waiting periods before
            they become eligible for sharing. Review the program guidelines for specific details.
          </p>

          <h2>State Variations</h2>
          <p>
            Program availability, terms, and benefits may vary by state. Certain states may have
            additional restrictions or requirements. Verify program availability in your state before
            enrolling.
          </p>

          <h2>Not Medical Advice</h2>
          <p>
            Information on this website is for general informational purposes only and is not medical,
            legal, or financial advice. Consult qualified professionals for advice specific to your
            situation.
          </p>

          <h2>No ACA Compliance</h2>
          <p>
            Essentials is not minimum essential coverage under the Affordable Care Act (ACA) and does
            not satisfy the individual mandate requirements (where applicable). Consult a tax advisor
            regarding potential tax implications.
          </p>

          <h2>Changes to Program</h2>
          <p>
            MPB Health reserves the right to modify program terms, guidelines, and benefits. Members
            will be notified of material changes according to program policies.
          </p>

          <h2>Contact Information</h2>
          <p>
            For questions about these disclosures or the Essentials program, contact us at{' '}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
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

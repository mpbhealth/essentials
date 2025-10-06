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
import { frontmatter } from '@/content/medical-review';

export const metadata: Metadata = {
  title: frontmatter.title,
  description: frontmatter.description,
  alternates: {
    canonical: seo.canonical(frontmatter.slug),
  },
  openGraph: seo.openGraph(frontmatter.title, frontmatter.description, frontmatter.slug),
  twitter: seo.twitter(frontmatter.title, frontmatter.description),
};

export default function MedicalReviewPage() {
  const crumbs = breadcrumbsJsonLd([
    { name: "Home", item: `${SITE.domain}/` },
    { name: "Medical Review", item: `${SITE.domain}/medical-review/` },
  ]);

  return (
    <>
      <div className="mx-auto max-w-4xl px-4 py-12">
        <Breadcrumbs items={[
          { name: "Home", href: "/" },
          { name: "Medical Review", href: "/medical-review/" },
        ]} />

        <Prose>
          <h1>{frontmatter.title}</h1>

          <h2>Our Commitment to Medical Accuracy</h2>
          <p>
            MPB Health ensures that healthcare-related content is medically accurate through a
            rigorous review process involving qualified healthcare professionals.
          </p>

          <h2>Review Process</h2>
          <p>
            All content containing medical or health-related information undergoes the following review:
          </p>
          <ul>
            <li><strong>Initial Review:</strong> Content is drafted based on reliable medical sources and program guidelines</li>
            <li><strong>Medical Review:</strong> Qualified healthcare professionals review content for medical accuracy</li>
            <li><strong>Fact-Checking:</strong> Claims and statements are verified against authoritative sources</li>
            <li><strong>Approval:</strong> Content is approved only after passing all review stages</li>
          </ul>

          <h2>Reviewer Qualifications</h2>
          <p>
            Our medical reviewers meet the following criteria:
          </p>
          <ul>
            <li>Licensed healthcare professionals (physicians, nurses, or other qualified practitioners)</li>
            <li>Current, active medical licenses in good standing</li>
            <li>Relevant clinical experience in applicable specialty areas</li>
            <li>Understanding of medical cost sharing and healthcare delivery systems</li>
          </ul>

          <h2>Review Frequency</h2>
          <p>
            Medical content is reviewed on the following schedule:
          </p>
          <ul>
            <li><strong>Initial Publication:</strong> Full medical review before publication</li>
            <li><strong>Quarterly Updates:</strong> Review of all healthcare-related content every three months</li>
            <li><strong>As-Needed Updates:</strong> Immediate review when new medical information becomes available</li>
            <li><strong>Annual Audit:</strong> Comprehensive review of all medical content annually</li>
          </ul>

          <h2>Medical Review Board</h2>
          <p>
            Our medical review board consists of healthcare professionals with diverse clinical backgrounds.
            Reviewer information is maintained for transparency and accountability purposes.
          </p>

          <h2>Limitations</h2>
          <p>
            While we strive for accuracy, please note:
          </p>
          <ul>
            <li>Content is for informational purposes only and is not medical advice</li>
            <li>Individual medical situations vary; consult your healthcare provider</li>
            <li>Medical knowledge evolves; content reflects current understanding at time of review</li>
            <li>Program information reflects current guidelines, which may change</li>
          </ul>

          <h2>Contact the Medical Review Team</h2>
          <p>
            Questions about our medical review process? Report potential inaccuracies to{' '}
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

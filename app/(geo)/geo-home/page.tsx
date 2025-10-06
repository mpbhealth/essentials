import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { KeyFacts } from '@/components/KeyFacts';
import { HowTo } from '@/components/HowTo';
import { FAQSimple } from '@/components/FAQSimple';
import { Prose } from '@/components/Prose';
import {
  orgJsonLd,
  websiteJsonLd,
  essentialsServiceJsonLd,
  breadcrumbsJsonLd,
  faqJsonLd,
  howToJsonLd
} from '@/lib/schema';
import { seo } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { frontmatter } from '@/content/home';

export const metadata: Metadata = {
  title: frontmatter.title,
  description: frontmatter.description,
  alternates: {
    canonical: seo.canonical(frontmatter.slug),
  },
  openGraph: seo.openGraph(frontmatter.title, frontmatter.description, frontmatter.slug),
  twitter: seo.twitter(frontmatter.title, frontmatter.description),
};

export default function GeoHomePage() {
  const crumbs = breadcrumbsJsonLd([
    { name: "Home", item: `${SITE.domain}/` },
  ]);

  const faq = faqJsonLd(frontmatter.faq);
  const howto = howToJsonLd(frontmatter.howTo.name, frontmatter.howTo.steps);

  return (
    <>
      <section className="relative bg-gradient-to-br from-brand-50 via-white to-accent-50/30 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6">
                  <span className="block">Essentials</span>
                  <span className="block text-brand-600">Everyday healthcare, made affordable</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  A medical cost sharing program for routine needs. Not insurance.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.1enrollment.com/order/checkout.cfm?id=768413&pdid=42463"
                  className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-8 py-4 text-lg font-semibold text-white hover:bg-brand-600 transition-colors shadow-lg hover:shadow-xl"
                >
                  Enroll Now
                </a>
                <a
                  href="/how-it-works/"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-slate-300 bg-white px-8 py-4 text-lg font-semibold text-slate-700 hover:border-brand-500 hover:text-brand-600 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="relative lg:pl-8">
              <div className="relative z-10">
                <img
                  src="/Cell Phone(1).png"
                  alt="MPB Health mobile app dashboard"
                  className="w-full max-w-md mx-auto drop-shadow-2xl"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-200 rounded-full blur-3xl opacity-20 -z-10" />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12">
        <KeyFacts items={frontmatter.keyFacts} />

        <Prose>
          <h1>{frontmatter.title}</h1>

          <h2>What is Essentials?</h2>
          <p>
            Essentials is a <strong>medical cost sharing</strong> program for everyday healthcare needs.
            It is <strong>not insurance</strong>. Members voluntarily share eligible costs according to
            program guidelines. Review all documents before enrolling.
          </p>

          <h2>Benefits (at-a-glance)</h2>
          <ul>
            <li>Virtual care access (details in program materials).</li>
            <li>Budget-friendly approach to routine needs.</li>
            <li>Member services support from MPB Health.</li>
          </ul>

          <h2>Important notes</h2>
          <p>
            This page is informational only and not legal, tax, or medical advice. For coverage
            specifics and limitations, read the official program documents and <a href="/disclosures/">disclosures</a>.
          </p>
        </Prose>

        <HowTo name={frontmatter.howTo.name} steps={frontmatter.howTo.steps} />

        <FAQSimple items={frontmatter.faq} />

        <section className="border border-slate-200 rounded-lg p-6 bg-white mt-8">
          <h2 className="text-xl font-semibold mb-3 text-slate-900">Sources</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li><a href="/disclosures/" className="text-brand-600 hover:underline">Official program disclosures</a></li>
            <li><a href="/eligibility/" className="text-brand-600 hover:underline">Eligibility requirements</a></li>
            <li><a href="https://mpb.health" target="_blank" rel="noopener" className="text-brand-600 hover:underline">MPB Health official site</a></li>
          </ul>
        </section>
      </div>

      <JsonLd json={orgJsonLd()} />
      <JsonLd json={websiteJsonLd()} />
      <JsonLd json={essentialsServiceJsonLd()} />
      <JsonLd json={crumbs} />
      <JsonLd json={faq} />
      <JsonLd json={howto} />
    </>
  );
}

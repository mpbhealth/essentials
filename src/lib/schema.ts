import { SITE } from './site';

export const orgJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MPB Health",
  url: "https://mpb.health",
  logo: "https://mpb.health/wp-content/uploads/2023/01/mpb-logo.png",
  sameAs: Object.values(SITE.socials)
});

export const websiteJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE.domain,
  name: SITE.brand,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE.domain}/search?q={query}`,
    "query-input": "required name=query"
  }
});

export const breadcrumbsJsonLd = (items: { name: string; item: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: it.item
  }))
});

export const essentialsServiceJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Essentials (Medical Cost Sharing)",
  provider: { "@type": "Organization", name: "MPB Health", url: "https://mpb.health" },
  areaServed: "US",
  serviceType: "Health cost sharing — non-insurance",
  url: `${SITE.domain}/`,
  description: "An affordable way to manage everyday health needs via cost sharing. Not insurance. See disclosures."
});

export const faqJsonLd = (qa: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: qa.map(x => ({
    "@type": "Question",
    name: x.q,
    acceptedAnswer: { "@type": "Answer", text: x.a }
  }))
});

export const howToJsonLd = (name: string, steps: string[]) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name,
  step: steps.map(s => ({ "@type": "HowToStep", text: s }))
});

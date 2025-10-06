export type PageMeta = {
  url: string;
  title: string;
  description?: string;
  lastmod?: string;
};

export const PAGES: PageMeta[] = [
  { url: "/", title: "Essentials — Everyday healthcare, made affordable", description: "A medical cost sharing program for routine needs. Not insurance.", lastmod: "2025-10-06T12:00:00Z" },
  { url: "/how-it-works/", title: "How Essentials Works", lastmod: "2025-10-06T12:00:00Z" },
  { url: "/pricing/", title: "Essentials Pricing", lastmod: "2025-10-06T12:00:00Z" },
  { url: "/faq/", title: "Essentials FAQs", lastmod: "2025-10-06T12:00:00Z" },
  { url: "/compare/", title: "Essentials vs. Traditional Insurance", lastmod: "2025-10-06T12:00:00Z" },
  { url: "/eligibility/", title: "Eligibility & Enrollment", lastmod: "2025-10-06T12:00:00Z" },
  { url: "/editorial-policy/", title: "Editorial Policy", lastmod: "2025-10-06T12:00:00Z" },
  { url: "/medical-review/", title: "Medical Review", lastmod: "2025-10-06T12:00:00Z" },
  { url: "/disclosures/", title: "Disclosures", lastmod: "2025-10-06T12:00:00Z" }
];

import { Hero } from '@/components/Hero';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { StickyCTA } from '@/components/StickyCTA';
import { FeatureGrid } from '@/components/FeatureGrid';
import { BenefitsJourney } from '@/components/BenefitsJourney';
import { Pricing } from '@/components/Pricing';
import { BenefitsFeatures } from '@/components/BenefitsFeatures';
import { HowItWorks } from '@/components/HowItWorks';
import { FAQ } from '@/components/FAQ';
import { Disclaimer } from '@/components/Disclaimer';
import { Testimonials } from '@/components/Testimonials';
import { LeadForm } from '@/components/LeadForm';
import { CookieBanner } from '@/components/CookieBanner';
import { JotformAgent } from '@/components/JotformAgent';
import { NavigationSchema } from '@/components/InternalLinking';
import { GeoRestrictionBanner } from '@/components/GeoRestriction';

export default function Page() {
  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Essentials by MPB Health",
    "description": "Unlimited $0 virtual urgent care, primary care, mental health, concierge, and discounts.",
    "brand": { "@type": "Brand", "name": "MPB Health" },
    "offers": { "@type": "Offer", "priceCurrency": "USD", "price": 49.95, "url": process.env.NEXT_PUBLIC_ENROLL_URL }
  };
  
  return (
    <main id='main'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{__html: JSON.stringify(productLd)}} />
      <NavigationSchema />
      <SiteHeader />
      <Hero />
      <BenefitsJourney />
      <FeatureGrid />
      <div id='pricing'><Pricing /></div>
      <Testimonials />
      <BenefitsFeatures />
      <HowItWorks />
      <LeadForm />
      <FAQ />
      <Disclaimer />
      <SiteFooter />
      <StickyCTA />
      <JotformAgent />
      <CookieBanner />
    </main>
  );
}
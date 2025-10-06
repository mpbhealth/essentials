import { SITE } from '@/lib/site';
import '../globals.css';

export const metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: SITE.brand,
    template: `%s | ${SITE.brand}`,
  },
  description: 'Medical cost sharing for everyday healthcare needs. Not insurance.',
};

export default function GeoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center gap-3">
                <img
                  src="/MPB-Health-No-background.png"
                  alt="MPB Health"
                  className="h-8 w-auto object-contain"
                />
              </a>
              <nav className="hidden md:flex items-center gap-6">
                <a href="/how-it-works/" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
                  How It Works
                </a>
                <a href="/pricing/" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
                  Pricing
                </a>
                <a href="/faq/" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
                  FAQ
                </a>
                <a href="/compare/" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
                  Compare
                </a>
              </nav>
              <a
                href="https://www.1enrollment.com/order/checkout.cfm?id=768413&pdid=42463"
                className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600 transition-colors"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-slate-200 bg-slate-50 mt-20">
          <div className="mx-auto max-w-7xl px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">About</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li><a href="/about/" className="hover:text-brand-600 transition-colors">About MPB Health</a></li>
                  <li><a href="/editorial-policy/" className="hover:text-brand-600 transition-colors">Editorial Policy</a></li>
                  <li><a href="/medical-review/" className="hover:text-brand-600 transition-colors">Medical Review</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">Program</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li><a href="/how-it-works/" className="hover:text-brand-600 transition-colors">How It Works</a></li>
                  <li><a href="/pricing/" className="hover:text-brand-600 transition-colors">Pricing</a></li>
                  <li><a href="/eligibility/" className="hover:text-brand-600 transition-colors">Eligibility</a></li>
                  <li><a href="/compare/" className="hover:text-brand-600 transition-colors">Compare</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">Resources</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li><a href="/faq/" className="hover:text-brand-600 transition-colors">FAQ</a></li>
                  <li><a href="/disclosures/" className="hover:text-brand-600 transition-colors">Disclosures</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">Connect</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li><a href={SITE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 transition-colors">LinkedIn</a></li>
                  <li><a href={SITE.socials.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 transition-colors">YouTube</a></li>
                  <li><a href={`mailto:${SITE.email}`} className="hover:text-brand-600 transition-colors">Email Us</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-600">
              <p>&copy; {new Date().getFullYear()} {SITE.org}. All rights reserved.</p>
              <p className="mt-2">Essentials is not insurance. See <a href="/disclosures/" className="text-brand-600 hover:underline">disclosures</a> for details.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

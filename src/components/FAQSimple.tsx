"use client";

import { useEffect } from 'react';

interface FAQItem {
  q: string;
  a: string;
}

export function FAQSimple({ items }: { items: FAQItem[] }) {
  useEffect(() => {
    const details = document.querySelectorAll('details');
    details.forEach(d => {
      d.addEventListener('toggle', () => {
        if (d.open && typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'faq_open', {
            question: d.querySelector('summary')?.textContent
          });
        }
      });
    });
  }, []);

  return (
    <section className="space-y-4 mb-8" aria-labelledby="faq">
      <h2 id="faq" className="text-2xl font-semibold mb-6 text-slate-900">Frequently Asked Questions</h2>
      {items.map((item, i) => (
        <details key={i} className="border border-slate-200 rounded-lg p-4 bg-white group">
          <summary className="font-semibold text-slate-900 cursor-pointer list-none flex items-center justify-between">
            <span>{item.q}</span>
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <div className="mt-3 text-slate-700 leading-relaxed">{item.a}</div>
        </details>
      ))}
    </section>
  );
}

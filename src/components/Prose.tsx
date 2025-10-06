import { ReactNode } from 'react';

export function Prose({ children }: { children: ReactNode }) {
  return (
    <article className="prose prose-slate max-w-none prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:leading-relaxed prose-p:text-slate-700 prose-li:text-slate-700 prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900">
      {children}
    </article>
  );
}

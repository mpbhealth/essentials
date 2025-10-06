export function KeyFacts({ items }: { items: string[] }) {
  return (
    <aside className="border border-slate-200 rounded-lg p-6 bg-slate-50 mb-8" aria-labelledby="key-facts">
      <h2 id="key-facts" className="text-xl font-semibold mb-3 text-slate-900">Key facts</h2>
      <ul className="list-disc pl-5 space-y-2 text-slate-700">
        {items.map((x, i) => <li key={i}>{x}</li>)}
      </ul>
    </aside>
  );
}

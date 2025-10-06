export function HowTo({ name, steps }: { name: string; steps: string[] }) {
  return (
    <section className="border border-slate-200 rounded-lg p-6 bg-white mb-8" aria-labelledby="how-to">
      <h2 id="how-to" className="text-2xl font-semibold mb-4 text-slate-900">{name}</h2>
      <ol className="list-decimal pl-5 space-y-3 text-slate-700">
        {steps.map((step, i) => (
          <li key={i} className="pl-2">{step}</li>
        ))}
      </ol>
    </section>
  );
}

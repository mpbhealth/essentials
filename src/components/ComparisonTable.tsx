interface ComparisonRow {
  aspect: string;
  essentials: string;
  traditional: string;
}

export function ComparisonTable({ conclusion, rows }: { conclusion: string; rows: ComparisonRow[] }) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-slate-900">Essentials vs. Traditional Insurance</h2>
      <p className="text-slate-700 mb-6 text-lg leading-relaxed">{conclusion}</p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-slate-200 bg-white rounded-lg">
          <thead className="bg-slate-50">
            <tr>
              <th className="border border-slate-200 p-4 text-left font-semibold text-slate-900">Aspect</th>
              <th className="border border-slate-200 p-4 text-left font-semibold text-brand-600">Essentials</th>
              <th className="border border-slate-200 p-4 text-left font-semibold text-slate-600">Traditional Insurance</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                <td className="border border-slate-200 p-4 font-medium text-slate-900">{row.aspect}</td>
                <td className="border border-slate-200 p-4 text-slate-700">{row.essentials}</td>
                <td className="border border-slate-200 p-4 text-slate-700">{row.traditional}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

type QuickFact = {
  label: string;
  value: string;
};

type QuickFactsProps = {
  facts: QuickFact[];
};

export function QuickFacts({ facts }: QuickFactsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {facts.map((fact) => (
        <article key={fact.label} className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-xs uppercase tracking-[0.14em] text-slate-500">{fact.label}</p>
          <p className="mt-2 text-sm font-medium text-slate-900">{fact.value}</p>
        </article>
      ))}
    </div>
  );
}

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
        <article key={fact.label} className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4">
          <p className="text-xs uppercase tracking-[0.14em] text-zinc-400">{fact.label}</p>
          <p className="mt-2 text-sm font-medium text-zinc-100">{fact.value}</p>
        </article>
      ))}
    </div>
  );
}

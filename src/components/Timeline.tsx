import type { TimelineItem } from "@/data/site";

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative ml-3 space-y-8 border-l border-zinc-700 pl-7">
      {items.map((item) => (
        <li key={item.title} className="relative">
          <span className="absolute -left-[2.05rem] top-1 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_0_5px_rgba(8,47,73,0.6)]" />
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-300/80">
            {item.period}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-zinc-100">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-zinc-300">{item.description}</p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            {item.steps.map((step) => (
              <li key={step} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zinc-500" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

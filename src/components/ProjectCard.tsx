import Link from "next/link";

import type { ProjectPreview } from "@/data/site";

type ProjectCardProps = {
  project: ProjectPreview;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 transition hover:-translate-y-1 hover:border-zinc-700 hover:shadow-xl hover:shadow-cyan-950/20">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs uppercase tracking-[0.18em] text-cyan-300/80">{project.subtitle}</p>
        <span
          className={`rounded-full px-3 py-1 text-[11px] font-medium ${
            project.status === "Complete"
              ? "bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/30"
              : "bg-amber-500/10 text-amber-300 ring-1 ring-amber-500/30"
          }`}
        >
          {project.status}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-semibold text-zinc-100">{project.title}</h3>
      <p className="mt-4 text-sm leading-7 text-zinc-300">{project.summary}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-zinc-700 bg-zinc-950/70 px-3 py-1 text-xs text-zinc-300"
          >
            {tag}
          </li>
        ))}
      </ul>

      <Link
        href={`/projects/${project.slug}`}
        className="mt-6 inline-flex text-sm font-medium text-cyan-300 transition group-hover:text-cyan-200"
      >
        View project details -&gt;
      </Link>
    </article>
  );
}

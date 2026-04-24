import Link from "next/link";

import type { ProjectPreview } from "@/data/site";

type ProjectCardProps = {
  project: ProjectPreview;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      data-reveal
      className="group project-card rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/70"
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs uppercase tracking-[0.18em] text-blue-600">{project.subtitle}</p>
      </div>

      <h3 className="mt-4 text-xl font-semibold text-slate-900">{project.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-700">{project.summary}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs text-emerald-700"
          >
            {tag}
          </li>
        ))}
      </ul>

      <Link
        href={`/projects/${project.slug}`}
        className="mt-6 inline-flex text-sm font-medium text-blue-600 transition group-hover:text-blue-700"
      >
        View project details -&gt;
      </Link>
    </article>
  );
}

import type { Metadata } from "next";

import { PageContainer } from "@/components/PageContainer";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { additionalExperiences, featuredProjects } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Technical projects and research portfolio for Nijat Taghizade.",
};

export default function ProjectsPage() {
  return (
    <PageContainer className="space-y-10">
      <SectionHeader
        eyebrow="Technical Portfolio"
        title="Projects"
      />

      <section className="panel space-y-5 text-sm leading-7 text-zinc-300">
        <p>
          Here are the projects that I&apos;ve worked on in the past or I am currently developing in
          the present.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>

      <section className="panel">
        <h3 className="text-xl font-semibold text-zinc-100">Additional Technical Experience</h3>
        <div className="mt-6 grid gap-4">
          {additionalExperiences.map((exp) => (
            <article key={exp.title} className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5">
              <p className="text-xs uppercase tracking-[0.12em] text-cyan-300/80">{exp.org}</p>
              <h4 className="mt-2 text-base font-semibold text-zinc-100">{exp.title}</h4>
              <p className="mt-3 text-sm leading-7 text-zinc-300">{exp.details}</p>
            </article>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}

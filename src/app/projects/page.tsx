import type { Metadata } from "next";

import { PageContainer } from "@/components/PageContainer";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { featuredProjects } from "@/data/site";

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

      <section data-reveal className="panel space-y-5 text-sm leading-7 text-slate-700">
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
    </PageContainer>
  );
}

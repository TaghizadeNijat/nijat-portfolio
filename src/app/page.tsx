import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { HeroSection } from "@/components/HeroSection";
import { PageContainer } from "@/components/PageContainer";
import { ProjectCard } from "@/components/ProjectCard";
import { QuickFacts } from "@/components/QuickFacts";
import { SectionHeader } from "@/components/SectionHeader";
import { featuredProjects, homeHighlights, quickFacts } from "@/data/site";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to the Electrical Engineering ePortfolio of Nijat Taghizade at Georgia Tech.",
};

export default function HomePage() {
  return (
    <>
      <PageContainer className="space-y-14">
        <HeroSection />

        <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <article className="panel">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/80">
              Welcome
            </p>
            <p className="text-sm leading-7 text-zinc-300">
              This ePortfolio contains information about who I am, what I am interested in, my
              current projects, my resume and my contact information.
            </p>
          </article>

          <aside className="panel">
            <h3 className="text-lg font-semibold text-zinc-100">Quick Highlights</h3>
            <ul className="mt-4 space-y-3">
              {homeHighlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-zinc-300">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="space-y-6">
          <SectionHeader
            eyebrow="Featured Work"
            title="Projects"
            description="Here are the projects that I&apos;ve worked on in the past or I am currently developing in the present."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="flex justify-start">
            <Link href="/projects" className="button-secondary">
              Explore all projects
            </Link>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="panel">
            <SectionHeader title="Quick Facts" />
            <div className="mt-6">
              <QuickFacts facts={quickFacts} />
            </div>
          </article>
          <article className="panel grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950/70">
              <Image
                src="/images/home/frc.jpg"
                alt="FIRST Robotics technical work"
                width={1578}
                height={1578}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950/70">
              <Image
                src="/images/home/iseftransmissions.jpg"
                alt="Transmission systems research visual"
                width={1250}
                height={1250}
                className="h-full w-full object-cover"
              />
            </div>
          </article>
        </section>
      </PageContainer>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import { HeroSection } from "@/components/HeroSection";
import { PageContainer } from "@/components/PageContainer";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { featuredProjects } from "@/data/site";

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

        <section data-reveal className="panel space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            <span aria-hidden="true" className="mr-2 text-blue-600">
              &#127891;
            </span>
            Education
          </h2>
          <div className="space-y-3 text-sm leading-7 text-slate-700">
            <p>
              <span className="font-semibold text-slate-900">Georgia Institute of Technology</span>
            </p>
            <p>
              B.S. in Electrical Engineering
              <span className="ml-2 text-slate-500">(Expected Graduation: May 2028)</span>
            </p>
            <p>
              <span className="font-medium text-slate-900">GPA:</span> 4.00
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-emerald-700">
                <span aria-hidden="true" className="mr-2">
                  &#128101;
                </span>
                Clubs and Activities
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>SiliconJackets</li>
                <li>Brazilian Jiu Jitsu</li>
              </ul>
            </article>
            <article className="rounded-xl border border-blue-200 bg-blue-50/60 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-blue-700">
                <span aria-hidden="true" className="mr-2">
                  &#128218;
                </span>
                Coursework
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>Signal Processing &amp; Systems</li>
                <li>Linear Algebra</li>
                <li>Multivariable Calculus</li>
                <li>Digital System Design</li>
              </ul>
            </article>
          </div>
        </section>

        <section data-reveal className="space-y-6">
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
              <span aria-hidden="true" className="mr-2">
                &#128640;
              </span>
              Explore all projects
            </Link>
          </div>
        </section>
      </PageContainer>
    </>
  );
}

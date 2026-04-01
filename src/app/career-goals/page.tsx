import type { Metadata } from "next";

import { PageContainer } from "@/components/PageContainer";
import { Timeline } from "@/components/Timeline";
import { careerTimeline } from "@/data/site";

export const metadata: Metadata = {
  title: "Career Goals",
  description:
    "Short-term, medium-term, and long-term electrical engineering career goals for Nijat Taghizade.",
};

export default function CareerGoalsPage() {
  return (
    <PageContainer className="space-y-10">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
        Career Roadmap
      </h1>

      <p className="text-sm leading-7 text-zinc-300">
        My long-term plan is to complete my B.S. in Electrical Engineering, deepen practical
        technical capability through research and internships, pursue graduate study, contribute to
        chip manufacturing and and help make a difference through efficient innovation in the
        scaling of electrical embedded systems.
      </p>

      <section className="panel space-y-5 text-sm leading-7 text-zinc-300">
        <p>
          I see professional growth as a series of deliberate engineering benchmarks. Academic
          brilliance and technical depth, particularly in circuit analysis, embedded systems, and
          hardware-aware programming, are my short-term priorities. In order to ensure that every
          project and internship in the future is supported by true fundamentals rather than
          surface-level knowledge, I want to develop a solid core.
        </p>
        <p>
          Simultaneously, I aim to continue to broaden my practical expertise by working on projects
          and in research settings that call for organized experimentation, design documentation, and
          iterative debugging. These environments teach me how to interact effectively with
          colleagues, make engineering trade-offs under practical restrictions, and create systems
          that are dependable enough for real-world usage.
        </p>
        <p>
          In order to have firsthand experience in the sector, I intend to pursue internships in
          hardware, semiconductor-adjacent, and embedded roles in the medium term. These experiences
          will help me develop my systems-level thinking skills and comprehend how decisions made at
          the device level affect deployment schedules, performance, manufacturability, and
          dependability.
        </p>
        <p>
          In the long run, I want to work full-time in semiconductor innovation after earning a
          master&apos;s degree in electrical engineering. In about ten years, I hope to establish an
          initiative in the form of a company that connects cutting-edge engineering knowledge with
          useful market effect after laying a solid technical and operational foundation.
        </p>
      </section>

      <section className="panel">
        <h3 className="mb-6 text-xl font-semibold text-zinc-100">Timeline and Action Plan</h3>
        <Timeline items={careerTimeline} />
      </section>
    </PageContainer>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Biomedical Bioreactor Mixing Mechanism",
  description:
    "Project details for motor-driven bioreactor mixing automation work at Georgia Tech.",
};

export default function BioreactorProjectPage() {
  return (
    <PageContainer className="space-y-8">
      <SectionHeader
        eyebrow="Project"
        title="Biomedical Bioreactor Mixing Mechanism"
        description="A motor-driven automation concept for cell mixing inside a bioreactor, developed in the Biomedical Microsystems Laboratory at Georgia Tech."
      />

      <section className="panel space-y-6 text-sm leading-7 text-zinc-300">
        <article>
          <h3 className="text-lg font-semibold text-zinc-100">Overview</h3>
          <p className="mt-3">
            This project focuses on automating cell-mixing routines in a bioreactor environment.
            Traditional workflows relied on manual rotation and tilt operations that were repetitive
            and operator-dependent. The objective was to create a motor-driven mechanism that could
            execute programmable motion profiles more consistently while reducing manual workload.
          </p>
        </article>

        <article>
          <h3 className="text-lg font-semibold text-zinc-100">Problem</h3>
          <p className="mt-3">
            Manual handling introduces variability in timing, angle consistency, and repeatability.
            In a biomedical context, those inconsistencies can affect process reliability and make
            comparative testing more difficult. The challenge was to design a mechanical system that
            can hold a vessel securely while applying controlled rotational and tilt motion in a way
            that is precise enough for lab workflow and practical enough for operation.
          </p>
        </article>

        <article>
          <h3 className="text-lg font-semibold text-zinc-100">My Role</h3>
          <p className="mt-3">
            I contributed to designing and prototyping both the gripping mechanism and the rotation
            mechanism. My work emphasized design feasibility, motion integrity, and engineering
            iteration: evaluating how to grip the vessel safely, transfer torque effectively, and
            preserve alignment under movement cycles.
          </p>
        </article>

        <article>
          <h3 className="text-lg font-semibold text-zinc-100">Mechanical / System Design</h3>
          <p className="mt-3">
            The system concept uses a motor-coupled motion stage with fixture geometry selected to
            balance grip force and accessibility. Early design iterations assessed friction behavior,
            tolerance sensitivity, and assembly practicality. A key concern was creating a secure
            interface without introducing excessive clamping stress that could compromise the setup
            or slow routine operation.
          </p>
        </article>

        <article>
          <h3 className="text-lg font-semibold text-zinc-100">Control / Motion Idea</h3>
          <p className="mt-3">
            The motion strategy replaces ad hoc manual movement with timed sequences for rotation and
            tilt. Conceptually, this enables profile-based control where angle, duration, and cycle
            frequency can be parameterized and adjusted by protocol. This structure supports better
            repeatability and creates a pathway to future closed-loop refinement.
          </p>
        </article>

        <article>
          <h3 className="text-lg font-semibold text-zinc-100">Why It Matters</h3>
          <p className="mt-3">
            Even at prototype stage, this direction is valuable because it links mechanical design,
            automation logic, and biomedical workflow efficiency. In many lab contexts, small
            reliability improvements in routine operations can compound into meaningful gains in
            consistency, operator time savings, and experimental throughput.
          </p>
        </article>

        <article>
          <h3 className="text-lg font-semibold text-zinc-100">Reflection / Skills Developed</h3>
          <p className="mt-3">
            This project strengthened my electromechanical design thinking and my ability to reason
            about prototype decisions under real constraints. It reinforced practical skills in
            mechanism ideation, hardware iteration, and systems-level decomposition of a biomedical
            problem into designable engineering components.
          </p>
        </article>
      </section>

      <section className="panel">
        <h3 className="mb-4 text-lg font-semibold text-zinc-100">Gripping and Rotation Mechanism</h3>
        <div className="overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950/70">
          <Image
            src="/images/projects/bioreactor/bioreactormechanism.png"
            alt="Gripping and rotation mechanism prototype"
            width={1214}
            height={3820}
            className="h-auto w-full"
            priority
          />
        </div>
      </section>

      <Link href="/projects" className="button-secondary inline-flex">
        Back to all projects
      </Link>
    </PageContainer>
  );
}

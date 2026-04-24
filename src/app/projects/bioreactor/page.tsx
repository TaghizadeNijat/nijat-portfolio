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
        description="An electromechanical automation prototype that replaces manual vessel rotation/tilt with repeatable, programmable motion in a biomedical lab workflow."
      />

      <section className="panel space-y-4 text-sm leading-7 text-slate-700">
        <h3 className="text-lg font-semibold text-slate-900">Technical Summary</h3>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>
              Reframed manual tilt/rotation cell-mixing into a parameterized motion-control problem
              with configurable angle, dwell time, and cycle frequency.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>
              Co-designed and iterated a gripping interface to maintain vessel stability under
              repeated motion while avoiding excessive clamp stress and operator friction.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>
              Evaluated torque transfer, alignment retention, and tolerance sensitivity to improve
              mechanical repeatability during sustained rotation/tilt cycles.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>
              Structured the architecture around motor-coupled actuation plus protocol-driven timing
              sequences to reduce operator-dependent variability in lab routines.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>
              Balanced assembly practicality and fixture accessibility so the mechanism is realistic
              for bench workflow, not only for one-off prototype demonstration.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>
              Established a clear path toward closed-loop enhancement by separating mechanical
              constraints, motion parameters, and control-logic hooks for future feedback integration.
            </span>
          </li>
        </ul>
      </section>

      <section className="panel">
        <h3 className="mb-4 text-lg font-semibold text-slate-900">Gripping and Rotation Mechanism</h3>
        <div className="overflow-hidden rounded-xl border border-slate-300 bg-slate-50">
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

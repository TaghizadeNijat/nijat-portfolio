import type { Metadata } from "next";
import Image from "next/image";

import { PageContainer } from "@/components/PageContainer";
import { QuickFacts } from "@/components/QuickFacts";
import { quickFacts } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "Biography and background of Nijat Taghizade, Electrical Engineering student.",
};

export default function AboutPage() {
  return (
    <PageContainer className="space-y-10">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">About Me</h1>

      <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <article className="panel space-y-5 text-sm leading-7 text-zinc-300">
          <p>
            I used to disassemble old phones and look at the hardware within, which is how my
            interest in electrical engineering began. The way little parts like the CPU, RAM, and
            board-level interconnects combined to produce user-friendly systems captivated me. I
            was already thinking in terms of architecture, integration, and function even if I
            didn&apos;t yet have formal technical vocabulary for what I was seeing.
          </p>
          <p>
            I moved from observation to experimentation because of that early curiosity. To gain a
            better understanding of the connection between electronics and coding, I started working
            with beginner Arduino kits and creating basic control programs. These initial modest
            initiatives had a long-lasting effect. They demonstrated to me that engineering involves
            more than just theory; it also involves construction, testing, iteration, and
            decision-making under pressure. My academic path was ultimately determined by this
            process-oriented approach to learning.
          </p>
          <p>
            I came to Georgia Tech to study electrical engineering because I wanted to be in a
            setting that was both professionally focused and intellectually demanding. I&apos;ve been
            able to integrate classroom principles with practical experience in embedded
            development, biological systems, and research-driven modeling at Tech.
          </p>
          <p>
            Beyond technical output, communication and dependability are very important to me. I
            view engineering as a discipline that demands accountability for results, thorough
            documentation, and clarity of ideas. I make an effort to make my work comprehensible,
            repeatable, and helpful to others whether I&apos;m working in a lab, writing project code,
            or presenting findings. In the long run, I hope to support the semiconductor sector and
            eventually establish a business based on real-world engineering knowledge.
          </p>
          <p>
            Outside academics and project work, I enjoy swimming and playing chess.
          </p>
        </article>

        <div className="space-y-6">
          <section className="panel p-4">
            <div className="overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950/70">
              <Image
                src="/images/about/headshot.JPG"
                alt="Nijat Taghizade headshot"
                width={865}
                height={865}
                className="h-auto w-full object-cover"
              />
            </div>
          </section>
          <section className="panel">
            <h3 className="text-lg font-semibold text-zinc-100">Quick Facts</h3>
            <div className="mt-5">
              <QuickFacts facts={quickFacts} />
            </div>
          </section>
        </div>
      </section>
    </PageContainer>
  );
}

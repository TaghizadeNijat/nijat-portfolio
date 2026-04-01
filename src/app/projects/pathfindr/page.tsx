import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { VideoEmbedPlaceholder } from "@/components/VideoEmbedPlaceholder";

export const metadata: Metadata = {
  title: "PathFindr",
  description:
    "AI ATL Hackathon winning accessibility app for low-vision and blind navigation.",
};

export default function PathfindrProjectPage() {
  return (
    <PageContainer className="space-y-8">
      <SectionHeader
        eyebrow="Featured Project"
        title="PathFindr"
        description="An accessibility-focused iOS navigation assistant designed for people with low vision or complete blindness, combining LiDAR sensing, multimodal interpretation, and adaptive voice guidance."
      />

      <section className="panel space-y-6 text-sm leading-7 text-zinc-300">
        <article>
          <h3 className="text-lg font-semibold text-zinc-100">Inspiration</h3>
          <p className="mt-3">
            PathFindr was motivated by a personal story from our team: one member had a close
            friend who had been nearly fully blind since birth and was increasingly stressed about
            finding a navigation solution that did not require constant dependence on physical tools.
            We wanted to build a system that could provide practical, confidence-building assistance
            for daily movement in both indoor and unfamiliar outdoor environments.
          </p>
        </article>

        <article>
          <h3 className="text-lg font-semibold text-zinc-100">What It Does</h3>
          <p className="mt-3">
            PathFindr delivers step-by-step guidance for tight indoor spaces and concise scene
            interpretation outdoors. In indoor mode, it estimates obstacle distance and direction of
            motion, then issues actionable prompts to keep movement safe and efficient. The app also
            provides haptic feedback by triggering vibration alerts as users approach hazards. The
            interaction model supports two modes: passive guidance when no prompt is given, and
            prompt-driven reasoning when users ask a specific question. In prompt mode, memory-aware
            LLM orchestration determines which specialized agents should respond, and the final
            message is returned to the Swift frontend.
          </p>
        </article>

        <article>
          <h3 className="text-lg font-semibold text-zinc-100">How We Built It</h3>
          <p className="mt-3">
            The system integrates on-device sensing with a Gemini-powered multi-agent backend. On
            iPhone, ARKit streams LiDAR depth and camera data, which are processed into geometric
            and semantic features such as object distance, angular relation, and scene context. The
            Swift client packages structured observations into JSON and sends them through a RESTful
            API to a Flask middleware layer. Flask forwards requests into our ADK orchestration
            environment, where specialized agents collaborate to produce concise spoken guidance.
          </p>
        </article>

        <article>
          <h3 className="text-lg font-semibold text-zinc-100">Technical Architecture</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <strong>Prompt Agent:</strong> Interprets user intent and prioritizes agent execution.
            </li>
            <li>
              <strong>Hazard Detector Agent:</strong> Classifies immediate risks from LiDAR-derived
              distance and angle thresholds.
            </li>
            <li>
              <strong>Image Agent:</strong> Adds richer visual interpretation and object awareness.
            </li>
            <li>
              <strong>Semantic Agent:</strong> Produces context-level descriptions of surroundings.
            </li>
            <li>
              <strong>Narrator Agent:</strong> Fuses outputs into a single speech-ready result for
              Apple text-to-speech.
            </li>
          </ul>
          <p className="mt-3">
            This architecture closes the loop from raw sensor data to adaptive audio guidance,
            allowing the system to remain responsive while still supporting richer prompt-based
            interaction.
          </p>
        </article>

        <article>
          <h3 className="text-lg font-semibold text-zinc-100">Challenges</h3>
          <p className="mt-3">
            Key challenges included balancing latency and quality, reducing redundant narration, and
            ensuring that hazard prioritization remained consistent under noisy sensor conditions.
            We also had to design concise responses that are useful in motion without overwhelming
            the user with excessive detail.
          </p>
        </article>

        <article>
          <h3 className="text-lg font-semibold text-zinc-100">Impact</h3>
          <p className="mt-3">
            PathFindr demonstrates how mobile sensing and multi-agent AI can be combined to improve
            accessibility in a practical way. Beyond the hackathon setting, the project reinforced
            principles that matter in engineering for human-centered systems: reliability, context
            awareness, and communication optimized for real user constraints.
          </p>
        </article>
      </section>

      <section className="panel">
        <h3 className="mb-4 text-lg font-semibold text-zinc-100">Architecture Diagram</h3>
        <div className="overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950/70">
          <Image
            src="/images/projects/pathfindr/pathfindrarchitecture.png"
            alt="PathFindr architecture diagram"
            width={933}
            height={933}
            className="h-auto w-full"
          />
        </div>
      </section>

      <VideoEmbedPlaceholder
        title="PathFindr Demo Video"
        videoUrl="https://www.youtube.com/embed/0d27K5rJvG0"
      />

      <section className="panel">
        <h3 className="text-lg font-semibold text-zinc-100">Links</h3>
        <ul className="mt-4 space-y-2 text-sm text-zinc-300">
          <li>
            Demo:{" "}
            <a
              href="https://youtu.be/0d27K5rJvG0?si=clv9EIdIRmOunidn"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-300 hover:text-cyan-200"
            >
              YouTube Walkthrough
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/TaghizadeNijat/pathfindr"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-300 hover:text-cyan-200"
            >
              github.com/TaghizadeNijat/pathfindr
            </a>
          </li>
        </ul>
      </section>

      <Link href="/projects" className="button-secondary inline-flex">
        Back to all projects
      </Link>
    </PageContainer>
  );
}

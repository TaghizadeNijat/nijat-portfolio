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
        description="A mobile accessibility navigator that combines ARKit LiDAR sensing, multimodal AI agents, and adaptive spoken guidance for blind and low-vision users."
      />

      <section className="panel space-y-4 text-sm leading-7 text-slate-700">
        <h3 className="text-lg font-semibold text-slate-900">Technical Summary</h3>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>
              Built an iOS-first navigation flow where ARKit streams LiDAR depth + camera context,
              then extracts spatial features (distance, directionality, obstacle proximity) for real-time guidance.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>
              Implemented a Swift client to package structured environment snapshots into JSON and
              send low-latency requests to a Flask middleware API.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>
              Orchestrated a multi-agent ADK backend (prompt, hazard, image, semantic, narrator) so
              tasks are routed by intent and merged into one speech-ready response.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>
              Added multimodal feedback loops: concise audio narration for primary guidance and
              vibration cues for immediate hazard escalation during movement.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>
              Tuned trade-offs between latency, response quality, and narration density to keep
              outputs actionable in motion without overwhelming users.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>
              Validated the end-to-end architecture in hackathon conditions, demonstrating practical
              accessibility impact and resilient sensor-to-voice operation under noisy inputs.
            </span>
          </li>
        </ul>
      </section>

      <section className="panel">
        <h3 className="mb-4 text-lg font-semibold text-slate-900">Architecture Diagram</h3>
        <div className="overflow-hidden rounded-xl border border-slate-300 bg-slate-50">
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
        <h3 className="text-lg font-semibold text-slate-900">Links</h3>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          <li>
            Demo:{" "}
            <a
              href="https://youtu.be/0d27K5rJvG0?si=clv9EIdIRmOunidn"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-700"
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
              className="text-blue-600 hover:text-blue-700"
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

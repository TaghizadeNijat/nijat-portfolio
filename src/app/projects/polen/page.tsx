import type { Metadata } from "next";
import Link from "next/link";

import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { VideoEmbedPlaceholder } from "@/components/VideoEmbedPlaceholder";

export const metadata: Metadata = {
  title: "PolEn",
  description:
    "PolEn project page: real-time macroeconomic policy engine using latent state modeling and RL.",
};

export default function PolenProjectPage() {
  return (
    <PageContainer className="space-y-8">
      <SectionHeader
        eyebrow="Featured Project"
        title="PolEn"
        description="A policy simulation engine that combines latent-state macro modeling, regime classification, and reinforcement-learning baselines for monetary decision support."
      />

      <section className="panel space-y-4 text-sm leading-7 text-slate-700">
        <h3 className="text-lg font-semibold text-slate-900">Technical Summary</h3>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>
              Built a real-time ingestion + feature engineering pipeline from FRED macro/market
              series (rates, spreads, volatility, inflation proxies, equity signals).
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>
              Transformed raw inputs into rolling z-scored structural factors (yield-curve slope,
              spread pressure, volatility intensity, correlation concentration) for model stability.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>
              Estimated latent macro states with EM-fitted Kalman filtering in linear state-space
              form, exposing hidden stress/liquidity/growth/inflation dynamics.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>
              Ran Numba-accelerated Monte Carlo simulations with regime-switching Markov transitions
              to compare policy scenarios (Ease/Hold/Tighten) over configurable horizons.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>
              Implemented a PPO baseline in a custom Gymnasium environment (actor-critic + GAE) to
              benchmark learned rate adjustments against analytical recommendations.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>
              Defined a risk-aware objective that jointly penalizes stress, expected shortfall, and
              crisis probability, improving decision transparency under tail-risk conditions.
            </span>
          </li>
        </ul>
      </section>

      <VideoEmbedPlaceholder
        title="PolEn Demo Video"
        videoUrl="https://www.youtube.com/embed/rAujqGvpdxw"
      />

      <section className="panel">
        <h3 className="text-lg font-semibold text-slate-900">Links</h3>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          <li>
            Demo:{" "}
            <a
              href="https://youtu.be/rAujqGvpdxw?si=i5xdHNSmc92Cc87L"
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
              href="https://github.com/TaghizadeNijat/PolEn"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              github.com/TaghizadeNijat/PolEn
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

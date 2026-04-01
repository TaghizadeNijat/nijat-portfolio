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
        description="A technically advanced interdisciplinary platform for macroeconomic policy simulation, regime classification, and decision support using state-space methods and reinforcement learning."
      />

      <section className="panel space-y-6 text-sm leading-7 text-zinc-300">
        <article>
          <h3 className="text-lg font-semibold text-zinc-100">Inspiration</h3>
          <p className="mt-3">
            While analyzing major economic events, our team encountered reporting that linked a
            single U.S. Federal Reserve policy decision to over $10 trillion in global bond market
            losses. The scale of that downstream effect motivated us to investigate whether we could
            model policy decision contexts more explicitly and create a transparent analytical engine
            for exploring alternatives.
          </p>
        </article>

        <article>
          <h3 className="text-lg font-semibold text-zinc-100">What It Does</h3>
          <p className="mt-3">
            PolEn is a real-time macroeconomic policy engine. It ingests historical market and
            macro signals, estimates latent economic state variables (Stress, Liquidity, Growth,
            Inflation), classifies the current environment into Normal, Fragile, or Crisis regimes,
            and then simulates forward trajectories under candidate policy actions: Ease, Hold, and
            Tighten. The recommendation engine minimizes a risk-adjusted loss that penalizes stress,
            expected shortfall, and crisis probability.
          </p>
        </article>

        <article>
          <h3 className="text-lg font-semibold text-zinc-100">How We Built It</h3>
          <p className="mt-3">
            The data layer pulls FRED series including S&P 500, 2Y/10Y Treasury yields, VIX, credit
            spreads, CPI, and the Fed Funds rate. Raw streams are transformed into rolling
            z-scored structural features such as yield-curve slope, correlation-eigenvalue
            concentration, spread pressure, and volatility intensity. Those features feed a latent
            state estimation pipeline and simulation layer designed for scenario analysis.
          </p>
        </article>

        <article>
          <h3 className="text-lg font-semibold text-zinc-100">Modeling Approach</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <strong>State estimation:</strong> Kalman filtering over a linear state-space model,
              fitted with Expectation-Maximization to recover 3D or 4D latent macro state.
            </li>
            <li>
              <strong>Simulation:</strong> Numba-JIT Monte Carlo propagation with regime-switching
              Markov dynamics and stress-growth coupling; user controls horizon and path count.
            </li>
            <li>
              <strong>RL baseline:</strong> PPO in a custom Gymnasium environment, with Actor-Critic
              architecture and GAE-based advantage estimation for continuous rate-change policy.
            </li>
          </ul>
          <p className="mt-3">
            The dashboard compares mathematically derived recommendations and RL actions, then
            visualizes variable trajectories and loss behavior against historical references.
          </p>
        </article>

        <article>
          <h3 className="text-lg font-semibold text-zinc-100">Technical Stack</h3>
          <p className="mt-3">
            Python, NumPy/Pandas, Numba, Kalman state-space tooling, Gymnasium, PPO
            reinforcement-learning libraries, and dashboard visualization components for policy
            scenario interpretation.
          </p>
        </article>

        <article>
          <h3 className="text-lg font-semibold text-zinc-100">Challenges</h3>
          <p className="mt-3">
            Major challenges included balancing model interpretability with forecasting complexity,
            calibrating regime transitions without overfitting, and defining a loss formulation that
            captured both expected performance and tail risk. Integrating RL as a meaningful
            comparison baseline also required careful reward shaping and stability tuning.
          </p>
        </article>

        <article>
          <h3 className="text-lg font-semibold text-zinc-100">Why It Matters</h3>
          <p className="mt-3">
            PolEn demonstrates how rigorous engineering workflows can be applied outside traditional
            hardware domains: data curation, model validation, simulation architecture, and decision
            support under uncertainty. For me, it reinforced systems thinking and technical rigor in
            an interdisciplinary setting where quantitative correctness and communication clarity are
            equally important.
          </p>
        </article>
      </section>

      <VideoEmbedPlaceholder
        title="PolEn Demo Video"
        videoUrl="https://www.youtube.com/embed/rAujqGvpdxw"
      />

      <section className="panel">
        <h3 className="text-lg font-semibold text-zinc-100">Links</h3>
        <ul className="mt-4 space-y-2 text-sm text-zinc-300">
          <li>
            Demo:{" "}
            <a
              href="https://youtu.be/rAujqGvpdxw?si=i5xdHNSmc92Cc87L"
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
              href="https://github.com/TaghizadeNijat/PolEn"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-300 hover:text-cyan-200"
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

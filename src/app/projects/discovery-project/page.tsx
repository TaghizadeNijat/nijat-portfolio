import type { Metadata } from "next";
import Link from "next/link";

import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Discovery Project",
  description:
    "Arduino-based laser communication system discovery project (in progress) for ECE ePortfolio.",
};

const partsList = [
  "2 microcontrollers (Arduino Nano or Uno)",
  "Laser transmitter module",
  "Laser receiver or light sensor module",
  "4-key keypad module or 4 pushbuttons",
  "OLED displays (I2C)",
  "N-channel MOSFET or transistor driver",
  "Resistors (10k pull-down/pull-up), optional threshold tuning potentiometer",
  "Breadboards, jumper wires, headers",
  "USB power or 5V supply",
];

export default function DiscoveryProjectPage() {
  return (
    <PageContainer className="space-y-8">
      <SectionHeader
        eyebrow="Required Discovery Project"
        title="Arduino-Based Laser Communication System"
        description="This is my Georgia Tech ECE ePortfolio Discovery Project and is actively in progress. The page is intentionally structured as an evolving engineering record, with current design intent, implementation plan, and next-step milestones."
      />

      <section className="rounded-2xl border border-amber-400/30 bg-amber-500/10 p-5 text-sm text-amber-100">
        <p className="font-medium">Status: Active development (in progress)</p>
        <p className="mt-2 text-amber-100/90">
          Core architecture is defined and implementation is moving from prototyping toward
          repeatable performance testing.
        </p>
      </section>

      <section className="panel space-y-6 text-sm leading-7 text-zinc-300">
        <article>
          <h3 className="text-lg font-semibold text-zinc-100">Overview</h3>
          <p className="mt-3">
            This discovery project explores a low-cost optical communication link using two Arduino
            devices. The transmitter converts keypad input into Morse-code laser pulses, while the
            receiver detects pulse timing and decodes messages for display on an OLED and the Serial
            Monitor. The system serves as a practical testbed for embedded timing logic,
            signal-conditioning strategy, and hardware-software integration.
          </p>
        </article>

        <article>
          <h3 className="text-lg font-semibold text-zinc-100">Objective</h3>
          <p className="mt-3">
            The intended outcome is a reliable two-device prototype where encoded laser pulses are
            interpreted correctly under normal indoor lighting with accuracy suitable for human
            interpretation. Success is measured through consistent dot/dash discrimination, stable
            decoding of short messages, and clear output rendering on both OLED and serial
            interfaces.
          </p>
        </article>

        <article>
          <h3 className="text-lg font-semibold text-zinc-100">Planned System Architecture</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <strong>Transmitter path:</strong> keypad input -&gt; character-to-Morse lookup -&gt;
              timing scheduler -&gt; transistor-switched laser pulse output.
            </li>
            <li>
              <strong>Receiver path:</strong> optical sensor input -&gt; thresholding/filtering
              -&gt; pulse width and gap measurement -&gt; finite-state decode logic -&gt; text
              reconstruction.
            </li>
            <li>
              <strong>User interface:</strong> OLED displays and Serial Monitor logs for input,
              transmission state, and decoded output confirmation.
            </li>
          </ul>
        </article>

        <article>
          <h3 className="text-lg font-semibold text-zinc-100">Parts and Components</h3>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {partsList.map((part) => (
              <li key={part} className="rounded-lg border border-zinc-800 bg-zinc-950/70 px-3 py-2">
                {part}
              </li>
            ))}
          </ul>
        </article>

        <article>
          <h3 className="text-lg font-semibold text-zinc-100">Intended Outcome</h3>
          <p className="mt-3">
            The target deliverable is a working link that can transmit and decode user-entered Morse
            messages with practical reliability over short indoor distance. The final demonstration
            should show repeatable transmission, robust timing classification, and understandable
            decoded output with moderate environmental noise.
          </p>
        </article>

        <article>
          <h3 className="text-lg font-semibold text-zinc-100">Skills Being Developed</h3>
          <p className="mt-3">
            This project is designed to strengthen embedded systems and signal-processing skills
            through direct implementation. On hardware, I am practicing breadboard prototyping,
            component selection, and safe laser switching with transistor drivers. On sensing, I am
            learning to process noisy optical signals under varying ambient light using thresholding,
            filtering, and calibration. On firmware, I am reinforcing Arduino fundamentals by
            building finite-state encoding/decoding logic and timing-accurate pulse measurement. The
            OLED interface work also develops practical I2C integration and lightweight human-machine
            interface design. Across all phases, I am emphasizing test discipline: controlled
            variation of distance, angle, and lighting while logging outcomes and tuning parameters.
          </p>
        </article>

        <article>
          <h3 className="text-lg font-semibold text-zinc-100">Current Status</h3>
          <p className="mt-3">
            The concept and component stack are defined, and the implementation plan is organized
            into transmitter logic, receiver classification, and reliability validation phases.
            Current effort is focused on pulse-timing consistency and threshold calibration to ensure
            the decoding state machine remains stable during real-world tests.
          </p>
        </article>

        <article>
          <h3 className="text-lg font-semibold text-zinc-100">Next Steps</h3>
          <ul className="mt-3 space-y-2">
            <li>Complete initial transmitter firmware and keypad-to-Morse mapping validation.</li>
            <li>Finalize receiver threshold strategy for indoor ambient-light robustness.</li>
            <li>Implement end-to-end decode pipeline with OLED output formatting.</li>
            <li>Run repeatability tests across distance and angle conditions with logging.</li>
            <li>Document reliability metrics and tune dot/dash timing thresholds.</li>
          </ul>
        </article>
      </section>

      <Link href="/projects" className="button-secondary inline-flex">
        Back to all projects
      </Link>
    </PageContainer>
  );
}

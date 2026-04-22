import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { VideoEmbedPlaceholder } from "@/components/VideoEmbedPlaceholder";

export const metadata: Metadata = {
  title: "Discovery Project",
  description:
    "Completed Arduino-based laser communication system for Discovery Project.",
};

export default function DiscoveryProjectPage() {
  return (
    <PageContainer className="space-y-8">
      <SectionHeader
        eyebrow="Required Discovery Project"
        title="Arduino-Based Laser Communication System"
        description="Completed"
      />

      <section className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-5 text-sm text-emerald-100">
        <p className="font-medium">Status: Completed</p>
      </section>

      <section className="panel space-y-6 text-sm leading-7 text-zinc-300">
        <article>
          <h3 className="text-lg font-semibold text-zinc-100">The Idea</h3>
          <p className="mt-3">
            For my Discovery Project, I built a two-device Arduino-based laser communication system
            that sends messages using Morse code and decodes them on a second microcontroller. The
            goal was to create a transmitter that takes user input from a navigation switch,
            converts letters into timed laser pulses, and a receiver that detects those pulses,
            classifies dots and dashes, and converts them back into readable text.
          </p>
          <p className="mt-3">
            My original plan used Nano-style boards and OLED displays, but due to hardware and
            compatibility limitations, the final working version used two Arduino Uno R3 boards, a
            laser transmitter module, a laser receiver or light sensor module, a 5-way navigation
            switch, and a 16x2 LCD on the receiver side. I chose this project because it combined
            embedded systems, signal interpretation, breadboard prototyping, and debugging in a
            hands-on way.
          </p>
        </article>

        <article>
          <h3 className="text-lg font-semibold text-zinc-100">The Process</h3>
          <p className="mt-3">
            I started the actual build on February 25 and completed the final tested version on
            April 7. The first part of the process was validating the transmitter hardware. I wired
            the navigation switch and laser transmitter to one Arduino and wrote test code to
            confirm that different button presses could generate different Morse pulse patterns.
          </p>
          <p className="mt-3">
            After that, I built the receiver using a second Arduino and the laser receiver module.
            This became the most difficult part of the project. The receiver did not output a
            perfectly clean digital signal, so my original pulse-width decoding method gave noisy
            and inconsistent results. To solve this, I changed the decoding strategy and treated
            the receiver output as bursts of detections rather than a perfectly stable high signal.
            I then counted those bursts and used calibrated thresholds to classify them as dots or
            dashes.
          </p>
          <p className="mt-3">
            Once both sides worked individually, I connected them into a full end-to-end system and
            tested short messages first, especially S, O, and SOS. After the Serial Monitor decoding
            worked reliably, I added the 16x2 LCD to the receiver so the decoded message could be
            displayed directly on the device. Along the way, I also had to adjust my hardware
            choices. I originally planned to use Nano-style boards and OLEDs, but because of package
            and upload issues, I switched to Arduino Uno boards and adapted the design around the
            components I had available.
          </p>
        </article>
      </section>

      <section className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70">
        <div className="overflow-hidden">
          <Image
            src="/images/projects/discovery/Diagram.png"
            alt="Arduino laser communication system diagram"
            width={2872}
            height={2872}
            className="h-auto w-full transition duration-300 group-hover:scale-105"
          />
        </div>
      </section>

      <section className="panel space-y-4">
        <h3 className="text-lg font-semibold text-zinc-100">Component and Wiring Table</h3>
        <div className="overflow-x-auto rounded-xl border border-zinc-800">
          <table className="min-w-[760px] w-full border-collapse text-left text-sm">
            <thead className="bg-zinc-900">
              <tr>
                <th className="border-b border-zinc-800 px-4 py-3 font-semibold text-zinc-100">
                  Component
                </th>
                <th className="border-b border-zinc-800 px-4 py-3 font-semibold text-zinc-100">
                  Arduino Connection
                </th>
                <th className="border-b border-zinc-800 px-4 py-3 font-semibold text-zinc-100">
                  Purpose
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-zinc-950/40 align-top">
                <td className="border-b border-zinc-800 px-4 py-3 text-zinc-200">
                  Laser transmitter module
                </td>
                <td className="border-b border-zinc-800 px-4 py-3 text-zinc-300">
                  Transmitter Arduino Uno, signal to D3, VCC to 5V, GND to GND
                </td>
                <td className="border-b border-zinc-800 px-4 py-3 text-zinc-300">
                  Sends Morse-coded laser pulses
                </td>
              </tr>
              <tr className="bg-zinc-950/10 align-top">
                <td className="border-b border-zinc-800 px-4 py-3 text-zinc-200">
                  5-way navigation switch module
                </td>
                <td className="border-b border-zinc-800 px-4 py-3 text-zinc-300">
                  Transmitter Arduino Uno, Up to D4, Right to D5, Left to D6, Down to D7, Center
                  press to D8, VCC to 5V, GND/COM to GND
                </td>
                <td className="border-b border-zinc-800 px-4 py-3 text-zinc-300">
                  Takes user input for message transmission
                </td>
              </tr>
              <tr className="bg-zinc-950/40 align-top">
                <td className="border-b border-zinc-800 px-4 py-3 text-zinc-200">
                  Laser receiver or light sensor module
                </td>
                <td className="border-b border-zinc-800 px-4 py-3 text-zinc-300">
                  Receiver Arduino Uno, signal output to D2, VCC to 5V, GND to GND
                </td>
                <td className="border-b border-zinc-800 px-4 py-3 text-zinc-300">
                  Detects incoming laser pulses
                </td>
              </tr>
              <tr className="bg-zinc-950/10 align-top">
                <td className="px-4 py-3 text-zinc-200">16x2 LCD display</td>
                <td className="px-4 py-3 text-zinc-300">
                  Receiver Arduino Uno, RS to D7, E to D8, D4 to D9, D5 to D10, D6 to D11, D7 to
                  D12, VSS to GND, VDD to 5V, RW to GND
                </td>
                <td className="px-4 py-3 text-zinc-300">Displays decoded message output</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="panel space-y-6 text-sm leading-7 text-zinc-300">
        <article>
          <h3 className="text-lg font-semibold text-zinc-100">The Outcome</h3>
          <p className="mt-3">
            The final outcome was a working two-device prototype that could transmit Morse-coded
            messages through a laser and decode them on a second Arduino. The receiver successfully
            interpreted the incoming light bursts, converted them into dots and dashes, matched them
            to letters, and displayed the decoded result in the Serial Monitor and on the LCD. I was
            able to verify the system using messages such as SOS and other short test words.
          </p>
          <p className="mt-3">
            The main success of the project was getting the full communication chain to work despite
            several design changes and hardware limitations. The biggest challenge was the receiver,
            since its output was noisier than expected and forced me to rethink my decoding method. I
            also ran into board compatibility issues with Nano-style microcontrollers and had to
            switch to Uno boards to keep the project moving.
          </p>
          <p className="mt-3">
            This project helped me develop ECE-related skills in embedded programming, circuit
            prototyping, digital input and output handling, timing-based signal decoding,
            hardware-software integration, and debugging real physical systems. It also made me more
            interested in embedded systems because I had to combine coding, electronics, testing, and
            iteration to reach a working result.
          </p>
          <p className="mt-3">
            Overall, the project showed me that engineering rarely works exactly as planned on the
            first try. The final design was different from my original pitch, but the process of
            adapting, debugging, and refining the system was what made the project valuable.
          </p>
        </article>
      </section>

      <VideoEmbedPlaceholder
        title="Arduino Laser Communication Demo"
        videoUrl="https://www.youtube.com/embed/v2cFy4j2Y9E"
      />

      <Link href="/projects" className="button-secondary inline-flex">
        Back to all projects
      </Link>
    </PageContainer>
  );
}

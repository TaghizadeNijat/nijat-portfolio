import type { Metadata } from "next";
import Link from "next/link";

import { ImageCarousel } from "@/components/ImageCarousel";
import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Analog Power Monitoring PCB",
  description:
    "2-layer KiCad analog power monitoring PCB with protected 5 A input, ADC sensing paths, and quantified Python simulation results.",
};

const analogProjectSlides = [
  {
    src: "/images/projects/analog-power-monitoring/3DPCBVisualization.png",
    title: "3D Rendered View of Assembled PCB",
    alt: "3D rendered assembled analog power monitoring PCB",
  },
  {
    src: "/images/projects/analog-power-monitoring/PCBLayout.png",
    title: "PCB Layout (Copper Routing, Ground Plane and Component Placement for Power Sensing)",
    alt: "PCB layout showing routing, ground plane, and component placement",
  },
  {
    src: "/images/projects/analog-power-monitoring/powermap.png",
    title: "Modeled 0-100 W Operating Range Power Map",
    alt: "Power map across modeled operating range",
  },
  {
    src: "/images/projects/analog-power-monitoring/adcresponse.png",
    title: "12-Bit ADC Response for Voltage and Current Sensing",
    alt: "ADC response plot for voltage and current sensing",
  },
  {
    src: "/images/projects/analog-power-monitoring/currentsensetransfer.png",
    title: "Current Sense Transfer Function",
    alt: "Current sense transfer function curve",
  },
  {
    src: "/images/projects/analog-power-monitoring/voltagesensetransfer.png",
    title: "Linear Voltage Sense Transfer Function",
    alt: "Linear voltage sense transfer function curve",
  },
];

export default function AnalogPowerMonitoringProjectPage() {
  return (
    <PageContainer className="space-y-8">
      <SectionHeader
        eyebrow="Featured Project"
        title="Analog Power Monitoring PCB"
        description="A 2-layer KiCad board and simulation workflow for protected DC input monitoring, analog front-end scaling, and robust MCU ADC reconstruction."
      />

      <section className="panel space-y-4 text-sm leading-7 text-slate-700">
        <h3 className="text-lg font-semibold text-slate-900">PCB Construction</h3>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>
              Designed a 2-layer KiCad power monitoring PCB that accepts an external DC supply,
              protects the input, and converts voltage/current into MCU-readable ADC signals.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>
              Implemented a 5 A fused input path with TVS protection, a 10 mOhm shunt resistor, and
              wide power routing for current flow from input to output.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>
              Built separate sensing paths for voltage measurement using a 56 kOhm / 10 kOhm
              divider and current measurement using shunt-based sensing with analog conditioning.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>
              Integrated MCU/debug headers, RC filtering, decoupling capacitors, top/bottom copper
              routing, and GND planes; completed ERC/DRC cleanup with 0 electrical errors and 0
              unconnected items.
            </span>
          </li>
        </ul>
      </section>

      <section className="panel space-y-4 text-sm leading-7 text-slate-700">
        <h3 className="text-lg font-semibold text-slate-900">
          Python Simulation and Quantifiable Results
        </h3>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>
              Modeled 861 operating points across 0-20 V and 0-5 A, producing transfer curves, ADC
              response plots, and a power map for the full practical range.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>
              Verified a voltage divider ratio of 0.1515 V/V, allowing input voltage measurement up
              to 21.78 V before a 3.3 V ADC saturates.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>
              Verified current-sense scaling of 0.5 V/A, with a theoretical ADC limit of 6.6 A and
              a practical fuse-limited range of 5 A.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>
              Simulated a 0-100 W operating envelope with 12-bit ADC reconstruction errors of
              approximately 0.0086% voltage, 0.0255% current, and 0.0273% power.
            </span>
          </li>
        </ul>
      </section>

      <ImageCarousel slides={analogProjectSlides} />

      <Link href="/projects" className="button-secondary inline-flex">
        Back to all projects
      </Link>
    </PageContainer>
  );
}

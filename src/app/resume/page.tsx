import type { Metadata } from "next";

import { PageContainer } from "@/components/PageContainer";
import { ResumeEmbed } from "@/components/ResumeEmbed";
import { resumeHighlights } from "@/data/site";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume, qualifications, and downloadable CV for Nijat Taghizade.",
};

const RESUME_PDF_PATH = "/resume/NijatTaghizadeResumeWebsite.pdf";

export default function ResumePage() {
  return (
    <PageContainer className="space-y-8">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Resume</h1>

      <section className="panel">
        <h3 className="text-lg font-semibold text-slate-900">Skills Summary</h3>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
          {resumeHighlights.skills.map((line) => (
            <li key={line} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </section>

      <ResumeEmbed pdfPath={RESUME_PDF_PATH} />
    </PageContainer>
  );
}

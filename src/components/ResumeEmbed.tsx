type ResumeEmbedProps = {
  pdfPath: string;
};

export function ResumeEmbed({ pdfPath }: ResumeEmbedProps) {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 sm:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-sm text-zinc-300">In-page preview</p>
        <a
          href={pdfPath}
          download
          className="rounded-lg border border-cyan-300/40 bg-cyan-400/10 px-3 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-300/20"
        >
          Download Resume PDF
        </a>
      </div>
      <div className="overflow-hidden rounded-xl border border-zinc-700">
        <iframe src={pdfPath} title="Nijat Taghizade Resume" className="h-[900px] w-full bg-zinc-950" />
      </div>
      <p className="mt-3 text-xs text-zinc-400">
        If the preview does not appear in your browser, use the download button above.
      </p>
    </section>
  );
}

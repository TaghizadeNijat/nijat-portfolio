type ResumeEmbedProps = {
  pdfPath: string;
};

export function ResumeEmbed({ pdfPath }: ResumeEmbedProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-sm text-slate-700">In-page preview</p>
        <a
          href={pdfPath}
          download
          className="rounded-lg border border-blue-300 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-100"
        >
          Download Resume PDF
        </a>
      </div>
      <div className="overflow-hidden rounded-xl border border-slate-300">
        <iframe src={pdfPath} title="Nijat Taghizade Resume" className="h-[900px] w-full bg-white" />
      </div>
      <p className="mt-3 text-xs text-slate-500">
        If the preview does not appear in your browser, use the download button above.
      </p>
    </section>
  );
}

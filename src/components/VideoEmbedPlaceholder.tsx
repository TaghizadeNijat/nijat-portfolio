type VideoEmbedPlaceholderProps = {
  title: string;
  videoUrl?: string;
  className?: string;
};

export function VideoEmbedPlaceholder({
  title,
  videoUrl,
  className = "",
}: VideoEmbedPlaceholderProps) {
  return (
    <section className={`rounded-2xl border border-slate-200 bg-white p-5 ${className}`}>
      <p className="mb-4 text-sm font-medium text-slate-700">{title}</p>
      {videoUrl ? (
        <div className="overflow-hidden rounded-xl border border-slate-300">
          <iframe
            src={videoUrl}
            title={title}
            className="h-72 w-full md:h-[26rem]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="flex h-72 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 px-5 text-center text-sm text-slate-500">
          Add a YouTube/Vimeo demo URL to render an embedded project walkthrough.
        </div>
      )}
    </section>
  );
}

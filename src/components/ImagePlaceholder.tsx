type ImagePlaceholderProps = {
  title: string;
  caption?: string;
  className?: string;
};

export function ImagePlaceholder({ title, className = "" }: ImagePlaceholderProps) {
  return (
    <figure
      className={`rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] ${className}`}
    >
      <div className="flex min-h-48 items-center justify-center rounded-xl border border-dashed border-zinc-700 bg-zinc-950/70 p-6 text-center">
        <div>
          <p className="text-sm font-medium text-zinc-200">{title}</p>
          <p className="mt-2 text-xs text-zinc-400">
            Replace this placeholder with your final project image asset.
          </p>
        </div>
      </div>
    </figure>
  );
}

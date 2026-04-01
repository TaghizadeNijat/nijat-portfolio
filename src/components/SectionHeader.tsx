type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <header className={align === "center" ? "text-center" : ""}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/80">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">{title}</h2>
      {description ? (
        <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">{description}</p>
      ) : null}
    </header>
  );
}

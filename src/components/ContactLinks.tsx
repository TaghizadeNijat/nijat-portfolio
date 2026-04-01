import { siteConfig } from "@/data/site";

export function ContactLinks() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <a
        href={siteConfig.github}
        target="_blank"
        rel="noreferrer"
        className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-5 transition hover:border-zinc-700"
      >
        <p className="text-sm font-medium text-zinc-100">GitHub</p>
        <p className="mt-2 text-sm text-zinc-300">{siteConfig.github}</p>
      </a>
      <a
        href={siteConfig.linkedin}
        target="_blank"
        rel="noreferrer"
        className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-5 transition hover:border-zinc-700"
      >
        <p className="text-sm font-medium text-zinc-100">LinkedIn</p>
        <p className="mt-2 text-sm text-zinc-300">{siteConfig.linkedin}</p>
      </a>
      <a
        href={`mailto:${siteConfig.email}`}
        className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-5 transition hover:border-zinc-700 sm:col-span-2"
      >
        <p className="text-sm font-medium text-zinc-100">Email</p>
        <p className="mt-2 text-sm text-zinc-300">{siteConfig.email}</p>
      </a>
    </div>
  );
}

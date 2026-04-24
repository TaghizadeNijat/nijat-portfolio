import { siteConfig } from "@/data/site";

export function ContactLinks() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <a
        href={siteConfig.github}
        target="_blank"
        rel="noreferrer"
        data-reveal
        className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-md hover:shadow-blue-100/70"
      >
        <p className="text-sm font-medium text-slate-900">
          <span aria-hidden="true" className="mr-2 inline-flex align-middle">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-slate-700">
              <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.3 1.8 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6A4.7 4.7 0 0 1 5.6 8c-.1-.3-.5-1.5.1-3 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C17 4.7 18 5 18 5c.6 1.5.2 2.7.1 3a4.7 4.7 0 0 1 1.3 3.2c0 4.7-2.8 5.7-5.6 6 .5.4.9 1.1.9 2.2v3.2c0 .4.2.7.8.6A12 12 0 0 0 12 .5Z" />
            </svg>
          </span>
          GitHub
        </p>
        <p className="mt-2 text-sm text-slate-700">{siteConfig.github}</p>
      </a>
      <a
        href={siteConfig.linkedin}
        target="_blank"
        rel="noreferrer"
        data-reveal
        className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-md hover:shadow-blue-100/70"
      >
        <p className="text-sm font-medium text-slate-900">
          <span aria-hidden="true" className="mr-2 inline-flex align-middle">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#0a66c2]">
              <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46a2.48 2.48 0 0 0-.02-4.96ZM2.75 9.75h4.5V21h-4.5V9.75ZM10.5 9.75H14v1.54h.05c.49-.92 1.67-1.9 3.45-1.9 3.69 0 4.38 2.43 4.38 5.59V21h-4.5v-5.1c0-1.22-.02-2.79-1.7-2.79-1.7 0-1.96 1.33-1.96 2.7V21h-4.5V9.75Z" />
            </svg>
          </span>
          LinkedIn
        </p>
        <p className="mt-2 text-sm text-slate-700">{siteConfig.linkedin}</p>
      </a>
      <a
        href={`mailto:${siteConfig.email}`}
        data-reveal
        className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-emerald-300 hover:shadow-md hover:shadow-emerald-100 sm:col-span-2"
      >
        <p className="text-sm font-medium text-slate-900">
          <span aria-hidden="true" className="mr-2 inline-flex align-middle">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-emerald-600">
              <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2 .46v10.04c0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75V7.2l-6.35 4.24a1.75 1.75 0 0 1-1.94 0L5 7.21Zm1.1-1.21L12 9.93 17.9 6H6.1Z" />
            </svg>
          </span>
          Email
        </p>
        <p className="mt-2 text-sm text-slate-700">{siteConfig.email}</p>
      </a>
    </div>
  );
}

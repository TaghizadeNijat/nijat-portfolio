import Link from "next/link";

import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white/80">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-10 sm:grid-cols-3 sm:px-8 lg:px-10">
        <section>
          <p className="text-sm font-semibold text-slate-900">{siteConfig.name}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Freshman Electrical Engineering student at Georgia Tech focused on embedded systems,
            hardware, and semiconductor innovation.
          </p>
        </section>

        <section>
          <p className="text-center text-sm font-semibold text-slate-900">Quick Navigation</p>
          <ul className="mt-3 grid grid-cols-2 gap-2">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex w-full items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <p className="text-center text-sm font-semibold text-slate-900">Connect</p>
          <ul className="mt-3 space-y-2">
            <li>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current"
                >
                  <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.3 1.8 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6A4.7 4.7 0 0 1 5.6 8c-.1-.3-.5-1.5.1-3 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C17 4.7 18 5 18 5c.6 1.5.2 2.7.1 3a4.7 4.7 0 0 1 1.3 3.2c0 4.7-2.8 5.7-5.6 6 .5.4.9 1.1.9 2.2v3.2c0 .4.2.7.8.6A12 12 0 0 0 12 .5Z" />
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current"
                >
                  <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46a2.48 2.48 0 0 0-.02-4.96ZM2.75 9.75h4.5V21h-4.5V9.75ZM10.5 9.75H14v1.54h.05c.49-.92 1.67-1.9 3.45-1.9 3.69 0 4.38 2.43 4.38 5.59V21h-4.5v-5.1c0-1.22-.02-2.79-1.7-2.79-1.7 0-1.96 1.33-1.96 2.7V21h-4.5V9.75Z" />
                </svg>
                LinkedIn
              </a>
            </li>
            <li>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 hover:shadow-sm"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current"
                >
                  <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2 .46v10.04c0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75V7.2l-6.35 4.24a1.75 1.75 0 0 1-1.94 0L5 7.21Zm1.1-1.21L12 9.93 17.9 6H6.1Z" />
                </svg>
                Contact
              </Link>
            </li>
          </ul>
        </section>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}

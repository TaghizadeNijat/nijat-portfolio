import Link from "next/link";

import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-800">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-10 sm:grid-cols-3 sm:px-8 lg:px-10">
        <section>
          <p className="text-sm font-semibold text-zinc-100">{siteConfig.name}</p>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            Freshman Electrical Engineering student at Georgia Tech focused on embedded systems,
            hardware, and semiconductor innovation.
          </p>
        </section>

        <section>
          <p className="text-sm font-semibold text-zinc-100">Quick Navigation</p>
          <ul className="mt-3 space-y-2">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-zinc-400 hover:text-zinc-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <p className="text-sm font-semibold text-zinc-100">Connect</p>
          <ul className="mt-3 space-y-2">
            <li>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-zinc-400 hover:text-zinc-200"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-zinc-400 hover:text-zinc-200"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="border-t border-zinc-800 py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}

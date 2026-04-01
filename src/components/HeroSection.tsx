import Link from "next/link";

export function HeroSection() {
  return (
    <section className="rounded-3xl border border-zinc-800 bg-[radial-gradient(circle_at_top,#0a2937,transparent_35%),linear-gradient(180deg,#111827_0%,#09090b_100%)] px-6 py-14 shadow-2xl shadow-cyan-950/20 sm:px-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/80">Nijat Taghizade</p>
      <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-zinc-100 sm:text-5xl">
        Hello, I&apos;m Nijat Taghizade, and I&apos;m an electrical engineering student interested in
        embedded systems, semiconductor design and circuit logic development.
      </h1>
      <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300">
        Welcome to my Portfolio. Here I document the various projects I work on and have completed
        in the past, expecially in the broader area of electrical engineering.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/projects" className="button-primary">
          View Projects
        </Link>
        <Link href="/resume" className="button-secondary">
          Resume
        </Link>
        <Link href="/contact" className="button-secondary">
          Contact
        </Link>
      </div>
    </section>
  );
}

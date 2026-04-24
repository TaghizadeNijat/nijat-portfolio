import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      data-reveal
      className="hero-section rounded-3xl border border-blue-100 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.16),transparent_35%),linear-gradient(180deg,#ffffff_0%,#f0fdf4_100%)] px-6 py-14 shadow-lg shadow-blue-100/80 sm:px-10"
    >
      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
        <div>
          <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Hello, I&apos;m Nijat Taghizade.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700">
            I&apos;m an electrical engineering student interested in embedded systems, semiconductor
            design and circuit logic development, and welcome to my portfolio. Here I document the
            various projects I work on and have completed in the past, especially in the broader
            area of electrical engineering.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="button-primary">
              <span aria-hidden="true" className="mr-2">
                &#128295;
              </span>
              View Projects
            </Link>
            <Link href="/resume" className="button-secondary">
              <span aria-hidden="true" className="mr-2">
                &#128196;
              </span>
              Resume
            </Link>
            <Link href="/contact" className="button-secondary">
              <span aria-hidden="true" className="mr-2">
                &#9993;
              </span>
              Contact
            </Link>
          </div>
        </div>
        <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-md shadow-blue-100/80">
          <Image
            src="/images/about/headshot.JPG"
            alt="Nijat Taghizade headshot"
            width={865}
            height={865}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

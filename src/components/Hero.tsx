import Image from "next/image";
import { business } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <Image
        src="/hero/hero.jpg"
        alt="Finished home exterior with landscaped yard"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/45 to-charcoal/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(15,20,17,0.35)_100%)]" />

      <div className="section-pad relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end pb-16 pt-28 md:justify-center md:pb-24 md:pt-24">
        <div className="max-w-3xl">
          <p className="animate-rise font-sans text-sm font-medium uppercase tracking-[0.22em] text-timber-light md:text-base">
            {business.area}
          </p>
          <h1 className="animate-rise animate-delay-1 mt-4 font-display text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            {business.name}
          </h1>
          <p className="animate-rise animate-delay-2 mt-5 max-w-xl text-lg text-white/90 md:text-xl">
            {business.heroLine}
          </p>
          <div className="animate-rise animate-delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={`tel:${business.phoneTel}`} className="btn-primary">
              Call Now
            </a>
            <a href="#contact" className="btn-secondary">
              Get a Quote
            </a>
          </div>
        </div>

        <div className="animate-fade animate-delay-4 mt-14 hidden items-center gap-3 text-white/60 md:flex">
          <span className="text-xs uppercase tracking-[0.25em]">Scroll</span>
          <span className="h-10 w-px bg-white/35" />
        </div>
      </div>
    </section>
  );
}

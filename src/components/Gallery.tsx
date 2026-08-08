import Image from "next/image";
import { galleryItems } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Gallery() {
  return (
    <section id="work" className="bg-charcoal py-20 text-white md:py-28">
      <div className="section-pad mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-timber-light">
            Our work
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">
            Projects that clean up nice
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            A look at the kind of remodeling, landscaping, and outdoor work we
            take on around Alabama.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <Reveal key={item.src} className={index === 0 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <figure className="group relative overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-90" />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 p-4 font-medium tracking-wide">
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

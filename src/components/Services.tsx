import { serviceGroups } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Services() {
  return (
    <section id="services" className="bg-cream py-20 md:py-28">
      <div className="section-pad mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pine">
            What we do
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Services for every part of the property
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            From indoor remodels to lawn care and outdoor builds — one crew for
            the whole job list.
          </p>
        </Reveal>

        <div className="mt-14 space-y-16 md:space-y-20">
          {serviceGroups.map((group) => (
            <Reveal key={group.id}>
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-14">
                <div>
                  <h3 className="font-display text-2xl font-bold text-ink md:text-3xl">
                    {group.title}
                  </h3>
                  <p className="mt-3 text-base text-muted md:text-lg">
                    {group.blurb}
                  </p>
                </div>
                <ul className="columns-1 gap-x-10 sm:columns-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="mb-2.5 break-inside-avoid border-b border-stone/80 pb-2.5 text-[0.95rem] text-ink/90"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

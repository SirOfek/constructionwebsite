import { business } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      <div className="section-pad mx-auto flex max-w-7xl flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-bold">{business.name}</p>
          <p className="mt-1 text-sm text-white/60">{business.area}</p>
        </div>
        <div className="flex flex-col gap-2 md:items-end">
          <a
            href={`tel:${business.phoneTel}`}
            className="font-semibold text-timber-light transition-colors hover:text-white"
          >
            {business.phoneDisplay}
          </a>
          <p className="text-sm text-white/45">
            © {year} {business.shortName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

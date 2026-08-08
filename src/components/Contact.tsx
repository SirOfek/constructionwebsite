"use client";

import { useState, type FormEvent } from "react";
import { business, serviceOptions } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

function buildSmsBody(data: {
  name: string;
  phone: string;
  service: string;
  message: string;
}) {
  const lines = [
    "New quote request from the TripleM website:",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Service: ${data.service}`,
  ];
  if (data.message.trim()) {
    lines.push(`Message: ${data.message.trim()}`);
  }
  return lines.join("\n");
}

export function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState<string>(serviceOptions[0]);
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = buildSmsBody({ name, phone, service, message });
    const url = `sms:${business.phoneSms}?&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-mist py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-pine/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-timber/10 blur-3xl"
      />

      <div className="section-pad relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pine">
              Contact
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
              Ready to get it done?
            </h2>
            <p className="mt-4 max-w-md text-lg text-muted">
              Call or text for a quote. Tell us what you need — remodels, repairs,
              lawns, or outdoor projects.
            </p>

            <a
              href={`tel:${business.phoneTel}`}
              className="mt-8 block font-display text-3xl font-bold text-pine transition-colors hover:text-pine-deep md:text-4xl"
            >
              {business.phoneDisplay}
            </a>
            <p className="mt-2 text-muted">{business.area}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${business.phoneTel}`} className="btn-primary">
                Call Now
              </a>
              <a
                href={`sms:${business.phoneSms}`}
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-pine/30 bg-white px-5 py-3.5 font-semibold text-pine transition-colors hover:border-pine hover:bg-pine hover:text-white"
              >
                Text Us
              </a>
            </div>
          </Reveal>

          <Reveal>
            <form
              onSubmit={onSubmit}
              className="border border-stone bg-white/80 p-6 shadow-[0_20px_50px_rgba(20,25,22,0.06)] backdrop-blur-sm md:p-8"
            >
              <h3 className="font-display text-2xl font-bold text-ink">
                Request a quote
              </h3>
              <p className="mt-2 text-sm text-muted">
                Opens a text message to {business.phoneDisplay} with your details.
              </p>

              <div className="mt-6 space-y-4">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-ink">
                    Name
                  </span>
                  <input
                    required
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-sm border border-stone bg-cream px-3.5 py-3 text-ink outline-none transition focus:border-pine"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-ink">
                    Phone
                  </span>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-sm border border-stone bg-cream px-3.5 py-3 text-ink outline-none transition focus:border-pine"
                    placeholder="Your phone number"
                    autoComplete="tel"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-ink">
                    Service type
                  </span>
                  <select
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full rounded-sm border border-stone bg-cream px-3.5 py-3 text-ink outline-none transition focus:border-pine"
                  >
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-ink">
                    Message
                  </span>
                  <textarea
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full resize-y rounded-sm border border-stone bg-cream px-3.5 py-3 text-ink outline-none transition focus:border-pine"
                    placeholder="Briefly describe the job"
                  />
                </label>
              </div>

              <button type="submit" className="btn-primary mt-6 w-full">
                Send Quote by Text
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

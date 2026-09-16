import { Section } from "@/components/ui/Container";

/**
 * 05 — WHAT WE BUILD. Blueprint v3 Section 3.05 (CHANGED — full
 * restructure). Also absorbs the old "Who We Work With" section per
 * Section 3.10's merge decision — no separate section needed.
 */
const groups = [
  {
    title: "For Businesses",
    tag: 'Turning "we have a WhatsApp number" into "we have a system that sells while we sleep."',
    items: [
      {
        name: "AI WhatsApp Sales & Support Agent",
        desc: "Trained on your products and rules. Takes orders, sends payment prompts 24/7, hands off to a human when needed.",
      },
      {
        name: "Full WhatsApp Commerce System",
        desc: "Catalog + AI + ordering + payment links + simple dashboard — everything inside WhatsApp.",
      },
      {
        name: "PWA Storefront",
        desc: "Installs to the home screen, works offline or on low data, no app-store fees.",
      },
      {
        name: "Smart Booking System",
        desc: "Instant appointments and automated reminders for salons, clinics, consultants and trainers.",
      },
      {
        name: "Brand & Website Foundation",
        desc: "Logo, full brand identity, conversion-focused website, Google Business Profile.",
      },
    ],
  },
  {
    title: "For Organisations",
    tag: "Credibility, member experience, and less admin chaos.",
    items: [
      {
        name: "Digital Presence System",
        desc: "Leadership pages, events, media archive, giving pathways — mobile-first and on-brand.",
      },
      {
        name: "Member / Volunteer Portal",
        desc: "Secure login for schedules, resources, forms and internal updates. Works offline.",
      },
      {
        name: "WhatsApp Community Hub + AI Helper",
        desc: "Answers common questions automatically, routes the rest, sends reminders.",
      },
      {
        name: "Event & Registration Engine",
        desc: "Branded RSVP, capacity control, QR check-in and post-event follow-up.",
      },
    ],
  },
  {
    title: "For Events",
    tag: "One shot. Make it look and feel professional.",
    items: [
      {
        name: "Branded Event Microsite + RSVP",
        desc: "Beautiful invitation page with real-time guest tracking.",
      },
      {
        name: "Digital Ticketing + QR Check-in",
        desc: "Tickets delivered via WhatsApp, fast scanning at the gate.",
      },
      {
        name: "Progressive Event App",
        desc: "Agenda, speakers, maps, live updates — installable, no download needed.",
      },
      {
        name: "Full Event Digital Package",
        desc: "Everything above in one coherent system, plus social kit and post-event follow-up.",
      },
    ],
  },
];

export function WhatWeBuild() {
  return (
    <Section id="build">
      <div className="mb-12 max-w-[42ch]">
        <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
          What we build
        </h2>
        <p className="mt-4 text-[1.05rem] text-muted">
          Grouped by who you are, not by service category.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {groups.map((group) => (
          <div
            key={group.title}
            className="rounded-[var(--radius-md)] border border-border bg-surface p-7"
          >
            <h3 className="mb-2 text-[1.3rem] font-bold">{group.title}</h3>
            <p className="mb-6 text-[0.95rem] leading-snug text-muted">
              {group.tag}
            </p>
            <ul className="flex flex-col gap-[18px]">
              {group.items.map((item, i) => (
                <li
                  key={item.name}
                  className={
                    i === 0 ? "" : "border-t border-border pt-[18px]"
                  }
                >
                  <span className="mb-1 block text-[0.98rem] font-semibold">
                    {item.name}
                  </span>
                  <span className="text-[0.9rem] text-muted">
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

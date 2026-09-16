import type { Project } from "./types";

/**
 * The three proof projects — Blueprint v3 Section 3.03 / Section 5.
 * Real, shipped work. Do not add placeholder/fabricated projects here;
 * an empty or short list is preferable to invented proof.
 */
export const projects: Project[] = [
  {
    slug: "scent-vault-sl",
    title: "Scent Vault SL",
    clientType: "business",
    category: "WhatsApp Commerce",
    summary:
      "A working online shop with WhatsApp ordering built into the buying flow.",
    liveUrl: "https://scentvaultsl.netlify.app/",
    hasCaseStudy: true,
    thumbnailAlt: "Scent Vault SL homepage — Luxury Perfume Oils hero section",
    thumbnailSrc: "/work/scent-vault-sl/thumbnail.png",
    caseStudy: {
      eyebrow: "Business · WhatsApp Commerce",
      client: "Scent Vault SL",
      type: "Business — E-commerce",
      builtWhat: "WhatsApp Commerce Website",
      status: "Live",
      challenge:
        "Scent Vault SL was selling entirely through manual WhatsApp replies. Every order meant a back-and-forth conversation, no catalog to browse, and no way to sell anything once the shop owner was offline for the night.",
      objective:
        "Build a real storefront that still felt as familiar and low-friction as ordering through WhatsApp — without forcing customers to learn a new way of buying.",
      approach:
        "We built a mobile-first shop with a real product catalog, then wired WhatsApp ordering directly into the buying flow instead of routing around it. Customers browse products with real photos and prices, then complete the order over WhatsApp exactly as they always have — the site does the selling, WhatsApp does the closing.",
      experience:
        "The result reads as a proper online shop on first glance, but never breaks the habit customers already trust: tapping through to WhatsApp to confirm and pay. Fast to load, comfortable on a mid-range Android phone, no forced account creation.",
      result:
        "A live, working shop with real customers ordering through it today. No invented growth numbers — the result is a functioning system that didn't exist before, replacing a process that depended entirely on one person answering messages in real time.",
      resultHighlights: [
        "Full product catalog live and browsable, replacing an unstructured chat-only offer.",
        "WhatsApp ordering wired directly into the buying flow — no new habit for customers to learn.",
        "Built mobile-first for real Sierra Leonean network conditions, not a lab connection.",
      ],
    },
  },
  {
    slug: "flaming-evangelical-ministries-hq",
    title: "Flaming Evangelical Ministries HQ",
    clientType: "organisation",
    category: "Digital Presence System",
    summary:
      "A multi-entity church site — leadership, sermons, events, and sub-ministries each with their own space.",
    liveUrl: "https://flaming-bible-church-hq.org/",
    hasCaseStudy: true,
    thumbnailAlt: "Flaming Bible Church HQ homepage — hero section with leadership photo",
    thumbnailSrc: "/work/flaming-evangelical-ministries-hq/thumbnail.png",
    caseStudy: {
      eyebrow: "Organisation · Digital Presence System",
      client: "Flaming Bible Church HQ (Flaming Evangelical Ministries International)",
      type: "Organisation — Church / Ministry",
      builtWhat: "Digital Presence System",
      status: "Live",
      challenge:
        "A ministry this size isn't one thing — it's a headquarters church, a youth fellowship, an annual worship event, and a leadership team with real biographies, all needing their own space without becoming five disconnected websites.",
      objective:
        "Build one coherent system that holds a parent ministry and its sub-organisations — Young Dynamic Youth Fellowship, the annual Reverence worship gathering — each with their own identity, while staying part of one site a visitor can navigate without getting lost.",
      approach:
        "We structured the site around a parent-to-sub-ministry hierarchy: the main church site carries leadership, service times, sermons and a live map, while YDY and Reverence each get their own tabbed sub-site (About / Events / Coordinators / Contact for YDY; About / Vision / Gallery / Through the Years / Shop for Reverence) nested under the same visual system. Leadership bios use a truncate-and-expand pattern so the homepage stays scannable while full biographies stay one tap away.",
      experience:
        "A visitor lands on one recognisable design language whether they're reading Bishop Koroma's biography, checking YDY's next Bible study, or watching the 2026 highlights reel — nothing feels like a separate, bolted-on microsite, even though the underlying content is really three organisations' worth of information.",
      result:
        "A live, working system currently serving the full ministry — leadership pages, service times, an embedded Google Map, sermon links to Facebook and YouTube, a full events calendar, and two active sub-ministry sites (YDY and Reverence) all shipping from one build.",
      resultHighlights: [
        "One system holding a parent ministry plus two active sub-ministries, not three disconnected sites.",
        "Truncate-and-expand leadership bios keep the homepage scannable without hiding real depth.",
        "Live embedded map, sermon archive links, and a working events calendar — all real, all shipped.",
      ],
    },
  },
  {
    slug: "beach-invitation-site",
    title: "Beach Invitation Site",
    clientType: "event",
    category: "Event Microsite + RSVP",
    summary: "A tap-to-open invitation with countdown, RSVP, and a location reveal — built for one day, done properly.",
    liveUrl: "https://v0-beach-invitation-design.vercel.app/",
    hasCaseStudy: true,
    thumbnailAlt: "Beach invitation event microsite — hero section, tropical theme",
    thumbnailSrc: "/work/beach-invitation-site/thumbnail.png",
    caseStudy: {
      eyebrow: "Event · Event Microsite + RSVP",
      client: "Faith Conteh — Birthday Celebration",
      type: "Event — Tropical Birthday",
      builtWhat: "Event Microsite + RSVP",
      status: "Live",
      challenge:
        "A one-day event gets one shot to feel professional. A plain text invite or a generic template doesn't build anticipation, doesn't collect RSVPs cleanly, and doesn't give guests a reason to open it twice.",
      objective:
        "Turn a birthday invitation into a small experience guests actually want to open and share — countdown, details, and RSVP in one place, on brand for a tropical beach theme.",
      approach:
        "We built a tap-to-open envelope gate as the first interaction — a small moment of anticipation before the invite reveals itself — followed by a live countdown timer, a details section (date, time, dress code, a deliberately withheld location for suspense), a photo gallery of the celebrant, and a full RSVP form capturing name, email, and attendance, all themed around a consistent tropical palette and iconography.",
      experience:
        "Every section carries the same beach/tropical visual language — palm fronds, hibiscus, wave motifs — so the countdown, gallery, and RSVP form all feel like one continuous invitation rather than stitched-together sections. Share and WhatsApp buttons make forwarding the invite to other guests a single tap.",
      result:
        "A live, working invitation site guests could open, RSVP through, and share — replacing a plain text or flyer-based invite with something that actually built anticipation for the event.",
      resultHighlights: [
        "Tap-to-open gate and live countdown timer, both fully functional, not decorative placeholders.",
        "Working RSVP form capturing name, email and attendance status.",
        "One-tap Share and WhatsApp buttons for guests to forward the invitation themselves.",
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsWithCaseStudies(): Project[] {
  return projects.filter((p) => p.hasCaseStudy);
}

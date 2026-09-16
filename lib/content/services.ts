import type { ServiceCategory } from "./types";

/**
 * Services — Blueprint v3 Section 4. Six categories, names and
 * descriptions only. NO price fields anywhere in this file — see
 * Pricing Display Rules. The public Services page renders these with
 * "Starting from — get a quote" CTAs only; actual price ranges live in
 * the internal Services & Pricing 2026 document, not in the codebase.
 */
export const serviceCategories: ServiceCategory[] = [
  {
    slug: "core-creative",
    title: "Core Creative Services",
    description:
      "Logos, brand identity and marketing graphics — the visual foundation everything else builds on.",
    items: [
      {
        name: "Logo Design",
        description:
          "2–3 concepts, revisions, and a full file pack (vector + PNG) so you own the mark outright.",
      },
      {
        name: "Full Brand Identity",
        description:
          "Logo, colour system, typography, basic guidelines and social templates as one coherent package.",
      },
      {
        name: "Marketing Graphics Package",
        description:
          "A batch of flyers, stories, posts and banners built to one visual system, not one-off designs.",
      },
      {
        name: "Google Business Profile Setup",
        description:
          "Full optimisation, photos and posts set up so you're findable and credible the moment someone searches.",
      },
    ],
  },
  {
    slug: "websites",
    title: "Websites & Digital Presence",
    description:
      "From a single contact-ready page to a full catalog and ordering experience.",
    items: [
      {
        name: "Presence / One-Page Website",
        description:
          "Mobile-first, a prominent WhatsApp button, and the SEO basics done properly.",
      },
      {
        name: "Business Website",
        description:
          "A full multi-page site — About, Services, Contact, Gallery — with WhatsApp ordering built in.",
      },
      {
        name: "Full Conversion Website + Catalog",
        description:
          "A product or service catalog with a WhatsApp ordering flow wired directly into it.",
      },
      {
        name: "Organisation / Church Website",
        description:
          "Leadership pages, events, media archive and giving pathways, built for your congregation or members.",
      },
    ],
  },
  {
    slug: "ai-whatsapp",
    title: "AI & WhatsApp Systems",
    description:
      "Our highest-demand category — turning a WhatsApp number into a system that works while you sleep.",
    items: [
      {
        name: "Basic WhatsApp Automation",
        description:
          "Auto-replies, a simple menu, and answers to your most common questions, always on.",
      },
      {
        name: "AI WhatsApp Sales / Support Agent",
        description:
          "Trained on your real products and rules — takes orders, answers 24/7, and hands off to a human when needed.",
      },
      {
        name: "Full WhatsApp Commerce System",
        description:
          "Catalog, AI agent, ordering, payment prompts and a simple dashboard — everything inside WhatsApp.",
      },
      {
        name: "Smart Booking System",
        description:
          "Appointments via WhatsApp or the web, with automated reminders so no-shows drop.",
      },
    ],
  },
  {
    slug: "pwa",
    title: "Progressive Web Apps & Lightweight Apps",
    description:
      "App-like experiences that install to the home screen — no app store, no download friction.",
    items: [
      {
        name: "Basic PWA (Storefront / Catalog)",
        description:
          "Installable, offline-friendly, with WhatsApp ordering built in from the start.",
      },
      {
        name: "Member / Volunteer Portal",
        description:
          "Secure login for schedules, resources and forms — built for organisations, not businesses.",
      },
      {
        name: "Advanced Business PWA",
        description:
          "Accounts, bookings, payments and push notifications in one installable app experience.",
      },
    ],
  },
  {
    slug: "events",
    title: "Event Systems",
    description:
      "One shot to look and feel professional — built so the moment doesn't get missed.",
    items: [
      {
        name: "Event Microsite + RSVP",
        description:
          "A beautiful invitation page with real-time RSVP tracking as guests respond.",
      },
      {
        name: "Digital Ticketing + QR Check-in",
        description:
          "Ticket sales or free tickets delivered via WhatsApp, with fast QR scanning at the gate.",
      },
      {
        name: "Progressive Event App",
        description:
          "Agenda, speakers, live updates and a map — installable, no download required.",
      },
      {
        name: "Full Event Digital Package",
        description:
          "Microsite, RSVP, tickets, digital program and a social kit, delivered as one coherent system.",
      },
    ],
  },
  {
    slug: "complete-packages",
    title: "Complete High-Value Packages",
    description:
      "Our most sophisticated offerings, combining brand, website and systems work into one launch.",
    items: [
      {
        name: "Brand + Website Launch",
        description:
          "A full brand identity paired with a conversion-focused website, launched together.",
      },
      {
        name: "Business Growth System",
        description:
          "Brand, website and an AI WhatsApp agent, working together as one system.",
      },
      {
        name: "Church / Organisation System",
        description:
          "Brand, website, member tools and a WhatsApp helper, built for your congregation or team.",
      },
      {
        name: "Event Experience System",
        description:
          "The full digital package for one major event, from invitation through post-event follow-up.",
      },
    ],
  },
];

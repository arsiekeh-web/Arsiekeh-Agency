"use client";

import { useState, type FormEvent } from "react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/**
 * ProjectForm — Tier 1 version. Per the Build Prompt, the "smart
 * multi-step project intake form" is explicitly Tier 2 — this is the
 * single-step, fully-functional Tier 1 baseline it will later upgrade
 * from, not a placeholder.
 *
 * WIRING NOTE FOR PRODUCTION: this currently builds a pre-filled
 * WhatsApp deep link from the form fields and opens it — zero backend
 * required, works today. If/when a CMS-backed lead pipeline exists
 * (e.g. logging submissions before redirecting), swap the onSubmit body
 * for a server action / API call; the form UI and validation don't
 * need to change.
 *
 * Includes a honeypot field for basic spam protection (Tier 1 security
 * requirement — "honeypot or equivalent, not an intrusive CAPTCHA").
 */
export function ProjectForm() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot check — bots fill every field, humans never see this one.
    if (data.get("company")) {
      return;
    }

    setSubmitting(true);

    const name = data.get("name")?.toString().trim() || "";
    const whatsapp = data.get("whatsapp")?.toString().trim() || "";
    const email = data.get("email")?.toString().trim() || "";
    const clientType = data.get("client_type")?.toString() || "Not specified";
    const what = data.get("what")?.toString().trim() || "";
    const budget = data.get("budget")?.toString() || "Not specified";

    const messageLines = [
      `Hi Arsiekeh, I'd like to start a project.`,
      ``,
      `Name: ${name}`,
      `WhatsApp: ${whatsapp}`,
      email ? `Email: ${email}` : null,
      `Client type: ${clientType}`,
      `Budget range: ${budget}`,
      ``,
      `What I'm building: ${what}`,
    ].filter(Boolean);

    const whatsappHref = buildWhatsAppLink(messageLines.join("\n"));

    window.open(whatsappHref, "_blank", "noopener,noreferrer");
    setSubmitting(false);
    form.reset();
  }

  return (
    <form
      className="flex flex-col gap-6"
      aria-label="Start a project"
      onSubmit={handleSubmit}
    >
      {/* Honeypot — visually and semantically hidden from real users */}
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-heading text-[0.92rem] font-semibold">
          Your name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="min-h-[48px] rounded-[var(--radius-md)] border border-border bg-surface px-3.5 py-3 text-[0.98rem] text-offwhite focus:border-lime focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="whatsapp" className="font-heading text-[0.92rem] font-semibold">
          WhatsApp number
        </label>
        <input
          type="tel"
          id="whatsapp"
          name="whatsapp"
          required
          className="min-h-[48px] rounded-[var(--radius-md)] border border-border bg-surface px-3.5 py-3 text-[0.98rem] text-offwhite focus:border-lime focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-heading text-[0.92rem] font-semibold">
          Email <span className="font-normal text-muted">(optional)</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="min-h-[48px] rounded-[var(--radius-md)] border border-border bg-surface px-3.5 py-3 text-[0.98rem] text-offwhite focus:border-lime focus:outline-none"
        />
      </div>

      <fieldset className="flex flex-col gap-2">
        <legend className="font-heading text-[0.92rem] font-semibold">
          What type of client are you?
        </legend>
        <div className="flex flex-wrap gap-2.5">
          {["Business", "Organisation", "Event"].map((option) => (
            <label key={option} className="relative">
              <input
                type="radio"
                name="client_type"
                value={option}
                className="peer absolute h-full w-full cursor-pointer opacity-0"
              />
              <span className="inline-flex rounded-full border border-border px-4 py-2.5 text-[0.9rem] text-offwhite/80 peer-checked:border-lime peer-checked:text-lime peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-lime">
                {option}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="flex flex-col gap-2">
        <label htmlFor="what" className="font-heading text-[0.92rem] font-semibold">
          What are you trying to build?
        </label>
        <textarea
          id="what"
          name="what"
          required
          placeholder="Tell us what you have in mind — a website, an AI WhatsApp agent, an event site, or something else."
          className="min-h-[120px] rounded-[var(--radius-md)] border border-border bg-surface px-3.5 py-3 text-[0.98rem] text-offwhite focus:border-lime focus:outline-none"
        />
      </div>

      <fieldset className="flex flex-col gap-2">
        <legend className="font-heading text-[0.92rem] font-semibold">
          Budget range{" "}
          <span className="font-normal text-muted">
            (your own signal — helps us recommend the right system)
          </span>
        </legend>
        <div className="flex flex-wrap gap-2.5">
          {[
            "Just getting started",
            "Mid-range project",
            "Full system / not sure yet",
          ].map((option) => (
            <label key={option} className="relative">
              <input
                type="radio"
                name="budget"
                value={option}
                className="peer absolute h-full w-full cursor-pointer opacity-0"
              />
              <span className="inline-flex rounded-full border border-border px-4 py-2.5 text-[0.9rem] text-offwhite/80 peer-checked:border-lime peer-checked:text-lime peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-lime">
                {option}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <button
        type="submit"
        disabled={submitting}
        className="mt-2 inline-flex min-h-[44px] w-full items-center justify-center rounded-[var(--radius-sm)] bg-lime px-6 py-3 font-heading text-base font-semibold text-background transition-colors duration-[var(--motion-fast)] hover:bg-lime/90 disabled:opacity-60"
      >
        {submitting ? "Opening WhatsApp…" : "SEND ON WHATSAPP →"}
      </button>
    </form>
  );
}

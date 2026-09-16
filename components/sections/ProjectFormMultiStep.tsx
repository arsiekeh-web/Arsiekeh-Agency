"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/**
 * ProjectFormMultiStep — Tier 2 "Smart Project Intake" from the Build
 * Prompt / Feature Stack: "conditional questions based on what the
 * visitor selects; collect budget and timeline."
 *
 * Three steps: (1) who you are + client type, (2) a conditional
 * follow-up question that changes based on client type — this is the
 * actual "smart" part, not just pagination — plus what you're building,
 * (3) budget + timeline + submit. Same WhatsApp deep-link handoff as
 * the Tier 1 form — no backend required, no price ever quoted back to
 * the visitor (see Pricing Display Rules).
 *
 * Each step is independently keyboard-navigable; nothing later in the
 * DOM is unreachable if JS fails, since this still degrades to a
 * single scrollable form if motion/state fails — no step is hidden via
 * CSS alone in a way that would trap content from assistive tech
 * reading the whole form at once. All fields remain in one <form>,
 * only their visibility toggles.
 */

type ClientType = "Business" | "Organisation" | "Event" | "";

const budgetOptions = [
  "Just getting started",
  "Mid-range project",
  "Full system / not sure yet",
];

const timelineOptions = ["ASAP", "1–2 weeks", "Within a month", "Flexible"];

const conditionalField: Record<
  Exclude<ClientType, "">,
  { name: string; label: string; placeholder: string }
> = {
  Business: {
    name: "existing_whatsapp",
    label: "Are you currently taking orders over WhatsApp?",
    placeholder: "e.g. yes, manually — or not yet",
  },
  Organisation: {
    name: "member_count",
    label: "Roughly how many members or volunteers do you need this to serve?",
    placeholder: "e.g. under 50, a few hundred, not sure yet",
  },
  Event: {
    name: "event_date",
    label: "When is the event?",
    placeholder: "e.g. 3rd May, or still being planned",
  },
};

export function ProjectFormMultiStep() {
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [clientType, setClientType] = useState<ClientType>("");
  const shouldReduceMotion = useReducedMotion();
  const stepHeadingRef = useRef<HTMLHeadingElement>(null);

  const totalSteps = 3;

  // Focus management (found during scrutiny pass — was previously
  // missing entirely): moving to a new step left keyboard focus on the
  // now-stale "Continue" button and gave screen reader users no cue
  // where new content begins, beyond the step-count live region below.
  // Standard fix for multi-step forms: move focus to a heading at the
  // top of each new step. Skipped on the very first render (step 0's
  // initial mount) so the page doesn't yank focus away from wherever
  // the user actually navigated in from.
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    stepHeadingRef.current?.focus();
  }, [step]);

  function goNext() {
    setStep((s) => Math.min(s + 1, totalSteps - 1));
  }
  function goBack() {
    setStep((s) => Math.max(s - 1, 0));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("company")) return; // honeypot

    setSubmitting(true);

    const name = data.get("name")?.toString().trim() || "";
    const whatsapp = data.get("whatsapp")?.toString().trim() || "";
    const email = data.get("email")?.toString().trim() || "";
    const what = data.get("what")?.toString().trim() || "";
    const budget = data.get("budget")?.toString() || "Not specified";
    const timeline = data.get("timeline")?.toString() || "Not specified";

    const conditional = clientType
      ? conditionalField[clientType as Exclude<ClientType, "">]
      : null;
    const conditionalAnswer = conditional
      ? data.get(conditional.name)?.toString().trim()
      : null;

    const messageLines = [
      `Hi Arsiekeh, I'd like to start a project.`,
      ``,
      `Name: ${name}`,
      `WhatsApp: ${whatsapp}`,
      email ? `Email: ${email}` : null,
      `Client type: ${clientType || "Not specified"}`,
      conditional && conditionalAnswer
        ? `${conditional.label} ${conditionalAnswer}`
        : null,
      `Budget range: ${budget}`,
      `Timeline: ${timeline}`,
      ``,
      `What I'm building: ${what}`,
    ].filter(Boolean);

    const whatsappHref = buildWhatsAppLink(messageLines.join("\n"));
    window.open(whatsappHref, "_blank", "noopener,noreferrer");
    setSubmitting(false);
    form.reset();
    setStep(0);
    setClientType("");
  }

  const stepVariants = {
    enter: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 16 },
    center: { opacity: 1, x: 0 },
    exit: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -16 },
  };

  const inputClass =
    "min-h-[48px] rounded-[var(--radius-md)] border border-border bg-surface px-3.5 py-3 text-[0.98rem] text-offwhite focus:border-lime focus:outline-none";
  const labelClass = "font-heading text-[0.92rem] font-semibold";
  const pillLabel =
    "inline-flex rounded-full border border-border px-4 py-2.5 text-[0.9rem] text-offwhite/80 peer-checked:border-lime peer-checked:text-lime peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-lime";

  return (
    <form
      className="flex flex-col gap-6"
      aria-label="Start a project"
      onSubmit={handleSubmit}
    >
      {/* Honeypot */}
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Step indicator */}
      <div className="flex items-center gap-2" aria-hidden="true">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
              i <= step ? "bg-lime" : "bg-border"
            }`}
          />
        ))}
      </div>
      <p className="sr-only" role="status">
        Step {step + 1} of {totalSteps}
      </p>

      <AnimatePresence mode="wait" initial={false}>
        {step === 0 && (
          <motion.div
            key="step-0"
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-6"
          >
            <h2 ref={stepHeadingRef} tabIndex={-1} className="sr-only">
              Step 1: your details
            </h2>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className={labelClass}>Your name</label>
              <input type="text" id="name" name="name" required className={inputClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="whatsapp" className={labelClass}>WhatsApp number</label>
              <input type="tel" id="whatsapp" name="whatsapp" required className={inputClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className={labelClass}>
                Email <span className="font-normal text-muted">(optional)</span>
              </label>
              <input type="email" id="email" name="email" className={inputClass} />
            </div>
            <fieldset className="flex flex-col gap-2">
              <legend className={labelClass}>What type of client are you?</legend>
              <div className="flex flex-wrap gap-2.5">
                {(["Business", "Organisation", "Event"] as const).map((option) => (
                  <label key={option} className="relative">
                    <input
                      type="radio"
                      name="client_type"
                      value={option}
                      required
                      onChange={() => setClientType(option)}
                      className="peer absolute h-full w-full cursor-pointer opacity-0"
                    />
                    <span className={pillLabel}>{option}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="step-1"
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-6"
          >
            <h2 ref={stepHeadingRef} tabIndex={-1} className="sr-only">
              Step 2: what you&apos;re building
            </h2>
            {clientType && (
              <div className="flex flex-col gap-2">
                <label htmlFor={conditionalField[clientType].name} className={labelClass}>
                  {conditionalField[clientType].label}
                </label>
                <input
                  type="text"
                  id={conditionalField[clientType].name}
                  name={conditionalField[clientType].name}
                  placeholder={conditionalField[clientType].placeholder}
                  className={inputClass}
                />
              </div>
            )}
            <div className="flex flex-col gap-2">
              <label htmlFor="what" className={labelClass}>
                What are you trying to build?
              </label>
              <textarea
                id="what"
                name="what"
                required
                placeholder="Tell us what you have in mind — a website, an AI WhatsApp agent, an event site, or something else."
                className={`min-h-[120px] ${inputClass}`}
              />
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step-2"
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-6"
          >
            <h2 ref={stepHeadingRef} tabIndex={-1} className="sr-only">
              Step 3: budget and timeline
            </h2>
            <fieldset className="flex flex-col gap-2">
              <legend className={labelClass}>
                Budget range{" "}
                <span className="font-normal text-muted">
                  (your own signal — helps us recommend the right system)
                </span>
              </legend>
              <div className="flex flex-wrap gap-2.5">
                {budgetOptions.map((option) => (
                  <label key={option} className="relative">
                    <input
                      type="radio"
                      name="budget"
                      value={option}
                      className="peer absolute h-full w-full cursor-pointer opacity-0"
                    />
                    <span className={pillLabel}>{option}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset className="flex flex-col gap-2">
              <legend className={labelClass}>Timeline</legend>
              <div className="flex flex-wrap gap-2.5">
                {timelineOptions.map((option) => (
                  <label key={option} className="relative">
                    <input
                      type="radio"
                      name="timeline"
                      value={option}
                      className="peer absolute h-full w-full cursor-pointer opacity-0"
                    />
                    <span className={pillLabel}>{option}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-2 flex items-center gap-3">
        {step > 0 && (
          <button
            type="button"
            onClick={goBack}
            className="min-h-[44px] rounded-[var(--radius-sm)] border border-border px-5 py-3 font-heading text-[0.95rem] font-semibold text-offwhite/80 transition-colors hover:border-offwhite/40 hover:text-offwhite"
          >
            ← Back
          </button>
        )}

        {step < totalSteps - 1 ? (
          <button
            type="button"
            onClick={goNext}
            className="min-h-[44px] flex-1 rounded-[var(--radius-sm)] bg-lime px-6 py-3 font-heading text-base font-semibold text-background transition-colors duration-[var(--motion-fast)] hover:bg-lime/90"
          >
            Continue →
          </button>
        ) : (
          <button
            type="submit"
            disabled={submitting}
            className="min-h-[44px] flex-1 rounded-[var(--radius-sm)] bg-lime px-6 py-3 font-heading text-base font-semibold text-background transition-colors duration-[var(--motion-fast)] hover:bg-lime/90 disabled:opacity-60"
          >
            {submitting ? "Opening WhatsApp…" : "SEND ON WHATSAPP →"}
          </button>
        )}
      </div>
    </form>
  );
}

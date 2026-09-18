import { Smartphone, PenTool, Globe, Megaphone } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

/**
 * CapabilityStrip — new feature, adapted from the 2026 rebrand mockup's
 * four-icon row under the hero (Digital Systems / Branding & Design /
 * Websites & Apps / Marketing Graphics). Genuinely additive: nothing
 * currently on the site gives a visitor a one-glance capability scan
 * before they've read a full paragraph.
 *
 * Deliberately adapted, not copied wholesale:
 * - Real lucide-react icons, not emoji (avoid-list explicitly bans
 *   emoji in headings/body copy — extending that to this strip).
 * - No decorative glow/light-beam behind icons, which the mockup's
 *   hero visual uses — that reads close to "radial orb" territory on
 *   the avoid-list. Plain icon + label, nothing behind it.
 * - Labels folded to match the site's actual service architecture
 *   (Blueprint v3 "What We Build": Business/Organisation/Event
 *   systems) rather than the mockup's own category names, so this
 *   doesn't introduce a second, conflicting service taxonomy.
 */
const capabilities = [
  { icon: Smartphone, label: "WhatsApp & AI Systems" },
  { icon: PenTool, label: "Branding & Identity" },
  { icon: Globe, label: "Websites & PWAs" },
  { icon: Megaphone, label: "Event & Marketing Graphics" },
] as const;

export function CapabilityStrip() {
  return (
    <Reveal delay={0.3}>
      <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-7">
        {capabilities.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2.5">
            <Icon className="h-[18px] w-[18px] text-lime" strokeWidth={1.75} aria-hidden="true" />
            <span className="text-[0.82rem] font-medium uppercase tracking-wide text-offwhite/70">
              {label}
            </span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

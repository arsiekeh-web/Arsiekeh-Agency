/**
 * Site-wide constants. Single source of truth for the WhatsApp number,
 * nav structure, and social links — never hardcode these inline in a
 * component, so a number/link change is a one-file edit.
 */

export const site = {
  name: "Arsiekeh Agency",
  tagline: "WhatsApp-First Digital Systems & Branding.",
  whatsappNumber: "+232 76 754560",
  whatsappUrl: "https://wa.me/23276754560",
  instagramUrl: "https://instagram.com",
  location: "Freetown, Sierra Leone",
} as const;

export const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
] as const;

export const footerLinks = {
  site: navLinks,
  legal: [
    { href: "/terms", label: "Terms of Service" },
    { href: "/privacy", label: "Privacy Policy" },
  ],
} as const;

import Link from "next/link";
import { site, footerLinks } from "@/lib/site-config";
import { LogoMark } from "@/components/ui/LogoMark";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-border py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 pb-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="mb-4 flex items-center gap-2.5 font-heading text-lg font-bold"
            >
              <LogoMark className="h-[30px] w-[30px] shrink-0" />
              Arsiekeh
            </Link>
            <p className="text-sm text-offwhite/80">
              WhatsApp-first digital systems and branding. {site.location}.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-muted">Site</h4>
            <ul className="space-y-2.5">
              {footerLinks.site.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-offwhite/80 hover:text-lime"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-muted">Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-offwhite/80 hover:text-lime"
                >
                  WhatsApp: {site.whatsappNumber}
                </a>
              </li>
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-offwhite/80 hover:text-lime"
                >
                  Instagram
                </a>
              </li>
              <li className="text-sm text-offwhite/80">{site.location}</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-muted">Legal</h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-offwhite/80 hover:text-lime"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted">
          <span>© {new Date().getFullYear()} Arsiekeh Agency. All rights reserved.</span>
          <span>Built to be seen.</span>
        </div>
      </Container>
    </footer>
  );
}

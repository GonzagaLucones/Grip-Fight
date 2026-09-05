import { Instagram } from "lucide-react";
import { ADDRESS_LINES, IMAGES, INSTAGRAM_HANDLE, INSTAGRAM_URL, NAV_LINKS, WHATSAPP_DISPLAY, waLink } from "../lib/site";
import { trackEvent } from "../lib/track";
import { scrollToSection } from "./Navbar";

export const Footer = () => (
  <footer data-testid="footer" className="border-t border-line bg-coal">
    <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10">
      <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <img src={IMAGES.logo} alt="Grip Fight Self Defense" className="h-16 w-auto" data-testid="footer-logo" />
          <p className="mt-2 font-display text-lg uppercase tracking-wide text-paper">
            Grip Fight Self Defense
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-steel" data-testid="footer-description">
            Jiu-Jitsu e Luta Livre para crianças, adolescentes e adultos em São Leopoldo - RS.
          </p>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-blood">
            Forje seu corpo. Fortaleça seu caráter.
          </p>
        </div>

        <nav aria-label="Links do rodapé">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-steel/60">Navegação</p>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(l.href);
                  }}
                  data-testid={`footer-link-${l.href.slice(1)}`}
                  className="text-sm text-steel transition-colors duration-200 hover:text-paper"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-steel/60">Contato</p>
          <address className="mt-5 space-y-1.5 not-italic">
            {ADDRESS_LINES.map((l) => (
              <p key={l} className="text-sm text-steel" data-testid="footer-address">
                {l}
              </p>
            ))}
          </address>
          <a
            href={waLink("general")}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-whatsapp-link"
            onClick={() => trackEvent("whatsapp_click", { location: "footer" })}
            className="mt-5 block text-sm font-semibold text-paper underline-offset-4 hover:text-blood hover:underline"
          >
            {WHATSAPP_DISPLAY}
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-instagram-link"
            className="mt-3 flex w-fit items-center gap-2 text-sm text-steel transition-colors duration-200 hover:text-paper"
          >
            <Instagram className="h-4 w-4 text-blood" />
            {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-line pt-7 sm:flex-row sm:items-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-steel/50">
          © {new Date().getFullYear()} Grip Fight Self Defense — São Leopoldo, RS
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-steel/50">
          Jiu-Jitsu • Luta Livre • Defesa Pessoal
        </p>
      </div>
    </div>
  </footer>
);

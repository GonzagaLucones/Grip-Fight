import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { IMAGES, NAV_LINKS, waLink } from "../lib/site";
import { trackEvent } from "../lib/track";

export const scrollToSection = (href) => {
  const el = document.querySelector(href);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -72 });
  else el.scrollIntoView({ behavior: "smooth" });
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    scrollToSection(href);
  };

  return (
    <>
      <header
        data-testid="navbar"
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
          scrolled ? "border-b border-line bg-ink/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 md:px-10">
          <a
            href="#topo"
            onClick={(e) => go(e, "#topo")}
            data-testid="navbar-logo-link"
            className="flex items-center gap-3"
          >
            <img src={IMAGES.logo} alt="Grip Fight Self Defense" className="h-11 w-auto" />
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => go(e, l.href)}
                data-testid={`nav-link-${l.href.slice(1)}`}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel transition-colors duration-200 hover:text-paper"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={waLink("general")}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="navbar-cta-button"
              onClick={() => trackEvent("whatsapp_click", { location: "navbar" })}
              className="group hidden items-center gap-2 bg-blood px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-colors duration-200 hover:bg-paper hover:text-ink sm:flex"
            >
              Conversar com a equipe
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
            <button
              data-testid="navbar-menu-toggle"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="flex h-11 w-11 items-center justify-center border border-line text-paper lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="navbar-mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-ink px-6 pb-10 pt-28 lg:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Menu mobile">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => go(e, l.href)}
                  data-testid={`mobile-nav-link-${l.href.slice(1)}`}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  className="border-b border-line py-4 font-display text-3xl uppercase tracking-wide text-paper"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <motion.a
              href={waLink("general")}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="mobile-menu-cta-button"
              onClick={() => trackEvent("whatsapp_click", { location: "mobile_menu" })}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex items-center justify-center bg-blood py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white"
            >
              Conversar com a equipe
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

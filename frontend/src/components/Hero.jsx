import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin } from "lucide-react";
import { IMAGES, waLink } from "../lib/site";
import { trackEvent } from "../lib/track";
import { PhotoSlot } from "./PhotoSlot";
import { scrollToSection } from "./Navbar";

const MaskedLine = ({ children, delay }) => (
  <span className="-mt-[0.18em] block overflow-hidden pb-[0.08em] pt-[0.18em]">
    <motion.span
      className="block"
      initial={{ y: "110%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const frameY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      id="topo"
      ref={ref}
      data-testid="hero-section"
      className="grain relative flex min-h-[100svh] flex-col overflow-hidden bg-ink"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/3 h-[520px] w-[520px] rounded-full bg-blood/10 blur-[140px]"
      />

      <div className="mx-auto grid w-full max-w-[1400px] flex-1 items-center gap-10 px-5 pb-16 pt-32 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:pt-24">
        <motion.div style={{ y: textY }} className="relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mb-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-steel"
            data-testid="hero-location"
          >
            <MapPin className="h-3.5 w-3.5 text-blood" />
            São Leopoldo • RS — Jiu-Jitsu &amp; Luta Livre
          </motion.p>

          <h1
            data-testid="hero-headline"
            className="font-display text-[13.5vw] uppercase leading-[0.98] tracking-tight text-paper sm:text-[9vw] lg:text-[5.6vw]"
          >
            <MaskedLine delay={0.25}>Não treine</MaskedLine>
            <MaskedLine delay={0.35}>
              para <span className="text-outline">lutar.</span>
            </MaskedLine>
            <MaskedLine delay={0.49}>Treine para estar</MaskedLine>
            <MaskedLine delay={0.6}>
              <span className="text-blood">preparado.</span>
            </MaskedLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-steel md:text-lg"
            data-testid="hero-subheadline"
          >
            Jiu-Jitsu e defesa pessoal para desenvolver controle, técnica e confiança dentro e fora do tatame.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href={waLink("general")}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-cta-primary"
              onClick={() => {
                trackEvent("hero_cta_click");
                trackEvent("whatsapp_click", { location: "hero" });
              }}
              className="group flex items-center justify-center gap-3 bg-blood px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:bg-paper hover:text-ink"
            >
              Conversar com a equipe
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5">→</span>
            </a>
            <button
              data-testid="hero-cta-secondary"
              onClick={() => scrollToSection("#a-grip-fight")}
              className="flex items-center justify-center gap-3 border border-paper/25 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-paper transition-colors duration-200 hover:border-paper hover:bg-paper hover:text-ink"
            >
              Conhecer a Grip Fight
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.6 }}
            className="mt-6 max-w-md text-sm leading-relaxed text-steel/90"
            data-testid="hero-objection-line"
          >
            Fale com nossa equipe e descubra qual turma faz mais sentido para você ou para seu filho.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.55, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <motion.div style={{ y: frameY }} className="relative aspect-square overflow-hidden rounded-2xl border border-line bg-coal">
            <PhotoSlot
              src={IMAGES.treino}
              alt="Equipe Grip Fight reunida após treino em São Leopoldo"
              label="Foto de treino no tatame — imagem principal do hero"
              filename="03-treino-grip-fight.jpg"
              eager
              testId="hero-image"
            />
          </motion.div>
          <p className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-steel/70">
            <span>Treino real</span>
            <span>Grip Fight — SL/RS</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

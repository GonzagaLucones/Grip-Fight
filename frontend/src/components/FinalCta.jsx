import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { waLink } from "../lib/site";
import { trackEvent } from "../lib/track";
import { Reveal } from "./Reveal";

const MaskedLine = ({ children, delay, inView }) => (
  <span className="block overflow-hidden pb-[0.08em]">
    <motion.span
      className="block"
      initial={{ y: "110%" }}
      animate={inView ? { y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

export const FinalCta = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "0px 0px -15% 0px" });

  return (
  <section id="contato" data-testid="final-cta-section" className="grain relative overflow-hidden bg-ink py-28 md:py-40">
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blood/15 blur-[160px]"
    />
    <div className="relative mx-auto max-w-[1400px] px-5 text-center md:px-10">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-steel" data-testid="final-cta-eyebrow">
          Seu primeiro treino começa com uma decisão.
        </p>
      </Reveal>

      <h2
        ref={titleRef}
        className="mx-auto mt-8 font-display text-[13vw] uppercase leading-[0.98] text-paper sm:text-[9vw] lg:text-[7vw]"
        data-testid="final-cta-title"
      >
        <MaskedLine delay={0.1} inView={titleInView}>Forje seu corpo.</MaskedLine>
        <MaskedLine delay={0.22} inView={titleInView}>
          <span className="text-blood">Fortaleça seu caráter.</span>
        </MaskedLine>
      </h2>

      <Reveal delay={0.35}>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-steel md:text-lg" data-testid="final-cta-copy">
          Se você está procurando uma nova atividade para você ou para seu filho, converse com
          nossa equipe e descubra como começar.
        </p>
      </Reveal>

      <Reveal delay={0.45}>
        <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={waLink("general")}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="final-cta-primary"
            onClick={() => trackEvent("whatsapp_click", { location: "final_cta" })}
            className="group flex w-full items-center justify-center gap-3 bg-blood px-10 py-5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:bg-paper hover:text-ink sm:w-auto"
          >
            Conversar com a equipe
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5">→</span>
          </a>
          <a
            href={waLink("experimental")}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="final-cta-secondary"
            onClick={() => {
              trackEvent("experimental_class_click", { location: "final_cta" });
              trackEvent("whatsapp_click", { location: "final_cta" });
            }}
            className="flex w-full items-center justify-center gap-3 border border-paper/25 px-10 py-5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-paper transition-colors duration-200 hover:border-paper hover:bg-paper hover:text-ink sm:w-auto"
          >
            Agendar aula experimental
          </a>
        </div>
      </Reveal>
    </div>
  </section>
  );
};

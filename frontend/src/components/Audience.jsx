import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { IMAGES } from "../lib/site";
import { trackEvent } from "../lib/track";
import { ChapterTag, Reveal } from "./Reveal";
import { PhotoSlot } from "./PhotoSlot";
import { scrollToSection } from "./Navbar";

const CARDS = [
  {
    title: "Quero uma atividade para meu filho",
    copy: "Mais do que gastar energia. Uma oportunidade para desenvolver disciplina, confiança, coordenação, respeito e socialização em um ambiente de aprendizado.",
    cta: "Conhecer o Kids",
    target: "#modalidades",
    event: "audience_kids_click",
    img: IMAGES.kids,
    imgAlt: "Crianças treinando Jiu-Jitsu infantil na Grip Fight em São Leopoldo",
    imgLabel: "Foto da turma Kids — experiência das crianças no tatame",
    imgFile: "grip-fight-kids.jpg",
    testId: "audience-card-kids",
  },
  {
    title: "Quero começar a treinar",
    copy: "Você não precisa chegar sabendo lutar. Comece do seu nível, aprenda a técnica e evolua no seu ritmo.",
    cta: "Conhecer as turmas",
    target: "#como-funciona",
    event: "audience_adult_click",
    img: null,
    testId: "audience-card-adult",
  },
  {
    title: "Quero levar a luta a sério",
    copy: "Para quem busca evolução técnica, preparação e um ambiente onde o Jiu-Jitsu e a Luta Livre também são vividos como esporte.",
    cta: "Conhecer a Grip Fight",
    target: "#a-grip-fight",
    event: "audience_competitor_click",
    img: IMAGES.medalhas,
    imgAlt: "Medalhas conquistadas pela equipe Grip Fight em competições de Jiu-Jitsu",
    testId: "audience-card-competitor",
  },
];

export const Audience = () => (
  <section id="para-quem" data-testid="audience-section" className="bg-paper py-24 text-ink md:py-32">
    <div className="mx-auto max-w-[1400px] px-5 md:px-10">
      <Reveal>
        <ChapterTag number="01" label="Para quem é" dark={false} testId="audience-chapter" />
      </Reveal>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl uppercase leading-[1.02] sm:text-5xl lg:text-6xl" data-testid="audience-title">
            Talvez você esteja procurando <span className="text-blood">exatamente isso.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="max-w-md text-base leading-relaxed text-ink/60 md:text-lg lg:ml-auto">
            Nem todo mundo chega ao tatame pelo mesmo motivo.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {CARDS.map((c, i) => (
          <Reveal key={c.testId} delay={0.08 * i} className="h-full">
            <motion.article
              data-testid={c.testId}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group flex h-full flex-col border border-ink/10 bg-bone"
            >
              {c.img ? (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]">
                    <PhotoSlot
                      src={c.img}
                      alt={c.imgAlt}
                      label={c.imgLabel}
                      filename={c.imgFile}
                      testId={`${c.testId}-image`}
                    />
                  </div>
                </div>
              ) : (
                <div className="mat-lines relative flex aspect-[4/3] items-end overflow-hidden bg-ink p-7">
                  <span
                    aria-hidden
                    className="absolute -right-4 -top-8 font-display text-[11rem] leading-none text-transparent"
                    style={{ WebkitTextStroke: "1.5px rgba(241,239,233,0.14)" }}
                  >
                    02
                  </span>
                  <p className="relative font-display text-2xl uppercase leading-tight text-paper">
                    Do seu jeito.
                    <br />
                    <span className="text-blood">No seu ritmo.</span>
                  </p>
                </div>
              )}
              <div className="flex flex-1 flex-col p-7">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-blood">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-2xl uppercase leading-tight">
                  {c.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/65">{c.copy}</p>
                <button
                  data-testid={`${c.testId}-cta`}
                  onClick={() => {
                    trackEvent(c.event);
                    scrollToSection(c.target);
                  }}
                  className="mt-7 flex w-fit items-center gap-2 border-b-2 border-ink pb-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-ink transition-colors duration-200 hover:border-blood hover:text-blood"
                >
                  {c.cta}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

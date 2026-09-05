import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { waLink } from "../lib/site";
import { trackEvent } from "../lib/track";
import { ChapterTag, Reveal } from "./Reveal";

const FAQS = [
  {
    q: "Preciso ter experiência para começar?",
    a: "Não. A pessoa pode começar mesmo sem experiência prévia. Nossa equipe orienta você durante o processo.",
  },
  {
    q: "Preciso estar em forma?",
    a: "Não é necessário chegar em uma condição física específica para começar. O treinamento também faz parte do processo de evolução.",
  },
  {
    q: "Meu filho nunca treinou. Ele pode começar?",
    a: "Sim. A Grip Fight possui trabalho voltado para crianças, com foco no desenvolvimento através do Jiu-Jitsu.",
  },
  {
    q: "Jiu-Jitsu é só para quem quer competir?",
    a: "Não. A prática pode ter objetivos diferentes, como aprendizado técnico, condicionamento, disciplina, desenvolvimento pessoal e competição.",
  },
  {
    q: "Sou adulto e nunca treinei. Posso começar?",
    a: "Sim. A evolução começa do seu ponto de partida.",
  },
  {
    q: "Como funciona a aula experimental?",
    a: "Fale com nossa equipe pelo WhatsApp para entender como funciona e receber as orientações para o seu primeiro treino.",
  },
  {
    q: "Como descubro qual turma é melhor para mim?",
    a: "Nossa equipe pode orientar você de acordo com sua idade, objetivo e experiência.",
  },
  {
    q: "Onde fica a Grip Fight?",
    a: "Av. Henrique Bier, 215, 2º andar, Campina, São Leopoldo - RS.",
  },
];

export const Faq = () => (
  <section id="faq" data-testid="faq-section" className="grain relative bg-ink py-24 md:py-32">
    <div className="mx-auto max-w-[1400px] px-5 md:px-10">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <Reveal>
            <ChapterTag number="09" label="Dúvidas" testId="faq-chapter" />
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-8 font-display text-4xl uppercase leading-[1.02] text-paper sm:text-5xl" data-testid="faq-title">
              Está pensando em começar, mas ainda tem <span className="text-blood">dúvidas?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-steel">
              As perguntas mais comuns de quem está chegando agora — respondidas sem rodeio.
            </p>
            <a
              href={waLink("doubt")}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="faq-cta"
              onClick={() => trackEvent("whatsapp_click", { location: "faq" })}
              className="group mt-9 inline-flex items-center gap-3 border border-paper/25 px-7 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-paper transition-colors duration-200 hover:border-blood hover:bg-blood hover:text-white"
            >
              Ainda tem dúvidas? Converse com a equipe
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5">→</span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-line" data-testid={`faq-item-${i}`}>
                <AccordionTrigger
                  data-testid={`faq-trigger-${i}`}
                  className="py-5 text-left font-display text-lg uppercase tracking-wide text-paper hover:text-blood hover:no-underline md:text-xl [&[data-state=open]]:text-blood"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-steel/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {f.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent
                  className="pl-9 pr-4 text-sm leading-relaxed text-steel md:text-base"
                  data-testid={`faq-answer-${i}`}
                >
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </div>
  </section>
);

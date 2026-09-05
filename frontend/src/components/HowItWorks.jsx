import { waLink } from "../lib/site";
import { trackEvent } from "../lib/track";
import { ChapterTag, Reveal } from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Converse com a equipe",
    copy: "Conte se você quer treinar ou está procurando uma turma para seu filho.",
  },
  {
    n: "02",
    title: "Descubra a turma certa",
    copy: "Nossa equipe orienta você sobre a modalidade e a turma mais adequada.",
  },
  {
    n: "03",
    title: "Venha para o tatame",
    copy: "Conheça a Grip Fight e experimente na prática.",
  },
];

export const HowItWorks = () => (
  <section id="como-funciona" data-testid="how-it-works-section" className="bg-paper py-24 text-ink md:py-32">
    <div className="mx-auto max-w-[1400px] px-5 md:px-10">
      <Reveal>
        <ChapterTag number="08" label="Como funciona" dark={false} testId="how-it-works-chapter" />
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-8 max-w-3xl font-display text-4xl uppercase leading-[1.02] sm:text-5xl lg:text-6xl" data-testid="how-it-works-title">
          Seu primeiro passo é mais <span className="text-blood">simples</span> do que parece.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-px border border-ink/10 bg-ink/10 md:grid-cols-3" data-testid="how-it-works-steps">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={0.08 * i} className="h-full">
            <div className="group flex h-full flex-col bg-paper p-8 transition-colors duration-300 hover:bg-bone" data-testid={`step-${s.n}`}>
              <span className="font-display text-6xl leading-none text-ink/15 transition-colors duration-300 group-hover:text-blood md:text-7xl">
                {s.n}
              </span>
              <h3 className="mt-8 font-display text-2xl uppercase tracking-wide">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{s.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <div className="mt-12 flex justify-center">
          <a
            href={waLink("experimental")}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="how-it-works-cta"
            onClick={() => {
              trackEvent("experimental_class_click", { location: "how_it_works" });
              trackEvent("whatsapp_click", { location: "how_it_works" });
            }}
            className="group flex items-center gap-3 bg-ink px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-paper transition-colors duration-200 hover:bg-blood hover:text-white"
          >
            Conversar com a equipe
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5">→</span>
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

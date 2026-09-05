import { Quote } from "lucide-react";
import { IMAGES } from "../lib/site";
import { ChapterTag, Reveal } from "./Reveal";
import { PhotoSlot } from "./PhotoSlot";

const SLOTS = [
  { id: "aluno", label: "Depoimento de aluno(a)" },
  { id: "pai", label: "Depoimento de pai/mãe" },
  { id: "atleta", label: "Depoimento de atleta" },
];

export const SocialProof = () => (
  <section id="depoimentos" data-testid="social-proof-section" className="grain relative bg-ink py-24 md:py-32">
    <div className="mx-auto max-w-[1400px] px-5 md:px-10">
      <Reveal>
        <ChapterTag number="07" label="Prova social" testId="social-proof-chapter" />
      </Reveal>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl uppercase leading-[1.02] text-paper sm:text-5xl lg:text-6xl" data-testid="social-proof-title">
            Quem treina aqui <span className="text-blood">sabe.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="max-w-md text-base leading-relaxed text-steel md:text-lg lg:ml-auto">
            Resultados e histórias reais são mais importantes do que promessas.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3" data-testid="testimonial-slots">
        {SLOTS.map((s, i) => (
          <Reveal key={s.id} delay={0.07 * i} className="h-full">
            <article
              data-testid={`testimonial-slot-${s.id}`}
              className="flex h-full flex-col border border-dashed border-line bg-coal/50 p-7"
            >
              <Quote className="h-6 w-6 text-blood/60" />
              <p className="mt-5 flex-1 font-mono text-[11px] uppercase leading-relaxed tracking-[0.2em] text-steel/70">
                Espaço reservado para depoimento real
              </p>
              <div className="mt-8 border-t border-line pt-5">
                <p className="text-sm font-semibold text-paper/70">{s.label}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-steel/50">
                  Nome • Modalidade • Foto
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-steel/80" data-testid="social-proof-note">
          Estamos reunindo histórias reais de alunos e famílias. Em breve, elas ocupam este espaço —
          enquanto isso, a prova está no tatame:
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-3" data-testid="social-proof-strip">
        <Reveal className="h-full">
          <div className="aspect-[4/3] overflow-hidden border border-line">
            <img
              src={IMAGES.medalhas}
              alt="Medalhas da equipe Grip Fight em competições"
              data-testid="proof-strip-medals"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.04]"
            />
          </div>
        </Reveal>
        <Reveal delay={0.07} className="h-full">
          <div className="aspect-[4/3] overflow-hidden border border-line">
            <PhotoSlot
              src={IMAGES.treino}
              alt="Treino na Grip Fight"
              label="Foto de treino — turmas em ação"
              filename="03-treino-grip-fight.jpg"
              testId="proof-strip-training"
            />
          </div>
        </Reveal>
        <Reveal delay={0.14} className="h-full">
          <div className="aspect-[4/3] overflow-hidden border border-line">
            <PhotoSlot
              src={IMAGES.kids}
              alt="Turma Kids da Grip Fight"
              label="Foto da turma Kids"
              filename="grip-fight-kids.jpg"
              testId="proof-strip-kids"
            />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

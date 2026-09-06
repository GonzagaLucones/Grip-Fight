import { Quote } from "lucide-react";
import { IMAGES } from "../lib/site";
import { ChapterTag, Reveal } from "./Reveal";
import { PhotoSlot } from "./PhotoSlot";

const TESTIMONIALS = [
  {
    id: "juliane",
    name: "Juliane Sampaio",
    tag: null,
    text: "Excelente lugar, a recepção, horários flexíveis, ambiente climatizado, professores qualificados sempre se aprimorando e com foco em seus alunos — o que é muito importante. Super indico!",
  },
  {
    id: "gabriel",
    name: "Gabriel Nogueira",
    tag: "Pai de aluno — Turma Kids",
    text: "Ótima localização e ambiente limpo e organizado! Meus filhos amam, ótima didática para as crianças!",
  },
  {
    id: "andrieli",
    name: "Andrieli Urnauer",
    tag: "Mãe de aluno — Turma Kids",
    text: "Meu filho de 5 anos treina na Grip Fight e só tenho elogios. Os professores são extremamente competentes, pacientes e dedicados — ensinam não apenas as técnicas do esporte, mas valores como disciplina, respeito, foco e autoconfiança. A evolução dele é nítida: mais seguro, mais concentrado e muito feliz. O ambiente é acolhedor e transmite confiança para nós, pais. Recomendo de olhos fechados!",
  },
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

      <div className="mt-14 grid gap-5 md:grid-cols-3" data-testid="testimonials-grid">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.id} delay={0.07 * i} className="h-full">
            <article
              data-testid={`testimonial-card-${t.id}`}
              className="flex h-full flex-col border border-line bg-coal p-7 transition-colors duration-300 hover:border-blood/50"
            >
              <Quote className="h-6 w-6 text-blood" />
              <p className="mt-5 flex-1 text-sm leading-relaxed text-paper/85 md:text-base">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-8 border-t border-line pt-5">
                <p className="text-sm font-semibold text-paper">{t.name}</p>
                {t.tag && (
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-steel/60">
                    {t.tag}
                  </p>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-3" data-testid="social-proof-strip">
        <Reveal className="h-full">
          <div className="aspect-[4/3] overflow-hidden rounded-xl border border-line">
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
          <div className="aspect-[4/3] overflow-hidden rounded-xl border border-line">
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
          <div className="aspect-[4/3] overflow-hidden rounded-xl border border-line">
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

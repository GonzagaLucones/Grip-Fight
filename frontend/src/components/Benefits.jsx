import { ChapterTag, Reveal } from "./Reveal";

const BENEFITS = [
  { name: "Disciplina", copy: "Aprender a continuar mesmo quando fica difícil." },
  { name: "Respeito", copy: "Aprender a treinar com os outros, competir com integridade e reconhecer a evolução de cada pessoa." },
  { name: "Confiança", copy: "Construída através da prática, da evolução e da superação de desafios." },
  { name: "Autocontrole", copy: "Aprender a controlar o corpo, a técnica e as próprias reações." },
  { name: "Condicionamento", copy: "Movimento, esforço e treinamento físico dentro da prática." },
  { name: "Superação", copy: "Cada treino apresenta um novo desafio para vencer." },
];

export const Benefits = () => (
  <section id="transformacao" data-testid="benefits-section" className="grain relative bg-ink py-24 md:py-32">
    <div className="mx-auto max-w-[1400px] px-5 md:px-10">
      <Reveal>
        <ChapterTag number="02" label="Transformação" testId="benefits-chapter" />
      </Reveal>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl uppercase leading-[1.02] text-paper sm:text-5xl lg:text-6xl" data-testid="benefits-title">
            Não é só sobre <span className="text-blood">aprender a lutar.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="max-w-md text-base leading-relaxed text-steel md:text-lg lg:ml-auto">
            O que acontece no tatame pode acompanhar você muito além dele.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3" data-testid="benefits-grid">
        {BENEFITS.map((b, i) => (
          <Reveal key={b.name} delay={0.05 * i} className="h-full">
            <div className="group flex h-full flex-col justify-between bg-ink p-8 transition-colors duration-300 hover:bg-smoke" data-testid={`benefit-${b.name.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")}`}>
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-steel/60">
                  0{i + 1}
                </span>
                <span className="h-2 w-2 rotate-45 bg-blood opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="mt-14">
                <h3 className="font-display text-2xl uppercase tracking-wide text-paper transition-colors duration-300 group-hover:text-blood md:text-3xl">
                  {b.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-steel">{b.copy}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-16 border-l-2 border-blood pl-6 md:pl-10">
          <p className="max-w-2xl text-base leading-relaxed text-steel md:text-lg" data-testid="benefits-manifesto">
            Na Grip Fight, as artes marciais são ferramentas para desenvolver corpo, técnica e caráter.
          </p>
          <p className="mt-4 font-display text-2xl uppercase tracking-wide text-paper md:text-4xl" data-testid="benefits-tagline">
            Forje seu corpo. <span className="text-blood">Fortaleça seu caráter.</span>
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

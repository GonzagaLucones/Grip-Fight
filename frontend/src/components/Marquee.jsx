const VALUES = [
  "DISCIPLINA", "RESPEITO", "CLAREZA", "CORAGEM", "HONRA",
  "LEALDADE", "JUSTIÇA", "COMPAIXÃO", "HONESTIDADE",
];

export const Marquee = () => {
  const row = [...VALUES, ...VALUES];
  return (
    <div
      data-testid="values-marquee"
      className="relative overflow-hidden border-y border-line bg-coal py-4"
    >
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
        {row.map((v, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-steel">
              {v}
            </span>
            <span className="h-1.5 w-1.5 rotate-45 bg-blood" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
};

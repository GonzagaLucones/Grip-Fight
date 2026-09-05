import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 28, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const ChapterTag = ({ number, label, dark = true, testId }) => (
  <div
    data-testid={testId}
    className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] ${
      dark ? "text-steel" : "text-ink/50"
    }`}
  >
    <span className="text-blood">CAP. {number}</span>
    <span className={`h-px w-10 ${dark ? "bg-line" : "bg-ink/20"}`} />
    <span>{label}</span>
  </div>
);

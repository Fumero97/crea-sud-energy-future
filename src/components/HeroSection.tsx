import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 dot-pattern" />
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full animate-drift"
        style={{
          background: "radial-gradient(circle, rgba(255,107,43,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full animate-drift-slow"
        style={{
          background: "radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10 pt-16">
        <motion.div {...fadeInUp}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium tracking-wide text-flame border border-flame/30 mb-8">
            ⚡ RICERCA APPLICATA · PNRR
          </span>
        </motion.div>

        <motion.h1
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-[-0.02em] text-foreground max-w-4xl mx-auto mb-6 text-balance"
        >
          Il futuro dell'energia è{" "}
          <span className="text-gradient-brand">reversibile</span>
        </motion.h1>

        <motion.p
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty"
        >
          CREA-SUD sviluppa celle a combustibile reversibili avanzate capaci di
          operare sia come generatori di elettricità che come elettrolizzatori
          per la produzione di idrogeno verde.
        </motion.p>

        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#progetto"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium bg-gradient-to-r from-flame to-spark text-foreground glow-flame transition-all duration-300 hover:scale-[1.02]"
          >
            Scopri il Progetto
          </a>
          <a
            href="#contatti"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium border border-aqua text-aqua hover:bg-aqua/10 transition-all duration-300"
          >
            Partner & Contatti
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

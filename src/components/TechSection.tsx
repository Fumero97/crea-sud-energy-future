import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Bullet = ({ children, color }: { children: string; color: string }) => (
  <li className="flex items-start gap-3 text-sm text-muted-foreground">
    <span
      className="mt-1.5 block w-2 h-2 shrink-0"
      style={{
        background: color,
        boxShadow: `0 0 6px ${color}`,
      }}
    />
    {children}
  </li>
);

const TechSection = () => {
  return (
    <section
      id="tecnologie"
      className="relative py-24 md:py-32"
      style={{
        clipPath: "polygon(0 0, 100% 5%, 100% 95%, 0 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest text-aqua uppercase mb-4">
            Tecnologie
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-foreground">
            Due fronti, un obiettivo
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-0">
          {/* SOFC */}
          <motion.div
            {...fadeInUp}
            className="relative p-8 md:p-12"
            style={{
              background: "linear-gradient(135deg, #1a100d 0%, hsl(222,60%,7%) 100%)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
            }}
          >
            {/* Large semi-transparent icon */}
            <div className="absolute top-4 right-4 opacity-[0.04] text-flame">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c-4 4-7 7-7 11a7 7 0 0014 0c0-4-3-7-7-11z" />
              </svg>
            </div>

            <span className="text-[10px] tracking-[0.3em] uppercase text-flame/70 font-medium">
              Alta Temperatura
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-1">
              SOFC / SOEC
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Ossidi Solidi · 700–900°C
            </p>
            <ul className="space-y-3">
              <Bullet color="#FF6B2B">Elettrolita in ossido di zirconio (YSZ)</Bullet>
              <Bullet color="#FF6B2B">Efficienza &gt;60%</Bullet>
              <Bullet color="#FF6B2B">Operazione reversibile integrata</Bullet>
              <Bullet color="#FF6B2B">Materiali ceramici avanzati</Bullet>
            </ul>
          </motion.div>

          {/* PEM */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.15 }}
            className="relative p-8 md:p-12"
            style={{
              background: "linear-gradient(135deg, #0d161a 0%, hsl(222,60%,7%) 100%)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
            }}
          >
            <div className="absolute top-4 right-4 opacity-[0.04] text-aqua">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c-3 6-7 9-7 13a7 7 0 0014 0c0-4-4-7-7-13z" />
              </svg>
            </div>

            <span className="text-[10px] tracking-[0.3em] uppercase text-aqua/70 font-medium">
              Bassa Temperatura
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-1">
              PEMFC / PEMEC
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Membrane Polimeriche · ~80°C
            </p>
            <ul className="space-y-3">
              <Bullet color="#0EA5E9">Membrana Nafion® e alternative</Bullet>
              <Bullet color="#0EA5E9">Catalizzatori a base di Pt</Bullet>
              <Bullet color="#0EA5E9">Avviamento rapido</Bullet>
              <Bullet color="#0EA5E9">Alta densità di potenza</Bullet>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;

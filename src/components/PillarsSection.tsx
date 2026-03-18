import { motion } from "framer-motion";
import { Flame, Zap, Thermometer, RefreshCw } from "lucide-react";

const pillars = [
  {
    icon: Flame,
    title: "Materiali Avanzati",
    desc: "Sviluppo di nuovi materiali per elettrodi, membrane e catalizzatori ad alte prestazioni e maggiore durabilità.",
    color: "text-flame",
    hoverGlow: "hover:border-glow-flame",
    borderColor: "rgba(255,107,43,0.3)",
  },
  {
    icon: Zap,
    title: "Design Innovativo",
    desc: "Progettazione ottimizzata di celle e stack attraverso modellazione computazionale e prototipazione avanzata.",
    color: "text-spark",
    hoverGlow: "hover:border-glow-aqua",
    borderColor: "rgba(255,140,66,0.3)",
  },
  {
    icon: Thermometer,
    title: "Doppia Temperatura",
    desc: "Studio parallelo di sistemi PEM (bassa temperatura, ~80°C) e SOFC/SOEC (alta temperatura, 700–900°C).",
    color: "text-gradient-brand",
    hoverGlow: "hover:border-glow-flame",
    borderColor: "rgba(255,107,43,0.3)",
  },
  {
    icon: RefreshCw,
    title: "Reversibilità",
    desc: "Integrazione della modalità fuel cell e elettrolizzatore in un unico dispositivo per massima flessibilità energetica.",
    color: "text-aqua",
    hoverGlow: "hover:border-glow-aqua",
    borderColor: "rgba(14,165,233,0.3)",
  },
];

const PillarsSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium tracking-widest text-aqua uppercase mb-4">
            Pilastri
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-foreground">
            Cosa studia CREA-SUD
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-0">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group card-surface p-8 transition-all duration-300 hover:-translate-y-1"
              style={{
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `inset 0 0 0 1px ${p.borderColor}, 0 0 30px -10px ${p.borderColor}`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "inset 0 0 0 1px rgba(255,255,255,0.08)";
              }}
            >
              <p.icon className={`w-8 h-8 mb-4 ${p.color === "text-gradient-brand" ? "text-flame" : p.color}`} />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;

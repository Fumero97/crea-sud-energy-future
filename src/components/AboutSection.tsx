import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
};

const stats = [
  { value: "2", label: "Temperature operative", color: "text-flame" },
  { value: "PEM · SO", label: "Tecnologie studiate", color: "text-aqua" },
  { value: "H₂", label: "Vettore energetico", color: "text-flame" },
  { value: "RFC", label: "Fuel cell ↔ Elettrolizzatore", color: "text-aqua" },
];

const CountUp = ({ target, className }: { target: string; className: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");
  const num = parseInt(target);
  const isNum = !isNaN(num);

  useEffect(() => {
    if (!isNum) {
      setDisplay(target);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = () => {
            start++;
            setDisplay(String(start));
            if (start < num) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [num, isNum, target]);

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {display}
    </span>
  );
};

const AboutSection = () => {
  return (
    <section id="progetto" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Left */}
          <motion.div {...fadeInUp} className="md:col-span-3">
            <p className="text-xs font-medium tracking-widest text-flame uppercase mb-4">
              Il Progetto
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-foreground mb-6 text-balance">
              Ricerca unificata per le celle reversibili
            </h2>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Le celle a combustibile reversibili (RFC) rappresentano una
              tecnologia chiave per la transizione energetica. CREA-SUD
              affronta la ricerca su due fronti tecnologici complementari:
              sistemi a bassa temperatura basati su membrane polimeriche (PEM)
              e sistemi ad alta temperatura a ossidi solidi (SO), unificando
              metodologie di sviluppo per materiali, design e modellazione.
            </p>
          </motion.div>

          {/* Right — stats card */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="card-surface p-6 grid grid-cols-2 gap-6">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <CountUp
                    target={s.value}
                    className={`block text-3xl font-bold ${s.color}`}
                  />
                  <span className="text-xs text-muted-foreground mt-1 block">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

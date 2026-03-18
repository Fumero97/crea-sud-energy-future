import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const papers = [
  {
    journal: "Journal of Power Sources",
    title: "Advances in reversible solid oxide cells for high-temperature energy storage",
    authors: "Rossi A., Bianchi M., Verdi L.",
    year: "2024",
    accent: "flame",
  },
  {
    journal: "Electrochimica Acta",
    title: "Novel PEM membrane composites for improved durability in reversible fuel cells",
    authors: "Esposito G., Marino F., Russo P.",
    year: "2024",
    accent: "aqua",
  },
  {
    journal: "International Journal of Hydrogen Energy",
    title: "Computational design optimization of reversible fuel cell stacks",
    authors: "Colombo D., Ferrari S., Greco N.",
    year: "2023",
    accent: "flame",
  },
];

const PublicationsSection = () => {
  return (
    <section id="pubblicazioni" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium tracking-widest text-aqua uppercase mb-4">
            Output
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-foreground">
            Risultati & Pubblicazioni
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-0">
          {papers.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-surface p-6 flex flex-col"
              style={{
                borderTop: `2px solid ${p.accent === "flame" ? "#FF6B2B" : "#0EA5E9"}`,
              }}
            >
              <span
                className={`text-[10px] tracking-widest uppercase font-medium mb-3 ${
                  p.accent === "flame" ? "text-flame" : "text-aqua"
                }`}
              >
                {p.journal}
              </span>
              <h3 className="text-sm font-semibold text-foreground mb-3 leading-snug flex-1">
                {p.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-1">{p.authors}</p>
              <p className="text-xs text-muted-foreground mb-4">{p.year}</p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-xs text-aqua hover:text-aqua-light transition-colors"
              >
                Leggi <ArrowRight size={12} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;

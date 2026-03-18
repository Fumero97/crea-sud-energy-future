import { motion } from "framer-motion";

const partners = [
  "Università di Napoli Federico II",
  "CNR-ITAE",
  "ENEA",
  "Politecnico di Torino",
  "Università di Salerno",
  "Partner Industriali",
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-medium tracking-widest text-flame uppercase mb-4">
            Network
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-foreground mb-4">
            Istituzioni & Partner
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-12">
            CREA-SUD è un progetto multidisciplinare che coinvolge università,
            enti di ricerca e partner industriali.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-0">
          {partners.map((name, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card-surface p-8 flex flex-col items-center justify-center gap-3"
            >
              <div className="w-16 h-16 bg-muted/30 flex items-center justify-center">
                <span className="text-xs text-muted-foreground font-medium">LOGO</span>
              </div>
              <span className="text-sm text-foreground font-medium text-center">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contatti" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.02em] text-foreground mb-4">
            Vuoi collaborare con CREA-SUD?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-10">
            Contattaci per informazioni su partnership, pubblicazioni e
            opportunità di ricerca.
          </p>
          <a
            href="mailto:info@creasud.it"
            className="inline-flex items-center justify-center px-10 py-4 text-sm font-medium bg-gradient-to-r from-flame to-spark text-foreground glow-flame transition-all duration-300 hover:scale-[1.02]"
          >
            Scrivici
          </a>
          <p className="mt-6 text-sm text-aqua">info@creasud.it</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

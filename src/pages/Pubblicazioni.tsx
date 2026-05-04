import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";

const papers = [
  {
    journal: "Journal of Power Sources",
    title: "Advances in reversible solid oxide cells for high-temperature energy storage",
    authors: "Rossi A., Bianchi M., Verdi L.",
    year: "2024",
    accent: "primary" as const,
  },
  {
    journal: "Electrochimica Acta",
    title: "Novel PEM membrane composites for improved durability in reversible fuel cells",
    authors: "Esposito G., Marino F., Russo P.",
    year: "2024",
    accent: "secondary" as const,
  },
  {
    journal: "International Journal of Hydrogen Energy",
    title: "Computational design optimization of reversible fuel cell stacks",
    authors: "Colombo D., Ferrari S., Greco N.",
    year: "2023",
    accent: "primary" as const,
  },
];

const Pubblicazioni = () => {
  return (
    <Layout>
      <div className="page-header">
        <div className="container mx-auto px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Output</p>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Risultati & Pubblicazioni
          </h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Le pubblicazioni scientifiche prodotte nell'ambito del progetto CREA-SUD.
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container mx-auto px-8">
          <div className="space-y-4">
            {papers.map((p, i) => (
              <article
                key={i}
                className="bg-background border border-border p-6 rounded-sm"
                style={{
                  borderLeftWidth: "3px",
                  borderLeftColor: p.accent === "primary" ? "hsl(var(--primary))" : "hsl(var(--secondary))",
                }}
              >
                <span className={`text-xs font-semibold uppercase tracking-wider ${
                  p.accent === "primary" ? "text-primary" : "text-secondary"
                }`}>
                  {p.journal}
                </span>
                <h2 className="text-base font-semibold text-foreground mt-2 mb-2">
                  {p.title}
                </h2>
                <p className="text-sm text-muted-foreground">{p.authors} · {p.year}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-3"
                >
                  Leggi l'articolo <ArrowRight size={14} />
                </a>
              </article>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mt-8 text-center">
            Elenco in aggiornamento — nuove pubblicazioni saranno aggiunte man mano che saranno disponibili.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Pubblicazioni;

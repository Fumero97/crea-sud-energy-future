import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, Beaker, Zap, RotateCcw } from "lucide-react";

const orList = [
  { id: "OR1", ente: "Università della Calabria", titolo: "Project Management & Disseminazione" },
  { id: "OR2", ente: "Università della Calabria", titolo: "Sintesi di ionomeri e materiali ibridi per membrane elettrolitiche" },
  { id: "OR3", ente: "Università Sapienza", titolo: "Catalizzatori low-Pt e Pt-free per rPEMC" },
  { id: "OR4", ente: "Università di Salerno", titolo: "Nuovi materiali e deposizione RF sputtering per rSOC" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-muted border-b border-border">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Progetto PNRR
            </p>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
              Il futuro dell'energia è reversibile
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              CREA-SUD sviluppa celle a combustibile reversibili avanzate capaci di
              operare sia come generatori di elettricità che come elettrolizzatori
              per la produzione di idrogeno verde.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/progetto"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:opacity-90 transition-opacity"
              >
                Scopri il Progetto <ArrowRight size={16} />
              </Link>
              <Link
                to="/obiettivi"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-sm hover:bg-muted transition-colors"
              >
                Obiettivi Realizzativi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center">
                <Beaker className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-foreground mb-1">Materiali Avanzati</h3>
                <p className="text-sm text-muted-foreground">
                  Nuovi materiali per elettrodi, membrane e catalizzatori ad alte prestazioni.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-sm bg-secondary/10 flex items-center justify-center">
                <Zap className="text-secondary" size={20} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-foreground mb-1">Doppia Temperatura</h3>
                <p className="text-sm text-muted-foreground">
                  Sistemi PEM (~80°C) e SOFC/SOEC (700–900°C) in parallelo.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center">
                <RotateCcw className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-foreground mb-1">Reversibilità</h3>
                <p className="text-sm text-muted-foreground">
                  Fuel cell ed elettrolizzatore in un unico dispositivo flessibile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OR Preview */}
      <section className="section-padding bg-muted border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Obiettivi Realizzativi
              </h2>
              <p className="text-muted-foreground mt-2">Le 7 linee di ricerca del progetto CREA-SUD.</p>
            </div>
            <Link
              to="/obiettivi"
              className="hidden sm:inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
            >
              Vedi tutti <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {orList.map((or) => (
              <Link
                key={or.id}
                to={`/obiettivi/${or.id.toLowerCase()}`}
                className="bg-background border border-border p-5 rounded-sm hover:border-primary/30 transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <span className="shrink-0 text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-sm">
                    {or.id}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {or.titolo}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">{or.ente}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 sm:hidden">
            <Link
              to="/obiettivi"
              className="inline-flex items-center gap-1 text-sm text-primary font-medium"
            >
              Vedi tutti gli obiettivi <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
            Vuoi collaborare con CREA-SUD?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Contattaci per informazioni su partnership, pubblicazioni e opportunità di ricerca.
          </p>
          <Link
            to="/contatti"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:opacity-90 transition-opacity"
          >
            Contattaci
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

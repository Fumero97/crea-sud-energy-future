import Layout from "@/components/Layout";

const Progetto = () => {
  return (
    <Layout>
      <div className="page-header">
        <div className="container mx-auto px-4">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Il Progetto</p>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            CREA-SUD
          </h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Celle a Combustibile Reversibili Avanzate e Sostenibili di bassa ed alta temperatura
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Le celle a combustibile reversibili (RFC) rappresentano una tecnologia chiave
                  per la transizione energetica. CREA-SUD affronta la ricerca su due fronti
                  tecnologici complementari: sistemi a bassa temperatura basati su membrane
                  polimeriche (PEM) e sistemi ad alta temperatura a ossidi solidi (SO),
                  unificando metodologie di sviluppo per materiali, design e modellazione.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Il progetto mira a sviluppare nuovi concetti, materiali e design per celle
                  a combustibile reversibili che possano operare sia come generatori di
                  elettricità (fuel cell) sia come elettrolizzatori per la produzione di
                  idrogeno verde, contribuendo alla decarbonizzazione del sistema energetico.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  L'approccio multidisciplinare coinvolge esperti in scienza dei materiali,
                  elettrochimica, ingegneria chimica e meccanica, con il supporto di partner
                  industriali per la validazione applicativa dei risultati.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-muted p-5 rounded-sm border border-border">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Dati del Progetto
                </h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Acronimo</dt>
                    <dd className="font-semibold text-foreground">CREA-SUD</dd>
                  </div>
                  <div className="border-t border-border pt-3">
                    <dt className="text-muted-foreground">Finanziamento</dt>
                    <dd className="font-semibold text-foreground">PNRR</dd>
                  </div>
                  <div className="border-t border-border pt-3">
                    <dt className="text-muted-foreground">Temperature</dt>
                    <dd className="font-semibold text-foreground">~80°C (PEM) / 700–900°C (SO)</dd>
                  </div>
                  <div className="border-t border-border pt-3">
                    <dt className="text-muted-foreground">Tecnologie</dt>
                    <dd className="font-semibold text-foreground">rPEMC · rSOC</dd>
                  </div>
                  <div className="border-t border-border pt-3">
                    <dt className="text-muted-foreground">Vettore energetico</dt>
                    <dd className="font-semibold text-foreground">H₂ — Idrogeno verde</dd>
                  </div>
                  <div className="border-t border-border pt-3">
                    <dt className="text-muted-foreground">Obiettivi Realizzativi</dt>
                    <dd className="font-semibold text-foreground">7</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding bg-muted border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Istituzioni & Partner</h2>
          <p className="text-muted-foreground mb-8">
            Il consorzio CREA-SUD coinvolge università, enti di ricerca e partner industriali.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Università della Calabria",
              "Università Sapienza",
              "Università di Salerno",
              "Università di Camerino",
              "CNR-ITAE",
              "ENEA",
              "Calabra Maceri e Servizi",
              "Partner Industriali",
            ].map((name, i) => (
              <div
                key={i}
                className="bg-background border border-border p-4 rounded-sm text-center"
              >
                <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center mx-auto mb-2">
                  <span className="text-[10px] text-muted-foreground font-medium">LOGO</span>
                </div>
                <span className="text-xs text-foreground font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Progetto;

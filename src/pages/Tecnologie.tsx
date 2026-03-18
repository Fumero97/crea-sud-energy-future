import Layout from "@/components/Layout";

const Tecnologie = () => {
  return (
    <Layout>
      <div className="page-header">
        <div className="container mx-auto px-4">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Tecnologie</p>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Due fronti tecnologici
          </h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            CREA-SUD sviluppa celle reversibili a bassa e alta temperatura.
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* SOFC */}
            <div className="border border-border rounded-sm overflow-hidden">
              <div className="bg-primary/5 border-b border-border p-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Alta Temperatura</span>
                <h2 className="text-2xl font-serif font-bold text-foreground mt-1">SOFC / SOEC</h2>
                <p className="text-sm text-muted-foreground mt-1">Ossidi Solidi · 700–900°C</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {[
                    "Elettrolita in ossido di zirconio (YSZ)",
                    "Efficienza >60%",
                    "Operazione reversibile integrata",
                    "Materiali ceramici avanzati",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* PEM */}
            <div className="border border-border rounded-sm overflow-hidden">
              <div className="bg-secondary/5 border-b border-border p-6">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider">Bassa Temperatura</span>
                <h2 className="text-2xl font-serif font-bold text-foreground mt-1">PEMFC / PEMEC</h2>
                <p className="text-sm text-muted-foreground mt-1">Membrane Polimeriche · ~80°C</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {[
                    "Membrana Nafion® e alternative",
                    "Catalizzatori a base di Pt",
                    "Avviamento rapido",
                    "Alta densità di potenza",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tecnologie;

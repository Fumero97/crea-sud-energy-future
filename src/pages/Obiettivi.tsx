import { Link, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, ArrowLeft } from "lucide-react";

const orData = [
  {
    id: "or1",
    num: "OR1",
    ente: "Università della Calabria",
    titolo: "Project Management & Disseminazione",
    obiettivo: "Coordinamento delle attività di progetto, gestione amministrativa e finanziaria, e disseminazione dei risultati scientifici attraverso pubblicazioni, conferenze e attività di divulgazione verso stakeholder e comunità scientifica.",
    risultati: [
      "Coordinamento di 7 unità operative",
      "Organizzazione di workshop e seminari",
      "Sito web e piattaforma di comunicazione",
      "Report periodici e deliverable",
    ],
  },
  {
    id: "or2",
    num: "OR2",
    ente: "Università della Calabria",
    titolo: "Sintesi di ionomeri e materiali ibridi per membrane elettrolitiche nanocomposite per rPEMC",
    obiettivo: "Sviluppo di nuove membrane elettrolitiche basate su ionomeri innovativi e materiali ibridi organico-inorganici con prestazioni superiori in termini di conducibilità protonica, stabilità meccanica e chimica.",
    risultati: [
      "Sintesi di nuovi ionomeri a base perfluorurata e aromatica",
      "Sviluppo di membrane nanocomposite",
      "Caratterizzazione elettrochimica e meccanica",
      "Test di durabilità accelerati",
    ],
  },
  {
    id: "or3",
    num: "OR3",
    ente: "Università Sapienza",
    titolo: "Catalizzatori low-Pt e Pt-free per rPEMC, caratterizzazione MEA e stack",
    obiettivo: "Progettazione e sintesi di catalizzatori a basso contenuto di platino e privi di platino per celle reversibili PEM, con caratterizzazione completa di MEA e test su stack.",
    risultati: [
      "Catalizzatori a base di leghe Pt con metalli di transizione",
      "Catalizzatori Pt-free per la reazione di evoluzione di ossigeno",
      "Assemblaggio e test di MEA",
      "Validazione su stack multi-cella",
    ],
  },
  {
    id: "or4",
    num: "OR4",
    ente: "Università di Salerno",
    titolo: "Nuovi materiali e deposizione RF sputtering per rSOC a T < 700°C",
    obiettivo: "Sviluppo di nuovi materiali e tecniche di deposizione tramite RF sputtering per celle a ossidi solidi reversibili operanti a temperature intermedie inferiori a 700°C.",
    risultati: [
      "Film sottili di elettroliti e elettrodi via sputtering",
      "Celle simmetriche a temperatura intermedia",
      "Riduzione della temperatura operativa sotto 700°C",
      "Caratterizzazione di impedenza elettrochimica",
    ],
  },
  {
    id: "or5",
    num: "OR5",
    ente: "Università di Camerino",
    titolo: "Caratterizzazione chimico-fisica avanzata e diagnostica state-of-health per rPEMC e rSOC",
    obiettivo: "Sviluppo di metodologie avanzate di caratterizzazione e diagnostica per valutare lo stato di salute delle celle reversibili, identificando meccanismi di degrado e strategie di mitigazione.",
    risultati: [
      "Protocolli di diagnostica in-situ ed ex-situ",
      "Analisi di degradazione tramite microscopia e spettroscopia",
      "Modelli predittivi di vita utile",
      "Strategie di rigenerazione e mitigazione",
    ],
  },
  {
    id: "or6",
    num: "OR6",
    ente: "Università della Calabria",
    titolo: "Concept e Design del Sistema Stack Reversibile rPEMC/rSOC, analisi energetica",
    obiettivo: "Progettazione concettuale e ingegneristica di sistemi stack reversibili integrati rPEMC/rSOC, con analisi energetica e termodinamica per l'ottimizzazione delle prestazioni di sistema.",
    risultati: [
      "Design concettuale di stack reversibili",
      "Modellazione fluidodinamica e termica (CFD)",
      "Analisi energetica e di efficienza del sistema",
      "Prototipazione e validazione sperimentale",
    ],
  },
  {
    id: "or7",
    num: "OR7",
    ente: "Calabra Maceri e Servizi",
    titolo: "Analisi casi di studio applicativi per sistemi reversibili",
    obiettivo: "Identificazione e analisi di casi di studio applicativi reali per l'impiego di sistemi di celle reversibili, con valutazione tecnico-economica e analisi di fattibilità industriale.",
    risultati: [
      "Studio di fattibilità per applicazioni industriali",
      "Analisi tecnico-economica",
      "Scenari di integrazione con fonti rinnovabili",
      "Roadmap per la commercializzazione",
    ],
  },
];

const ObiettiviList = () => (
  <Layout>
    <div className="page-header">
      <div className="container mx-auto px-4">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Ricerca</p>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
          Obiettivi Realizzativi
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Le 7 linee di ricerca che compongono il progetto CREA-SUD.
        </p>
      </div>
    </div>

    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="space-y-4">
          {orData.map((or) => (
            <Link
              key={or.id}
              to={`/obiettivi/${or.id}`}
              className="block bg-background border border-border p-6 rounded-sm hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <span className="shrink-0 text-sm font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-sm">
                  {or.num}
                </span>
                <div className="flex-1 min-w-0">
                  <h2 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {or.titolo}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">{or.ente}</p>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{or.obiettivo}</p>
                </div>
                <ArrowRight size={18} className="shrink-0 text-muted-foreground group-hover:text-primary transition-colors mt-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

const ObiettivoDetail = () => {
  const { id } = useParams();
  const or = orData.find((o) => o.id === id);

  if (!or) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <p className="text-muted-foreground">Obiettivo non trovato.</p>
          <Link to="/obiettivi" className="text-primary hover:underline mt-4 inline-block">
            ← Torna agli obiettivi
          </Link>
        </div>
      </Layout>
    );
  }

  const currentIndex = orData.findIndex((o) => o.id === id);
  const prev = currentIndex > 0 ? orData[currentIndex - 1] : null;
  const next = currentIndex < orData.length - 1 ? orData[currentIndex + 1] : null;

  return (
    <Layout>
      <div className="page-header">
        <div className="container mx-auto px-4">
          <Link to="/obiettivi" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft size={14} /> Tutti gli obiettivi
          </Link>
          <div className="flex items-start gap-4">
            <span className="shrink-0 text-lg font-bold text-primary bg-primary/10 px-4 py-2 rounded-sm">
              {or.num}
            </span>
            <div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                {or.titolo}
              </h1>
              <p className="text-muted-foreground mt-1">{or.ente}</p>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-lg font-serif font-bold text-foreground mb-3">Obiettivo</h2>
                <p className="text-muted-foreground leading-relaxed">{or.obiettivo}</p>
              </div>

              <div>
                <h2 className="text-lg font-serif font-bold text-foreground mb-3">
                  Risultati attesi
                </h2>
                <ul className="space-y-2">
                  {or.risultati.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-muted p-5 rounded-sm border border-border">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Informazioni
                </h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Codice</dt>
                    <dd className="font-semibold text-foreground">{or.num}</dd>
                  </div>
                  <div className="border-t border-border pt-3">
                    <dt className="text-muted-foreground">Ente responsabile</dt>
                    <dd className="font-semibold text-foreground">{or.ente}</dd>
                  </div>
                  <div className="border-t border-border pt-3">
                    <dt className="text-muted-foreground">Stato</dt>
                    <dd className="font-semibold text-primary">In corso</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-border flex justify-between">
            {prev ? (
              <Link
                to={`/obiettivi/${prev.id}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ← {prev.num}: {prev.titolo.slice(0, 40)}...
              </Link>
            ) : <span />}
            {next ? (
              <Link
                to={`/obiettivi/${next.id}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-right"
              >
                {next.num}: {next.titolo.slice(0, 40)}... →
              </Link>
            ) : <span />}
          </div>
        </div>
      </section>
    </Layout>
  );
};

const Obiettivi = () => {
  const { id } = useParams();
  return id ? <ObiettivoDetail /> : <ObiettiviList />;
};

export default Obiettivi;

import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, Beaker, Zap } from "lucide-react";


const kpis = [
  {
    value: "4 + 1",
    label: "Partner del consorzio",
    sub: "università e partner industriale",
  },
  {
    value: "7 OR",
    label: "Obiettivi realizzativi",
    sub: "distribuiti su 15 mesi",
  },
  { value: "M15", label: "Scadenza finale", sub: "deliverable e validazione" },
];

const rPEMCSpecs = [
  { key: "Membrana", value: "Ibrida nanocomposita (Nafion + sPSf)" },
  {
    key: "Supporto elettrodo",
    value: "Titanio (alternativa al carbonio per stabilità elettrochimica)",
  },
  { key: "Temperatura target", value: "> 100 °C" },
  {
    key: "Catalizzatore",
    value: "Low-Pt / Pt-free con prestazioni cinetiche equivalenti",
  },
  { key: "Pressione", value: "Elevata rispetto allo stato dell'arte" },
];

const rSOCSpecs = [
  { key: "Deposizione", value: "RF Sputtering per film sottili" },
  { key: "Scala cella", value: "da 10 cm² (prototipo) a 100 cm² (scale-up)" },
  { key: "Temperatura target", value: "< 700 °C" },
  { key: "Diagnostica", value: "EIS + analisi DRT" },
  { key: "Conduttori", value: "Ionici ad alte prestazioni" },
];

const orList = [
  {
    id: "OR1",
    ente: "Università della Calabria",
    titolo:
      "Project Management e Piano strategico di comunicazione e disseminazione",
  },
  {
    id: "OR2",
    ente: "Università della Calabria",
    titolo:
      "Sintesi di ionomeri e materiali ibridi per membrane elettrolitiche nanocomposite per rPEMC",
  },
  {
    id: "OR3",
    ente: "Università Sapienza di Roma",
    titolo:
      "Catalizzatori low-Pt e Pt-free per rPEMC, caratterizzazione MEA e progettazione stack reversibili",
  },
  {
    id: "OR4",
    ente: "Università di Salerno",
    titolo:
      "Nuovi materiali e deposizione RF sputtering per rSOC a T < 700 °C, scale-up da 10 cm² a 100 cm²",
  },
  {
    id: "OR5",
    ente: "Università di Camerino",
    titolo:
      "Caratterizzazione chimico-fisica avanzata e diagnostica state-of-health (EIS, DRT, XAS in situ) per rPEMC e rSOC",
  },
  {
    id: "OR6",
    ente: "Università della Calabria",
    titolo:
      "Concept e Design del sistema stack reversibile rPEMC/rSOC, modellazione CFD, analisi energetica, validazione modelli",
  },
  {
    id: "OR7",
    ente: "Calabra Maceri e Servizi",
    titolo:
      "Analisi casi di studio applicativi, sistemi Power-to-H2-to-Power e Power-to-X-to-Power con rPEMC e rSOC",
  },
];

const milestones = [
  {
    id: "M7",
    titolo: "Prima scadenza",
    sub: "materiali, membrane, setup",
    deliverable: [
      "D1.1 Report intermedio management",
      "D2.1 PEM nanocomposite su Nafion",
      "D3.1 Catalizzatori I generazione",
      "D4.1 Upgrading RF sputtering",
      "D6.1-D6.6 Analisi energetica preliminare",
      "D7.1-D7.4 Indagine P2H2P con rPEMC",
    ],
  },
  {
    id: "M9",
    titolo: "Caratterizzazione e test",
    sub: "scala ridotta",
    deliverable: [
      "D3.3 Analisi configurazioni MEA innovative",
      "D4.3 Caratterizzazione rSOC 10 cm²",
      "D5.1-D5.2 Caratterizzazione materiali commerciali",
      "D5.5 Catalizzatori low-cost da MOFs",
    ],
  },
  {
    id: "M10",
    titolo: "Simulazioni CFD e testing",
    sub: "stazionario",
    deliverable: [
      "D6.1-D6.2 Simulazioni numeriche rPEMC/rSOC",
      "D6.3 Dati sperimentali testing in stazionario",
    ],
  },
  {
    id: "M14",
    titolo: "Scale-up e membrane II gen.",
    sub: "analisi P2X rSOC",
    deliverable: [
      "D2.1-D2.2 PEM sPSf II generazione ottimizzate",
      "D4.4 Caratterizzazione rSOC 100 cm²",
      "D5.3 Setup XAS in situ",
      "D7.1-D7.4 Indagine P2H2P con rSOC",
    ],
  },
  {
    id: "M15",
    titolo: "Chiusura",
    sub: "report finali, validazione, casi studio",
    deliverable: [
      "D3.4 Stack PEMFC reversibili",
      "D6.4 Testing in dinamico",
      "D6.7 Validazione modelli numerici",
      "D7.5-D7.7 TEA finali P2H2P e P2X",
      "D1.1-D1.2 Report finali management e disseminazione",
    ],
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-[#FAF9F6] border-b border-[#E8E6E2] overflow-hidden pt-20 pb-32">
        <div className="cs-container">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-8">
              <p className="cs-eyebrow mb-6">Progetto PNRR · M2-C2 / Inv. 3.5</p>
              <h1 className="cs-h1 mb-8">
                Celle <em>REversibili</em> Avanzate e sostenibili di bassa ed alta temperatura
              </h1>
              <p className="cs-lead mb-10">
                Ricerca e Sviluppo Unificato di concept, materiali e Design innovativi per celle a combustibile reversibili a membrana polimerica (rPEMC) e a ossido solido (rSOC), nel quadro dei target europei per l'idrogeno.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/progetto" className="cs-btn cs-btn--primary">
                  Scopri il Progetto <ArrowRight size={16} />
                </Link>
                <Link to="/obiettivi" className="cs-btn cs-btn--ghost">
                  Obiettivi Realizzativi
                </Link>
              </div>

              
            </div>
          </div>
        </div>
      </section>

      {/* KPI Section */}
      <section className="py-12 bg-white border-b border-[#E8E6E2]">
        <div className="cs-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="group relative">
                <div className="w-8 h-1 bg-[#E08030] mb-4 opacity-30 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-baseline gap-4">
                  <p className="cs-h1 text-[#E08030] leading-none shrink-0">
                    {kpi.value}
                  </p>
                  <div className="flex-1">
                    <p className="font-bold text-[14px] text-[#0E1626] uppercase tracking-tight">
                      {kpi.label}
                    </p>
                    <p className="cs-mono text-[10px] text-[#908080] uppercase">
                      {kpi.sub}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologie */}
      <section className="py-24 border-b border-[#E8E6E2]">
        <div className="cs-container">
          <div className="mb-20">
            <h4 className="cs-eyebrow mb-6">Investigazione Scientifica</h4>
            <h2 className="cs-h2 mb-8">Tecnologie di riferimento</h2>
            <p className="cs-lead max-w-2xl">
              Il progetto si concentra su due tecnologie di celle a combustibile reversibili, investigandone materiali, componenti e prestazioni di sistema.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* rPEMC */}
            <div className="border border-[#C9C5BF] p-8 bg-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#E08030]" />
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="cs-mono text-[11px] font-bold text-[#E08030] bg-[#E08030]/10 px-2 py-1 uppercase tracking-wider">
                    rPEMC
                  </span>
                  <span className="block mt-2 cs-mono text-[10px] text-[#908080] uppercase">Bassa Temperatura</span>
                </div>
                <span className="cs-h3 italic text-[#E08030]/20 font-serif">rPEMC</span>
              </div>
              <h3 className="cs-h3 mb-8">Celle a Membrana Polimerica Reversibili</h3>
              <div className="space-y-4">
                {rPEMCSpecs.map((s) => (
                  <div key={s.key} className="flex border-b border-[#F5F4F2] pb-3 last:border-0">
                    <span className="cs-mono text-[10px] text-[#908080] uppercase w-32 shrink-0 pt-1">{s.key}</span>
                    <span className="text-[14px] text-[#0E1626]">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* rSOC */}
            <div className="border border-[#C9C5BF] p-8 bg-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#30A0D0]" />
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="cs-mono text-[11px] font-bold text-[#30A0D0] bg-[#30A0D0]/10 px-2 py-1 uppercase tracking-wider">
                    rSOC
                  </span>
                  <span className="block mt-2 cs-mono text-[10px] text-[#908080] uppercase">Alta Temperatura</span>
                </div>
                <span className="cs-h3 italic text-[#30A0D0]/20 font-serif">rSOC</span>
              </div>
              <h3 className="cs-h3 mb-8">Celle a Ossido Solido Reversibili</h3>
              <div className="space-y-4">
                {rSOCSpecs.map((s) => (
                  <div key={s.key} className="flex border-b border-[#F5F4F2] pb-3 last:border-0">
                    <span className="cs-mono text-[10px] text-[#908080] uppercase w-32 shrink-0 pt-1">{s.key}</span>
                    <span className="text-[14px] text-[#0E1626]">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner e OR */}
      <section className="py-24 bg-[#F5F4F2] border-y border-[#E8E6E2]">
        <div className="cs-container">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h4 className="cs-eyebrow mb-6">Il Consorzio</h4>
              <h2 className="cs-h2 mb-8">Partner e Obiettivi Realizzativi</h2>
              <p className="text-[#4A4744] text-[15px] leading-relaxed mb-10">
                Il consorzio riunisce 4 università italiane e un partner industriale, ciascuno responsabile di un obiettivo realizzativo specifico.
              </p>
              <Link to="/obiettivi" className="cs-link text-[14px] font-medium">
                Vedi dettagli obiettivi →
              </Link>

              <div className="mt-12 grid grid-cols-2 gap-4">
                {[
                  { src: "/loghi/unical.png", alt: "Unical", url: "https://www.unical.it/" },
                  { src: "/loghi/sapienza.png", alt: "Sapienza", url: "https://www.uniroma1.it/" },
                  { src: "/loghi/salerno.jpg", alt: "Salerno", url: "https://www.unisa.it/" },
                  { src: "/loghi/camerino.svg", alt: "Camerino", url: "https://www.unicam.it/" },
                  { src: "/loghi/calabra-maceri.png", alt: "Calabra Maceri", url: "https://www.calabramaceri.it/" },
                ].map((p) => (
                  <a 
                    key={p.alt} 
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-[#C9C5BF] p-3 flex items-center justify-center h-16 hover:border-[#E08030] transition-all duration-300"
                  >
                    <img src={p.src} alt={p.alt} className="max-h-10 max-w-full object-contain" />
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-8">
              <div className="bg-white border border-[#C9C5BF]">
                {orList.map((or) => (
                  <div key={or.id} className="flex border-b border-[#E8E6E2] last:border-0 group hover:bg-[#FAF9F6] transition-colors">
                    <div className="w-20 shrink-0 border-r border-[#E8E6E2] flex items-center justify-center bg-[#FAF9F6]/50">
                      <span className="font-serif italic text-2xl text-[#E08030]/40 group-hover:text-[#E08030] transition-colors">
                        {or.id}
                      </span>
                    </div>
                    <div className="p-6">
                      <p className="cs-eyebrow text-[9px] mb-1 text-[#908080]">{or.ente}</p>
                      <h4 className="font-sans font-bold text-[#0E1626] text-[15px] leading-snug group-hover:text-[#E08030] transition-colors">
                        {or.titolo}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestone */}
      <section className="py-24 border-b border-[#E8E6E2]">
        <div className="cs-container">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h4 className="cs-eyebrow mb-6">Piano di Lavoro</h4>
            <h2 className="cs-h2 mb-8">Milestone e deliverable chiave</h2>
            <p className="cs-lead mx-auto">
              Il piano di lavoro si articola su 15 mesi con scadenze intermedie a M7, M9, M10, M14 e chiusura a M15.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {milestones.map((m) => (
              <div key={m.id} className="border border-[#C9C5BF] p-6 bg-white flex flex-col group hover:border-[#002040] transition-colors">
                <span className="cs-h3 text-[#E08030] mb-2 font-serif italic">{m.id}</span>
                <p className="font-bold text-[13px] text-[#0E1626] mb-1 uppercase tracking-tight">{m.titolo}</p>
                <p className="cs-mono text-[10px] text-[#908080] mb-6 uppercase">{m.sub}</p>
                
                <div className="mt-auto space-y-2">
                  {m.deliverable.slice(0, 3).map((d) => (
                    <div key={d} className="cs-mono text-[10px] text-[#4A4744] flex gap-2 leading-tight">
                      <span className="text-[#E08030]">•</span>
                      <span>{d}</span>
                    </div>
                  ))}
                  {m.deliverable.length > 3 && (
                    <p className="cs-mono text-[9px] text-[#908080] pt-2 italic">
                      + {m.deliverable.length - 3} deliverable
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#002040] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E08030]/5 skew-x-12 translate-x-20" />
        <div className="cs-container relative z-10">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-8">
              <h4 className="cs-eyebrow text-white/50 mb-6">Open Science & Collaboration</h4>
              <h2 className="cs-h2 text-white mb-8">
                Vuoi collaborare con <em>CREA-SUD</em>?
              </h2>
              <p className="cs-lead text-white/80 mb-10">
                Contattaci per informazioni su partnership, pubblicazioni e opportunità di ricerca nel campo delle celle reversibili.
              </p>
              <Link to="/contatti" className="cs-btn cs-btn--accent">
                Contattaci <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

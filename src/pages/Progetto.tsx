import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const rPEMCSpecs = [
  { key: "Membrana", value: "Ibrida nanocomposita (Nafion + sPSf)" },
  { key: "Supporto elettrodo", value: "Titanio (alternativa al carbonio per stabilità elettrochimica)" },
  { key: "Temperatura target", value: "> 100 °C" },
  { key: "Catalizzatore", value: "Low-Pt / Pt-free con prestazioni cinetiche equivalenti" },
  { key: "Pressione", value: "Elevata rispetto allo stato dell'arte" },
];

const rSOCSpecs = [
  { key: "Deposizione", value: "RF Sputtering per film sottili" },
  { key: "Scala cella", value: "da 10 cm² (prototipo) a 100 cm² (scale-up)" },
  { key: "Temperatura target", value: "< 700 °C" },
  { key: "Diagnostica", value: "EIS + analisi DRT" },
  { key: "Conduttori", value: "Ionici ad alte prestazioni" },
];

const partners = [
  { src: "/loghi/unical.png", alt: "Università della Calabria", ruolo: "Ente capofila", url: "https://www.unical.it/" },
  { src: "/loghi/sapienza.png", alt: "Università Sapienza di Roma", ruolo: "Partner", url: "https://www.uniroma1.it/" },
  { src: "/loghi/salerno.jpg", alt: "Università di Salerno", ruolo: "Partner", url: "https://www.unisa.it/" },
  { src: "/loghi/camerino.svg", alt: "Università di Camerino", ruolo: "Partner", url: "https://www.unicam.it/" },
  { src: "/loghi/calabra-maceri.png", alt: "Calabra Maceri e Servizi", ruolo: "Partner industriale", url: "https://www.calabramaceri.it/" },
];

const milestones = [
  {
    id: "M7",
    titolo: "Prima scadenza",
    sub: "materiali, membrane, setup",
    deliverable: [
      "D1.1 Report intermedio management",
      "D1.2 Piano comunicazione e sito web",
      "D2.1 PEM nanocomposite su Nafion ottimizzate",
      "D2.2 PEM nanocomposite sPSf (I generazione)",
      "D2.3 Caratterizzazione membrane elettrolitiche",
      "D3.1 Report proprietà catalizzatori I generazione",
      "D4.1 Upgrading attrezzatura RF sputtering",
      "D4.2 Report materiali per rSOC",
      "D5.4 Modello elettrochimico EIS/DRT",
      "D6.1-D6.6 Analisi energetica preliminare rPEMC/rSOC",
      "D7.1-D7.4 Indagine P2H2P con rPEMC",
    ],
  },
  {
    id: "M9",
    titolo: "Caratterizzazione e test",
    sub: "scala ridotta",
    deliverable: [
      "D3.3 Analisi configurazioni innovative MEA",
      "D4.3 Caratterizzazione rSOC 10 cm²",
      "D5.1 Caratterizzazione materiali commerciali",
      "D5.2 Caratterizzazione preliminare superfici",
      "D5.5 Sintesi catalizzatori low-cost da MOFs",
    ],
  },
  {
    id: "M10",
    titolo: "Simulazioni CFD e testing",
    sub: "stazionario",
    deliverable: [
      "D6.1 Simulazioni numeriche rPEMC",
      "D6.2 Simulazioni numeriche rSOC",
      "D6.3 Dati sperimentali testing in stazionario",
    ],
  },
  {
    id: "M14",
    titolo: "Scale-up e membrane II gen.",
    sub: "analisi P2X rSOC",
    deliverable: [
      "D2.1 PEM sPSf II gen. ottimizzate",
      "D2.2 Caratterizzazione membrane II gen.",
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
      "D1.1-D1.2 Report finali management",
    ],
  },
];

const Progetto = () => {
  return (
    <Layout>
      {/* Header */}
      <div className="bg-[#FAF9F6] pt-20 pb-16 border-b border-[#E8E6E2]">
        <div className="cs-container">
          <p className="cs-eyebrow mb-6">Dettaglio Scientifico</p>
          <h1 className="cs-h1 mb-8">Il <em>Progetto</em> CREA-SUD</h1>
          <p className="cs-lead max-w-4xl">
            Celle REversibili Avanzate e sostenibili di bassa ed alta temperatura: ricerca e Sviluppo Unificato
            di concept, materiali, e Design innovativi
          </p>
        </div>
      </div>

      {/* Descrizione + dati */}
      <section className="py-24 border-b border-[#E8E6E2]">
        <div className="cs-container">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-8 space-y-8">
              <p className="text-[18px] text-[#0E1626] font-medium leading-relaxed">
                Le celle a combustibile reversibili rappresentano una tecnologia chiave per la transizione
                energetica. CREA-SUD sviluppa soluzioni su due fronti complementari: sistemi a bassa
                temperatura basati su membrane polimeriche (rPEMC) e sistemi ad alta temperatura a ossidi
                solidi (rSOC), unificando metodologie di sviluppo per materiali, design e modellazione.
              </p>
              <div className="grid sm:grid-cols-2 gap-8 pt-8">
                <div>
                  <h3 className="cs-eyebrow mb-4 text-[#908080]">Visione</h3>
                  <p className="text-[14px] text-[#4A4744] leading-relaxed">
                    Superare le limitazioni dello stato dell'arte attraverso l'integrazione di materiali ibridi nanocompositi e tecniche di deposizione avanzate, puntando a efficienze superiori e costi ridotti.
                  </p>
                </div>
                <div>
                  <h3 className="cs-eyebrow mb-4 text-[#908080]">Impatto</h3>
                  <p className="text-[14px] text-[#4A4744] leading-relaxed">
                    Il progetto contribuisce direttamente agli obiettivi del PNRR per lo sviluppo delle tecnologie dell'idrogeno, favorendo la decarbonizzazione dei settori hard-to-abate.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="bg-[#002040] p-8 text-white">
                <h3 className="cs-eyebrow text-white/50 mb-8 uppercase">Scheda Progetto</h3>
                <dl className="space-y-4">
                  {[
                    { label: "Acronimo", value: "CREA-SUD" },
                    { label: "CUP", value: "F57G25000280006" },
                    { label: "Bando", value: "Avviso R&S H2 Tipo A" },
                    { label: "Decreto", value: "DD (MITE) 23.03.022" },
                    { label: "Programma", value: "PNRR M2-C2 / Inv. 3.5" },
                    { label: "Durata", value: "15 mesi" },
                    { label: "Responsabile", value: "Prof.ssa Petronilla Fragiacomo" },
                  ].map((item) => (
                    <div key={item.label} className="border-b border-white/10 pb-3 last:border-0">
                      <dt className="cs-mono text-[10px] text-white/50 uppercase mb-1">{item.label}</dt>
                      <dd className="cs-mono font-bold text-[13px] text-white">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologie */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="cs-container">
          <h4 className="cs-eyebrow mb-4">Tecnologie</h4>
          <h2 className="cs-h2 mb-12">I pilastri della <em>ricerca</em></h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-[#C9C5BF] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#E08030]" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="cs-mono text-[10px] font-bold text-[#E08030] bg-[#E08030]/10 px-2 py-1 uppercase tracking-wider">rPEMC</span>
                  <span className="cs-mono text-[10px] text-[#908080] uppercase">bassa temperatura</span>
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
            </div>

            <div className="bg-white border border-[#C9C5BF] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#30A0D0]" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="cs-mono text-[10px] font-bold text-[#30A0D0] bg-[#30A0D0]/10 px-2 py-1 uppercase tracking-wider">rSOC</span>
                  <span className="cs-mono text-[10px] text-[#908080] uppercase">alta temperatura</span>
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
        </div>
      </section>

      {/* Partner */}
      <section className="py-24 border-b border-[#E8E6E2]">
        <div className="cs-container">
          <h4 className="cs-eyebrow mb-4">Network</h4>
          <h2 className="cs-h2 mb-12">Il Consorzio</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {partners.map((p) => (
              <a 
                key={p.alt} 
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-[#C9C5BF] p-6 flex flex-col items-center gap-4 group hover:border-[#E08030] transition-all duration-300"
              >
                <div className="h-16 flex items-center justify-center">
                  <img src={p.src} alt={p.alt} className="max-h-12 max-w-full object-contain transition-transform group-hover:scale-105" />
                </div>
                <div className="text-center">
                  <p className="cs-mono text-[10px] font-bold text-[#0E1626] leading-tight mb-1">{p.alt}</p>
                  <p className="cs-mono text-[9px] text-[#908080] uppercase">{p.ruolo}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone */}
      <section className="py-24 border-b border-[#E8E6E2] bg-[#FAF9F6]">
        <div className="cs-container">
          <h4 className="cs-eyebrow mb-4">Timeline</h4>
          <h2 className="cs-h2 mb-12">Milestone e deliverable chiave</h2>

          <div className="space-y-12">
            {milestones.map((m) => (
              <div key={m.id} className="grid md:grid-cols-12 gap-8 relative group">
                <div className="md:col-span-2">
                  <span className="cs-h3 text-[#E08030] font-serif italic block">{m.id}</span>
                  <span className="cs-mono text-[10px] text-[#908080] uppercase">{m.sub}</span>
                </div>
                <div className="md:col-span-10 border-l border-[#C9C5BF] pl-8 pb-4">
                  <h4 className="font-bold text-[16px] text-[#0E1626] mb-6 tracking-tight uppercase">{m.titolo}</h4>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6">
                    {m.deliverable.map((d) => (
                      <div key={d} className="cs-mono text-[10px] text-[#4A4744] flex gap-2 leading-tight">
                        <span className="text-[#E08030]">•</span>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Progetto;

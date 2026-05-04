import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, ArrowLeft } from "lucide-react";

const orData = [
  {
    id: "or1",
    num: "OR1",
    ente: "Università della Calabria",
    logo: "/loghi/unical.png",
    url: "https://www.unical.it/",
    titolo: "Project Management & Disseminazione",
    obiettivo: "Coordinamento delle attività di progetto, gestione amministrativa e finanziaria, e disseminazione dei risultati scientifici attraverso pubblicazioni, conferenze e attività di divulgazione verso stakeholder e comunità scientifica.",
    deliverables: [
      "D1.1 - M7: Report Intermedio per il monitoraggio dello stato di avanzamento del progetto",
      "D1.2 - M7: Report intermedio del Piano strategico di comunicazione/disseminazione (sito web, media plan, editorial plan, social, toolkit identità)",
      "D1.1 - M15: Report finale sullo stato di avanzamento complessivo del progetto",
      "D1.2 - M15: Report finale sul Piano strategico di comunicazione/disseminazione",
    ],
  },
  {
    id: "or2",
    num: "OR2",
    ente: "Università della Calabria",
    logo: "/loghi/unical.png",
    url: "https://www.unical.it/",
    titolo: "Sintesi di ionomeri e materiali ibridi per membrane elettrolitiche nanocomposite per rPEMC",
    obiettivo: "Sviluppo di nuove membrane elettrolitiche basate su ionomeri innovativi e materiali ibridi organico-inorganici con prestazioni superiori in termini di conducibilità protonica, stabilità meccanica e chimica.",
    deliverables: [
      "D2.1 - M7: PEM nanocomposite ottimizzate basate sul Nafion",
      "D2.2 - M7: 1° generazione di PEM nanocomposite basate sul polisulfone sulfonato (sPSf)",
      "D2.3 - M7: Relazione sulla caratterizzazione completa delle membrane elettrolitiche",
      "D2.1 - M14: 2° generazione di PEM nanocomposite ottimizzate basate sul polisulfone sulfonato (sPSf)",
      "D2.2 - M14: Relazione sulla caratterizzazione completa delle membrane elettrolitiche",
      "D2.3 - M15: Rapporto sull'analisi post mortem dei MEA e sulla degradazione della membrana elettrolitica",
    ],
  },
  {
    id: "or3",
    num: "OR3",
    ente: "Università Sapienza di Roma",
    logo: "/loghi/sapienza.png",
    url: "https://www.uniroma1.it/",
    titolo: "Catalizzatori low-Pt e Pt-free per rPEMC, caratterizzazione MEA e stack",
    obiettivo: "Progettazione e sintesi di catalizzatori a basso contenuto di platino e privi di platino per celle reversibili PEM, con caratterizzazione completa di MEA e test su stack.",
    deliverables: [
      "D3.1 - M7: Report sulle proprietà dei catalizzatori di I generazione",
      "D3.2 - M15: Report sulle proprietà dei catalizzatori di II generazione",
      "D3.3 - M9: Report sulla attività di analisi delle configurazioni innovative",
      "D3.4 - M15: Report sulla attività di progettazione e realizzazione di stack di celle PEMFC reversibili",
    ],
  },
  {
    id: "or4",
    num: "OR4",
    ente: "Università di Salerno",
    logo: "/loghi/salerno.jpg",
    url: "https://www.unisa.it/",
    titolo: "Nuovi materiali e deposizione RF sputtering per rSOC a T < 700°C",
    obiettivo: "Sviluppo di nuovi materiali e tecniche di deposizione tramite RF sputtering per celle a ossidi solidi reversibili operanti a temperature intermedie inferiori a 700°C.",
    deliverables: [
      "D4.1 - M7: Report con descrizione dell'upgrading eseguito sull'attrezzatura per Sputtering RF",
      "D4.2 - M7: Report sui risultati ottenuti con valutazione di utilizzo futuro in rSOC dei materiali investigati",
      "D4.3 - M9: Report sui risultati di caratterizzazione su rSOC di 10 cm²",
      "D4.4 - M14: Report sui risultati di caratterizzazione su rSOC di 100 cm²",
    ],
  },
  {
    id: "or5",
    num: "OR5",
    ente: "Università di Camerino",
    logo: "/loghi/camerino.svg",
    url: "https://www.unicam.it/",
    titolo: "Caratterizzazione chimico-fisica avanzata e diagnostica state-of-health per rPEMC e rSOC",
    obiettivo: "Sviluppo di metodologie avanzate di caratterizzazione e diagnostica per valutare lo stato di salute delle celle reversibili, identificando meccanismi di degrado e strategie di mitigazione.",
    deliverables: [
      "D5.1 - M9: Report sulla caratterizzazione dei materiali commerciali di riferimento e caratterizzazione preliminare dei materiali sviluppati nel progetto",
      "D5.2 - M9: Report preliminare sulla caratterizzazione delle superfici",
      "D5.3 - M11: Messa a punto del setup sperimentale per misure XAS in situ e relativo report",
      "D5.4 - M7: Report sullo sviluppo del modello elettrochimico di funzionamento delle celle r-PEMC e r-SOC basato su misure EIS e analisi DRT",
      "D5.5 - M9: Report sulla sintesi di catalizzatori low-cost derivati da MOFs e report preliminare sulle caratterizzazioni voltammetriche",
      "D5.6 - M15: Report finale sulla caratterizzazione completa della struttura e della morfologia dei materiali sviluppati nel progetto",
      "D5.7 - M15: Report finale sulla caratterizzazione delle superfici",
      "D5.8 - M15: Report su misure XAS in situ",
      "D5.9 - M15: Report sul monitoraggio e la previsione del degrado del funzionamento delle celle r-PEMC e r-SOC basato su misure EIS e analisi DRT",
      "D5.10 - M15: Report finale sul comportamento elettrochimico e sui fenomeni di degrado in cella a tre elettrodi di catalizzatori a base di MOFs",
    ],
  },
  {
    id: "or6",
    num: "OR6",
    ente: "Università della Calabria",
    logo: "/loghi/unical.png",
    url: "https://www.unical.it/",
    titolo: "Concept e Design del Sistema Stack Reversibile rPEMC/rSOC, analisi energetica",
    obiettivo: "Progettazione concettuale e ingegneristica di sistemi stack reversibili integrati rPEMC/rSOC, con analisi energetica e termodinamica per l'ottimizzazione delle prestazioni di sistema.",
    deliverables: [
      "D6.1 - M7: Relazione tecnica su investigazione di configurazioni e concept differenti del Sistema Energetico rPEMC",
      "D6.2 - M7: Relazione tecnica su investigazione di configurazioni e concept differenti del Sistema Energetico rSOC",
      "D6.3 - M7: Analisi energetica preliminare del Sistema Energetico rPEMC",
      "D6.4 - M7: Analisi energetica preliminare del Sistema Energetico rSOC",
      "D6.5 - M7: Identificazione, definizione e pianificazione delle campagne sperimentali",
      "D6.6 - M7: Report sui dati sperimentali ottenuti per il settaggio del prototipo",
      "D6.1 - M10: Report sulle simulazioni numeriche Sistema Energetico rPEMC",
      "D6.2 - M10: Report sulle simulazioni numeriche Sistema Energetico rSOC",
      "D6.3 - M10: Report sui dati sperimentali ottenuti durante le attività sperimentali per il testing del sistema in stazionario",
      "D6.4 - M15: Report sui dati sperimentali ottenuti durante le attività sperimentali per il testing del sistema in dinamico",
      "D6.5 - M15: Analisi energetica finale del Sistema Energetico rPEMC",
      "D6.6 - M15: Analisi energetica finale del Sistema Energetico rSOC",
      "D6.7 - M15: Report sulla validazione dei modelli numerici sviluppati",
    ],
  },
  {
    id: "or7",
    num: "OR7",
    ente: "Calabra Maceri e Servizi",
    logo: "/loghi/calabra-maceri.png",
    url: "https://www.calabramaceri.it/",
    titolo: "Analisi casi di studio applicativi per sistemi reversibili",
    obiettivo: "Identificazione e analisi di casi di studio applicativi reali per l'impiego di sistemi di celle reversibili, con valutazione tecnico-economica e analisi di fattibilità industriale.",
    deliverables: [
      "D7.1 - M7: Relazione preliminare su investigazione tecnica di configurazioni e concept differenti del Sistema Power-to-Hydrogen-to-Power con rPEMC",
      "D7.2 - M7: Relazione preliminare su investigazione economica di configurazioni e concept differenti del Sistema Power-to-Hydrogen-to-Power con rPEMC",
      "D7.3 - M7: Relazione preliminare su investigazione ambientale di configurazioni e concept differenti del Sistema Power-to-Hydrogen-to-Power con rPEMC",
      "D7.4 - M7: Relazione preliminare su investigazione economica di configurazioni e concept differenti del Sistema Power-to-Hydrogen-to-Power con rSOC",
      "D7.1 - M14: Relazione preliminare su investigazione tecnica del Sistema Power-to-Hydrogen-to-Power con rSOC",
      "D7.2 - M14: Relazione preliminare su investigazione economica del Sistema Power-to-Hydrogen-to-Power con rSOC",
      "D7.3 - M14: Relazione preliminare su investigazione ambientale del Sistema Power-to-Hydrogen-to-Power con rSOC",
      "D7.4 - M14: Relazione preliminare su investigazione tecnica dei sistemi alternativi Power-to-X-to-Power con rSOC",
      "D7.5 - M15: Relazione finale tecnica/economica/ambientale sui sistemi Power-to-Hydrogen-to-Power con rPEMC",
      "D7.6 - M15: Relazione finale tecnica/economica/ambientale sui sistemi Power-to-Hydrogen-to-Power con rSOC",
      "D7.7 - M15: Relazione finale tecnica/economica/ambientale sui sistemi Power-to-X-to-Power con rSOC",
    ],
  },
];

const ObiettiviList = () => {
  useEffect(() => {
    document.title = "Obiettivi Realizzativi | CREA-SUD · Piano di Ricerca";
  }, []);

  return (
  <Layout>
    <div className="bg-[#FAF9F6] pt-20 pb-16 border-b border-[#E8E6E2]">
      <div className="cs-container">
        <p className="cs-eyebrow mb-6">Ricerca e Sviluppo</p>
        <h1 className="cs-h1 mb-10">Obiettivi <em>Realizzativi</em></h1>
        <p className="cs-lead max-w-2xl">
          Le 7 linee di ricerca che compongono il progetto CREA-SUD, distribuite tra i vari partner del consorzio.
        </p>
      </div>
    </div>

    <section className="py-24">
      <div className="cs-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
             <div className="sticky top-24 space-y-6">
                <div className="bg-white border border-[#C9C5BF] p-8">
                  <h3 className="cs-eyebrow text-[10px] mb-6 text-[#908080]">Dati OR</h3>
                  <p className="text-[14px] text-[#4A4744] leading-relaxed">
                    Ogni Obiettivo Realizzativo (OR) è coordinato da un ente specifico e contribuisce alla validazione finale del sistema reversibile.
                  </p>
                </div>
                <div className="cs-rule-accent" />
             </div>
          </div>
          <div className="md:col-span-8">
            <div className="space-y-4">
              {orData.map((or) => (
                <Link
                  key={or.id}
                  to={`/obiettivi/${or.id}`}
                  className="block bg-white border border-[#C9C5BF] hover:border-[#002040] transition-colors group"
                >
                  <div className="flex items-stretch">
                    <div className="w-20 shrink-0 border-r border-[#E8E6E2] flex items-center justify-center bg-[#FAF9F6]/50">
                       <span className="font-serif italic text-2xl text-[#E08030]/40 group-hover:text-[#E08030] transition-colors">
                        {or.num}
                      </span>
                    </div>
                    <div className="p-8 flex-1">
                      <p className="cs-mono text-[9px] mb-1 text-[#908080] uppercase tracking-wider">{or.ente}</p>
                      <h2 className="font-sans font-bold text-[#0E1626] text-[18px] leading-snug group-hover:text-[#E08030] transition-colors mb-3">
                        {or.titolo}
                      </h2>
                      <p className="text-[14px] text-[#4A4744] line-clamp-2 leading-relaxed">{or.obiettivo}</p>
                    </div>
                    <div className="w-16 shrink-0 flex items-center justify-center">
                      <ArrowRight size={18} className="text-[#C9C5BF] group-hover:text-[#002040] transition-colors" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
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
        <div className="py-24 text-center">
          <p className="cs-lead mx-auto">Obiettivo non trovato.</p>
          <Link to="/obiettivi" className="cs-link mt-4 inline-block">
            ← Torna agli obiettivi
          </Link>
        </div>
      </Layout>
    );
  }

  const currentIndex = orData.findIndex((o) => o.id === id);
  const prev = currentIndex > 0 ? orData[currentIndex - 1] : null;
  const next = currentIndex < orData.length - 1 ? orData[currentIndex + 1] : null;

  useEffect(() => {
    if (or) {
      document.title = `${or.num} · ${or.titolo} | CREA-SUD`;
    }
  }, [or]);

  return (
    <Layout>
      <div className="bg-[#FAF9F6] pt-20 pb-16 border-b border-[#E8E6E2]">
        <div className="cs-container">
          <Link to="/obiettivi" className="cs-mono text-[10px] text-[#908080] hover:text-[#0E1626] uppercase flex items-center gap-2 mb-8 transition-colors">
            <ArrowLeft size={12} /> Tutti gli obiettivi
          </Link>
          <div className="grid md:grid-cols-12 gap-8 items-start">
             <div className="md:col-span-2">
                <span className="cs-h1 text-[#E08030] font-serif italic">{or.num}</span>
             </div>
             <div className="md:col-span-10">
                <p className="cs-eyebrow mb-4">{or.ente}</p>
                <h1 className="cs-h2 mb-4">{or.titolo}</h1>
             </div>
          </div>
        </div>
      </div>

      <section className="py-24">
        <div className="cs-container">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-8 space-y-12">
              <div>
                <h2 className="cs-eyebrow mb-6 text-[#908080]">Descrizione Attività</h2>
                <p className="text-[18px] text-[#0E1626] leading-relaxed font-medium">
                  {or.obiettivo}
                </p>
              </div>

              <div>
                <h2 className="cs-eyebrow mb-6 text-[#908080]">Deliverable di Progetto</h2>
                <div className="grid gap-4">
                  {or.deliverables.map((d, i) => (
                    <div key={i} className="bg-[#FAF9F6] border border-[#E8E6E2] p-6 flex items-start gap-4">
                      <span className="cs-mono text-[#E08030] font-bold shrink-0">{d.split(':')[0]}</span>
                      <p className="text-[14px] text-[#4A4744] leading-relaxed">{d.split(':').slice(1).join(':').trim()}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="bg-white border border-[#C9C5BF] p-8">
                <h3 className="cs-eyebrow text-[10px] mb-8 text-[#908080]">Informazioni</h3>
                <dl className="space-y-6">
                  <div>
                    <dt className="cs-mono text-[10px] text-[#908080] uppercase mb-1">Codice</dt>
                    <dd className="cs-mono font-bold text-[13px] text-[#0E1626]">{or.num}</dd>
                  </div>
                  <div className="border-t border-[#F5F4F2] pt-4">
                    <dt className="cs-mono text-[10px] text-[#908080] uppercase mb-1">Ente responsabile</dt>
                    <dd className="cs-mono font-bold text-[13px] text-[#0E1626] mb-4">{or.ente}</dd>
                    <a 
                      href={or.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-[#FAF9F6] p-4 border border-[#E8E6E2] inline-block hover:border-[#E08030] transition-colors group"
                    >
                      <img src={or.logo} alt={or.ente} className="max-h-12 w-auto object-contain transition-transform group-hover:scale-105" />
                    </a>
                  </div>
                  <div className="border-t border-[#F5F4F2] pt-4">
                    <dt className="cs-mono text-[10px] text-[#908080] uppercase mb-1">Stato</dt>
                    <dd className="cs-mono font-bold text-[13px] text-[#E08030]">In corso</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-24 pt-12 border-t border-[#E8E6E2] grid grid-cols-2 gap-8">
            {prev ? (
              <Link
                to={`/obiettivi/${prev.id}`}
                className="group text-left"
              >
                <span className="cs-mono text-[10px] text-[#908080] uppercase block mb-2 group-hover:text-[#E08030] transition-colors">← Precedente</span>
                <span className="font-bold text-[14px] text-[#0E1626] block leading-snug">{prev.num}: {prev.titolo}</span>
              </Link>
            ) : <span />}
            {next ? (
              <Link
                to={`/obiettivi/${next.id}`}
                className="group text-right"
              >
                <span className="cs-mono text-[10px] text-[#908080] uppercase block mb-2 group-hover:text-[#E08030] transition-colors">Successivo →</span>
                <span className="font-bold text-[14px] text-[#0E1626] block leading-snug">{next.num}: {next.titolo}</span>
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
